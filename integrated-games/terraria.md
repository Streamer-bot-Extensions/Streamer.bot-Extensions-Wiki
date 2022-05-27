---
title: TerraSocket
description: A WebSocket mod for Terraria
published: false
date: 2022-05-27T18:08:33.461Z
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
The connection process is the same form both tModloader and vanilla version.
1. start the game (either `tModloader.exe` or `TerrariaInjcetor.exe`) and Streamer.bot.
2. Once the main menu has loaded, go to `Servers/Clients` -> `Websocket Clients` in Streamer.bot and add a client. The name doesn't matter, but Endpoint is important by default it is `ws://127.0.0.1:7394/`(This can be changed).
3. Enjoy the game!
### Configuration the endpoint/address
In the game's install folder, there will be created a file 