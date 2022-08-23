---
title: Comando de "Primero" (by emongev)
description: Deja que el chat sepa quien fue el primero con Streamer.bot.
published: true
date: 2022-07-24T06:09:10.443Z
tags:
editor: markdown
dateCreated: 2022-05-02T10:48:40.282Z
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
# Colaboradores

 - [<i class="mdi mdi-twitch"></i> emongev](https://www.twitch.tv/emongev)
