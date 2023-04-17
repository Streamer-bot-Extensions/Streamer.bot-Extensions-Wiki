---
title: Bouncing Welcome Animation
description: Browser source for OBS with a bouncing welcome animation adapted for SB from a Coedpen made by Shaw at keyframers
published: true
date: 2023-03-10T02:18:02.399Z
tags: first words, welcome, codepen
editor: markdown
dateCreated: 2023-03-04T15:42:39.588Z
---

# Bouncing Welcome Animation for First Words
Bouncing Welcome Message for Streamer.bot adapted from a Codepen by Shaw @ Keyframers. Codepen source: https://codepen.io/team/keyframers/pen/NWpGrWZ

## Video Example
<video width="960" height="540" controls>
 <source src="/assets/bouncing-welcome-animation/bouncingani-720-30.mp4" type="video/mp4">
</video>

# Install
1. Download the [Bouncing_Welcome_Animation](/assets/bouncing-welcome-animation/bouncing_welcome_animation.zip) zip and extract it to a folder of your choice.
2. Copy `Import Code` from below and import into Streamer.bot using the `Import` button in top left of the bot.
3. Add a Browser source in OBS. Give it a name and in Properties ***do not tick `Local file`*** but do tick `Shutdown source when not visible` and `Refresh browser source when scene becomes active`.
Click `OK`. *Do not worry that we have not given it a URL*
4. Using Windows Explorer navigate to the folder you exported the zip to and open the index.html file into your broswer of choice.
5. Click inside the address bar of the browser window and copy the location (Should start with `file:///`).
6. In Streamer.bot go to the action you imported called Bouncing Welcome and double-click the OBS Set Browser Source URL to edit it.
![obsprop.png](/assets/bouncing-welcome-animation/obsprop.png)
Chose your Scene, Source and paste the address you copied into the URL box as shown above. Next take this string and paste it to the end of the RUL you just added. `?name=%user%` so that the end of the string looks like this:
`/index.html?name=%user%`
7. Click `OK`
8. Assign the action to trigger on First Words event, or add the action as a subaction in your current action for First Words
9. Done.


# Import Code
```text
TlM0RR+LCAAAAAAABADFVU1vnDAQvVfqf0Ar5RYHA8bgSFWVNkrbSyv1K4eqB2MPuzTGbG2z2VWU/14Muw3LVv2QkoYD4HnPM/abB755+iQIZiswtmr07DSIj/uA5jV0o9mLptWi0vPgEpRoagjOdFVz57kDkQs/sB33ix8Hwc3w6KBK+gxxWqYsphFinAtEijJFRVIyFFGCBSQ0zpJiyNVP+t5C6yvrVqm7KGheKPD5nGlhFF8L1Uq4ME39urKuMZuOUnJlR5yDrUy20JPmpmmXnrXbJwouKmNdcNkYaUdErq75xr5v9WEhw7Vs6rNekENUNFq0xoB2h9iBiHtC9hQrQMPb7VY+gligDz5yt7KB1bRG/KRNmzcht0Z5VlkpOA3D8OVp+Ml2Pggld3wRvtNwbqoVhOdgr1yzDIttNuRg7RDfiYiuK7dAdqkq5zz6zaIr2JSmW4OxiCAcyq4zYaUlrE8WrlbPfUOeHbVdraPJijqNNPRavOm9g7cX+sVtd01SDKYDQjLGohIJQkhnOogRy0WEKOc5L1mSxymbTLyGar7wvcEneB9xm6WXM8n3wzvL7Dn1d24d1ud18FXuorfH/7Hp1nHnefiBlJdJLoB2ehdcJohQiRHDSYY4jiOeR5xmGfln5fF9Kh/9jfIrrvrfEMXppHjN15+34AQZvv+Dr3skTslEkqWEIRr14pQFKsoCEMWMFqQscFFO+/VHcSKM4/uUJ35kY0YPZEyeRQmHnCHMCEUkTxkqvE8ZFSwBJiVk6eMaMxkpv3v9Oj0kXvkS/UkxgkSjFF9akCN0APtEA3M4WkdTu2l13Xl2x7/9AVy9oaEMCAAA
```

# Contributors
- [Lyfesaver](https://www.twitch.tv/Lyfesaver74){.twitch}

- <span class="mdi mdi-codepen"></span> [Keyframers on Codepen](https://codepen.io/team/keyframers){.codepen}

- [Keyframers on Twitter](https://codepen.io/team/keyframers){.twitter} 

- [Shaw on Twitter](https://twitter.com/shshaw){.twitter} 
{.contributors}