---
title: 20 Second Instant Replay (by MarkusoOoO)
description: Create a 20 second instant replay with Streamer.bot.
published: true
date: 2022-10-26T22:30:07.813Z
tags: 
editor: markdown
dateCreated: 2022-05-17T00:31:26.288Z
---

*OBS WS v4.9*{.obs-version-badge} 
# Import File

- [<i class="mdi mdi-file-download"></i> **Import Code *Click to Download***](/assets/20-sec-instant-replay/files/rewind-import.sb)
{.btn-grid .my-5}

# Installation
In Streamer.bot in select `Import` from the top left.
Drag and Drop the `Import File` into the `Import String`. 
![20-sec-instant-replay.png](/assets/20-sec-instant-replay/images/20-sec-instant-replay.png)

You can follow Nutty's [video](https://youtu.be/NuWKrpNCE1k) for setting up OBS at least with `Nested scenes` & `Dynamic Delay Filter`.
Whole effect takes about `8GB of your RAM`, so be aware of that.

Also, make sure to check all `Sub-Actions` that they are pointing at your OBS scenes, filters and sound files.
>I plan on making video showing how to set this up from the start to the end {.is-info}


## Resources
- [<i class="mdi mdi-folder-download"></i> **Required Assets *Click to Download***](/assets/20-sec-instant-replay/files/Rewind-Effect.zip)
{.btn-grid .my-5}

# Configuration
To get timings right with my example action use these settings for `Dynamic Delay` plugin:

Settings | Data
---:|:---:
Duration: | `20s`{.datatype}
Fast Forward: | `1000%`{.datatype}
Fast Backward: | `-1000%`{.datatype}
Fast Forward OBS hotkey: | `CTRL+NUM3`{.datatype}
Fast Backwards OBS hotkey: | `CTRL+NUM1`{.datatype}

# Contributors

 - [<i class="mdi mdi-twitch"></i> MarkusoOoO](https://www.twitch.tv/markusoooo)
 {.contributors}

