---
title: Hydrate Redeem (by GoWMan)
description: Stay Hydrated and keep chat engaged by keeping track of how much beverage you consume on stream with the Hydrate Redeem for Streamer.bot!
published: true
date: 2022-07-24T06:11:56.951Z
tags: 
editor: markdown
dateCreated: 2022-05-30T02:02:41.783Z
---

# Hydrate Redeem [(by GoWMan)](https://www.twitch.tv/gowman)

## Description
Stay Hydrated and keep chat engaged by keeping track of how much beverage you consume on stream with the Hydrate Redeem for Streamer.bot!

## Tutorial
<iframe src="https://www.youtube.com/embed/26DY23HUUFc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allow fullscreen style="border: none; max-width: 100%; width: 100%; aspect-ratio: 16/9;"></iframe>

## Resources
Source Copy:  [OBS Plugin](https://obsproject.com/forum/resources/source-copy.1261/)
Hydrate Redeem:  [Resources](/overlays/hydrate-redeem/files/hydrateredeem.rar)

### Steamer.bot
Drag the file `Hydrate Redeem.txt` into the `Import Pane`:
![hydrate-redeem-import](/overlays/hydrate-redeem/images/hydrate-redeem-import.png)

### OBS Studio
With Source Copy installed, go to `Tools > Source Copy > Load Scene` and select `Hydrate Redeem.json`.
![hydrate-redeem-source-copy](/overlays/hydrate-redeem/images/hydrate-redeem-source-copy.png)

## Configuration
There needs to be 3 `Commands` created:
![hydrate-redeem-commands](/overlays/hydrate-redeem/images/hydrate-redeem-commands.png)
#### Chat Commands
`!hydratetotal` - Allows users to see the total amount of set beverage the streamer has had during stream..
#### Moderator Commands
`!hydrateset` - Allows Moderators to set the beverage of choice and serving size.
`!hydratereset` - Allows Moderators to reset the Hydrate Redeem tracker.
#### Channel Point Reward
Create a `Channel Point Reward` called `Hydrate` and then tie it to the `Action` `Hydrate`.
![hydrate-redeem-channel-point-reward](/overlays/hydrate-redeem/images/hydrate-redeem-channel-point-reward.png)