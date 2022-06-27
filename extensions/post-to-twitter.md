---
title: Post to Twitter (by Lyfesaver74 and Nate1280)
description: Stream Chat To Twitter Post
published: true
date: 2022-06-27T23:08:10.028Z
tags: 
editor: markdown
dateCreated: 2022-04-27T04:14:39.472Z
---

# Twitter Actions [(by Lyfesaver74](https://www.twitch.tv/lyfesaver74) and [Nate1280](https://www.twitch.tv/nate1280))
#### This code was expanded on [by TerrierDarts](https://www.twitch.tv/TerrierDarts)

# Tutorial
<iframe width="1120" height="630" src="https://www.youtube.com/embed/nc9edtn75pw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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
## Code
```
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
```
## Set-Up
All the Code is in one bit of C# So all the References need adding in just one place, they reference you will need are. 
![tweetrefs.png](/extensions/twitter/images/tweetrefs.png)
Also within the C# Code you will need to add your keys.
![tweetkeys.png](/extensions/twitter/images/tweetkeys.png)
You need to make sure each Key Line has `@` at the start and then declared as a string by `"`.

You will need to set up the HTTP Server in Streamerbot.
The `Address` and `Port` needs to match the one you did the prior step of setting up.
![httpservertwitter.png](/extensions/twitter/images/httpservertwitter.png)

# Functions

## Send a Tweet
![twittertext.png](/extensions/twitter/images/twittertext.png)

## Send a Tweet With Image
![tweetimage.png](/extensions/twitter/images/tweetimage.png)
## Streaming Commands
These 2 Actions will need to be tied to the OBS Events > Stream Started and OBS Events > Stream Stopped
The Arguments in both sub-actions are exactly the same however you will have a **LIVE** verson and you will have a **Normal** Version for when you are offline. 
|Argument|Purpose|
|---|---|
|`tweetName`|This is the name you want to be seen as on Twitter, ":red_circle: LIVE :red_circle:" would be popular for being live|
|`imagePath`| This is the profile picture you want, most would add a Red Ring around there current profile pic with the word live on it in some fashion, and the normal for offline|
|`bannerPath`| This will change the banner at the top of your page, and this is the link to the image file.
|`tweetText`| This is a Starting only Command, but this is the value you want to tweet out when ou go live, the default message will tell people the game you are playing and post your link.
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



