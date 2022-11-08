---
title: Implementación SharpOSC (por Der_Gardine | Julian)
description: Para una implementación fácil de OSC.
published: true
date: 2022-08-31T00:41:41.233Z
tags: 
editor: markdown
dateCreated: 2022-08-25T02:42:49.469Z
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

 - [Der_Gardine](https://www.twitch.tv/Der_Gardine){.twitch}
 {.contributors}