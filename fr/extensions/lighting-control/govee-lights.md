---
title: Govee Lights Control (by psxboy)
description: Control your Govee Lights from Streamer.bot.
published: true
date: 2022-06-11T05:04:51.145Z
tags: 
editor: markdown
dateCreated: 2022-05-17T00:27:27.214Z
---

# Govee Lights Control [(by psxboy)](https://www.twitch.tv/psxboy)
```cs
using System.Net;
using System.IO;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;

public class CPHInline
{
    public bool Execute()
    {
        using (HttpClient client = new HttpClient())
        {
            var webRequest = (HttpWebRequest)WebRequest.Create("https://developer-api.govee.com/v1/devices/control");
            webRequest.ContentType = "application/json";
            webRequest.Method = "PUT";
            webRequest.Headers.Add("Govee-API-Key", "api-key");
            var serializer = new JsonSerializer();
            TextWriter json = new StringWriter();
            serializer.Serialize(json, new
            {
            device = "MACAddr", model = "H6195", cmd = new
            {
            name = "turn", value = "on"
            }
            }

            );
            
            using (var streamWriter = new System.IO.StreamWriter(webRequest.GetRequestStream()))
            {
                streamWriter.Write(json);
            }
            var httpResponse = (HttpWebResponse)webRequest.GetResponse();

            using (var streamReader = new System.IO.StreamReader(httpResponse.GetResponseStream()))
            {
                var responseText = streamReader.ReadToEnd();
                //CPH.SendMessage(responseText);
            }
        }

        return true;
    }
}
```