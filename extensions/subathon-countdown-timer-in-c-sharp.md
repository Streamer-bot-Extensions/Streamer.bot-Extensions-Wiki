---
title: Subathon Countdown Timer in C# (by rondhi)
description:
published: true
date: 2022-08-13T01:44:43.718Z
tags:
editor: markdown
dateCreated: 2022-05-18T01:20:36.197Z
---

# Subathon Countdown Timer in C# [(by rondhi)](https://www.twitch.tv/rondhi)

## Description

Using this extension you can now run Subathons on your stream easily.

## Import Code

```
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
```

## Installation

In Streamer.bot in select `Import` from the top left.
Copy the `Import Code` and paste it into the `Import String`.

### 1. In OBS: Create a nested scene `[NS] SubathonTimer` with a text source `[TS] SubathonCounter`. Add this nested scene into any other scenes you need.

### 2. Streamer Bot > Actions > `Subathon Timer Code` > Double-click `Execute Code (Subathon Timer)` > add `System.dll` as a reference

![addReference](/extensions/subathon-timer-in-c-sharp/images/178125433-7b545f22-f4ea-4c75-a9a2-0e80a20992be.png)

#### Click the Compiling Log tab, click Compile to make sure the code compiles correctly, and then click Save and Compile

![compile](/extensions/subathon-timer-in-c-sharp/images/178125549-f1546cef-9cd1-4ca7-ae4f-13c469f32962.png)

### 3. Point the `Cheer Generic > Cheer Type > Generic (Either)` event to your `Subathon Add Time Cheers` action.

- Streamer Bot > Platforms > Twitch > Events > Cheers

![Event](/extensions/subathon-timer-in-c-sharp/images/178125591-e481564e-6706-495f-adc6-022e465424fb.png)

![cheersEventTab](/extensions/subathon-timer-in-c-sharp/images/178125313-a3622276-8c91-499a-acf0-deb5cfce32b3.png)

### 4. Point the Sub, Re-Sub, Gift Sub, and Gift Bomb Generic events each to the `Subathon Add Time Sub` action.

- Streamer Bot > Platforms > Twitch > Events > Sub
- Streamer Bot > Platforms > Twitch > Events > Re-Sub
- Streamer Bot > Platforms > Twitch > Events > Gift Sub
- Streamer Bot > Platforms > Twitch > Events > Gift Bomb

![subsEventTab](/extensions/subathon-timer-in-c-sharp/images/178125479-c3a5d0c8-501f-4183-9ce5-522cef213ba4.png)

![SubAction](/extensions/subathon-timer-in-c-sharp/images/178125419-7aa18090-989a-4933-ad6b-ff595be8f969.png)

### 5. Configure action `Subathon Configuration and Start !startsubathon`

- You can edit the initial length of the subathon in hours
- You can edit the max limit lengh of the subathon in hours
- If you want to change the names of the scene and text source in OBS, make sure it matches here too.

![Configure](/extensions/subathon-timer-in-c-sharp/images/178125667-05e1ccd4-9e1f-46f2-817d-efd9bdd6df26.png)

### 6. You can edit how many minutes each tier sub adds to the timer.

- Subathon Prime/Tier 1 Config Minutes
- Subathon Tier 2 Config MInutes
- Subathon Tier 3 Config Minutes

![subTierAddMinutes](/extensions/subathon-timer-in-c-sharp/images/178126447-f9851483-b88e-481f-9d17-293d7cdae9d6.png)

### 7. Subathon Chat Commands

- `!startsubathon` to start the subathon timer.
- `!cancelsubathon` to cancel the timer. **NOTE** I haven't figured out how to pause the timer. So if Streamer Bot crashes, you can restart the timer and manually add the time.
- `!addSubathon #` to add that # of minutes to the timer.

### 8. Action `Subathon Done Action` will be triggered once the timer runs out.

![subathonDone](/extensions/subathon-timer-in-c-sharp/images/178125514-be9d0361-e8b5-497d-98cb-ed937e226f14.png)

# Contributors
### <img src="/logos/twitch-6860918_1280.png" height=25></img> [*rondhi*](https://www.twitch.tv/rondhi)
