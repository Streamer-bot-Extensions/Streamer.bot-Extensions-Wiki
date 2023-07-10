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

 
