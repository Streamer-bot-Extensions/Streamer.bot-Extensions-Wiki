---
title: Heat Cooldown (by TerrierDarts)
description: Allows the user to add User or Global Cooldowns
published: true
date: 2022-07-24T05:13:14.365Z
tags: 
editor: markdown
dateCreated: 2022-07-24T01:02:30.478Z
---

# Heat Cooldown ([by TerrierDarts](https://www.twitch.tv/Terrierdarts))

## Description
With this extension you will be able to add `Global` or `User` Cooldowns to your Heat based actions. You can add multiple actions into one single cooldown queue if you wish or have each action in its own queue.
> NOTE: An Action can only have either a **USER** or **GLOBAL** Cooldown {.is-warning}

> If a user hasn't granted access to heat when they click, they will be declared as `Someone`. Any Action with a cooldown can not be triggered by a `Someone`. If a `Someone` tries to trigger an action it will be Ignored {.is-danger}

## Import Code
```
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
```

## Set Up
Once imported check that the code inside does compiles ( if it doesn't compile reach out in discord).

To add this to an action you are going to need 3 new Sub-Actions at the top of any of your heat actions. A Heat Cooldown Set Args, A Cooldown Name Set Args and an Execute Method. It should look something like this. ![heatcooldown.png](/extensions/heat-map/images/heatcooldown.png) Here is a small breakdown of each action. This is how long you want the cooldown to be in Seconds. ![heatcooldownaction1.png](/extensions/heat-map/images/heatcooldownaction1.png) This is the Name of the cooldown, if you want multiple actions in the same cooldown just add the same name. ![heatcooldownaction2.png](/extensions/heat-map/images/heatcooldownaction2.png) This will trigger the cooldown check, Select User or Global depending on which cooldown you want. ![heatcooldownaction3.png](/extensions/heat-map/images/heatcooldownaction3.png)

> Below these 3 Sub-Actions is where you will put the rest of Sub-Actions {.is-info}

> Remember the 3 Sub-Actions Listed Above **MUST** be at the top of the action. {.is-warning}