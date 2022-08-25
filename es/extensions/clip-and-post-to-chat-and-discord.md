---
title: Crear Clip y Publicar en Chat y Discord (por Grizzlage)
description: Usando esta extensión podrás publicar tus clips directamenteen discord usando un comando !clip.
published: true
date: 2022-07-24T06:08:37.822Z
tags:
editor: markdown
dateCreated: 2022-05-11T04:25:57.032Z
---


# Código de Importación
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
# Instalación

Necesitarás crear una nueva Acción, y la puedes llamar como gustes. Yo recomendaría llamarla `Discord Clip`. Después necesitarás agregar una Sub-Acción de ejecución de código en C#. Copia y pega el código de C# mostrado anteriormente en el cuadro de texto. Necesitarás agregar las siguientes Referencias

Referencias Requeridas
```
System.dll
System.Net.Http.dll
```
Lo último que necesitarás es agregar tu enlace web de Discord en donde el código lo indica.


# Colaboradores

### <img src="/logos/twitch-6860918_1280.png" height=25></img> [*Grizzlage*](https://www.twitch.tv/grizzlage) 
