---
title: Mute Indicator
description: A visual indicator on what audio sources are muted!
published: false
date: 2022-11-11T12:23:29.739Z
tags: 
editor: markdown
dateCreated: 2022-11-10T08:45:40.687Z
---

*OBS WS v4.9*{.obs-version-badge} *OBS WS v5.x*{.obs-version-badge}

# Import File
- [<i class="mdi mdi-file-download"></i> **Import File *Click to Download***](https://ik1497.github.io/Extensions/Mute-Indicator/import.sb)
{.btn-grid .my-5}

# Installation
In Streamer.bot in select `Import` from the top left.
Drag and Drop the `Import File` into the `Import String`.

![overview.gif](https://ik1497.github.io/Extensions/Mute-Indicator/installation.png =500x)

# Configuration
## Streamer.bot
1. Make sure you've imported the import code [above](#installation).
2. Link the `Mute Indicator - Mute event` action to the `InputMuteStateChanged` event in `Stream Apps` `-->` `OBS`.
3. Make sure that the `Server/Clients` `-->` `Websocket Server` is enabled.

## OBS Studio
1. Make a browser source in OBS Studio with the settings: `Width = 1920`, `Height = 1080`.
2. Put the URL of the widget in the Browser Source, choose one [here](#widgets).

# Widgets
## Ik1497
Put this URL into OBS: https://ik1497.github.io/Extensions/Mute-Indicator/{.subtitle}

![overview.gif](https://ik1497.github.io/Extensions/Mute-Indicator/overview.gif =500x)

### URL Paramaters
These are all optional{.subtitle}

Name | Description
----:|:------------
`font-family` | The font family, `default: Uni Sans CAPS`
`font-weight` | The font weight, `default: 900`
`font-style` | The font style, `default, normal`
`font-size` | The font size, `default: 1.5em`
`font-color` | The font color: `default: #181818` <br> Not recommended to change because the color of the image can't change.
`gap-height` | The height of the gap between the rows of chips `default: .2em`
`gap-width` | The width of the gap between the chips `default: .5em`
`chip-background` | The background of the chips `default: #ff4d4d`
`chip-border-radius` | The border radius of the chips `default: 0`
`exclude` | The audio sources to exclude in an array `no default`

Customize your widget! This example image below uses:
`https://ik1497.github.io/Extensions/Mute-Indicator?chip-background=rgb(255, 255, 255)&chip-border-radius=20px&exclude=["[A] Music"]`

![overview.gif](https://ik1497.github.io/Extensions/Mute-Indicator/overview-url-paramaters.png =500x)

# Contributors
- [Ik1497](https://github.com/ik1497){.github}
{.contributors}