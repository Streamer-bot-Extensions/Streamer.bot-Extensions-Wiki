---
title: TerraSocket
description: A WebSocket mod for Terraria
published: false
date: 2022-05-29T00:04:48.958Z
tags: mod, websocket, integration, terraria, confuzzedcat
editor: markdown
dateCreated: 2022-05-25T12:23:50.048Z
---

# TerraSocket - A Websocket mod for Terraria [(by ConfuzzedCat)](https://www.twitch.tv/confuzzedcat)
## Description
This is a mod for Terraria ([both tModloader](https://www.tmodloader.net/) and [latest version](https://terraria.org/)). This adds in a WebSocket server that will send out messages at some events.
## Setup - tModloader
Simple download the mod from [Github](https://github.com/ConfuzzedCat/TerraSocket/releases/latest) and put it in the mods folder 
win: C:/Users/%USERNAME%/Documents/My Games/Terraria/ModLoader/Mods
linux(Untested!): ~/. local/share/Terraria/ModLoader/Mods

## Setup - Vanilla
1. Download [TerrariaInjector.exe](https://github.com/ConfuzzedCat/TerrariaInjector/releases/latest).
2. Download [0Harmony.dll](https://github.com/pardeike/Harmony/releases/latest) and save the one from the `net35` folder.
3. Put both files into Terraria's install folder (eg. `C:\Program Files (x86)\Steam\steamapps\common\Terraria`)
4. Run TerrariaInjector.exe once, it should make a `Mods` folder.
5. Download TerraSocket(for vanilla) [here](https://github.com/ConfuzzedCat/TerrariaInjector.TerraSocket/releases/latest) and put it into the `Mods` folder.
6. Download [Newtonsoft.Json](https://github.com/JamesNK/Newtonsoft.Json/releases/latest)(the dll from `Json{version}.zip\bin\net40`) and [websocket-sharp](https://github.com/ConfuzzedCat/TerrariaInjector.TerraSocket/releases/tag/v1.0.0)
7. add `Newtonsoft.Json.dll` and `websocket-sharp.dll` into `Terraria\Mods\Libs`(create it, if it doesn't exist).
> Note regarding vanilla version, TerrariaInjector doesn't modify Terraria.exe, so whenever you want to play with the websocket, run `TerrariaInjector.exe`.
{.is-info}

## Connecting
The connection process is the same from both tModloader and vanilla version.
1. start the game (either `tModloader.exe` or `TerrariaInjcetor.exe`) and Streamer.bot.
2. Once the main menu has loaded, go to `Servers/Clients` -> `Websocket Clients` in Streamer.bot and add a client. The name doesn't matter, but Endpoint is important by default it is `ws://127.0.0.1:7394/`(This can be changed).
3. Enjoy the game!
### Configuring the endpoint/address
In the game's install folder, there will be created a file called `wsipconfig.json` that holds a string and a unsigned short(0-65535).
By default the file looks like this `{"Host":"127.0.0.1","Port":7394}`, this will host the server at `ws://127.0.0.1:7394/`. This file is read at startup/load, so change it before launching the game.
## Usage
Simple open the game and connect. The websocket client(Streamer.Bot) will automatically get send messages. Remember to setup the actions for `Connected`, `Disconnected` and `Message`(Import codes below).
### Send commands to Terraria
TerraSocket supports 3 commands, that can be sent from Streamer.bot.
- KillPayer
- HealPlayer
- GiveItem
To send a command, you need to send a json string to the websocket server. 
Important! `Username` needs to populated(doesn't need to be a username, just needs to be a string) and `Command` needs to be one of the 3 commands. `HealPlayer` needs to have `HealAmount`populated as an int. The same with `GiveItem` and `ItemID`.
Kill player example: 
```cs
using System;

public class CPHInline
{
	public bool Execute()
	{
		string user = args["userName"].ToString();
		string json = $"{{\"UserName\":\"{user}\",\"Command\":\"KillPlayer\"}}";
		CPH.WebsocketSend(json,0);
		return true;
	}
}
```
Heal player example:
```cs
using System;

public class CPHInline
{
	public bool Execute()
	{
		string user = args["userName"].ToString();
		string json = $"{{\"UserName\":\"{user}\",\"Command\":\"HealPlayer\", \"HealAmount\":10}}";
		CPH.WebsocketSend(json,0);
		return true;
	}
}
```
Give item example:
```cs
using System;

public class CPHInline
{
	public bool Execute()
	{
		string user = args["userName"].ToString();
		string json = $"{{\"UserName\":\"{user}\",\"Command\":\"GiveItem\", \"GiveItem\":771}}";
		CPH.WebsocketSend(json,0);
		return true;
	}
}
```