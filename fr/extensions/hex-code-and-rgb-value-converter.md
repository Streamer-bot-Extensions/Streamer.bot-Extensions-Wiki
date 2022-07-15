---
title: Hex Code and RGB Value Converter (by ConfuzzedCat)
description: 
published: true
date: 2022-06-14T23:27:38.035Z
tags: confuzzedcat, hex code, hex, rgb, rgb colors, convert, converter, hex to rgb, rgb to hex, hex2rgb, rgb2hex
editor: markdown
dateCreated: 2022-05-19T04:40:28.234Z
---

# Hex Code and RGB Value Converter [(by ConfuzzedCat)](https://www.twitch.tv/confuzzedcat)
## Description
A simple action to convert r,g,b values to hex codes and back.

## Setup
Just import the code below.

## Formatting
### Hex to rgb
You can either convert one color or two.
If you are only converting one color, the format can be either `!cconvert hexcode` or `!cconvert #hexcode`, eg. `!cconvert 12FF19` or `!cconvert #12FF19`.
If you are converting two colors, the first hex needs to have a `#` in front of hexcode, the second hexcode doesn't need it, but will work with it, eg. `!cconvert #12FF19 12FF19` or `!cconvert #12FF19 #12FF19`.

### RGB to hex
Unlike hex to rgb, you can only convert one color at a time. The format is like this `!cconvert 100, 32, 200` or `!cconvert 100, 32, 200 true`, where the true dictates if the output hex code will have a hashtag `#`.

## Usage
As long as the format is correct, then the action will automatically detect if it is hex code or rgb values and convert it.
```
!cconvert 191919
Outputs: 25, 25, 25
!cconvert #191919 FFFFFF
Outputs: 25, 25, 25 | 255, 255, 255
!cconvert 255, 255, 255
Outputs: FFFFFF
!cconvert 191, 66, 240 true
Outputs: #BF42F0 
```

## Input code
```
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
```