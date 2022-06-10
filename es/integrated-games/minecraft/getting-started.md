---
title: Getting Started
description: Start here first.
published: true
date: 2022-06-09T05:15:02.815Z
tags: 
editor: markdown
dateCreated: 2022-05-14T17:59:27.388Z
---

# Getting Started

## Setting up the server

1. Create a new Minecraft server running a version of Spigot
   - currently only tested with 1.18.1
2. Put the [Plugin](https://github.com/KK964/Minecraft_Websocket_Intergration/) in the server's plugins folder, and restart the server.
3. Set up the config file in the server's plugins folder.

## Connecting to WebSocket Server

1. Connect to the WebSocket Server
   - If you don't know how to do this please read [This Wiki](https://en.wikipedia.org/wiki/WebSocket)
2. Once you have connected to the WebSocket Server, you will receive a message from the Server.
3. If you receive a message from the Server, you will see one the following:
   - `Authentication not required...`
   - `Authentication needed... Send as "Bearer {Auth token}"`
4. If you received the 2nd message, you will need to authenticate with the Server.
   1. You will need to send the `Bearer` token to the Server.
   2. The Server will send back a message with the `Authentication Status`, you will see one of the following:
      - `Successfully Authenticated...`
      - `Incorrect Authentication Bearer token supplied!`
   3. If you received the 2nd message, your token that you sent was incorrect.
      Otherwise, you have successfully authenticated with the Server.
5. You will now be able to send commands to the Server.

## Sending Commands to the Server

There are a few commands that you can send to the Server.

- Minecraft commands
  - These commands are default commands that Minecraft has, and Plugin commands installed on the Server.
  - These commands are sent as `Command {Command}`
    - For example, `Command say Hello World`
      - This will send the command `say Hello World` to the Server, and will result in `Hello World` will be sent to all players.
- Event commands
- These commands allow your client to opt-in/out of events on the server
  - These commands are sent as `Listen {Event}` and `Ignore {Event}`
  - For more information on events, please see the [Events](/integrated-games/minecraft/events) page.
