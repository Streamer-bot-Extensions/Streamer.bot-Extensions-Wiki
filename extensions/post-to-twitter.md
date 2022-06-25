---
title: Post to Twitter (by Lyfesaver74 and Nate1280)
description: Stream Chat To Twitter Post
published: true
date: 2022-06-25T14:30:42.578Z
tags: 
editor: markdown
dateCreated: 2022-04-27T04:14:39.472Z
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
![twittersettings.png](/extensions/twitter/images/twittersettings.png)
![httpservertwitter.png](/extensions/twitter/images/httpservertwitter.png)


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
![tweetrefs.png](/extensions/twitter/images/tweetrefs.png)
Also within the C# Code you will need to add your keys.
![tweetkeys.png](/extensions/twitter/images/tweetkeys.png)
You need to make sure each KeyLine has `@` at the start and then delcared as strings by `"`.

You will need to set up the HTTP Server in Streamerbot.
The `Address` and `Port` needs to match the one you did the prior step of setting up.

# Functions

## Send a Tweet
![twittertext.png](/extensions/twitter/images/twittertext.png)

## Send a Tweet With Image
![tweetimage.png](/extensions/twitter/images/tweetimage.png)
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
![tweetgoinglive.png](/extensions/twitter/images/tweetgoinglive.png)
### Stream Ending
![tweetonend.png](/extensions/twitter/images/tweetonend.png)

> If there is any action you don't want to happen, use the `Enable/Disable` Option in the Sub Action Context Menu. Disabled Sub-Actions will turn Red/Pink. {.is-success}


