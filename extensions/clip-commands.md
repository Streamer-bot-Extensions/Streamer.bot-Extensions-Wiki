---
title: Clip Commands
description: Few Examples of how to play with clips in Streamerbot.
published: true
date: 2022-07-27T16:25:28.720Z
tags: 
editor: markdown
dateCreated: 2022-07-25T17:02:16.506Z
---

# Clip Commands

Using these examples you can have actions that work with clips.

## Create a Clip
```cs
using System;

public class CPHInline
{
    public bool Execute()
    {
CPH.CreateClip();
return true;
    }
}
```

## Get a Users Clip Count
This will need to be to a `chat command` however it can be used if you use video shoutouts.
```cs
using System;
using System.Collections.Generic;

public class CPHInline
{
    public bool Execute()
    {
        object user;
        bool targeted = args.TryGetValue("targetUser", out user);
        if (targeted)
        {
            var target = args["targetUser"].ToString();
            var allClips = CPH.GetClipsForUser(target);
            int viewCount = allClips.Count;
            CPH.SendMessage(target + " has " + viewCount + " clips");
        }
        else
        {
            var target = args["user"].ToString();
            var allClips = CPH.GetClipsForUser(target);
            int viewCount = allClips.Count;
            CPH.SendMessage(target + " has " + viewCount + " clips!");
        }

        return true;
    }
}
```

## Auto-Post when a new clip is created.
This will be need to be tied to a `Timed Action`
```cs
using System;

public class CPHInline
{
    public bool Execute()
    {
        var user = args["user"].ToString();
        int currentCount; // = 0;
        var allClips = CPH.GetClipsForUser(user);
        int viewCount = allClips.Count;
        bool success = int.TryParse((CPH.GetGlobalVar<string>("clipCount")), out currentCount);
        if (success)
        {
            if (viewCount == currentCount)
            {
             //No New Clip
            }
            else
            {
                var clip = allClips[viewCount - 1];
                var clipUrl = clip.Url;
                var creator = clip.CreatorName;
                CPH.SendMessage("A NEW Clip has been created by, " + creator + " " + clipUrl);
                CPH.SetGlobalVar("clipCount", viewCount, true);
            }
        }
        else
        {
            CPH.SetGlobalVar("clipCount", viewCount, true);
        }

        return true;
    }
}
```