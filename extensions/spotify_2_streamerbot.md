---
title: Spotify To Streamerbot (By LeBluxTV)
description: Use SB to control and interact with Streamerbot!
published: true
date: 2022-10-23T19:37:29.176Z
tags: 
editor: markdown
dateCreated: 2022-10-23T19:37:26.389Z
---

*OBS WS v5.x*{.obs-version-badge} 

# Tutorial

In this video you will have all step to setup SPOT TO SB's Actions. 
<iframe src="https://www.youtube.com/embed/U17wCzygJl0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allow fullscreen style="border: none; max-width: 100%; width: 100%; aspect-ratio: 16/9;"></iframe>

> In order to get full functionality like song request [command !sr ] to add song to song queue , you MUST be premium spotify user. it's not only because not being premium will cast ads too, but it's also spotify API limitation.
Open your desktop application during the process so it will be recognized by streamer.bot on the first connection.
! ► If you already have the first version , remove all Actions and Commands before updating to avoid conflicts◄ {.is-warning}


# Import Code 

* `Import Pane` [tiny SPOT TO SB](/assets/spotify/files/TinySpot.sb)

* `Import Pane` [roly SPOT TO SB](/assets/spotify/files/RolySpot.sb)

# Installation

## Spotify Dashboard
To control your spotify desktop application from streamer.bot, you will need to create a developer account by using your actual spotify account to get client Id & client Secret codes that are required to get access token from OAuth protocol.

Go to https://developer.spotify.com/dashboard/ to Log in.
Accept Terms Of Service, then create an application, give it a name and a short description, tick the terms of service agreement and click on Create.

Under your Application Name, you will see Client Id followed by a bunch of characters, copy-pasta on a text file you will need it later on streamer.bot. Now Click on " Show Client Secret " and copy it too.

On the right side , click on the " edit Settings " green button, under the line “Redirect URIs” you will have to add http://127.0.0.1:1300/spotifyOAuthRedirectUri/ , press Save.

## OBS Scene Importation
There is now 2 differents Overlay which needs differents OBS's Plugins. 
Choose one of them to get the file needed to import and create the scene with all elements. 
Using Source Copy Plugin, go to Tools tab in OBS, source copy > load scene , find the location of the json file that you downloaded.

## tiny SPOT TO SB
![tiny](/assets/spotify/files/tiny.png)

🖿 First Overlay : Tiny Spot to sb Source Copy [tiny SPOT TO SB source copy](/assets/spotify/files/roly%20%5BNS%5D%20SPOTIFY%20-%202%20SOURCE%20COPY%20IMPORT%20FILE.zip)

### 4 plugins are needed :

#### ► Move transition : 
https://obsproject.com/forum/resources/move-transition.913/
( on [NS] SPOTIFY scene | [CS] 1stHalf-progressBar | [CS] 2ndHalf-progressBar )

#### ► Win Capture Audio : 
[ the following plugin is a audio source capture, if you have another plugin to capture de audio source from the Spotify Desktop App it will works too , you will just need to set sources to listen to this plugin instead of Win-Capture-Audio ] 
https://obsproject.com/forum/resources/win-capture-audio.1338/
( on [ACS] Audio Capture )
check the properties for [ACS] Audio Capture and set it to be listenning to your active spotify.exe window.

#### ► Stream FX for 3d Transform : 
https://github.com/Xaymar/obs-StreamFX/releases (tested on 0.12.0a117 )
( source : [CS] 1stHalf-progressBar | [CS] 2ndHalf-progressBar )

#### ► WaveForm 
https://obsproject.com/forum/resources/waveform.1423/
( source : Waveform Visualizer 4) 
Check properties of this source to make sure it listen to the Audio Capture source.


## roly SPOT TO SB
![roly](/assets/spotify/files/roly.png)

🖿 Second Overlay : Roly Spot to sb Source Copy [roly SPOT TO SB](/assets/spotify/files/tiny%20%5BNS%5D%20SPOTIFY%20SOURCE%20COPY%20IMPORT%20FILE.zip)

### 7 plugins are needed : 

#### ► Move Transition :
https://obsproject.com/forum/resources/move-transition.913/
( scene/sources : [NS] SPOTIFY - 2 | 1st-progressBar | 2nd-progressBar | 3rd-progressBar | 4th-progressBar )

