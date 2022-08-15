---
title: Post to Twitter (by Nate1280 and TerrierDarts)
description: Stream Chat To Twitter Post
published: true
date: 2022-07-26T16:25:07.731Z
tags: 
editor: markdown
dateCreated: 2022-04-27T04:14:39.472Z
---

# Tutorial
<div class=“iframe-container”><iframe src="https://www.youtube.com/embed/nc9edtn75pw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" style="border: none; max-width: 100%; width: 100%; aspect-ratio: 16/9;"></iframe></div>

# Twitter Developer Set-up
## Set Up Instructions
The first thing you need to do is to get the key from the twitter API. You can do this by doing the following steps.
> You will need **elevated access** for this to work. You can find out how to do that by clicking [**Here**](#getting-elevated-access-if-needed) Or Scrolling a bit further down.
{.is-warning}
1. Go to - https://developer.twitter.com/en/portal/dashboard
2. Sign in with Twitter.
3. Once on the "Developer Portal" you should see on the Left Hand Side "Projects & Apps"
4. Create yourself an App, you can use `Projects` or `Standalone`.
5. Give your app a name, Id Suggest something like "MySBTwitterApp" 
6. Then you will see a load of tokens, at this point you will need to press "App Settings" (We are going to get new tokens in a minute dont worry about those)
7. You will need to set the app to to `Oauth 1.0a`
> `Oauth 2.0` uses different endpoints so it will not work. {.is-warning}
8. Change `Oauth 1.0a Settings` to `Read and Write`
9. In the Callback Url will need to match as your Websocket is in SB. By default its set as `http://127.0.0.1:7474` and you will need to put Website Url as your twitter address, if any other boxes require a url put in that same address. If done it should look like this -
![twittersettings.png](/extensions/twitter/images/twittersettings.png)
![httpservertwitter.png](/extensions/twitter/images/httpservertwitter.png)


9. When on the Settings Page, you should see "Keys and Tokens" that is where we will get our 4 keys we need.
10. Under the Consumer Keys Press "Regenerate", Copy the 2 keys into the relevant parts of the C# Code or in a safe place.
11. Under the Access Token and Secret Press "Regenerate", Copy the 2 Keys into the relevant parts of the C# Code or in a safe place.

Now You should have your app Set up and your 4 keys you will need for the C# code.

If you get stuck you can follow the Twitter Support at [Twitter Developer Support.](https://developer.twitter.com/en/docs/twitter-api/getting-started/getting-access-to-the-twitter-api)

> Remember Getting Elevated access is needed however can take a short period of time. {.is-info}
## Getting Elevated Access if Needed
When you open up the developer portal with `Essential` Access you will be greeted with this.
![twitterapplyforelevated.png](/extensions/twitter/images/twitterapplyforelevated.png)

You will need to Press Apply and then fill out the `Basic Info` your username and email should be there by default however there are changeable you will however need to add your name, country your based in and your coding experience. The name can not be changed, I am unaware about the others so please be accurate. 

![twitterapplyforelevatedpg1.png](/extensions/twitter/images/twitterapplyforelevatedpg1.png)
 The next section is where you will explain your use for the bot saying something along the lines of.
 
 
> I am a Streamer on Twitch and I would like to update my Name, Profile Picture and Send a Tweet when I go Live

The Next step is to review all your information and then Agree to the terms on the final page.

*Thank you to [4xsample](https://www.twitch.tv/4xsample) for the help in providing images and explaining the application process*

# Import Code

```
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
```
# Installation
All the Code is in one bit of C# So all the References need adding in just one place, they reference you will need are. 
![tweetrefs.png](/extensions/twitter/images/tweetrefs.png)
Also within the C# Code you will need to add your keys.
![tweetkeys.png](/extensions/twitter/images/tweetkeys.png)
You need to make sure each Key Line has `@` at the start and then declared as a string by `"`.

You will need to set up the HTTP Server in Streamerbot.
The `Address` and `Port` needs to match the one you did the prior step of setting up.
![httpservertwitter.png](/extensions/twitter/images/httpservertwitter.png)

# Example Use

## Send a Tweet
![twittertext.png](/extensions/twitter/images/twittertext.png)

## Send a Tweet With Image
![tweetimage.png](/extensions/twitter/images/tweetimage.png)
## Streaming Commands
These 2 Actions will need to be tied to the OBS Events > Stream Started and OBS Events > Stream Stopped
The Arguments in both sub-actions are exactly the same however you will have a **LIVE** version and you will have a **Normal** Version for when you are offline. 
|Argument|Purpose|
|---|---|
|`tweetName`|This is the name you want to be seen as on Twitter, ":red_circle: LIVE :red_circle:" would be popular for being live|
|`imagePath`| This is the profile picture you want, most would add a Red Ring around there current profile pic with the word live on it in some fashion, and the normal for offline|
|`bannerPath`| This will change the banner at the top of your page, and this is the link to the image file.
|`tweetText`| This is a Starting only Command, but this is the value you want to tweet out when you go live, the default message will tell people the game you are playing and post your link.
### Stream Starting
![tweetgoinglive.png](/extensions/twitter/images/tweetgoinglive.png)
### Stream Ending
![tweetonend.png](/extensions/twitter/images/tweetonend.png)

> If there is any action you don't want to happen, use the `Enable/Disable` Option in the Sub Action Context Menu. Disabled Sub-Actions will turn Red/Pink. {.is-success}

# Troubleshooting
If you find that you've followed all the steps and it still doesn't work here are a few things to check.
- You must have Elevated Access for this to work.
- You must have OAuth 2.0 turned off. (Press on the cog, then Edit under User Authentication Settings)
- You have it set to `Read and Write`
- The Callback address must be identical to the HTTP server in SB.
- The Keys in the C# codes are correct and still has the `@` and `"`.
- The File Paths for images are correct.
- Make sure the code Compiles.
- Make sure the HTTP Server is active.

# Contributors

### <img src="/logos/twitch-6860918_1280.png" height=25></img> [*Nate1280*](https://www.twitch.tv/Nate1280)
### <img src="/logos/twitch-6860918_1280.png" height=25></img> [*TerrierDarts*](https://www.twitch.tv/TerrierDarts)



