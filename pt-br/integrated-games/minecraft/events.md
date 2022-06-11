---
title: Events
description: Events that Streamer.bot can use.
published: true
date: 2022-06-11T05:04:00.387Z
tags: 
editor: markdown
dateCreated: 2022-05-14T18:09:11.141Z
---

# Minecraft Events

## Listening

- From a connected client run `Listen <EventName>`
  - Example: `Listen PlayerDeathEvent`

## Stop Listening

- From a connected client, that is already listening to an event, run `Ignore <EventName>`
  - Example: `Ignore PlayerDeathEvent`

## List of Events, and arguments

> Events are formatted like `Event <EventName> <Json Object of arguments>`
>
> - Example: `Event PlayerDeathEvent {"player":{"username":"KK964", "uuid":"793b1b35-18ba-419c-b735-024b63d24715"}, "message":"KK964 died of a heart attack", "location":{"world":"world", "x":-9.5, "y":67, "z":-9.5}}`

---

**Unchanging arguments:**

These arguments are formatted the same for all events. In event descriptions it will just be labeled as `"<key>": <Player`,`Location`,`Block`,`Entity>`

- <a name="player" href="#player">**Player**:</a>
  - **username**: The username of the player
  - **uuid**: The UUID of the player
- <a name="location" href="#location">**Location**:</a>
  - **world**: The world the event is in
  - **x**: The x coordinate of event
  - **y**: The y coordinate of event
  - **z**: The z coordinate of event
- <a name="block" href="#block">**Block**:</a>
  - **x**: The x coordinate of the block
  - **y**: The y coordinate of the block
  - **z**: The z coordinate of the block
  - **type**: The type of block, ex: `stone`
- <a name="entity" href="#entity">**Entity**:</a>
  - **type**: The type of entity, ex: `creeper`
  - **name**: The name of the entity
  - **location**: The [location][location] of the entity

[player]: #player
[location]: #location
[block]: #block
[entity]: #entity

<!--
<details>
<summary>EventName</summary>

> This event is triggered when

`Event Name {}`

Arguments:

- **** -

</details>
-->

---

## <a name="player-events"></a>Player Events

<details>
<summary>PlayerDeathEvent</summary>

> This event is triggered when a player dies

`Event PlayerDeathEvent {"player": Player, "message": String, "location": Location}`

Arguments:

- **player** - The [Player][player] that died
- **message** - The death message
- **location** - The [Location][location] of the death

</details>

<details>
<summary>PlayerJoinEvent</summary>

> This event is triggered when a player joins

`Event PlayerJoinEvent {"player": Player}`

Arguments:

- **player** - The [Player][player] that joined

</details>

<details>
<summary>PlayerQuitEvent</summary>

> This event is triggered when a player leaves

`Event PlayerQuitEvent {"player": Player}`

Arguments:

- **player** - The [Player][player] that left

</details>

<details>
<summary>PlayerChatEvent</summary>

> This event is triggered when a player chats

`Event PlayerChatEvent {"player": Player, "message": String}`

Arguments:

- **player** - The [Player][player] that sent the message
- **message** - The message that was sent

</details>

<details>
<summary>PlayerDamageEvent</summary>

> This event is triggered when a player takes damage

`Event PlayerDamageEvent {"player": Player, "damage": Number, "health": Number, "cause": String}`

Arguments:

- **player** - The [Player][player] that took damage
- **damage** - The amount of damage that was taken
- **health** - The amount of health the player has left
- **cause** - The cause of the damage [List of causes](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/entity/EntityDamageEvent.DamageCause.html)

</details>

<details>
<summary>PlayerHealEvent</summary>

> This event is triggered when a player regains health

`Event PlayerHealEvent {"player": Player, "regained": Number, "health": Number, "cause": String}`

Arguments:

- **player** - The [Player][player] that was healed
- **regained** - The amount of health that was regained
- **health** - The amount of health the player has
- **cause** - The cause of the regeneration [List of causes](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/entity/EntityRegainHealthEvent.RegainReason.html)

</details>

<details>
<summary>PlayerAdvancementDoneEvent</summary>

> This event is triggered when a player completes an advancement

