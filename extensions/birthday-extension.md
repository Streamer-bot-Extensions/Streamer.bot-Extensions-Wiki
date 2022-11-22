---
title: Birthday Extension (by GoWMan)
description: Have those users that come into your stream and want to let you know it's their Birthday?  Why not give them a way to get noticed on stream?  You can with the Birthday Extension for Streamer.bot.
published: true
date: 2022-11-20T07:17:42.250Z
tags: 
editor: markdown
dateCreated: 2022-10-23T19:35:09.641Z
---

# Birthday Extension [(by GoWMan)](https://www.twitch.tv/gowman)

## Description
Have those users that come into your stream and want to let you know it's their Birthday?  Why not give them a way to get noticed on stream?  You can with the Birthday Extension for Streamer.bot.
## Tutorial
<iframe src="https://www.youtube.com/embed/aFEKQJjMpV8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allow fullscreen style="border: none; max-width: 100%; width: 100%; aspect-ratio: 16/9;"></iframe>

## Resources
Source Copy:  [OBS Plugin](https://obsproject.com/forum/resources/source-copy.1261/)
Birthday Extension:  [U.S.](/assets/birthday-extension/files/birthday.rar)
>Also available in these locales:
>[Brazilian-Portugese](/assets/birthday-extension/files/birthdaybz-pt.rar)
>[U.K.](/assets/birthday-extension/files/birthdayuk.rar)
{.is-info}

## Installation

### Steamer.bot
Drag the file `Birthday Extension Import.txt` into the `Import Pane`:
![birthday-extension-import](/assets/birthday-extension/images/birthday-extension-import.png)

### OBS Studio
With Source Copy installed, go to `Tools > Source Copy > Load Scene` and select `Birthday Alert.json`.
![birthday-extension-source-copy](/assets/birthday-extension/images/birthday-extension-source-copy.png)

## Configuration
There needs to be 4 `Commands` created:
![birthday-extension-commands](/assets/birthday-extension/images/birthday-extension-commands.png)
#### Chat Commands
`!birthday` - Allows users to check their Birthday or a Birthday of another user.
`!setbirthday` - Allows users to set their Birthday (This will only work once unless reset by a Moderator).
#### Moderator Commands
`!birthdayso` - Allows Moderators to wish someone Happy Birthday if their Birthday was on a non-stream day.
`!resetbirthday` - Allows Moderators to reset a users' set Birthday so they can set it again.

In the `Actions` `Birthday Auto` and `Birthday Shoutout (Mod)` double click on the `Obs Set Browser Source Url` `Subaction` and make sure that it points to the index.html file in \Browser Sources\happy-birthday\dist.
![birthday-extension-set-browser-source-url](/assets/birthday-extension/images/birthday-extension-set-browser-source-url.png)

>Do NOT remove the `?user=%user%` or `?user=%targetUser%` from the end of the `Obs Set Browser Source Url` `Subactions` or it will NOT work.
{.is-danger}

>Do NOT check `Local File` in the `OBS Browser Source`.
{.is-danger}
