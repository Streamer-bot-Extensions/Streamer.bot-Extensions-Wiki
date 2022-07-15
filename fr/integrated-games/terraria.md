---
title: TerraSocket
description: A WebSocket mod for Terraria
published: true
date: 2022-06-14T23:30:57.600Z
tags: mod, websocket, integration, terraria, confuzzedcat
editor: markdown
dateCreated: 2022-06-14T23:30:54.693Z
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
		string json = $"{{\"UserName\":\"{user}\",\"Command\":\"GiveItem\", \"GiveItem\":1}}";
		CPH.WebsocketSend(json,0);
		return true;
	}
}
```
## Events
> Some events have different names or only exists in one of the versions.
{.is-info}
### tModloader
- PlayerKilled
- PlayerHit
- NPCKilled
- NPCHit
- OnEnterWorld
- OnRespawn
- PlayerConnect
- PlayerDisconnect
- PartyEvent
- SandstormEvent
- DD2Event
- PumpkinMoonEvent
- SnowMoonEvent
- BloodMoonEvent
- BossSpawn
- CultistRitualStarted
- MeteorLanded
- LunarApocalypseStarted
- SlimeRainEvent
- AnglerQuestReset 

### Vanilla
- AchievementCompleted
- PlayerHurt
- PlayerKilled
- NPCHit
- NPCKill
- BossSpawn
- MeteorLanded
- LunarApocalypseStarted
- SlimeRainEvent
- AnglerQuestReset
- PetPat
- PartyEvent
- SandstormEvent
- DD2Event
- PumpkinMoonEvent
- SnowMoonEvent
- BloodMoonEvent

### Json file from TerraSocket
Whenever an event is triggered in Terraria, TerraSocket will send out an json string/file to all connected clients. 
This is a example json file, that will never be able to be sent, but it has all the values the json can have.
```json
{
  "webSocketServerVersion": {//This just tells you the version of TerraSocket, not that useful.
    "majorVersion": 0,
    "minorVersion": 0,
    "patchVersion": 0
  },
  "event": "SomeEvent", //This is the Event, Example: "PlayerKilled".
  "status": "Succes", //This isn't used for now, might use it later. Don't mind it.
  "extraInfo": { //If an event is isn't events like "SandStormEvent" it will have extra/more info.
    "player": "MyPlayer", //This will always be your player.
    "eventinfo": "Some extra info like acheivement Name or pet name", //This is only used for acheivements and pat pet, tells you the names of each.
    "playerDamage": { //This will only be sent when your player takes damage.
      "playerName": "MyPlayer", //This will for now always be you player.
      "pvp": false, // if true then the damage was from pvp, if not then it is other sources.
      "quiet": false, // if the damage event/method was sent to the terraria server, eg. was the damage taken client or server sided. Not that useful.
      "damage": 10.0, //The amount of damage taken.
      "hitDirection": 0, // Binary way of telling which direction you took damage. -1 for left, 0 for up, down and center and 1 for right.
      "crit": false, //false means that the damage wasn't a critical hit and so on.
      "sourceType": "NPC", //This has four different types: NPC, PLAYER, PROJECTILE and NOTENTITY. NOTENTITY means that it is all other sources like fall damage. tModloader has MELEE too.
      "sourceName": "Some Npc Name" //Holds the name of the npc/player/projectile of the type. Is null if it is NOTENTITY.
    },
    "npcDamage": {//This will only be sent when a npc takes damage from you/your player.
      "npcName": "Some NPC name", //Holds the npc's name
      "sourceType": "MELEE", //Can be either MELEE or PROJECTILE.
      "sourceName": "Item name", //holds the name of the item or projectile.
      "sourcePlayer": "MyPlayer", //your playername.
      "npcLifePreHit": 100,//how much the npc had before it was hit.
      "damageDealt": 20//how much damage you dealt.
    },
    "npcKilled": {//This will only be sent when a npc was killed by you/from your player.
      "npcName": "Another NPC name",//Holds the npc's name.
      "sourceWithPrefix": "Godly item name",//Holds the item's full name, so prefixes included.
      "sourceType": "MELEE", //This is only populated on tModloader version, because of how the event is triggered.
      "sourceName": "Item name", //This is the item name.
      "sourcePlayer": "MyPlayer", //This is your player name.
      "npcLifePreHit": 200, //This is the Npc health before it was killed.
      "damageDealt": 500, //This is how much damage it took, from your attack.
      "overflowDamage": 300 //This is how much damage you dealt over the npc health.
    },
    "playerKilled": { //This will only be sent when your player is killed.
      "playerName": "MyPlayer", //The player name of the killed player.
      "sourceType": "NPC", //What killed your player, can be either NPC, PLAYER, PROJECTILE or NOTENTITY. tModloader has MELEE too.
      "sourceName": "Yet Another Npc Name", //The name of the sourceType, will be null for NOTENTITY.
      "playerLifePreHit": 20, //life before the killing blow.
      "damageDealt": 30, //How much damage dealt to the player.
      "overflowDamage": 10, //How much damage it was dealt over the player health.
      "PVP": false //Will be true, if its pvp/sourceType is PLAYER.
    },
    "bossSpawn": { //This will only be sent when a boss is spawned.
      "name": "Some Boss Name", //The name of the boss.
      "lifepoints": 1000 //How much health the boss has.
    }
  }
}
``` 

## Import codes
This is an example of how to do it. The Message handler doesn't do anything, but the commands will work out-of-the-box.
```text
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
```
## Support
If you find any issues or need help, either ping me in StreamSaver's Discord or send me a private message `ConfuzzedCat#0001` (note: I may only answer related message.)