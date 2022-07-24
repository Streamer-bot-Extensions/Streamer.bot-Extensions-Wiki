---
title: Post to Twitter (by Lyfesaver74 and Nate1280)
description: Stream Chat To Twitter Post
published: true
date: 2022-07-24T04:19:39.177Z
tags: 
editor: markdown
dateCreated: 2022-05-14T05:38:30.387Z
---

# Twitter Actions [(by Lyfesaver74](https://www.twitch.tv/lyfesaver74) and [Nate1280](https://www.twitch.tv/nate1280))
#### This code was expanded on [by TerrierDarts](https://www.twitch.tv/TerrierDarts)

# Tutorial
##### Coming Soon

# Pre-SB Set-Up
The first thing you need to do is to get the key from the twitter API. You can do this by doing the following steps.
> You will need **elevated access** for this to work. {.is-warning}
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
![twittersettings.png](/extensions/twitter/twittersettings.png)
![httpservertwitter.png](/extensions/twitter/httpservertwitter.png)


9. When on the Settings Page, you should see "Keys and Tokens" that is where we will get our 4 keys we need.
10. Under the Consumer Keys Press "Regenerate", Copy the 2 keys into the relevant parts of the C# Code or in a safe place.
11. Under the Access Token and Secret Press "Regenerate", Copy the 2 Keys into the relevant parts of the C# Code or in a safe place.

Now You should have your app Set up and your 4 keys you will need for the C# code.

If you get stuck you can follow the Twitter Support at [Twitter Developer Support.](https://developer.twitter.com/en/docs/twitter-api/getting-started/getting-access-to-the-twitter-api)

> Remember Getting Elevated access is needed however can take a short period of time. {.is-info}
# Import Code
## Code
```
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
```
## Set-Up
All the Code is in one bit of C# So all the References need adding in just one place, they reference you will need are. 
![tweetrefs.png](/extensions/twitter/tweetrefs.png)
Also within the C# Code you will need to add your keys.
![tweetkeys.png](/extensions/twitter/tweetkeys.png)
You need to make sure each KeyLine has `@` at the start and then delcared as strings by `"`.

You will need to set up the HTTP Server in Streamerbot.
The `Address` and `Port` needs to match the one you did the prior step of setting up.

# Functions

## Send a Tweet
![twittertext.png](/extensions/twitter/twittertext.png)

## Send a Tweet With Image
![tweetimage.png](/extensions/twitter/tweetimage.png)
## Streaming Commands
These 2 Actions will need to be tied to the OBS Events > Stream Starting and OBS Events > Stream Ended
The Arguments in both sub-actions are exactly the same however you will have a **LIVE** verson and you will have a **Normal** Version for when you are offline. 
|Argument|Purpose|
|---|---|
|`tweetName`|This is the name you want to be seen as on Twitter, ":red_circle: LIVE :red_circle:" would be popular for being live|
|`imagePath`| This is the profile picture you want, most would add a Red Ring around there current profile pic with the word live on it in some fashion, and the normal for offline|
|`bannerPath`| This will change the banner at the top of your page, and this is the link to the image file.
|`tweetText`| This is a Starting only Command, but this is the value you want to tweet out when ou go live, the default message will tell people the game you are playing and post your link.
### Stream Starting
![tweetgoinglive.png](/extensions/twitter/tweetgoinglive.png)
### Stream Ending
![tweetonend.png](/extensions/twitter/tweetonend.png)

> If there is any action you don't want to happen, use the `Enable/Disable` Option in the Sub Action Context Menu. Disabled Sub-Actions will turn Red/Pink. {.is-success}


