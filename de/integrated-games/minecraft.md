---
title: Minecraft Websocket Integration (by KK964)
description: Streamer.bot extension for Minecraft.
published: true
date: 2022-04-27T03:57:52.994Z
tags: 
editor: markdown
dateCreated: 2022-04-20T02:51:00.284Z
---

# Minecraft Websocket Integration (by KK964)

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

### Connecting to the websocket
- Connect as if it were a normal websocket server
- Authentication
  - If authentication is enabled in the config.yml an Authentication Bearer Token will need to be supplied
  - Through the connected client, send `Bearer <Token>`, and you will be authenticated. Ex: `Bearer abcdefg123`

### Running Commands
- Once connected to the socket, running commands is as simple as sending `Command <command>`
- Multiple commands can be added at once by putting it on new lines
- ```
  Command say hi
  Command /tellraw @a {"text":"Hi! (but in red)","color":"red"}