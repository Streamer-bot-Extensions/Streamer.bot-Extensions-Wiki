---
title: Comando de "Primero" (by emongev)
description: Deja que el chat sepa quien fue el primero con Streamer.bot.
published: true
date: 2022-06-11T05:04:00.032Z
tags:
editor: markdown
dateCreated: 2022-05-02T10:48:40.282Z
---

# Comando de "primero" [(by emongev)](https://www.twitch.tv/emongev)

## Descripción
Solo la primera persona que escriba !first será contado como la primera. Esto solo funciona sy cierras y abres el bot entre transmisiones. Si alguien ya escribió !first, le dirá a otras personas quien fue primero, y te dirá cuántas veces en total cuantas veces has sido el primero a lo largo de las transmisiones.

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