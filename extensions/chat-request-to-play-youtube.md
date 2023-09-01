---
title: Chat Request to Play YouTube (by TerrierDarts)
description: This extension will allow you to play YouTube videos on stream.
published: true
date: 2023-09-01T20:22:17.620Z
tags: 
editor: markdown
dateCreated: 2022-05-18T00:59:07.716Z
---

# Import Code

It's Important to know if you have Link Protection set up on your channel, as the way these are made there is 2 ways to do it, The Link Protected way and the one with no Link Protection.

> Link Protection is if you allow links to be posted into your chat or not, i know they are ways to accept certain links i.e Twitch Clip links but for the base of this its one or the other. {.is-info}

```
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
```

# Installation
Firstly you will need a blank browser source that this code can change into the video when called upon.

When you import you will receive one action. This will have things you will need to edit in order to get this set up.
![argsyt.png](/assets/chat-request-youtube/images/argsyt.png)
`scene` This is where you tell Streamer.bot what scene the browser source is on.
`source` This is where you tell Streamer.bot what source the browser source is.
`maxLength` This is where you tell Streamer.bot how long of the video you wish to play

> It's important when entering the Scene and Source you type them exactly how they are on OBS including the case. {.is-warning}

# Configuration
If using CPR's I would recommend putting some of this info into the CPR prompt to help your viewers.
If you are using the version that has no link protection then the user can just copy and paste the 'Share' link into the channel point redeem as so.

![sharelink.png](/assets/chat-request-youtube/images/sharelink.png)
If you are using the link protected version its a tiny bit more complicated and it requires a tiny bit of edit work. This is why I would put something along the lines of this in my Prompt

`Links are not allowed so to get this to work you will need the Video code, and if you wish to start at a certain time that number too.You will need to take the share link and remove the URL '1Hg1M4eExCc?si=MKmIbCbIkqmVVPG6'` 

As I say it is a tiny bit more but it allows you to do it whilst still having some form of link protection.

# Contributors

- [TerrierDarts](https://www.twitch.tv/TerrierDarts){.twitch}
- [PrettyTeddyy](https://www.twitch.tv/PrettyTeddyy){.twitch}
 {.contributors}




