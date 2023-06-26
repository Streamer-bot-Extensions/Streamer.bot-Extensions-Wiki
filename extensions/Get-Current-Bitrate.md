title: get your bitrate
description: display your current bitrate

OBS WS v5.x{.obs-version-badge} 
# Import Code
```text
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
``` 

# Installation
Import the code above to Streamer.bot .

# Configuration
For the command named : "Stream Bitrate Value [ Timed Action intervale 1sec ]" 
- Make sure the OBS Raw (subaction) is set to websocket 5.x (in case you use another one)

* You need to set up a TIMED ACTION ( find it in settings tabs )
* give it a name , and put that action in the Action field
* The interval is 1 sec 

![image](/assets/Get-Current-Bitrate/images/timedAction.png)

|Command|Purpose|
|---|---|
|`!bitrate` | Send your current bitrate to Chat |
(don't forget to enable the command after importation)

# Example Use
![image](/assets/Get-Current-Bitrate/images/example.png)
# Contributors

- [lebluxtv](https://www.twitch.tv/lebluxtv){.twitch}
{.contributors} 
