---
title: Chinese Proverbs (by GoWMan)
description: Display uplifting and insightful proverbs on your stream with Chinese Proverbs for Streamer.bot.
published: true
date: 2022-07-24T04:39:59.900Z
tags: 
editor: markdown
dateCreated: 2022-06-14T23:24:08.706Z
---

# Chinese Proverbs [(by GoWMan)](https://www.twitch.tv/gowman)

## Description
Display uplifting and insightful proverbs on your stream with Chinese Proverbs for Streamer.bot.

## Tutorial
<iframe width="1120" height="630" src="https://www.youtube.com/embed/_pOmqxTcqhs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Resources
Source Copy:  [OBS Plugin](https://obsproject.com/forum/resources/source-copy.1261/)
Chinese Proverbs:  [Resources](/overlays/chinese-proverbs/files/chinese-proverbs.zip)

### Steamer.bot
Drag the file `Chinese Proverbs Import.txt` into the `Import Pane`:
![birthday-extension-import](/overlays/chinese-proverbs/images/chinese-proverbs-import.png)

### OBS Studio
With Source Copy installed, go to `Tools > Source Copy > Load Scene` and `select Chinese Proverbs.json`.
![chinese-proverbs-import](/overlays/chinese-proverbs/images/chinese-proverbs-source-copy.png)

## Configuration
Double click on the `Obs Set Browser Source Url` `Subaction` and make sure that it points to the `index.html` file in `\chinese-proverbs\chinese-proverbs`.
![chinese-proverbs-set-browser-source-url](/overlays/chinese-proverbs/images/chinese-proverbs-set-browser-source-url.png)

>Do NOT remove the `?user=%user%&targetUserProfileImageUrlEscaped=%targetUserProfileImageUrl%&randomLine=%randomLine%` from the end of the `Obs Set Browser Source Url` `Subactions` or it will NOT work.
{.is-danger}

>Do NOT check `Local File` in the `OBS Browser Source`.
{.is-danger}

Create a `Channel Point Reward` and tie it to the `Action` `Chinese Proverbs`.
![chinese-proverbs-channel-point-reward](/overlays/chinese-proverbs/images/chinese-proverbs-channel-point-reward.png)

### TwitchSpeaker
If you would like to have TwitchSpeaker read out the Proverbs make sure that you have your `Voice Alias` set to the voice you want it sent to.  Otherwise you can disable this `Subaction`.
![chinese-proverbs-twitch-speaker](/overlays/chinese-proverbs/images/chinese-proverbs-twitch-speaker.png)