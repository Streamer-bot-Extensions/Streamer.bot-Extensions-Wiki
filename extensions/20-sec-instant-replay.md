---
title: 20 Second Instant Replay (by MarkusoOoO)
description: Create a 20 second instant replay with Streamer.bot.
published: true
date: 2022-07-24T06:07:59.042Z
tags: replay, rewind, effect
editor: markdown
dateCreated: 2022-05-17T00:31:26.288Z
---

## Import Code

```text
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
```
## Installation
In Streamer.bot in select `Import` from the top left.
Copy the `Import Code` and paste it into the `Import String`. 
![20-sec-instant-replay.png](/extensions/20-sec-instant-replay/images/20-sec-instant-replay.png)

You can follow Nutty's [video](https://youtu.be/NuWKrpNCE1k) for setting up OBS at least with `Nested scenes` & `Dynamic Delay Filter`.
Whole effect takes about `8GB of your RAM`, so be aware of that.

Also, make sure to check all `Sub-Actions` that they are pointing at your OBS scenes, filters and sound files.
>I plan on making video showing how to set this up from the start to the end {.is-info}


## Resources
All resources can be found [>here<](/extensions/20-sec-instant-replay/files/Rewind-Effect.zip)!


## Configuration
To get timings right with my example action use these settings for `Dynamic Delay` plugin:

Duration: 20s

Fast Forward: 1000%

Fast Backward: -1000%

Fast Forward OBS hotkey: CTRL+NUM3

Fast Backwards OBS hotkey: CTRL+NUM1

## Contributors

<i class="fa fa-sm fa-edit grey--text"></i>  [MarkusoOoO](https://www.twitch.tv/markusoooo)