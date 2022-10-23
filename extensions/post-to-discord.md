---
title: Post to Discord (by Geocym)
description: With this extension, you can post to discord. This could be anything from Images to Clips.. Could even be used to post a going live message.
published: true
date: 2022-07-24T06:10:01.022Z
tags: 
editor: markdown
dateCreated: 2022-04-28T02:26:59.131Z
---

# Import Code
```text
TlM0RR+LCAAAAAAABAC1Vl2TojgUfd+q/Q+Wz0NXABGZqn0QPxDtYRpURJZ5CBCRNhCGD5Wemv++Cbbdavd+9NYuVSrec3Nycu4N4cevv7Ra7T3Ki5ik7c8t/lMTSGGC6L/2AynK1jzIEUqLLSlbJWkN4yIgedg+JcKgpAMLmvs7+99q/Tj9UCgOGYMshz7fAQonAAVynY4gcH7YVTjfF7u9nuSjTVc+cTWDvleoYjOnFcavUZRCHyPGV+YVeo2fZT5rajG5F2RRTqqM4f0HvbiIQ3yAdWFVbMEbiIsLxhymIUn6zareogFJgyrPUVq+xd44ceXGldwF3KELV1+VPUs4sKQfXu6lrZbXzhE1pSi5ss6QRxGvGT8nVR6gVxKv/ek8oGggg052Sp8QTC5huEcLMo4xeoDl9pQy/OzR66s6Zz/PbrLb4oX/Lksjr804ft7opaakqFm83lQcPF/cO1/n64bi1CrSBoiCJMhcV+5JtFU6PQ7yUOFk4AMYCGIg9uSbgQcUR1tWDHAHrhHmFo13utfhc0tc9ddJQxqiI2N6jf789GeV3EPctKkAbqZN4NF+xsBtWVlnvembi/V3NoLcU3oit0EiouuXRQ4KcpdDvU1HRnzYCzofXj8PgPBRB/h/4sBfb70mJUS0feLseSu1b9AdQlkfx3v0viU52iC60QJ0s6MacEDbdUXlkkPheV/iICcF2ZR3xmjheeOcKjuQfOd5+84duBOByCuelzCZOPbvQoyvlfw7vnldlCj5j9kMVP4PjJOyzBraS9Zv13b7dYkGJGxKGjpG5idBtBTxU6jZ5dcDmN3G7ncSDoeFMUjtJ7iSUn1sSIFoYX8ufXUds5pPLBAwPAKzYGLHvoYfdc0o1o7xpI8Mcz7CFY1VrglmiPIPHJVfJ8dsXauxLyiFPrI77srgQ21JZibDGdduel/3IrRS+CBWy/UKV5Rz72rLyBUUHNQqcZ0pHpqE6jJAkFD+WnXc1ZRQztwRjnQNRfQw78fWUlpath6tloq9jFXHWk71BVDu9bE9XwxU3bKnY/2Rzhn3I32gPoWTabN+K8GFa6vbUIsoj9rXd2bXGSmDJX8cQcd49MXpzpkYj0FiYz81iC+aVaBRf164+mdOPhCYvj5pvBoZBVzZVThQSTixDibV6q4koA9B5Ce2qI+2IJyoQ+oZ5TXJbL4788h0vYz39BnxvD+xskAb1+HI3QcJP1o71tYUlIrWjfEnVGP5yvt3+VHG6v/CP1CFtaNHbuODEiPHor73lYv6Txe1pMHVEd/jKV6vLNXXjoNT3raJL7UxgIPdtW6NzQ0qc2XtZhrtrVptxpjOtF47eOgLEmB+zDQ38zV7s04xcJ0vhT7sF/p1rFpQ3a5oUY8OkY5VWgNrr8f0Pr2uC0zVVI9vdVz5XC015SkcjZ/QSnqcjUO8TrZ7Xyg3rHdhfaA+KLU/31W2MM7e8eqqlvc76rOo7gOB9vTipbeUpl/pPhmYuHYdiw+STkT7jXdZToQpnrGc324eoFmOApJk9Bx//wkaIgzreQnzty8rp8d9c+iEAjtdN4jrdrsi1+kpMqdsEODkECG0CXtQ6kgfPXQUdn301BEuTp3z7bfb1yuN0TQnwgUUEIxhVqDwAj2BDdEp8/RmeQZ//gFCPPa/+AoAAA==
```

# Installation
In Streamer.bot in select `Import` from the top left.
Copy the `Import Code` and paste it into the `Import String`.

# Configuration

## Discord
Go to your Discord Server `Settings > Integrations` and click new `Web Hook`.
![post-to-discord-1.png](/assets/post-to-discord/images/post-to-discord-1.png)

Choose a channel for it to post to and give it a name, anything will do.
![post-to-discord-1.png](/assets/post-to-discord/images/post-to-discord-2.png)

Copy the Webhook URL - you will need this for the c# code later so save it somewhere for now.

## Streamer.bot
Change the `Sub-action` `OBS Raw (Take Screenshot)` to match your setup.
![post-to-discord-obs-raw.png](/assets/post-to-discord/images/post-to-discord-obs-raw.png)

In the `C# Execute Code` insert the Discord Webhook and change the file path where it says to.
```cs
string Webhook_link = "PASTE YOUR WEBHOOK URL HERE";
              // Enter the path to match your screenshot
    string FilePath = @"D:\OBS\Discord\screenshot.png";
 ```

 Make sure you have the following references added to the `Execute C# Code` and then hit `Save and Compile`.
 ![post-to-discord-obs-references.png](/assets/post-to-discord/images/post-to-discord-references.png)

# Contributors

- [<i class="mdi mdi-twitch"></i> Geocym](https://www.twitch.tv/Geocym)
{.contributors}