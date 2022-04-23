---
title: Leader Board (by TerrierDarts)
description: This tool will allow you to see which users have the most points, it comes with a codepen for visuals of Top 5 but you can post in chat up to 20 people. Twitch Character Limit may prevent more.
published: true
date: 2022-04-23T10:10:08.130Z
tags: 
editor: markdown
dateCreated: 2022-04-20T15:52:36.015Z
---

# Leaderboard (By TerrierDarts)

The Leader Board Extention will allow you to see which users have the most points. It also comes with a new action to check how many points you have which will tell you what posistion you are in the rankings, along with the person above and below.

# Import Code
```
Import Code Coming Soon
```

# Code Pen (optional)

* [The CodePen](codepen.io)
{.links-list}

The Codepen can be altered if you so wish, you can change the title on the leaderboard by changing the `Top Points` text in the html. You can also change the colours if you wish by playing with the CSS. Around line 134 there is a `nth-child` and under that it say background, altering that hexcode will change the colour.

> My advice would be to fork the code pen, by clicking fork in the bottom right, that way you can save and then as you change things and refresh if something goes wrong without losing all the work you've done.
{.is-info}

Once you've got the code pen how you like it, you will need to export it. You can do this by pressing **export > download .zip**. Once downloaded, extract the files and put them somewhere safe. The next step is to open the `dist` folder and open the `index` file. Copy and Paste the url of that file into a browser source within OBS.

> It is important that you do not click local file when creating your browser source.
{.is-danger}

# Configuration

Both Codes will need the following references in order to compile.
```
Newtonsoft.Json.dll (0.1.8 Only)
mscorlib.dll
System.dll
System.Core.dll
Microsoft.VisualBasic.dll
```

You will need to create the following commands, if you already have the `!points` command from VRFlads system then change that one so its tied to the new action.
```
!rank    = Tied to Leaderboard
!points  = Tied to NewGetPoints
```

Final step would be to add the Browser Source Url from the Codepen into the `filePath` argument and change the `OBS set browser source` subaction and point it towards your newly created browser source. 

## Editable Settings
`boardSize` This is the amount of users you want it to show when you do `!rank` 
`filePath` This is the url of the browser Source.

> It's important to note that if you choose a number too high for boardSize the message may not post due to twitch's own message character limit. 
{.is-info}

## Youtube Video
If you want you can [click here](www.youtube.com) and watch TerrierDarts quick video on how to set this up, and if you have anymore questions you can ask in the StreamSaver or Streamerbot Discord.
