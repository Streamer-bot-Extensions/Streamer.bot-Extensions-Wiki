---
title: Tic Tac Toe game with overlay (By LeBluxTV)
description: Let your viewers play Tic Tac Toe on your stream.
published: 
date: 
tags: 
editor: markdown
dateCreated: 
---

*OBS WS v5.x*{.obs-version-badge} 

# Tutorial

<iframe src="https://www.youtube.com/embed/ " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allow fullscreen style="border: none; max-width: 100%; width: 100%; aspect-ratio: 16/9;"></iframe>

# Import Files 
- [<i class="mdi mdi-file-download"></i> **Tic Tac Toe Import Code *Click to Download***](/assets/tic-tac-toe/files/Tic_Tac_Toe_Mini_Game_Streamer.Bot_Actions.sb)
{.btn-grid .my-5}

# Preconfiguration

First of all, Create a new Channel point Reward and give it a name (e.g. : "Challenge a viewer on Tic Tac Toe")

- [<i class="mdi mdi-file-download"></i> **Tic Tac Toe Import Code *Click to Download***](/assets/tic-tac-toe/files/Tic_Tac_Toe_Mini_Game_Streamer.Bot_Actions.sb)
{.btn-grid .my-5}
Download and unzip images folder where you want. You will need to locate that folder later.

# Installation

## OBS Scene Importation
- [<i class="mdi mdi-folder-download"></i> **Tic Tac Toe Scenes *Click to Download***](/assets/tic-tac-toe/files/Tic_Tac_Toe_SOURCE_COPY_LeBluxTV.zip)
{.btn-grid .my-5}

Download and unzip to Import both scene into OBS : 

`[NS] Tic Tac Toe - 1 - Source Copy.json` 

`[NS] TIC TAC TOE Overlay - 2 - Source Copy.json`


### plugins needed : 
|Plug-in Name|Sources Requiring|Link|
|---|---|---|
|`Source Copy`||you need the OBS plugin Source Copy to Import the scenes https://obsproject.com/forum/resources/source-copy.1261/ |
|`Move Transition`|[NS] TIC TAC TOE Overlay|https://obsproject.com/forum/resources/move-transition.913/|
|`Shader-Filter`|for rounded-rect.shader on images and browser sources|https://github.com/exeldro/obs-shaderfilter/releases|

The easiest way to update all images location is to close obs, then when you reopen that scene collection, it will popup a window, looking for missing files. 
Just locate the folder where images you downloaded before are. 

## Streamer.bot 

Download the Import File. 
Open the `Import Dialog` by pressing `Import` from the top left. 
Drag the downloaded `.sb` file into the `Import String` then press `Import`

This will Import 3 Actions and a bunch of Commands

### Configuration 

`TIC TAC TOE [ Check Play / Win]` ► No configuration needed

`TIC TAC TOE [ Get Players ] ►[ Channel Point Reward ]` 

► Set the Position of the widget to pop-in / slide-in 

![in](/assets/tic-tac-toe/files/tuto_-_Action_'TIC_TAC_TOE_[_Get_Players_]_►_[_Channel_Point_Reward_]'_SET_POSITION_img.png)

► Set your Channel Point Reward name 

`TIC TAC TOE [ Reset Game ]` 

► Set the Position of the widget to pop-out / slide-out

![out](/assets/tic-tac-toe/files/tuto_-_Action_'TIC_TAC_TOE_[_Reset_Game_]'_SET_POSITION_img.png)

► Set your Channel Point Reward name

## Available Commands

|Command|Purpose|
|---|---|
|`!p1` `!p2` | First Player Choice |
|`!A1` `!A2` `!A3`<br>`!B1` `!B2` `!B3`<br>`!C1` `!C2` `!C3`| Players moves |
|`!resetTicTacToe`<br>`!resetTTT`| Reset the game (e.g. : if one players left the stream without finishing to play )|
