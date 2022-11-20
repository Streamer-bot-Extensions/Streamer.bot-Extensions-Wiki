---
title: SharpOSC Implementation (by Der_Gardine | Julian)
description: For easy OSC implementation.
published: true
date: 2022-11-07T15:28:16.382Z
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

# Contributors

 - [Der_Gardine](https://www.twitch.tv/Der_Gardine){.twitch}
 {.contributors}