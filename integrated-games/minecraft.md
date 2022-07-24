---
title: Minecraft Websocket Integration (by KK964)
description: Streamer.bot extension for Minecraft.
published: true
date: 2022-07-24T04:16:53.217Z
tags: 
editor: markdown
dateCreated: 2022-04-20T02:51:00.284Z
---

# Minecraft Websocket Integration [(by KK964)](https://www.twitch.tv/kk964gaming)

## Description
 Allows websockets to run commands on your server.

### Building
    $ mvn
The output plugin will be in target/

* [Complete Getting Started *Start Here First*](/integrated-games/minecraft/getting-started)
* [Events *All in game events that Streamer.bot can utilize*](/integrated-games/minecraft/events)
* [Streamer.bot *Using the plugin in Streamer.bot*](/integrated-games/minecraft/streamer-bot)
{.links-list}

## Simple Getting Started

# Tutorial:
<iframe width="1120" height="630" src="https://www.youtube.com/embed/UHFVpDVwuIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<sup>
  <sub>Click me ^</sub>
</sup>


## 1. Connecting to the WebSocket Server

1. Inside Streamer.bot, navigate to the `Servers/Clients` tab.
2. Click the sub-tab `Websocket Clients`.
3. Inside the window, add a new Host, by right-clicking and pressing `Add`.
4. Inside the popup window, set the `Name` to `Minecraft WebSocket Server`.
5. Inside the popup window, set the `Host` to `ws://`{localhost}`:`{8887}. (please replace `{localhost}` with your host, and `{8887}` with your port number)
9. Click `Ok`.
> You will be changing message actions later. Don't worry!

## 2. Setting up Actions

In this guide, you will be setting up the 'basics' of connecting to the WebSocket server, listening to events, and sending commands.
> If this sounds like a lot, don't worry! 99% of this is already done for you!

---

[Actions Download](/integrated-games/minecraft/files/SB_MC_Integration_Getting_Started.txt)

1. Import the actions above.
2. Navigate to the `MC WS Message` action, you should see the following:

![Sub Actions](/integrated-games/minecraft/images/SubActions.png)

3. If you have a authentication token on the server, you need to change the %authenticationBearerToken% to the token.

![Auth Bearer Token](/integrated-games/minecraft/images/AuthBearerToken.PNG)

4. Go back to the `Websocket Clients` tab, and edit the `Minecraft WebSocket Server` client. Change the `Message` to the `MC WS Message` action.

![Websocket Client Message](/integrated-games/minecraft/images/WSMessage.PNG)

5. Connect the websocket client to the server.

## 3. Setting up events

1. Create a new action named `MC WS Event-{event name}`. [Events List](/integrated-games/minecraft/events)
2. Add any sub-actions you want to the action.

## 4. Sending Commands

You have 2 ways to send commands to the server.

C#:
  
  ```c#
  CPH.WebsocketSend("Command {command}");
  ```

Sub-Actions:

1. Define a variable named `cmd` and set it to the command you want to send.
2. Add a C# Method subaction, and call `MC WS Message Handler`, and set the method to `SendCommand`.


# More Information coming soon!
