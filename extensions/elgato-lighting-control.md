---
title: Elgato Lighting Control (by Geocym)
description: Change Brightness and Color Temperature of Elgato Lighting.
published: true
date: 2022-07-24T06:13:07.304Z
tags: 
editor: markdown
dateCreated: 2022-04-20T01:41:06.173Z
---

# Elgato Lighting Control [(by Geocym)](https://www.twitch.tv/geocym)

## Description

This drop-in action can be used to control the settings of Elgato Lighting products.
It is tested with `Keylight Air`, `Keylight Pro` and `Ring Light` but it may work with others too.

## Installation

1. Create an `Execute C# Code` subaction 
2. Copy the codeblock below and paste it in to the code window, replacing everything:


```cs
using System;
using System.Web;
using System.Net;
using Newtonsoft.Json.Linq;
using System.IO;
using System.Threading.Tasks;

public class CPHInline
{
    public bool Execute()
    {
// Edit this section to your needs

        // Array for IP addresses of lights
        string[] ips = {"192.168.1.44", "192.168.1.125"};

		// Payload data for target Brightness and Temperature
		
        var payload = new JObject();
        payload["on"] = 1;				// 1 for on, 0 for off
        payload["brightness"] = 100;  	// Range 1-100 (Percentage brightness)
        payload["temperature"] = 160; 	// Range 143-344 (7000K - 2900K)

// Don't edit below here


        var data = new JObject();
        data["numberOfLights"] = 1;
        var lightsData = new JArray();
        lightsData.Add(payload);
        data["lights"] = lightsData;

		//Itterate over array to send same payload to all
		int ipCount = ips.Length;
        Parallel.For (0, ipCount, i =>
        {
            
            var url = $"http://{ips[i]}:9123/elgato/lights";
            
            var httpRequest = (HttpWebRequest)WebRequest.Create(url);
            httpRequest.Method = "PUT";
            httpRequest.ContentType = "application/json";
            using (var streamWriter = new StreamWriter(httpRequest.GetRequestStream()))
            {
                streamWriter.Write(data.ToString());
            }

            var httpResponse = (HttpWebResponse)httpRequest.GetResponse();
            using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
            {
                var result = streamReader.ReadToEnd();
            }

            Console.WriteLine(httpResponse.StatusCode);
        });

        return true;
    }
}
```


3. Go to the `References` tab and press the `Find Refs` button, it should find everything it needs automatically. If not right click in the white box and ensure the following dll files are listed
```
mscorlib.dll
System.dll
System.Net.Http.dll
System.Net.dll
Newtonsoft.Json.dll
System.Web.dll
```

4. Go to the `Compiling Log` tab and press `Compile`. If everything is working correctly it will say `Compiled successfully!`




## Configuration


The C# code needs to the IP addresses of the lights to control. You can add a single light or multiple, the same payload data will be sent to each one you list.

Configure the following lines to match your usecase


Line | Data | Notes
---|---|---
`line 15` | The IP address list to send control data to | You can get the IP addresses of your Elgato lights from the Elgato Control Center App
`line 20` | Specify if you want the lights turned on or off | `1 = On`, `0 = Off`
`line 21` | Specify the brightness you want to set | Range is `3-100` and is the percentage of maximum the device supports
`line 22` | Specify the colour temperature you want | Range is `143-344`


> Color Temperature range represents the values found by adjusting the setting in Elgato Control Center
143 is 7000 Kelvin,
249 is 4000 Kelvin,
344 is 2900 Kelvin
{.is-info}

Once the subaction is configured, you can duplicate it and configure the copy with other settings as needed.

> It is highly recommended to name the C# code on the `Settings` tab. Not only will this show you what the code does without having to open it but also it allows you to call that same code in other Actions 
{.is-success}

