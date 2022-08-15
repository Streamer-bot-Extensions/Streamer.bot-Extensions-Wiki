---
title: Clip and Post to Chat and Discord (by Grizzlage)
description: Using this extension you will be able to post your clips directly into discord by using a `!clip` Command.
published: true
date: 2022-07-24T06:08:37.342Z
tags: 
editor: markdown
dateCreated: 2022-05-18T00:25:57.920Z
---


# Import Code
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
# Installation 

You will need to create a new Action, and you can call it what ever you want I would recommend using `Discord Clip`. Then you will need to add a C# Sub-Action. Copy and Paste the C# above into the text box. You will need to add the Following References

References Required
```
System.dll
System.Net.Http.dll
```
The last thing you will need to do  is to add your Discord Web hook where mentioned in the code.


# Contributors

### <img src="/logos/twitch-6860918_1280.png" height=25></img> [*Grizzlage*](https://www.twitch.tv/grizzlage) 
