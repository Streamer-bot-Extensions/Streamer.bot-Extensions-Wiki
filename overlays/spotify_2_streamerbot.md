---
title: Spotify To Streamerbot (By LeBluxTV)
description: Use SB to control and interact with Streamerbot!
published: true
date: 2022-10-11T16:08:18.911Z
tags: 
editor: markdown
dateCreated: 2022-10-10T17:47:03.419Z
---

*OBS WS v5.x*{.obs-version-badge} 

# Tutorial

<div class=“iframe-container”><iframe src="https://www.youtube.com/embed/tEMan7s0XAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allow fullscreen style="border: none; max-width: 100%; width: 100%; aspect-ratio: 16/9;"></iframe></div>

# Import File
Drag and drop this file into your `Import Pane`.
[Tiny Spot](/overlays/spotify/files/TinySpot.sb)

# Installation
> In order to get full functionality like song request [command !sr ] to add song to song queue , you MUST be premium spotify user. it's not only because not being premium will cast ads too, but it's also spotify API limitation.
Open your desktop application during the process so it will be recognized by streamer.bot on the first connection. 
{.is-warning}


## Spotify Dashboard 

To control your spotify desktop application from streamer.bot, you will need to create a developer account by using your actual spotify account to get client Id & client Secret codes that are required to get access token from OAuth protocol.

Go to https://developer.spotify.com/dashboard/ to Log in.
Accept Terms Of Service, then create an application, give it a name and a short description, tick the terms of service agreement and click on Create.

Under your Application Name, you will see Client Id followed by a bunch of characters, copy-pasta on a text file you will need it later on streamer.bot. Now Click on " Show Client Secret " and copy it too. 

On the right side , click on the " edit Settings " green button, under the line "Redirect URIs" you will have to add http://127.0.0.1:1300/spotifyOAuthRedirectUri/ , press Save. 


## OBS Scene Importation

Using Source Copy Plugin, go to Tools tab in OBS, source copy > load scene , find the location of [NS] SPOTIFY.json file that you downloaded. 
[Tiny Spot Source Copy](/overlays/spotify/files/Tiny%20Spot%20Source%20Copy.zip)


3 plugins are needed : 

-Move transition : https://obsproject.com/forum/resources/move-transition.913/
( on [NS] SPOTIFY scene | [CS] 1stHalf-progressBar | [CS] 2ndHalf-progressBar )

-Win Capture Audio : https://obsproject.com/forum/resources/win-capture-audio.1338/
( on [ACS] Audio Capture )

-Stream FX for 3d Transform : https://github.com/Xaymar/obs-StreamFX/releases (tested on 0.12.0a117 )
( on [CS] 1stHalf-progressBar | [CS] 2ndHalf-progressBar )

Once Imported, check the source [ACS] Audio Capture and set it to be listenning to your active spotify.exe window.  

## Streamer.Bot 

In Streamer.bot in select `Import` from the top left.
Copy the `Import Code` and paste it into the `Import String`.

You will see all 12 Actions and 10 Commands, click on Import to get them inside Streamer.bot.

On 0.1.12 version Commands are disabled by default on importation, you will need to enable only the !spotifyConnect command from the Commands tab. 

Now return to the Actions tab, and click on the "tiny SPOT TO SB - !SpotifyConnect [ OAuth + Get Device ]" Action, in the Sub-Actions field you will have to Enter 4 informations. 

► Set Argument for websocket 5.x connection number ( usually 0 or 1 )

► Set Argument for Spotify Client Secret 

► Set Argument for Spotify Client Id 

► Set Argument for Crossfade Timing ( if you don't use crossfade from desktop application keep the value to 0 )

All C# codes should already have their .dll files, they all need mscorlib.dll & System.dll except 
the Execute code : [ SERVER ] OAuth Link that also need System.web.dll. 

# Configuration

The First Time you use the tiny Spot to Sb extension, you need to use !spotifyConnect. A browser page should open to authenticate your account with specific scopes needed. after accepting you will be redirected to the local page you entered previously in the "Edit Settings" section on spotify Dashboard page. 

In twitch's chat, after a short moment it should show Device selected with the name of your computer, this is where the desktop application should be running. 

Once it's done. The tiny Spot To Sb is ready To use

## Available Commands

!sPlay > play / resume 

!sPause > Pause the song [ won't stop the progress bar from the actual method used ]

!sNext > Skip to Next Song in Queue 

!sPrev > Skip to Previous Song

!sQueue > display in chat the next song that will be played right after the current one.

!sNow > activate the display of current song on songs change " in real time " ( 2/3 seconds of latency )

!sr (followed by your query)  will add the result to the queue.

!spotifyDevice shouldn't be needed, but can change the device to listen. 

# Contributors
 - [<i class="mdi mdi-twitch"></i> LeBluxTv](https://www.twitch.tv/LeBluxTV)
 - [<i class="mdi mdi-twitch"></i> ConfuzzedCat](https://www.twitch.tv/ConfuzzedCat)
  - [<i class="mdi mdi-twitch"></i> HappyPlotter](https://www.twitch.tv/HappyPlotter)
 {.contributors}
