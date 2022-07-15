---
title: Dynamic Predictions (by TerrierDarts)
description: Start, Run and Resolve Predictions with Streamerbot!
published: true
date: 2022-06-14T23:34:01.384Z
tags: 
editor: markdown
dateCreated: 2022-06-14T23:33:58.452Z
---

# Dynamic Predictions [(by TerrierDarts)](https://www.twitch.tv/TerrierDarts)

## Auto Set Predictions
When you use this Auto Set Predictions you can tie it a channel point and have it start and then resolve the prediction all automatically, in this example I use the idea of flipping a coin, will it be Blue or will it be pink! 
### Import Code
```
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
```
### Set-Up 
First You will need to get this codepen `<codepen will be here when i get one working>` and download it, extract, and put it somewhere safe and create a browser source with the url of the index file into OBS. 
> For more info about codepens check out Lyfesavers Video on Codepens Here {.is-info}

After youve got the codepen into OBS you will need to go into the `ResolvePrediction` Action and make sure the OBS Subactions are pointed to that source that you've just added.
> As we are going to need to add info its important that you DO NOT tick local file. {.is-danger}

Then you will need to create a Channel Point Redeem that is pointed to the `TriggerPrediction` Action.
![coinflipcpr.png](/extensions/predictions/coinflipcpr.png)

The `Save Variables` Action needs to be tied to the `Created` Event within the Predictions Tab.
> You can find the Prediction Tab via,
Platforms :arrow_right: Twitch :arrow_right: Predictions
{.is-info}

If set up correctly it should look like the image below
![predictcommand.png](/extensions/predictions/predictcommand.png)

### Example
![coinflipexample.png](/extensions/predictions/coinflipexample.png)
## User Controlled Predictions
With User Controlled Predictions you can use chat commands to start a prediction for what ever you choose and then use chat commands to resolve the prediction when the time is right.
### Import Code
```
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
```
> You may need to add `system.Core.dll` to get the codes to compile {.is-info}
### Set-Up
When you import you will get 3 actions.
- Prediction Create
- Resolve
- Set-Up Variables

You will need to set up the following commands.
|Command|Action|
|---|---|
|`!prediction`|Prediction Create|
|`!resolve`| Resolve|
> As both of these commands require input you must set location to start.
{.is-warning}

The `Set-Up Variables` Action needs to be tied to the `Created` Event within the Predictions Tab.
> You can find the Prediction Tab via,
Platforms :arrow_right: Twitch :arrow_right: Predictions
{.is-info}

If set up correctly it should look like the image below
![predictcommand.png](/extensions/predictions/predictcommand.png)

### Example
When everything is set up it should work like this
```css
TerrierDarts: !prediction Who Will Win?|Team1|Team2
BotAccount: A Prediction has started... Who Will Win?
<Wait for Prediction to End>
<Then you can use>
TerrierDarts: !Resolve pink/blue or cancel
Bot Account: The Prediction has ended the winner was <pink/blue>
or
BotAccount: The Prediction was cancelled
```

> In the c# code of resolve if you change the line `string answer = args["rawInput"].ToString` to `string answer = pink` then do a duplicate action for `string answer = blue` and one for `string answer = cancel` you should be able to create 3 button on your Streamdecks to be able to resolve Predictions via the press of a button! (Currently Untested, Once ive tested info will be updated){.is-info}