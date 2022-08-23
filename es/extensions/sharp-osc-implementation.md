---
title: Implementación SharpOSC (por Der_Gardine | Julian)
description: Para una implementación fácil de OSC.
published: true
date: 2022-07-24T06:10:27.736Z
tags:
editor: markdown
dateCreated: 2022-05-18T02:05:43.555Z
---

```cs
using System;

public class CPHInline
{
    public bool Execute()
    {
        var message = new SharpOSC.OscMessage("/0/dmx/11", 48);
        var sender = new SharpOSC.UDPSender("127.0.0.1", 55555);
        sender.Send(message);
        return true;
    }
}
```

# Colaboradores

 - [<i class="mdi mdi-twitch"></i> Der_Gardine](https://www.twitch.tv/Der_Gardine)
 {.contributors}