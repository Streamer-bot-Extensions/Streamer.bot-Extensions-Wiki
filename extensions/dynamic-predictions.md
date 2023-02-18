---
title: Dynamic Predictions (by TerrierDarts)
description: Start, Run and Resolve Predictions with Streamer.bot!
published: true
date: 2023-02-18T01:32:27.658Z
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