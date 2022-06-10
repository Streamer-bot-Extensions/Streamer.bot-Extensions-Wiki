---
title: Clip and Post to Chat and Discord (by Grizzlage)
description: Clip last 30 seconds of stream and paste to chat, no API needed.
published: true
date: 2022-06-09T05:08:37.162Z
tags: 
editor: markdown
dateCreated: 2022-05-19T04:39:37.648Z
---

# Clip and Post to Chat and Discord [(by Grizzlage)](https://www.twitch.tv/grizzlage) 

```cs
using System;
using System.Net.Http;
using Newtonsoft.Json;

public class CPHInline{

    // your channels webhook url goes here
    const string discordWebhook = "DISCORD_WEBHOOK_URL_GOES_HERE";

    public bool Execute(){
    
        var user = args["userName"];

        CPH.LogInfo($"{user} is creating a clip....");

        // make sure stream is online
        if(CPH.ObsIsStreaming()){

            var clip = CPH.CreateClip();

            // post clip to twitch chat
            CPH.SendMessage($"{user} clipped {clip.Url}");

            // post clip to discord channel
            CPH.LogInfo($"Posting clip to discord....");
            
            string discordJson = JsonConvert.SerializeObject(new {
                content = $"{user} just clipped\n{clip.Url}"
            });

            MultipartFormDataContent dataContent = new MultipartFormDataContent();
            dataContent.Add(new StringContent(discordJson), "payload_json");

            HttpClient httpClient = new HttpClient();
            httpClient.PostAsync(discordWebhook, dataContent).Wait();
            httpClient.Dispose();

        }else{
            CPH.SendMessage($"@{user}, clips cant be made when the stream is offline");
        }
        
        return true;
    }
}
```