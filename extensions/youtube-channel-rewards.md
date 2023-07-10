---

title: YouTube Channel Rewards

description: Enhance your YouTube livestreams with channel points from your Twitch profile!

published: true

date: 13 May 2023

tags: YouTube, Channel Points, Channel Rewards

editor: markdown

dateCreated: 7 May 2023

---

  

# YouTube Channel Rewards (Created by [Gezel.io](https://gezel.io))

  

## Description

  

YouTube Channel Rewards takes the most valuable Twitch feature and puts it on YouTube streams, and it's easy to set up! We host it, all you have to do is configure your Streamer.Bot software to connect to our websocket (which is very simple), and you're good to go!

This does require you and your viewers to download our [Chrome Extension](https://gezel.io/download) to work correctly. Due to this, it's obvious this will not work on mobile, and only works on Chrome and Chromium based browsers (basically anything that's not Firefox or Safari). We are an open source project however so if you know how to make extensions for other browsers, feel free to contribute!

  

## Tutorial

#### Prerequisites

- [Streamer.Bot](https://streamer.bot) - v0.1.16 or newer
- An affiliated Twitch channel - needed to create channel rewards in Streamer.Bot
- A YouTube channel that is connected to your Discord - needed for [step 4]()


# Installation

Were you ever in a Twitch stream and someone started zooming around like Star Fox and wonder – “how in the holy world of Twitch and all things good did they do that?”
No problem, that’s what were here to help with!

### Required files
- Download `ytcr-v2.0.0.gezel` from the Assets on [our GitHub](https://github.com/gezelio/YTCR/releases)


## 1. StreamerBot Confugiuration

### Initial Setup

1. Launch Streamer.Bot and select `Import` and drag the  file into the `Import String` box.
   - Confirm you see the following `Actions`:
     - Clipping Tool
     - Execute Channel Reward Redeem
     - Set Channel Rewards
   - Once confirmed, you can click `Import`.
2. Click the `Set Channel Rewards` action and you should see two Sub-Actions. Double click `Set global "youtube_channel_id"`.
Where it says `CHANGEME` beside `value`, update this to your YouTube channel ID. You can get that [here](https://www.youtube.com/account_advanced) if you aren't aware of it.

## 2. Websocket
Inside StreamerBot, head over to:
- Servers/Clients
    - Websocket Clients

Right click and select ‘Add’ and insert the following:

|SECTION | INPUT|
|-----------------------------------|-----------------------------------|
|               Name            |           `Gezel's YTCR `       |
|             Endpoint            |      `wss://ytcr.gezel.io/ws`   |
|     Auto Connect on Startup    |✅|
|     Reconnect on Disconnect     |✅|
| TLS (tick the following boxes)  |✅ `TLS 1.0`<br>✅ `TLS 1.1`<br>✅ `TLS 1.2`|
| Retry Interval | `5 seconds` |

| Actions | |
|-----------------------------------|-----------------------------------|
|            Connected           |      `Set Channel Rewards`      |
|           Disconnected          |               `NONE`             |
|             Message           | `Execute Channel Reward Redeem` |

**Once you've completed this, press `ok`, right-click on the connection and choose `connect`!**
>**Tip:** Anytime you add/remove/modify channel rewards while connected to the WebSocket, you must go into `Servers/Clients` > `Websocket Clients` and right-click `disconnect` and then `reconnect` to pull the changes. It only pulls the reward data on load at this present time.

## 3. Setting Channel Rewards
It's likely you've set up channel points with StreamerBot before for your Twitch, but if you haven't, you can watch IRLCreates video [here](https://www.youtube.com/watch?v=nlNkGBWA1A0). This should give you an idea on how to get started.

**The channel points used will be the ones under the “Twitch category” on StreamerBot:**

### **You add your rewards in `Platforms > Twitch > Channel Point Rewards` inside Streamerbot.**

**NOTE:** There are some important things to know what we will pull into the YouTube Channel Points that you should pay attention to:
- Group
  - The channel rewards you want on YouTube should be under a group called `YTCR`
    - You can add rewards to a group by double clicking on one, and under ‘group’ type `YTCR`
    - Any other channel points you want to add to the group can be done by right clicking and under group select `YTCR`
- The 'Enabled' status
  - Any channel rewards with the ‘enabled’ setting set to ‘no’ will automatically be not pulled to the extension
    - This is to allow you to quickly enable/disable points that may not be working on your side, or are not fully complete.
- User Input Required
  - Any reward that requires a user input will also automatically not be added to the extension, as this is a Twitch feature that currently cannot be replicated with our extension (yet).

> The cost of a channel point inside StreamerBot will also be the cost of the action inside YouTube. Users generate points every 5 minutes, so be sure you set these fair with how many points you offer every 5 minutes from the [Dashboard](https://ytcr.gezel.io).

## 4. The YTCR Dashboard

Before going forward, it's good to confirm that your YouTube channel is linked to your Discord account. If you do not have a YouTube channel linked to your Discord, YTCR won't be able to find your channel as we use Discord as our sign in method. Once you've added your YouTube channel to your Discord's `Connections` (can be found in User Settings):

1.  Sign in to [https://ytcr.gezel.io](http://ytcr.gezel.io/creds/login)
2.  Authenticate with Discord (the only sign in method)
3.  Choose your YouTube channel

After this, you can do things like set the amount of points you'd like your viewers to earn each interval (which is roughly 5 minutes) and much more!

>**Tip:** You can actually add a custom dock on your OBS to see how many points each user has! If you click `View Profile` on the YTCR site, you can see your username in the URL bar like this:
`ytcr.gezel.io/u/USERNAME`.\
Add the following URL (and update your username) to a `custom dock` inside `OBS > Docks > Custom Browser Docks` to see this from there;
` https://ytcr.gezel.io/obs/USERNAME?darkmode=true&refresh=true`

## 5. Clipping Tool (Optional)
The Clipping Tool is a feature that adds a clipping feature to your stream. This utilizes the OBS `Replay Buffer` feature and would require additional setup. 
We made this because YouTube's clipping feature doesn't actually create a downloadable clip to post on other social media platforms, so we hope this will be a good alternative to Twitch's clip feature.

>**If you don't plan on using Clipping Tool, you can disable it in the YTCR Dashboard and ignore all of this.**

### How does it work?
It only allows one clip every minute. It does this by renaming the files by 'year-month-day_hour-minute' while also thanking the user who created the clip.
- Example of a clip name: `"2022-06-24_16-04 (clipped by trent1605)"`

### OBS settings
- `Output` > `Replay Buffer` and select `Enable Replay Buffer`
	- You can also change the length of your clips here. We recommend 30/60 seconds.
- Head into `settings`
	- Under `General`, tick the box for `Automatically start replay buffer when streaming`\
*This will help you ensure it's always running when streaming.*
- Inside the `Recording` tab, these are also your settings for the `Replay Buffer`
	- Take note of the recording path and format, we'll need these for StreamerBot. 
### StreamerBot settings
- Select the `Clipping Tool` Action and update the following;
	- Set global "yourReplayPath"
  		- This is where your `recording path` was from OBS.
  - Set global "yourOutputPath"
  		- This is where you want the new files to go to.
  - Set global "yourFileFormat"
  		- This is what format you are using, such as mp4/mkv/etc
>It's important to note that the paths are written in `C#` and may not appear as you'd expect. For example, my Replay Path on Windows is `D:\rec` but in `C#` it's `D:\\rec\\`. We haven't found a good converter for those who aren't aware, so if you get super stuck on this, please feel free to jump into our [Discord](https://gezel.io/discord) and either us or someone from the community I'm sure will be able to help!

NOTE: This is a "fork" of [HYP3RSTRIKE](https://youtube.com/hyp3rstrike)'s [Advanced OBS Clipper](https://github.com/hyp3rstrike/StreamerBot_CSharp/blob/main/AdvancedOBSClipper.cs) to function with YTCR as a separate icon within the extension. Credits go to him for giving us this idea, so I'd recommend dropping him a [sub on YouTube](https://youtube.com/hyp3rstrike) to say thank you!