`Event PlayerAdvancementDoneEvent {"player": Player, "advancement": String}`

Arguments:

- **player** - The [Player][player] that completed the advancement
- **advancement** - The advancement completed [List of advancements](https://minecraft.fandom.com/wiki/Advancement)

</details>

<details>
<summary>PlayerChangedWorldEvent</summary>

> This event is triggered when a player changes worlds

`Event Name {"player": Player, "world": String, "fromWorld": String}`

Arguments:

- **player** - The [Player][player] that changed worlds
- **world** - The world the player changed to
- **fromWorld** - The world the player changed from

</details>

<details>
<summary>PlayerFoodChangeEvent</summary>

> This event is triggered when a players food level changes

`Event Name {"player": Player, "food": Number, "saturation": Number}`

Arguments:

- **player** - The [Player][player] that changed food level
- **food** - New food level
- **saturation**? - The current saturation level, may not be returned if version is below 1.16

</details>

<details>
<summary>PlayerDamagePlayerEvent</summary>

> This event is triggered when a player damages another player

`Event Name {"player": Player, "damager": Player, "damage": Number, "health": Number, "damagerHealth": Number}`

Arguments:

- **player** - Player that was damaged
- **damager** - Player that damaged the player
- **damage** - Amount of damage that was dealt
- **health** - The amount of health the player has left
- **damagerHealth** - The amount of health the damager has left

</details>

<details>
<summary>PlayerStatusChangeEvent</summary>

> This event is triggered when one of the following changes:

- Player is swimming / no longer swimming
- Player is flying / no longer flying
- Player is freezing / no longer freezing
- Player is burning / no longer burning
- Player is gliding / no longer gliding (elytra)

`PlayerStatusChangeEvent {"player": Player, "status": Status, "oldStatus": Status}`

Arguments:

- **player** - The [Player][player] that changed status
- **status** - The new status
- **oldStatus** - The old status

> - **status** - `{"isSwimming":bool,"isFreezing":bool,"isBurning":bool,"isFlying":bool,"isGliding":bool}`
>   - **isFreezing** - may not be returned if version is below 1.18

</details>

<details>
<summary>PlayerMoveEvent</summary>

> This event is triggered when a player moves (only when the block changes)

`PlayerMoveEvent {"player": Player, "location": Location, "fromLocation": Location, "block": Block, "standingOn": Block}`

Arguments:

- **player** - The [Player][player] that moved
- **location** - The [Location][location] the player moved to
- **fromLocation** - The [Location][location] the player moved from
- **block** - The [Block][block] the players feet are in
- **standingOn** - The [Block][block] the player is standing on

</details>

<details>
<summary>PlayerExpChangeEvent</summary>

> This event is triggered when a player gains or loses experience

`Event PlayerExpChangeEvent {"player": Player, "level": Number, "oldLevel": Number, "xp": Number, "neededToLevelUp": Number}`

Arguments:

- **player** - The [Player][player] that gained or lost experience
- **level** - The amount of experience the player has
- **oldLevel** - The amount of experience the player had
- **xp** - The amount of experience points total
- **neededToLevelUp** - The amount of experience points needed to level up

</details>

<details>
<summary>EventName</summary>

> This event is triggered when

`Event Name {}`

Arguments:

- \*\*\*\* -

</details>

<details>
<summary>PlayerKillEntityEvent</summary>

> This event is triggered when a player kills an entity

`Event PlayerKillEntityEvent {"player": Player, "entity": Entity}`

Arguments:

- **player** - The [Player][player] that killed the entity
- **entity** - The [Entity][entity] that was killed

</details>

---

## <a name="world-events"></a>World Events

<details>
<summary>BlockPlaceEvent</summary>

> This event is triggered when a player places a block

`Event BlockPlaceEvent {"player": Player, "block": Block}`

Arguments:

- **player** - The [Player][player] that placed the block
- **block** - The [Block][block] that was placed

</details>

<details>
<summary>BlockBreakEvent</summary>

> This event is triggered when a player breaks a block

`Event BlockBreakEvent {"player": Player, "block": Block}`

Arguments:

- **player** - The [Player][player] that broke the block
- **block** - The [Block][block] that was broken

</details>
