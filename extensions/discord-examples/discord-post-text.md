Create a C# Sub-Action and copy/replace the following C# into the code block.


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