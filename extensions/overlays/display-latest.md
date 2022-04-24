---
title: Display Latest (by VRFlad)
description: Display latest subs, followers, etc. through Streamer.bot.
published: true
date: 2022-04-24T23:50:10.985Z
tags: 
editor: markdown
dateCreated: 2022-04-24T23:50:10.985Z
---

# Display Latest (by VRFlad)

## Description
Chat Overlay for OBS based on [Streamer.bot](https://streamer.bot/)'s websocket, using pronouns from [pronouns.alejo.io](https://pronouns.alejo.io/).

![stream-chat-example.png](/extensions/overlays/stream-chat/images/stream-chat-example.png)

## Installation
To build up the URL, for the browser source, start with URL below (note the /? at the end is required):
https://vrflad.com/latest/?

Then you can add on the following options, each separated by `&`:

#### Config options

| option             | description                                                                                    | example                          |
|--------------------|----------------------|---------------|------------------------------------------------------------------------------------------------|----------------------------------|
| `sub`				 | Latest Subscriber / Resub / Gifted Sub / Gift Bomb                                                
| `follow`			 | Latest Follower
| `cheer`            | Latest Cheer                                      | `bubbles=true`                   |
| `raid`			 | Latest Raid          | `background=000000`              |
| `tip`				 | Latest Tip                                                      | `background_color=FF0000`        |
| `lcheer`           | Largest cheer                                                         | `text_color=FF0000`              |
| `ltip`			 | Largest Tip           | `default_color=FF0000`           |
| `badges`           | If set to false this disable broadcaster/VIP/moderator badges                                  | `badges=false`                   |
| `highlights`       | If set to false this disables visual difference for highlighted messages                       | `highlights=false`               |
| `timestamp`        | If set to true displays the time of the message                                                | `timestamp=true`                 |
| `timestamp_locale` | The regional setting to use for the message time                                               | `timestamp_locale=de-DE`         |
| `cmdprefix`        | A prefix for bot commands. If this is set, chat messages starting with this won't be displayed | `cmdprefix=!`                    |
| `bots`             | A comma-separated list of accounts whose messages will not be shown(case-insensitive)          | `bots=streamelements,streamlabs` |
| `fade_duration`    | Time in seconds until messages are removed                                                     | `fade_duration=60`               |
| `fontfamily`       | set (any locally installed) font                                                               | `fontfamily=Calibri`             |
| `fontsize`         | number/string | CSS class font-size value (e.g. x-large, 2em, 22px)                                            | `fontsize=22px`                  |
| `emote_size`       | number/string | CSS class size value (e.g. 2em, 22px)                                                          | `emote_size=22px`                |




-- 

You can also customise the font:
fontcol=color
-- font colour set to colour - using standard web names only
fontcode=RRGGBB
-- font colour code, RRGGBB (without the #), 000000 being black and FFFFFF being white-space
fontfam
-- font family that is present on the machine (if unsure, check the fonts control panel to see what you have available)
bold
-- set the font to bold
large
-- Make the overlay ~60 pixels high rather than the default 40
xlarge
-- Make the overlay ~80 pixels high rather than the default 40
middle
-- Make the elements in the overlay align to the centre of the area they occupy.

Examples:
https://vrflad.com/latest/?follow&sub...
https://vrflad.com/latest/?follow&sub...
https://vrflad.com/latest/?follow&sub...
https://vrflad.com/latest/?tip&sub&ch...

To use a different machine / port for Streamer bot than the same machine default, then you can add onto the end of the URL: ?server=machine:port 
Examples:

To connect to streamer bot on port 8081 rather than default 8080, whilst displaying subs, 
https://vrflad.com/latest/?server=loc...
To connect to streamer bot on a different machine on IP address 192.168.0.10 with default port 8080:
https://vrflad.com/latest/?server=192...

If you want a translated version of this, please do reach out and I can help get this set up and to link below:

French (Merci,  https://www.twitch.tv/lebluxtv): 
https://vrflad.com/latest/french.html? 

Portuguese(Obrigado, https://www.twitch.tv/LiveDoEdu)
https://vrflad.com/latest/portuguese.... 

Spanish (Gracias, https://www.twitch.tv/dj_pole)
https://vrflad.com/latest/spanish.html? 