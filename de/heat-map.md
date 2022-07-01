---
title: Heat Map
description: Heap Map is a Twitch Extension that allows users to click and interact with your stream.
published: true
date: 2022-06-29T20:29:49.672Z
tags:
editor: markdown
dateCreated: 2022-05-28T17:32:18.959Z
---

# Heat Map
Heat Map, allows users to click on your stream to trigger actions.

## Core Installation

- [Core Install  *by Farlezz* *Infomation on how to install heat and set up your first actions.*](/en/extensions/heat-map/heat-map-core)
{.links-list}

## Addional Examples

- [Tower Block Game *Coming Soon*]()
- [Create Disk/Pointer *Coming Soon*]()
{.links-list}

## Heat Map FAQ
###### Can I return the User who clicked with the Capitals. So TerrierDarts not terrierdarts?
Yes by using this c# code and replacing the FetchUrl. This will return the Display name rather than a Login name.
```c
using System;
using System.IO;
using Microsoft.VisualBasic.FileIO;
using Newtonsoft.Json.Linq;

public class CPHInline
{
    public bool Execute()
    {
        string filePathUsers = @"data\users.dat";
        string jsonStr = File.ReadAllText(filePathUsers);
        JObject settingsJson = JObject.Parse(jsonStr);
        JObject commandsJson = settingsJson.Value<JObject>("users");
        JObject commandArray = commandsJson.Value<JObject>(args["clickedUserId"].ToString());
        string user = commandArray["display"].ToString();
        CPH.SetArgument("user", user);
        return true;
    }
}
```
> Microsoft.VisualBasic.dll may need manually adding {.is-info}
###### Heat Map Keeps Saying 'Someone' Clicked.. Why?
This occurs when the user hasn't given the extension access to there information. What you need to do is advice your community that they must give Heat access if they wish to unlock the full potential. To give access your viewers must press on the heat menu which can be found on the right hand side, then Manage Access > Grant. More Information and pictures can be found in the Core install Page.
