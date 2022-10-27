---
title: Fireworks (by Nate1280, VRFlad and Caleb Miller on Codepen)
description: Display fireworks on stream!
published: true
date: 2022-10-23T19:35:45.841Z
tags: 
editor: markdown
dateCreated: 2022-10-23T19:35:43.047Z
---

# Fireworks (by [Nate1280](https://www.twitch.tv/nate1280), [VRFlad](https://www.twitch.tv/vrflad) and [Caleb Miller](https://codepen.io/MillerTime) on Codepen)

## Description

To celebrate the new years, please find a Fireworks system for the awesome Streamer.bot!
Originally on [Codepen](https://codepen.io/MillerTime/pen/XgpNwb) and modified a lot by Nate1280 and I put in final touches

## Implementing into Streamer.Bot

Just ensure you have the websockets enabled!

![fireworks-websocket.png](/assets/fireworks/images/fireworks-websocket.png)

## Adding into OBS

Unzip [fireworks.zip](/assets/fireworks/files/fireworks.zip) to a folder that you want.
Add in the fireworks.html as a browser source.
Add a Colour Key (or Color key if you spell it that way) filter on the source with the settings below

![fireworks-obscolorkey.png](/assets/fireworks/images/fireworks-obscolorkey.png)

Set audio up (by modifying advanced audio properties for the browser source)

![fireworks-audio.png](/assets/fireworks/images/fireworks-audio.png)

## Usage

How to trigger the fireworks?

Simply have chat type in ``fireworks`` as part of the message and it will trigger.
