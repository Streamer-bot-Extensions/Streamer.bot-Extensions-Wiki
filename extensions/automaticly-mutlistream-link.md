---
title: Automaticly MutliStream Link Generator (by AboutSelphy)
description: Generate automaticly a MultiStream Link from the streamtitle.
published: true
date: 2023-03-20T07:23:22.709Z
tags: 
editor: markdown
dateCreated: 2023-03-15T00:34:01.291Z
---

# Import Code
```
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
```

# Information
> ### Features:
> Notification if a update is available. (Note: by testing the extension disable the update script. or you get error messages)

> Github: [Automaticly-MutliStream-Link](https://github.com/AboutSelphy/Streamer.bot-Automaticly-MutliStream)
> Any Problems? Just add a Issue on Github or open a Ticket in the SB .Extension Discord ( support→ Extensions) or on my Discord.

> Discord SB: [Streamer.bot Extensions Discord](https://discord.com/invite/a9ttKtkUZ7) 
> Discord Selphy: [AboutSelphy Discord](https://discord.aboutselphy.com) 

Automatic generate a **Multistream Link** from the stream title.



![streamtitle](/assets/automaticly-mutlistream-link/images/streamtitle.png)



# Installation

## Step 1: Import the script.

> ### How?:
> Example 1: In Streamer.bot in select `Import` from the top left. Copy the `Import Code` and paste it into the `Import String`. 
> Example 2: Just drop the file in `Import String` field

> ## File
 
Streamer.bot File:  [Script Download](/assets/automaticly-mutlistream-link/files/Automatic_MultiStream_By_AboutSelphy.sb)



![importscript](/assets/automaticly-mutlistream-link/images/importscript.png)





## Step 2: Setup the MultiStream Service.

> ### Choose your service:
> Edit the `%streamService` argument and add a service.
>> Example: https://multitwitch.tv/



![multiservice](/assets/automaticly-mutlistream-link/images/multiservice.png)



## Step 3: Setup the Message.

> ### Choose your sown Message:
> Edit the `%messageMulti%` and `%messageNoMulti%` argument and write your own message.



![custommessage](/assets/automaticly-mutlistream-link/images/custommessage.png)



## Step 4: Enable the command.

> Activate the command in the `Commands` section.

|`!multi`| Sends the `%messageMulti%` or if there is no multi stream `%messageNoMulti%` message.
|`!multistream`| Sends the `%messageMulti%` or if there is no multi stream `%messageNoMulti%` message.



![command](/assets/automaticly-mutlistream-link/images/command.png)



## Step 5: Timed Action (optional).

> ### Add timed chat message:
> Go to `Settings` and than to `Timed Actions`.
> Create a new Timed Action and link the action. 



![timedaction](/assets/automaticly-mutlistream-link/images/timedaction.png)
![timedactionsetup](/assets/automaticly-mutlistream-link/images/timedactionsetup.png)



## TO-DO LIST:
- [ ] Video tutorial.
- [ ] add GeustStar Method.


# Contributors

 - [AboutSelphy](https://www.twitch.tv/AboutSelphy){.twitch}
 {.contributors}

 
