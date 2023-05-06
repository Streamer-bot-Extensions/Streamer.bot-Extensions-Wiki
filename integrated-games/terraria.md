---
title: TerraSocket
description: A WebSocket mod for Terraria
published: true
date: 2023-05-05T14:53:42.639Z
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
6. Download [Newtonsoft.Json](https://github.com/JamesNK/Newtonsoft.Json/releases/latest)(the dll from `Json{version}.zip\bin\net40`) and [websocket-sharp](https://github.com/ConfuzzedCat/TerrariaInjector.TerraSocket/releases/tag/v1.0.5)
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
> Message needs be set to `MessageHandler`
{.is-info}

When a message is received from TerraSocket, the action with same name as the event will get called, eg. if `PlayerKilled` is sent then the action (under TerraSocketEvents) with the same name gets called.
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
		string json = $"{{\"UserName\":\"{user}\",\"Command\":\"GiveItem\", \"ItemID\":1}}";
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
- CultistRitualStarted
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
  "webSocketServerVersion": { //This just tells you the version of TerraSocket, not that useful.
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
    "npcDamage": { //This will only be sent when a npc takes damage from you/your player.
      "npcName": "Some NPC name", //Holds the npc's name
      "sourceType": "MELEE", //Can be either MELEE or PROJECTILE.
      "sourceName": "Item name", //holds the name of the item or projectile.
      "sourcePlayer": "MyPlayer", //your playername.
      "npcLifePreHit": 100, //how much the npc had before it was hit.
      "damageDealt": 20 //how much damage you dealt.
    },
    "npcKilled": { //This will only be sent when a npc was killed by you/from your player.
      "npcName": "Another NPC name", //Holds the npc's name.
      "sourceWithPrefix": "Godly item name", //Holds the item's full name, so prefixes included.
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
This will import two groups, `TerraSocket` and `TerraSocketEvents`, and 3 commands under the TerraSocket (Remember to enable them).

```text
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
```
## Support
If you find any issues or need help, either ping me in Streamer.bit Extensions' Discord or send me a private message `ConfuzzedCat#5793` (note: I may only answer related message.)