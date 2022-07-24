---
title: LIFX Lights (by Geocym)
description: Use the cloud API for LIFX smart bulbs.
published: true
date: 2022-07-24T04:21:09.000Z
tags: 
editor: markdown
dateCreated: 2022-05-14T18:07:43.725Z
---

# LIFX Lights [(by Geocym)](https://www.twitch.tv/geocym)

## Description
This is some example code I threw together to use the cloud API for LIFX smart bulbs - pretty much lets a chat command or point redeem choose a color to change the light to, accepts colour names or hex values 

## Code
```cs
using System;
using System.Net;
using Newtonsoft.Json.Linq;
using System.IO;

public class CPHInline
{
    public bool Execute()
    {
        // your main code goes here

// Choose a random colour for the light
//var random = new Random();
//var color = String.Format("#{0:X6}", random.Next(0x1000000)); // = "#A197B9"

var color = CPH.GetGlobalVar<string>("bulbcolor",true);


var url = "https://api.lifx.com/v1/lights/all/state";

var httpRequest = (HttpWebRequest)WebRequest.Create(url);
httpRequest.Method = "PUT";

httpRequest.Headers["Authorization"] = "Bearer TOKEN REDACTED";
httpRequest.ContentType = "application/x-www-form-urlencoded";

var data = "color="+color;
//var data = "color=#522AC0";



using (var streamWriter = new StreamWriter(httpRequest.GetRequestStream()))
{
   streamWriter.Write(data);
}

var httpResponse = (HttpWebResponse)httpRequest.GetResponse();
using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
{
   var result = streamReader.ReadToEnd();
}

Console.WriteLine(httpResponse.StatusCode);

        return true;
    }
}
```

You can send animations too, the documentation is up on https://api.developer.lifx.com/docs/list-lights
