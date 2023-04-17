---
title: Rocksmith (Rocksniffer) Extension
description: React to in game activity using Rocksniffer
published: true
date: 2023-02-27T22:24:12.743Z
tags: 
editor: markdown
dateCreated: 2023-02-27T22:05:17.720Z
---

# Rocksniffer (Rocksmith 14) [(by Th0rsten)](https://www.twitch.tv/th0lamin)

## Description

A streamer.bot implementation to replace Warth's SceneSwitcher, and more.

# Video
<div class=“iframe-container”><iframe src="https://www.youtube.com/embed/dR7iKeCe-MI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allow fullscreen style="border: none; max-width: 100%; width: 100%; aspect-ratio: 16/9;"></iframe></div>



# Download

1. Download the latest release from [GitHub](https://github.com/Th0rstenf/Rocksniffer-to-Streamer.bot-extension/releases)

# Setup

## Adding it to streamerbot
   - Import the content of importCode.txt into streamer.bot
   - Modify the global variables inside the SceneSwitcher action to match your configuration
   - Check if the code is compiling. If it doesn't, a reference is missing. References necessary are:
***mscorlib.dll***
***System.dll***
***System.Net.Http.dll***
***Newtonsoft.Json.dll*** (should be in your streamer.bot folder)
   - Create a timed action (navigate Setting -> Timed Actions)
   - Configure an interval of 1 second
   - Make sure to tick enabled and repeat
   - Connect it with the imported action SceneSwitcher
   
# Switching Scenes

This code fetches the output of Rocksniffer and evaluates game state and song timer. Depending on the state it switches to the scenes defined in global variables for Rocksmith, song, and break (pausing during a song).

# Providing Global variables
The following data is written to global variables whenever they change:

- accuracy
- currentHitStreak
- currentMissStreak
- totalNotes
- totalNotesHit
- totalNotesMissed
- totalNotesSinceLaunch
- totalNotesHitSinceLaunch
- totalNotesMissedSinceLaunch
- accuracySinceLaunch
- songLength (raw seconds)
- songLengthFormatted (Formatted as HH:MM:SS)

*In addition to that, the following are provided to SB, as soon as the arrangement is identified:*

- songName
- artistName
- albumName
- arrangement
- arrangementType
- tuning
- songLength (raw seconds)
- songLengthFormatted (HH:MM:SS)

# Reacting to Sections
Assuming the song has properly named sections, the following section types are recognized:

- Breakdown
- Bridge
- Chorus
- Riff
- Solo
- Verse
- No guitar
- Default (always active when scene name didn't give useful information)

For each of those sections, an enter and leave action is provided. Those will automatically be called by the SceneSwitcher action. Feel free to fill them with whatever you like.
In addition to that, actions for entering/leaving a pause, the tuner and starting or ending a song are provided.

## Adapt to your needs
Inside the SceneSwitcher action, there are several global parameters that can/need to be changed: For scene switching:

menuScene - This should be scene you want to load when you're in the menu or tuner
songScene - The scene you switch to when the song starts
pauseScene - the scene that will be loaded when pausing during a song.
For the sniffer connection:

snifferIP - ip address of the PC that is running rocksniffer. If it's the same it should be "127.0.0.1" (Quotes are not optional!)
snifferPort - should usually never be touched (9938), but provided for sake of completeness.
For determining when it is active:

behavior - The following options are available:
Whitelist - Will only be active during the scenes defined in menuScene, songScene and pauseScene
Blacklist - Will be active unless the current scene is in the blacklist
AlwaysOn - Self-explanatory
blackList - Enter blacklisted scenes, coma separated.
To disable certain aspects:

switchScenes - True or false
sectionActions - True or false

## Dependencies
Rocksniffer

## Help
In case the switcher does not work, double check the spellings of the scenes. Note that the IP address needs to be entered with quotes e.g.

```127.0.0.1```

Otherwise streamerbot will misinterpret it as double value. If the issues can not be solved this way, feel free to contact me in discord. See below.

With the usage of whitelist or blacklist, make sure to only switch to scenes that are valid for running. Otherwise you will not automatically switch back!