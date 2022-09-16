---
title: Discord Examples
description: A Few Examples on how to use Streamer.bot to Post To Discord
published: true
date: 2022-09-16T20:00:00.446Z
tags: post, to, discord
editor: markdown
dateCreated: 2022-09-13T13:37:53.318Z
---

Using the following Examples you will be able to post to discord in many different ways. 

The first thing you will need to do is to get a Webhook.

Go to your Discord Server `Settings > Integrations` and click new `Web Hook`.
![post-to-discord-1.png](/extensions/post-to-discord/images/post-to-discord-1.png)

Choose a channel for it to post to and give it a name, anything will do.
![post-to-discord-1.png](/extensions/post-to-discord/images/post-to-discord-2.png)

Copy the Webhook URL - you will need this for the c# code later so save it somewhere for now.

# C# Code Examples {.tabset}
## Just Text
```cs
using System;
using System.Net;
using System.Net.Http;
using Newtonsoft.Json;

public class CPHInline
{
    public bool Execute()
    {

        string Webhook_link = ""; //WebHook URL HERE
        using (HttpClient httpClient = new HttpClient())
        {
            MultipartFormDataContent form = new MultipartFormDataContent();
            var user = args["user"].ToString();
            var note = args["rawInput"].ToString();
            var textMessage = JsonConvert.SerializeObject(new
            {
            content = $"{user} noted: {note}" //This is Text you wish to send
           
            }

            );
            form.Add(new StringContent(textMessage), "payload_json");
            httpClient.PostAsync(Webhook_link, form).Wait();
        }

        return true;
    }
}
```
## Just Image

```cs
using System;
using System.Net;
using System.Net.Http;
using Newtonsoft.Json;

public class CPHInline
{
    public bool Execute()
    {
        string Webhook_link = "";//Webhook here
        string FilePath = ""; // File Path Here
        using (HttpClient httpClient = new HttpClient())
        {
            MultipartFormDataContent form = new MultipartFormDataContent();
            var file_bytes = System.IO.File.ReadAllBytes(FilePath);
      
            form.Add(new ByteArrayContent(file_bytes, 0, file_bytes.Length), "Photo", "image.jpg");
            
            httpClient.PostAsync(Webhook_link, form).Wait();
        }

        return true;
    }
}
```
## Image and Text
```cs
using System;
using System.Net;
using System.Net.Http;
using Newtonsoft.Json;

public class CPHInline
{
    public bool Execute()
    {
        
        string webhook_Link = "ENTER YOUR WEBHOOK URL HERE";
        string filePath = @"FILE PATH HERE";
        using (HttpClient httpClient = new HttpClient())
        {
            MultipartFormDataContent form = new MultipartFormDataContent();
            var file_bytes = System.IO.File.ReadAllBytes(filePath);
            var textMessage = JsonConvert.SerializeObject(new
            {
            content = " TEXT MESSAGE"
            }

            );
            form.Add(new ByteArrayContent(file_bytes, 0, file_bytes.Length), "Photo", "upload.jpg");
            form.Add(new StringContent(textMessage), "payload_json");
            httpClient.PostAsync(webhook_Link, form).Wait();
            httpClient.Dispose();
        }

        return true;
    }
}

```
## Post Clips
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
## Post a TTS Message
```cs
using System;
using System.Net;
using System.Net.Http;
using Newtonsoft.Json;

public class CPHInline
{
    public bool Execute()
    {

        string Webhook_link = ""; //WebHook URL HERE
        using (HttpClient httpClient = new HttpClient())
        {
            MultipartFormDataContent form = new MultipartFormDataContent();
            var user = args["user"].ToString();
            var note = args["rawInput"].ToString();
            var textMessage = JsonConvert.SerializeObject(new
            {
            content = $"{user} noted: {note}", //This is Text you wish to send
            tts = true //tts = true will speak
            }

            );
            form.Add(new StringContent(textMessage), "payload_json");
            httpClient.PostAsync(Webhook_link, form).Wait();
        }

        return true;
    }
}
```
## Going Live Message (embeds)
```cs
using System;
using System.Net.Http;
using Newtonsoft.Json;
using System.Net;
using System.Text;
using System.Web;

public class CPHInline
{
    public bool Execute()
    {
        string webhook_Link = ""; //Your Web-hook
        var user = args["targetUser"].ToString();
        var pfp = args["targetUserProfileImageUrl"].ToString();
        var game = args["game"].ToString();
        string urlGame = Uri.EscapeUriString(game);
        string title = "We be streaming!";
        using (WebClient client = new WebClient())
        {
            title = client.DownloadString($"https://decapi.me/twitch/title/{user}");
        }

        var hexValue = args["embed.html"].ToString().Remove(0, 1); //This is just a hex this is set outside of the code using the Pick Color Sub-action
        long decValue = Convert.ToInt32(hexValue, 16);
        CPH.SendMessage(decValue.ToString());
        using (HttpClient httpClient = new HttpClient())
        {
            MultipartFormDataContent form = new MultipartFormDataContent();
            var textMessage = JsonConvert.SerializeObject(new
            {
            content = $"Hey Peeps! {user} Has Just Gone Live Streaming {game}", embeds = new[]{new
            {
            description = $"{title}", color = decValue, author = new
            {
            name = $"{user} is Now Streaming", url = $"https://www.twitch.tv/{user}", icon_url = $"{pfp}"}

            , fields = new[]{new
            {
            name = ":joystick: Game", value = $"{game}", inline = true
            }
            }, thumbnail = new
            {
            url = $"https://avatar-resolver.vercel.app/twitch-boxart/{urlGame}"}

            , timestamp = DateTime.Now
            }
            }}

            );
            form.Add(new StringContent(textMessage), "payload_json");
            httpClient.PostAsync(webhook_Link, form).Wait();
            httpClient.Dispose();
            return true;
        }
    }
}
```

# Contributors

- [<i class="mdi mdi-twitch"></i> Geocym](https://www.twitch.tv/Geocym)
- [<i class="mdi mdi-twitch"></i> Grizzlage](https://www.twitch.tv/grizzlage)
- [<i class="mdi mdi-twitch"></i> TerrierDarts](https://www.twitch.tv/TerrierDarts)
 {.contributors}

