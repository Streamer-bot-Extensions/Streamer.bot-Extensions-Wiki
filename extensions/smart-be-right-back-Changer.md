---
title: Smart [BE RIGHT BACK] Changer (by AboutSelphy)
description: Change the Scene to [BE RIGHT BACK] and automaticly Changes back t o the last scene.
published: true
date: 2023-05-07T0046:00.709Z
tags: 
editor: markdown
dateCreated: 2023-05-07T0046:00.709Z
---

# Import Code
```
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
```

# Information
> ### Features:
> Saves the last Scene and changes back to the last scene (if pressing the same hotkey/Button)


# Installation

## Step 1: Import the script.

> ### How?:
> Example 1: In Streamer.bot in select `Import` from the top left. Copy the `Import Code` and paste it into the `Import String`. 
> Example 2: Just drop the file in `Import String` field

> ## File
 
Streamer.bot File:  [Script Download](/assets/smart-be-right-back-Changer/files/smart-be-right-back-Changer.sb)



![importscript](/assets/smart-be-right-back-Changer/images/importscript2.gif) ![importscript](/assets/smart-be-right-back-Changer/images/importscript.gif)





## Step 2: Setup the [BE RIGHT BACK] SCENE.

> ### Choose your Scene:
> Edit the `%scene%` argument and add your [BE RIGHT BACK SCENE].
>> Example: [SCREEN] BE RIGHT BACK


## TO-DO LIST:
- [ ] Add link to the update form.
- [ ] Video tutorial.


# Contributors

 - [AboutSelphy](https://www.twitch.tv/AboutSelphy){.twitch}
 {.contributors}

 
