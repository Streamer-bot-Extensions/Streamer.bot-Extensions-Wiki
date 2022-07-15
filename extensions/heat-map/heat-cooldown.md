---
title: Heat Cooldown (by TerrierDarts)
description: Add cooldowns to your streams heat clicks
published: true
date: 2022-07-14T21:54:04.332Z
tags: 
editor: markdown
dateCreated: 2022-07-14T21:54:01.355Z
---

# Heat Cooldown (by [TerrierDarts](https://www.twitch.tv/Terrierdarts))
## Description
This small add-on will all you to add `User` or `Global` Cooldowns to heat actions you can have them as individual cooldowns or you can group many actions together in order to add them all to the same cooldown List.
## Import Code
```
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
```
## How to use
In any `Action` you have set up to be triggered by a click add the following 3 `Sub-Actions` to the very top. 

The First Action is a `Set Argument` this can be found in `Logic>>Set Argument`, with the Variable name of `heatCooldown`
![heatcooldownaction1.png](/extensions/heat-map/heatcooldownaction1.png)
The Second Action is a `Set Argument` this can be found in `Logic>>Set Argument`, with the Variable name of `cooldownName`
![heatcooldownaction2.png](/extensions/heat-map/heatcooldownaction2.png)
The Third Action is a `Execute Method` this can be found in `C#>>Execute Method`. You will need to find `Heat Cooldown` (it should be near the bottom) and then for the method choose whether you want a global or user cooldown. 
![heatcooldownaction3.png](/extensions/heat-map/heatcooldownaction3.png)
Once complete your action should look like this.
![heatcooldown.png](/extensions/heat-map/heatcooldown.png)

Here is a blank action to show you the 3 items you need at the top.
```
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
```

## Things to Note
1. If you use a cooldown anyone who hasn't given heat permission to there ID so they come up as `someone` will be ignored and the action will not work for them.
2. At current moment it outputs a chat message when an item is on cooldown, if you don't wish for this to happen you will need to edit the C# do this at your risk. The Edit Point is clearly marked.
3. If you wish for multiple actions to run on the same list then you can give them the same `cooldownName` but all the actions will still need the 3 needed Sub-Actions as explained above.
