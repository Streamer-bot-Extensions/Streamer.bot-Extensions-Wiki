---
title: Fake News Overlay (by VRFlad)
description: Display a fake news overlay on stream through Streamer.bot and TwitchSpeaker.
published: true
date: 2022-10-23T19:35:41.851Z
tags: 
editor: markdown
dateCreated: 2022-10-23T19:35:39.208Z
---

# Fake News Overlay [(by VRFlad)](https://www.twitch.tv/vrflad)

## Description
Display a fake news overlay on stream through Streamer.bot and TwitchSpeaker.

>NOTE: Twitchspeaker needs to be set up with a `NewsReader` `Voice` set up (the name will be needed).
{.is-info}

Example of what this can do shown below:
<iframe src="https://www.youtube.com/embed/9AXffsX5760" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allow fullscreen style="border: none; max-width: 100%; width: 100%; aspect-ratio: 16/9;"></iframe>

## Installation

Copy the text from the code box below into the `Import` box in Streamer.bot to add these to your action library:

```text
TlM0RR+LCAAAAAAABAC1VU1v2zAMvQ/of9AMBNiAKPG34wDDUBTo0EsPPfSy7EBJdOpFlj3ZbhoU/e+T7KR1knZogFUHW+IjKfGRoh7PPhHi3KOu81I5c+KNO4GCAs3Kcfol8MbAtZH8tGtCHvufgXJh9UIRugwQKQ9SRkOIE5rGLqfCFXGS8SThbtT76oz+tNh2/lGkXhQEGU3SwKVhwgSF2EtpmCYs8yIfWOwN7FABk2h3bHSLL/LdcS9hhde4rgcmS1221UsonQzkGjb1TWsDzkDWA08alCiL8y7eY5SXirdao2qOsSOO9njqVGqOCq+3Zz2XqJvBSXuNstX8WcWGQ9RePJ1Wq6WFs1zifDqdXsyndaMRirpps2yaGStr9DyZ3DWF/K5hnauqbb6NdjOsOVQoRgfeTZAKu2Cuuty620Ff+ezGgYu+KIBlPmQzoIkf+zScRRFlXhRTH5ngSSwSD/HAcI358s6S607cfaTZVJaTYLYv3qVXtVIenEEJfLCeXqRP47cyU5Xa7hrHcbrvpYKNLKEL53GhF4qQhSGoKEyZLIxw4dQVwmrhjHdgvpXHQTj2U3/spfEAvS9zjr2CrdMbBIHa4BYrsK5hOUDJ77ZuSK4m5JzzUotcLUlTklFbox6Nic3jlc3jaEKuyzVhwFcWv725lCA+Lxy76dOrmUHGZsgB6QzQXDbmIgXGZ9TPfBFikiCLxamZ8U9NjPeexPznKwOsbJs5k6BWH1X1LnIPXTcyPczzTEvjjKZByCiPhIAQhSdw9vFVH7yH3HuQXRsObDD7fgp4uN2iB0jfIY/635CBTHhRIsxtD5KAmnoKKUAW0sgyYxq9Zx6LUxnwXPeNAnMOs7BlwB8wsJv+OmzXP6yTrmcPIF5KCVWNYoD2YOeo1+zfsH88iSc+bUyWfGVu+PHDovaqnxj6SdfoyZeLstp83f6c4QnPPj39BaAvqY3ZBwAA
```

![fake-news-overlay-import.png](/assets/fake-news/images/fake-news-overlay-import.png)

Extract zip file below into a folder of your choice:
[Fake News.zip](/assets/fake-news/files/fakenews.zip)

## Configuration

Add a `(full screen - 1920 x 1080 pixels)` browser source. 

>Do not use local file option and set URL to `about:blank`.
{.is-danger}

![fake-news-overlay-browser-source.png](/assets/fake-news/images/fake-news-overlay-browser-source.png)

Update the following `Subactions`:
`OBS Set Browser Source URL`: Select OBS `Scene` and browser `Source`. Update url to point to location where html file is (if unsure, open the html page and copy from the browser address bar. Ensure the part after the html is there, so just the path is updated- `?&rawinput=%rawinputescaped%`)
![fake-news-overlay-browser.png](/assets/fake-news/images/fake-news-overlay-browser.png)

`UDP Broadcast (6669)`: Update   "voice": "NewsReader" to point to the Twitchspeaker voice alias to use to read the news.
![fake-news-overlay-udp.png](/assets/fake-news/images/fake-news-overlay-udp.png)

`OBS Set Browser Source URL`: Select OBS `Scene` and browser `Source`.
>URL does not need to be changed.
{.is-warning}

![fake-news-overlay-browser.png](/assets/fake-news/images/fake-news-overlay-browser.png)

>To move the position or to change volume level, use the values `videooffsetleft`, `videooffsettop` and `videovolume` in the html page.
{.is-info}