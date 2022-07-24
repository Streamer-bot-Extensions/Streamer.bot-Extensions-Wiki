---
title: Actions Cooldown
description: Apply Cooldowns to Actions if they are triggered by multiple sources
published: true
date: 2022-07-24T04:57:07.236Z
tags: actions, cooldown
editor: markdown
dateCreated: 2022-07-24T00:39:29.666Z
---

# Action Cooldown

## Description
This project will allow you to set cooldowns based on the action rather than the trigger, for example if you have a SFX that is triggered by a `Deck Button` and by `Chat Command` then you may want to apply a cooldown so only 1 of these are allow to be triggered in the time you state.

## Import Code
```
CodeHERE
```
One you have import it should compile without having to add any other refeneces.

## Use

To use this in another you will need to use the `Execute Method` Sub-Action. You will need to select the type of cooldown you want. ![actioncooldownmethod.png](/extensions/actioncooldown/images/actioncooldownmethod.png)

### Button Cooldown
This will allow you to add a cooldown to an action that is tied to a button only or to an action that you only want the cooldown to apply if its come from a button. , this is useful for shared decks with multiple people. You will need to add the following json to the `Arguments` inside the button setting, and edit it to your specification.
```json
{
"buttonName":"BUTTONNAME",
"buttonCooldown": 30,
 "buttonPress": true
}
```

### FullActionGlobal
This will allow you to add a Global Cooldown to an action reguardless of how it is triggered. To add this to an action you will need to set up 2 `Set Arguments` one for `actionName` and one for `actionCooldown`. It should look like this. ![fullactionexample.png](/extensions/actioncooldown/images/fullactionexample.png)
