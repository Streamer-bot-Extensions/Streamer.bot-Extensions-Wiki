---
title: Youtube - Urban Dictionary (by TerrierDarts)
description: Allow Viewers to Search Urban Dictionary.
published: true
date: 2022-09-24T19:46:51.613Z
tags: 
editor: markdown
dateCreated: 2022-09-23T16:31:33.472Z
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
