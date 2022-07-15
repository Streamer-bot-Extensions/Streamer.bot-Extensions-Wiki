---
title: Countdown Timer in C# (by rondhi)
description: create a countdown timer with Streamer.bot.
published: true
date: 2022-06-14T23:33:41.299Z
tags: 
editor: markdown
dateCreated: 2022-06-14T23:33:38.519Z
---

# Countdown Timer [(by rondhi)](https://twitch.tv/rondhi)

## Installation
Copy the import code below and paste it into the `Import Pane`:

```text
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
```

## Steps to follow once imported

1. In OBS, add a scene called `[NS] Countdown Timer` and a text source within that scene called `[TS] Countdown Timer`. You can call `[NS] Countdown Timer` as a nested scene in any scene you want to use the timer.

2. Streamer Bot > Actions > `TimerStart` > double-click `Execute Code (Countdown Timer)` > in the `References` tab > right-click and `Add reference from file...` > add `System.dll` > click `Save and Compile`

  ![image](https://user-images.githubusercontent.com/8848167/170428954-f38da1d2-6fb5-4306-a8cb-5cd5c6e3d02b.png)

### Commands to create in Streamer Bot and which action to point them to

| Command                                                           | Action                                                            | Usage                                                             | Explanation                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| !timer                                                            | TimerStart                                                        | `!timer #` \- Makes the timer visible and starts a # minute timer | Makes timer visible and starts the timer to the number specified in the command |
| !set                                                              | TimerSet                                                          | `!set #`                                                          | Makes timer visible for # minutes, but doesn't start.         |
| !start                                                            | TimerRestart                                                      | !start                                                            | Makes timer visible and starts the timer with variable last used in `!timer #` or `!set #` |
| !restart                                                          | TimerRestart                                                      | `!restart`                                                        | Makes timer visible and restarts the timer with variable last used in `!timer #` or `!set #`|
| !stop                                                             | TimerStop                                                         | `!stop`                                                           | Stops the timer, then hides the text source.                      |
| !1                                                                | TimerAdd 01 Minute                                                | `!1`                                                              | Adds 1 minute to the countdown timer                              |
| !5                                                                | TimerAdd 05 Minutes                                               | `!5`                                                              | Adds 5 minutes to the countdown timer                             |
| !10                                                               | TimerAdd 10 Minutes                                               | `!10`                                                             | Adds 10 minutes to the countdown timer                            |
| !showtimer                        | TimerShow                     | `!showtimer`                                                      | Makes the timer visible
| !hidetimer                        | TimerHide                     | `!hidetimer`                                                      | Hides the timer


## Actions in the `TimerDone` action will be triggered once the timer reaches zero.
