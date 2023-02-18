---
title: Dynamic Predictions (by TerrierDarts)
description: Start, Run and Resolve Predictions with Streamer.bot!
published: true
date: 2023-02-18T01:48:08.258Z
tags: 
editor: markdown
dateCreated: 2022-05-27T15:48:16.293Z
---

# User Controlled Predictions
## Description
With User Controlled Predictions you can use chat commands to start a prediction for what ever you choose and then use chat commands to resolve the prediction when the time is right. 
> This will allow upto 10 answers so 0.1.9+ is needed. {.is-danger}
## Import Code
```
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
```

## Installation
In Streamer.bot in select `Import` from the top left.
Copy the `Import Code` and paste it into the `Import String`. 

> You may need to add `System.Core.dll` to get the codes to compile {.is-info}

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
![predictcommand.png](/assets/predictions/images/predictcommand.png)

## Example
When everything is set up it should work like this
```css
TerrierDarts: !prediction Who Will Win?|Team1|Team2|Team3|Team4
BotAccount: A Prediction has started... Who Will Win?
<Wait for Prediction to End>
<Then you can use>
TerrierDarts: !Resolve <number of winner> 1 - 10
BotAccount: The Prediction has ended the winner was <name of winner>
or
TerrierDarts: !Resolve cancel
BotAccount: The Prediction was cancelled
```


# Auto Set Predictions (Coin Flip)
## Description
When you use this Auto Set Predictions you can tie it a channel point and have it start and then resolve the prediction all automatically, in this example I use the idea of flipping a coin, will it be Blue or will it be pink! 
## Import Code
```
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
```
## Installation
In Streamer.bot in select `Import` from the top left.
Copy the `Import Code` and paste it into the `Import String`.  

You will need to get this codepen https://codepen.io/terrierdarts/pen/oNEGdJe and download it, to download press `extract` in the bottom right handside, and put it somewhere safe and create a browser source with the url of the index file into OBS. 
> For more info about codepens check out Lyfesavers Video on Codepens Here {.is-info}

After youve got the codepen into OBS you will need to go into the `ResolvePrediction` Action and make sure the OBS Subactions are pointed to that source that you've just added.
> As we are going to need to add info its important that you DO NOT tick local file. {.is-danger}

Then you will need to create a Channel Point Redeem that is pointed to the `TriggerPrediction` Action.
![coinflipcpr.png](/assets/predictions/images/coinflipcpr.png)

The `Save Variables` Action needs to be tied to the `Created` Event within the Predictions Tab.
> You can find the Prediction Tab via,
Platforms :arrow_right: Twitch :arrow_right: Predictions
{.is-info}

If set up correctly it should look like the image below
![predictcommand.png](/assets/predictions/images/predictcommand.png)

## Example
![coinflipexample.png](/assets/predictions/images/coinflipexample.png)

*Original Pen Comes from html5andblog https://codepen.io/html5andblog/pen/pJZpee*

# Contributors

 - [TerrierDarts](https://www.twitch.tv/TerrierDarts){.twitch}
 {.contributors}