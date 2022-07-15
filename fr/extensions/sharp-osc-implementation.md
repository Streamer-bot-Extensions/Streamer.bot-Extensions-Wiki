---
title: SharpOSC Implementation (by Der_Gardine | Julian)
description: For easy OSC implementation.
published: true
date: 2022-06-14T23:29:33.226Z
tags: 
editor: markdown
dateCreated: 2022-05-19T04:41:55.843Z
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