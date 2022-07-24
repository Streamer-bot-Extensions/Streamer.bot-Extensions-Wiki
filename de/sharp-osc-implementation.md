---
title: SharpOSC Implementation (by Der_Gardine | Julian)
description: For easy OSC implementation.
published: true
date: 2022-07-24T04:55:25.354Z
tags: 
editor: markdown
dateCreated: 2022-07-24T00:37:02.721Z
---

# SharpOSC Implementation [(by Der_Gardine | Julian)](https://www.twitch.tv/der_gardine)
```c
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