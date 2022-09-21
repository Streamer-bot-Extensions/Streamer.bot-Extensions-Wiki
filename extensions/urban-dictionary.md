---
title: Urban Dictionary (by TerrierDarts)
description: Search Urban Dictionary for a Specific Word, or leave it to fate and pull something Random. 
published: true
date: 2022-08-30T05:10:51.070Z
tags: 
editor: markdown
dateCreated: 2022-08-29T06:05:25.175Z
---

# Import Code
```
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
```

# Installation
> Warning Use this at your own risk, They are no filters based in this so the output could be anything {.is-warning}

In Streamer.bot in select `Import` from the top left.
Copy the `Import Code` and paste it into the `Import String`. 

The References should import but if not you will need to add the following - 
```
System.Core.dll
System.dll
```

You will need to make sure the `!urban` command is enabled.

# Example Usage

`!urban` This will return a random word.
`!urban <word/phrase>` This will return the defintion of the searched input.

# Contributors

 - [<i class="mdi mdi-twitch"></i> TerrierDarts](https://www.twitch.tv/TerrierDarts)
 {.contributors}

 