#### ► Shader-Filter ( for rounded-rect.shader on source : BACKGORUND SPOTIFY / blend_opacity.shader on source Waveform Visualizer )
https://github.com/Oncorporation/obs-shaderfilter/releases
( tutorial to get it : https://www.youtube.com/watch?v=qHUfQ37E_rc )


#### ► stream FX for 3d Transform : 
https://obsproject.com/forum/resources/streamfx-for-obs%C2%AE-studio.578/
( sources : 1st-progressBar | 2nd-progressBar | 3rd-progressBar | 4th-progressBar )

#### ► win capture audio :
https://obsproject.com/forum/resources/win-capture-audio.1338/
The following plugin is a audio source capture, if you have another plugin to capture de audio source from the Spotify Desktop App it will works too , you will just need to set sources to listen to this plugin instead of Win-Capture-Audio 

#### ► Recursion Effect :  
https://obsproject.com/forum/resources/recursion-effect.1008/
( source : Waveform Visualizer )
You probably wiil need to refresh the value Offset X for this filter, to do so, open the filter, click on it, change the Offset X value then reset it to 7.00 )

#### ► Scale To Sound :
https://obsproject.com/forum/resources/scale-to-sound.1336/
( source : BACKGORUND SPOTIFY )
You probably will need to set the Audio Source to [ACS] Capture audio , or your Audio capture source solution, if you don't see the frame moving when playing music this need to be done 

#### ► WaveForm :
https://obsproject.com/forum/resources/waveform.1423/
( source : Waveform Visualizer 2 | Waveform Visualizer )
Check properties of both sources to make sure it listen to the Audio Capture source.

## Streamer.Bot 

Add the Import code by clicking on Import Button, you can drag & drop the file directly to the "import string" field. 

You will see all 12 Actions and 10 Commands, click on Import to get them inside Streamer.bot.

On 0.1.12 version Commands are disabled by default on importation, you will need to enable only the !spotifyConnect command from the Commands tab. 

Now return to the Actions tab, and click on the "tiny/roly SPOT TO SB - !SpotifyConnect [ OAuth + Get Device ]" Action, in the Sub-Actions field you will have to Enter 4 informations. 

► Set Argument for websocket 5.x connection number ( usually 0 or 1 )

► Set Argument for Spotify Client Secret 

► Set Argument for Spotify Client Id 

► Set Argument for Crossfade Timing ( if you don't use crossfade from desktop application keep the value to 0 )

All C# codes should already have their .dll files, they all need mscorlib.dll & System.dll except 
the Execute code : [ SERVER ] OAuth Link that also need System.web.dll. 

in the command "roly SPOT TO SB - [ Now Playing Watcher]" you can set the argument %watcherToChat% to false to not display the current song on song change. Default value is set to true.

## Available Commands

!sPlay > play / resume 

!sPause > Pause the song [ won't stop the progress bar from the actual method used ]

!sNext > Next Song in Queue 

!sPrev > Previous Song

!sQueue > display in chat the next song that will be played right after the current one.

!sNow > activate the display of current song on songs change " in real time " ( 2/3 seconds of latency )
shouldn't need to be activated. That Action Start by default on streamer.bot launch.

!sr (followed by your query)  will add the result to the queue.

!spotifyDevice to set the device to listen if it wasn't showing up after getting the token.

___New Commands :___ 

!sLike : To Save a saong to your Liked songs. 

!sLink : Let your viewers get the spotify Links.

!sNow : will post to chat the currently playing song ( useful if you choose to not display the song on song change and/or not displaying the overlay )

__Song Exclusion__

!songOut : will exclude the ability to add the currently playing song from song request 

!excludedSongs : Will display every songs added to the banned song list.

!songBack : followed by the number returned by one of the responses from !excludedSongs 

# Configuration

Once one of the two source copy imported ( roly or tiny ) and streamer.bot Actions imported and filled with client Id / client Secret values, websocket argument set to your currently active connection, you first will have to make sure you Enabled ***!spotifyConnect*** command.
A browser page should open to authenticate your account with specific scopes needed. after accepting you will be redirected to the local page you entered previously in the "Edit Settings" section on spotify Dashboard page.

In twitch's chat, after a short moment it should show Device selected with the name of your computer, this is where the desktop application should be running.
!IMPORTANT! ► in the case you don't see a message starting with " default device selected " , you must run !spotifyDevice and this should return all device connected to spotify you use. 
Then, Select the Device with !spotifyDevice followed by the number of the Device in previous responses.

Additional information : if you don't want the name of the current song being updated in the Chat, in the Action " [Now Playing Watcher] you can set the argument "%watcherToChat% to False". 

# Contributors
 - [<i class="mdi mdi-twitch"></i> LeBluxTv](https://www.twitch.tv/LeBluxTV)
 - [<i class="mdi mdi-twitch"></i> ConfuzzedCat](https://www.twitch.tv/ConfuzzedCat)
 - [<i class="mdi mdi-twitch"></i> HappyPlotter](https://www.twitch.tv/HappyPlotter)
 {.contributors}
