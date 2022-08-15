---
title: Subathon Countdown Timer in C# (by rondhi)
description: Using this extension you can now run Subathons on your stream easily.
published: true
date: 2022-07-24T06:10:33.718Z
tags: 
editor: markdown
dateCreated: 2022-05-18T01:20:36.197Z
---

# Import Code
```
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
```

# Installation
In Streamer.bot in select `Import` from the top left.
Copy the `Import Code` and paste it into the `Import String`. 

## 1. In OBS: Create a nested scene `[NS] SubathonTimer` with a text source `[TS] SubathonCounter`. Add this nested scene into any other scenes you need.

## 2. Streamer Bot > Actions > `Subathon Timer Code` > Double-click `Execute Code (Subathon Timer)` > add `System.dll` as a reference

![addReference](/extensions/subathon-timer-in-c-sharp/images/178125433-7b545f22-f4ea-4c75-a9a2-0e80a20992be.png)

### Click the Compiling Log tab, click Compile to make sure the code compiles correctly, and then click Save and Compile

![compile](/extensions/subathon-timer-in-c-sharp/images/178125549-f1546cef-9cd1-4ca7-ae4f-13c469f32962.png)

## 3. Point the `Cheer Generic > Cheer Type > Generic (Either)` event to your `Subathon Add Time Cheers` action.
- Streamer Bot > Platforms > Twitch > Events > Cheers

![Event](/extensions/subathon-timer-in-c-sharp/images/178125591-e481564e-6706-495f-adc6-022e465424fb.png)


![cheersEventTab](/extensions/subathon-timer-in-c-sharp/images/178125313-a3622276-8c91-499a-acf0-deb5cfce32b3.png)

## 4. Point the Sub, Re-Sub, Gift Sub, and Gift Bomb Generic events each to the `Subathon Add Time Sub` action.
-   Streamer Bot > Platforms > Twitch > Events > Sub
-   Streamer Bot > Platforms > Twitch > Events > Re-Sub
-   Streamer Bot > Platforms > Twitch > Events > Gift Sub
-   Streamer Bot > Platforms > Twitch > Events > Gift Bomb

![subsEventTab](/extensions/subathon-timer-in-c-sharp/images/178125479-c3a5d0c8-501f-4183-9ce5-522cef213ba4.png)
   
![SubAction](/extensions/subathon-timer-in-c-sharp/images/178125419-7aa18090-989a-4933-ad6b-ff595be8f969.png)

## 5. Configure action `Subathon Configuration and Start !startsubathon`

- You can edit the initial length of the subathon in hours
- You can edit the max limit lengh of the subathon in hours
- If you want to change the names of the scene and text source in OBS, make sure it matches here too.

![Configure](/extensions/subathon-timer-in-c-sharp/images/178125667-05e1ccd4-9e1f-46f2-817d-efd9bdd6df26.png)

## 6. You can edit how many minutes each tier sub adds to the timer.
- Subathon Prime/Tier 1 Config Minutes
- Subathon Tier 2 Config MInutes
- Subathon Tier 3 Config Minutes

![subTierAddMinutes](/extensions/subathon-timer-in-c-sharp/images/178126447-f9851483-b88e-481f-9d17-293d7cdae9d6.png)

## 7. Subathon Chat Commands
- `!startsubathon` to start the subathon timer.
- `!cancelsubathon` to cancel the timer. **NOTE** I haven't figured out how to pause the timer. So if Streamer Bot crashes, you can restart the timer and manually add the time.
- `!addSubathon #` to add that # of minutes to the timer.

## 8.  Action `Subathon Done Action` will be triggered once the timer runs out.

![subathonDone](/extensions/subathon-timer-in-c-sharp/images/178125514-be9d0361-e8b5-497d-98cb-ed937e226f14.png)

# Contributors

### <img src="/logos/twitch-6860918_1280.png" height=25></img> [*rondhi*](https://www.twitch.tv/rondhi)