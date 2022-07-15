---
title: First Command (by emongev)
description: Let chat know who was first with Streamer.bot.
published: true
date: 2022-06-11T05:05:00.216Z
tags: 
editor: markdown
dateCreated: 2022-05-17T00:48:40.878Z
---

# First Command [(by emongev)](https://www.twitch.tv/emongev)

## Description
Only the first person to type !first will be counted as the first. This only works if you close and open the bot between streams. If someone already typed !first, it will tell other people who was first, and tell you in total how many times in total throughout streams you've been first. 

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