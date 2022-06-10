---
title: Streamer.bot
description: Using the plugin in Streamer.bot.
published: true
date: 2022-05-17T02:12:41.059Z
tags: 
editor: markdown
dateCreated: 2022-05-14T05:39:05.189Z
---

# Using the Plugin in [Streamer.bot](https://streamer.bot/)

For setting up the Minecraft server, please see the [Getting Started](/integrated-games/minecraft/getting-started) page.

## Make sure that you have [Streamer.bot](https://streamer.bot/) installed before following guide!

---

---

## Setting up default actions

1. Inside Streamer.bot, navigate to the `Actions` tab.
2. Right click on the `Actions` tab and select `Add`.
3. Create a group for the action called `Minecraft Websocket`.
4. Name the action `MC WS Connected`.
5. Then press `Ok`.
6. Add 2 more actions to the group, called `MC WS Disconnected` and `MC WS Message`.

## Connecting to the WebSocket Server

1. Inside Streamer.bot, navigate to the `Servers/Clients` tab.
2. Click the sub-tab `Websocket Clients`.
3. Inside the window, add a new Host, by right-clicking and pressing `Add`.
4. Inside the popup window, set the `Name` to `Minecraft WebSocket Server`.
5. Inside the popup window, set the `Host` to `ws://`{localhost}`:`{8887}. (please replace `{localhost}` with your host, and `{8887}` with your port number)
6. Set the Action Connected to `MC WS Connected`.
7. Set the Action Disconnected to `MC WS Disconnected`.
8. Set the Action Message to `MC WS Message`.
9. Click `Ok`.

## Setting up Actions

In this guide, the following will be the flowchart of the actions:

**Example workflow:**

> WS Connect
>
> - Log to file

> WS Message
>
> - Authenticate
> - Subscribe to events
> - Send events to WS Events

> WS Disconnect
>
> - Log to file

> WS Events
>
> - Get event ran
> - Run WS Event-{event ran}

> WS Event-{events}
>
> - Convert event data to Json
> - Send message in twitch chat

### 1. MC WS Connected

1. Make a sub action `File`->`Write to file`, make a new file called `WS_Logs.txt`, and set it to append to the file, with the text `%date% %time% - WS Connected`.

### 2. MC WS Disconnected

1. Make a sub action `File`->`Write to file`, select the file called `WS_Logs.txt`, and set it to append to the file, with the text `%date% %time% - WS Disconnected`.

### 3. MC WS Message

This is where the magic starts!

1. Make a sub action `File`->`Write to file`, select the file called `WS_Logs.txt`, and set it to append to the file, with the text `%date% %time% - WS Message: %message%`.
2. Make a sub action `C#`->`Run C# code`
   - inside the C# window, add the following inside `Execute()`:
   - [List of events](/integrated-games/minecraft/events)

```cs
string auth = ""; // Add your authentication token here
string[] listeners = { // Add the events you want to listen to here
  "PlayerDeathEvent",
};

string msg = args["message"].ToString();

if (msg.StartsWith("Authentication needed")) {
  // Send authentication message
  // Set connection to the 0-based index of your Minecraft websocket client.
  CPH.WebsocketSend("Bearer " + auth, connection: 0);
  return true;
}
if (msg.StartsWith("Authentication not required") || msg.StartsWith("Successfully Authenticated")) {
  // Subscribe to events
  string listenString = "Listen " + String.Join("\nListen ", listeners);

  // Set connection to the 0-based index of your Minecraft websocket client.
  CPH.WebsocketSend(listenString, connection: 0);
  return true;
}

if (msg.StartsWith("Event ")) {
  // Event received
  CPH.SetArgument("event", msg.Substring("Event ".Length));
  CPH.RunAction("MC WS Event Handler");
}
return true;
```

3. This will handle all messages between the server and the client.

### MC WS Event Handler

1. Make a sub action `C#`->`Run C# code`
   - inside the C# window, add the following inside `Execute()`:

```cs

string ev = args["event"].ToString();
string evRun = ev.Split(' ')[0];
string unParsedJson = ev.Substring(evRun.Length);
CPH.SetArgument("event-json", unParsedJson);
CPH.RunAction("MC WS Event-" + evRun);
return true;
```

2. This will forward the event to the correct action.

### MC WS Event-{event ran}

1. Replace `{event ran}` with the event name you want to handle.
2. Handle the event
3. Example with PlayerDeathEvent: (making the action name `MC WS Event-PlayerDeathEvent`)

```cs
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;

public class CPHInline
{

  public class Player
  {
    public string username { get; set; }
    public string uuid { get; set; }
  }

  public class Location
  {
    public string world { get; set; }
    public double x { get; set; }
    public double y { get; set; }
    public double z { get; set; }
  }

  public class Death
  {
    public Player player { get; set; }
    public string message { get; set; }
    public Location location { get; set; }
  }

  public bool Execute()
  {
    Death death = JsonConvert.DeserializeObject<Death>(args["event-json"].ToString());
    Player player = death.player;
    Location location = death.location;
    CPH.SendMessage(death.message);
    CPH.SendMessage(player.username + " died in " + location.world + ", at " + location.x + ", " + location.y + ", " + location.z);
    return true;
  }
}
```

## Forwarding Twitch Chat to Minecraft Chat

1. Inside Streamer.bot, navigate to the `Actions` tab.
2. Make an action called `Forward Twitch Chat to Minecraft Chat`.
3. Navigate to the `Settings`->`Events` tab.
4. Set `Chat Message` to `Forward Twitch Chat to Minecraft Chat`.
5. Go back to the `Forward Twitch Chat to Minecraft Chat` action.
6. Make a sub action `C#`->`Run C# code`
   - inside the C# window, add the following inside `Execute()`:

```cs
string msg = args["message"].ToString();
// Make sure to remove bad characters from the message, if you don't, users can break out of tellraw, and other commands
msg = msg.Replace("\\", "");
msg = msg.Replace("\"", "");

string user = args["user"].ToString();

// Set connection to the 0-based index of your Minecraft websocket client.
CPH.WebsocketSend("Command say ["+user+"] " + msg, connection: 0);
return true;
```

7. This will forward the message to the Minecraft server.
