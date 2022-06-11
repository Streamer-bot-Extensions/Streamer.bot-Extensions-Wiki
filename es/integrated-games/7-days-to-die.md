---
title: 7 Days To Die Websocket Integration (by KK964)
description: Streamer.bot extension for 7 Days To Die.
published: true
date: 2022-06-11T04:59:51.262Z
tags: 
editor: markdown
dateCreated: 2022-05-14T17:59:15.286Z
---

# 7 Days To Die Websocket Integration (by KK964)

## Description

This is a mod for [7 Days To Die](https://7daystodie.com/). It allows you to connect to the websocket server and receive updates about the game.

## Setup

To install you need to either download a release, or build the mod yourself.

### Download

1. Download the latest release from [GitHub](https://github.com/KK964/7-Days-To-Die-Websockets-Mod/releases)
2. Extract the zip file
3. Copy the folder to your [7 Days To Die mods folder](https://7daystodie.fandom.com/wiki/How_to_Install_Modlets#1.29_Create_a_folder_called_.22Mods.22_at_the_top_level_of_the_game_folder.)
4. Depending on if you want to run single player, or multiplayer, the next step will be different.

   - Single Player
     - When running the game, disable EAC (Easy Anti-Cheat)
   - Multiplayer
     - When running the game, enable EAC (Easy Anti-Cheat)

5. Restart the game

### Build

1. Clone the repository
2. Inside visual studio, open `/src` as the project
3. Build the project
4. The resulting dll will be in `/src/bin/Debug/` as `7DTDWebsockets.dll`
5. Make a new folder in your mods folder called `7DTDWebsockets`
6. Copy the dll to the new folder
7. Copy `ModInfo.xml` to the new folder
8. Copy `Config.xml` to the new folder
9. Copy `websocket-sharp.dll` to the new folder
10. Copy `UnityEngine.dll` to the new folder
11. Copy `UnityEngine.CoreModule.dll` to the new folder
12. Copy `0Harmony.dll` to the new folder
13. Restart the game

### Config.xml

- Host: The hostname of the websocket server
- Port: The port of the websocket server

---

## Usage

Connect to the websocket server; the server will send updates about the game.

## Events

- ChatMessage:
  - `ChatMessage {"player": {"name":"PlayerName"}, "message":"Message"}`
- PlayerDeath:
  - `PlayerDeath {"player": {"name":"PlayerName"}}`
- PlayerKillZombie:
  - `PlayerKillZombie {"player": {"name":"PlayerName"}, "entity":"EntityName"}`
- PlayerKillAnimal:
  - `PlayerKillAnimal {"player": {"name":"PlayerName"}, "entity":"EntityName"}`
- PlayerJoin:
  - `PlayerJoin {"player": {"name":"PlayerName"}}`
- PlayerLeave:
  - `PlayerLeave {"player": {"name":"PlayerName"}}`
- PlayerSpawnIn:
  - `PlayerSpawnIn {"player": {"name":"PlayerName"}, "type":"TypeOfSpawn"}`
- PlayerDamage:
  - `PlayerDamage {"player": {"name":"PlayerName"}, "damage": "DamageAmount", "cause": "DamageCause"}`
- PlayerKillEntity:
  - `PlayerKillEntity {"player": {"name":"PlayerName"}, "entity":"EntityName", "animal":bool, "zombie":bool}`

## HTTP API

The HTTP API is not yet fully implemented.

Using:

1. Send POST/GET to host:port/api/endpoint

### Get

- This is currently not implemented.

### Post

- `/command`: Send a command to the server. The command to send is in the body of the request. The response will be the result of the command.

```
curl -X POST http://localhost:9000/api/command
   -H "Authentication: abc123"
   -d 'gettime'
```

->

> ```
> Day 3, 06:23
> ```