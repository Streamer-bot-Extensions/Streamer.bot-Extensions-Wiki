---
title: Windows Live Notification
description: Have a Windows Live Notification to welcome first time chatters into stream. 
published: true
date: 2022-10-16T14:53:09.747Z
tags: first, words, overlay, windows, live, notification
editor: markdown
dateCreated: 2022-10-16T14:53:09.747Z
---

# Installation

There is no Import Code for this what you need to do is create a blank action called `WLN`, then in your current First Word Action you need to reference this action. It should look roughly like this.

![windowslive.png](/extensions/windows-live/windowslive.png)

The important Sub-Action is `Action(WLN)` as the pop-up will trigger when that Sub-Action runs. 


Next thing to do is to download the files, this contains
- [<i class="mdi mdi-file-document"></i> Windows Live Notification Download](/extensions/windows-live/windows-live-notif.zip)
{.btn-grid .my-5}

Once download it will need extracting and putting somewhere safe. You will then need to add the index.html file contained to OBS. If all is done correctly it should run when someone chats for the first time in stream.

# Contributors
 - [<i class="mdi mdi-twitch"></i> TerrierDarts](https://www.twitch.tv/TerrierDarts)
 {.contributors}
