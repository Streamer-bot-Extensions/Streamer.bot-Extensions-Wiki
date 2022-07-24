---
title: Commercial Timer (by GoWMan)
description: This allows you to create a timer in SB that auto plays a 180 second commercial every hour on the hour.
published: true
date: 2022-07-24T04:58:13.095Z
tags: 
editor: markdown
dateCreated: 2022-07-24T00:40:58.321Z
---

# Commercial Timer [(by GoWMan)](https://www.twitch.tv/gowman)

> This will only work with Streamer.bot 0.1.5 and later! 
> 
> {.is-danger}

## Description

This timer will automatically warn chat about an incoming ad and play a 180 second ad automatically every hour on the hour.  Once this is setup you don’t have to do anything else and it will work every time you go live.  This timer has been built to play a 180 Commercial and swap scenes to BRB and Live scene automatically.  If you would like to adjust it in anyway, ie. play shorter ads, remove warnings, etc, you will have to adjust the delays in the action accordingly.  The entire timer is built upon SB 0.1.5’s functions and will enable each time you go live and disable each time you hit stop streaming.

## Installation

This setup allows an easy way to have an auto commercial timer without any complicated maintenence and should allow for a one and done setup.

Copy the text from the code box below into the `Import` box in Streamer.bot to add these to your action library:

```text
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
```

![commercial_timer.png](/extensions/commercial-timer/images/commercial_timer.png)

## Configuration

Create a `Timed Action` called ***Auto Run Commercial*** and set it to ***3600 Interval***, ***Enabled No***, ***0 Lines*** and then tie it to the ***Run Commercial*** `Action`.

![commercial_timer2.png](/extensions/commercial-timer/images/commercial_timer2.png)

Create an OBS Event for `StreamStarted` and tie it to the **Stream Started** `Action` and make sure it is **Enabled**. Create an OBS Event for `StreamStopped` and tie it to the **Stream Ending** `Action` and make sure it is **Enabled**.

![commercial_timer3.png](/extensions/commercial-timer/images/commercial_timer3.png)

Make sure to change the `OBS Set Active Scene` in the ***Run Commercial*** `Action` to your ***BRB Scene*** and your ***Live Scene*** for *Auto Switching* scenes on Commercial.

![commercial_timer4.png](/extensions/commercial-timer/images/commercial_timer4.png)

Make sure the Timer subaction in both the ***Stream Started*** `Action` and ***Stream Ending*** `Action` are pointed to the ***Auto Run Commercial*** `Timed Action`.

![commercial_timer6.png](/extensions/commercial-timer/images/commercial_timer6.png) ![commercial_timer5.png](/extensions/commercial-timer/images/commercial_timer5.png)

***

With this complete, everytime that you hit Start Streaming the timer will enable and play a 180 second commercial during your Starting Soon scene.  After that, the timer will give chat a 60 second warning, countdown in chat for the last 10 seconds, then play a 180 second ad, and swap from your live scene to your BRB scene.  After the commercial is done the timer will switch from your BRB scene to your live scene and let chat know that you're back.  This will happen every hour on the hour.  When you hit stop streaming the timer will disable and will no longer run until you hit start streaming again.

***

> ***If you would like to alter anything in this timer you may.  Like changing the ad length to a shorter length or removing the auto switching between scenes.  If you do you MUST alter the delays as well or the timer will not function properly.*** 
> 
> {.is-warning}
