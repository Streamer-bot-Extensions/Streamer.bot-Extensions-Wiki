---
title: First Command (by emongev)
description: Let chat know who was first with Streamer.bot.
published: true
date: 2022-11-20T07:18:57.374Z
tags: 
editor: markdown
dateCreated: 2022-05-17T00:48:40.878Z
---

# Import Code
```cs
using System;

public class CPHInline
{
    public bool Execute()
    {
        DoFirstCommand(args["user"].ToString());
        return true;
    }

    private void DoFirstCommand(string pUser)
    {
        string temporaryFirstUser = CPH.GetGlobalVar<string>("temporaryFirstUser", false);
        int userFirstScore = CPH.GetUserVar<int>(pUser, "firstScore", true);

        if(temporaryFirstUser == null)
        {
            CPH.SendMessage("You are the first!", true);

            
            userFirstScore = userFirstScore + 1;
            CPH.SetUserVar(pUser, "firstScore", userFirstScore, true);

            CPH.SetGlobalVar("temporaryFirstUser", pUser, false);
        }
        else
        {
            string prettyFirst = temporaryFirstUser;
            if(temporaryFirstUser == pUser)
            {
                prettyFirst = "you, of course!";
            }
            CPH.SendMessage("You have been first " + userFirstScore + " times. Today's first person here was: " + prettyFirst, true);
        }
        
    }
}
```
# Contributors

 - [emongev](https://www.twitch.tv/emongev){.twitch}
{.contributors}