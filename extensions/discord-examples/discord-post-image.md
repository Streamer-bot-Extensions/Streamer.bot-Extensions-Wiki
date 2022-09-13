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