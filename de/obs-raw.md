---
title: OBS RAW Hilfe
description: Hier findest du Beispiele für OBS RAW
published: false
date: 2022-06-11T05:11:30.171Z
tags:
editor: markdown
dateCreated: 2022-06-03T17:41:21.650Z
---

# OBS Raw
Hier findest du Beispiele für OBS RAW. Diese Beispiele sind komplett editierbar und erfordern möglicherweise nicht alle Zeilen.
## Szene erstellen
```json
{
"sceneName":"Scene55",
"request-type":"CreateScene"
}
```

## Quelle anlegen
### Gdi Text
```json
{
  "sourceName": "textsource",
  "sourceKind": "text_gdiplus",
  "sceneName": "yourscene",
  "sourceSettings": {
    "align": "left",
    "bk_color": 4278255445,
    "bk_opacity": 100,
    "chatlog": true,
    "chatlog_lines": 3,
    "color": 4278223103,
    "extents": true,
    "extents_cx": 500,
    "extents_cy": 2000,
    "font": {
      "face": "onyx",
      "opacity": 34,
      "size": 256,
      "style": "regular"
    },
    "gradient": true,
    "gradient_color": 4294945280,
    "gradient_dir": 192.6,
    "gradient_opacity": 68,
    "outline": true,
    "outline_color": 4278190080,
    "outline_size": 20,
    "text": "This is the text",
    "transform": 1,
    "valign": "top",
    "vertical": true
  },
  "request-type": "CreateSource"
}
```
### Farbquelle
```json
{
  "sourceName": "colour1",
  "sourceKind": "color_source",
  "sceneName": "yourscene",
  "sourceSettings": {
    "color": 4286535082,
    "height": 100,
    "width": 500
  },
  "request-type": "CreateSource"
}
```
### Browserquelle
```json
{
  "sourceName": "youtube",
  "sourceKind": "browser_source",
  "sceneName": "yourscene",
  "sourceSettings": {
    "height": 300,
    "url": "www.youtube.com",
    "width": 500
  },
  "request-type": "CreateSource"
}
```
### Medienquelle
```json
{
  "sourceName": "media",
  "sourceKind": "ffmpeg_source",
  "sceneName": "yourscene",
  "sourceSettings": {
    "close_when_inactive": true,
    "color_range": 1,
    "hw_decode": true,
    "linear_alpha": true,
    "local_file": "C:/Users/tnpot/Videos/2021-08-08 02-09-16.mp4",
    "looping": true,
    "speed_percent": 150
  },
  "request-type": "CreateSource"
}
```
### Bildquelle

## Szene löschen
```json
{
  "item": "%giphySource%",
  "scene": "ChatDots",
  "request-type": "DeleteSceneItem"
}
```