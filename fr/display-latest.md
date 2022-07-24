---
title: Display Latest (by VRFlad)
description: Display latest subs, followers, etc. through Streamer.bot.
published: true
date: 2022-07-24T05:05:28.784Z
tags: 
editor: markdown
dateCreated: 2022-07-24T00:51:11.143Z
---

# Display Latest [(by VRFlad)](https://www.twitch.tv/vrflad)

## Description
Easily show the latest sub / follow / raid / tip / cheers with this overlay and [Streamer.bot](https://streamer.bot/).

## Tutorial
<br>
<iframe width="1120" height="630" src="https://www.youtube.com/embed/uRrAa_e_I-M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Installation
To build up the URL, for the browser source, start with URL below (note the /? at the end is required): `https://vrflad.com/latest/?`

Then you can add on the following options, each separated by `&`:

#### Config options

| option     | description                                                                                                          | example            |
| ---------- | -------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `sub`      | Latest Subscriber / Resub / Gifted Sub / Gift Bomb                                                                   |                    |
| `follow`   | Latest Follower                                                                                                      |                    |
| `cheer`    | Latest Cheer                                                                                                         |                    |
| `raid`     | Latest Raid                                                                                                          |                    |
| `tip`      | Latest Tip                                                                                                           |                    |
| `lcheer`   | Largest cheer                                                                                                        |                    |
| `ltip`     | Largest Tip                                                                                                          |                    |
| `fontcol`  | Font colour set to colour - using standard web names only                                                            | `fontcol=color`    |
| `fontcode` | Font colour code, RRGGBB (without the #), 000000 being black and FFFFFF being white-space                            | `fontcode=RRGGBB`  |
| `fontfam`  | Font family that is present on the machine (if unsure, check the fonts control panel to see what you have available) | `fontfam=pristina` |
| `bold`     | Set the font to bold                                                                                                 |                    |
| `large`    | Make the overlay ~60 pixels high rather than the default 40                                                          |                    |
| `xlarge`   | Make the overlay ~80 pixels high rather than the default 40                                                          |                    |
| `middle`   | Make the elements in the overlay align to the centre of the area they occupy.                                        |                    |
> Examples: https://vrflad.com/latest/?follow&sub&cheer&xlarge https://vrflad.com/latest/?follow&sub&cheer&raid&middle&large&fontcol=blue https://vrflad.com/latest/?follow&sub&cheer&raid&fontfam=pristina&xlarge&bold&middle&fontcol=red https://vrflad.com/latest/?tip&sub&cheer&xlarge&fontfam=Arial&middle&fontcol=grey 
> 
> {.is-info}


To use a different machine / port for Streamer.bot than the same machine default, then you can add onto the end of the URL: `?server=machine:port`
> Examples: To connect to streamer bot on port 8081 rather than default 8080, whilst displaying subs, https://vrflad.com/latest/?server=localhost:8081 To connect to streamer bot on a different machine on IP address 192.168.0.10 with default port 8080: https://vrflad.com/latest/?server=192.168.0.10:8081 
> 
> {.is-info}
> If you want a translated version of this, please do reach out and I can help get this set up and to link below:
> 
> French (Merci,  https://www.twitch.tv/lebluxtv): `https://vrflad.com/latest/french.html?`
> 
> Portuguese (Obrigado, https://www.twitch.tv/LiveDoEdu) `https://vrflad.com/latest/portuguese.html?`
> 
> Spanish (Gracias, https://www.twitch.tv/dj_pole) `https://vrflad.com/latest/spanish.html?` 
> 
> {.is-warning}