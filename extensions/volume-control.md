---
title: Volume Control (by slashie101)
description: Control your OBS volume through Streamer.bot.
published: true
date: 2022-07-24T04:22:55.004Z
tags: 
editor: markdown
dateCreated: 2022-05-17T01:02:08.489Z
---

# Volume Control [(by slashie101)](https://www.twitch.tv/slashie101)

## Description
Control your OBS Volume through Streamer.bot.

## Installation
Copy the import code below and paste it into the `Import Pane`:
```text
TlM0RR+LCAAAAAAABAC9VktvGyEQvkfKf0ArRUokEwELmO2tyiHqpYdE7aWuImAH2+p6cfdh14ry38s+nKwfieKq7R7sXb5hmJnvG+Dx/AyhaAVFOfd59AHRUTuQ6wWEryjqPrWtAlyGkW/NN0KP3V+A5mljN05MKqkUOFFUYU5B4sSEN+YU4YyBFS7pfLWTftZQt/6FJkzEErAULsV8nAisNQFsU0aVlqmTYjyYB7k2GTQrVkUNL+PbcO99XVhAX31WLwB9WQ6mTgtfLxubHrzxeVX4bGChs7XelHd1Uwans3Lgv9B56hcf2yocotbnti4KyKtD7KByO9XbCf4WKrSTwEtsfRDrxuxxUkxyhCZR2dpOwtgkuujW6aZfTKLR1qiAUOuywtVm2ZuGZTr3vdXT3jIhmxxab59aakn/4CM/22fPRacJYGIcM5lgmcY0cGsCt8RJTMdaj1ksOTV8b+Ia5tNZU0VyTXaRJv4wzuXu8JbVvM6yvRjyFH4FhL2MPo1eo2Cli3mjrM89Fd6Ud3p9vTpGw0pnrXbJNT2WdcyYMFSnWDjSZA0cGx4TLBmzKpZOgHOnZk1ZfGra/D1pP7fNv1DeqhdZa7RT0Lf1ef+/9GlcrLRIOaY6bDtccYd1TMNWxIU0MedCSPvv9Snep89Ocy1Tm1Bq1FGAGgaRgcyvj6bImdGKGYOBC4dDRhwnjFgsKQCJaaKJOrkFKSHJ8SSj/Rj6FMmftOBQVq90YK/Dh8o/GHiwM51Pw9lwlGotrbBMYUqScaiDFVgp5bDQIBURPA3gX2vK18pAT2L6pk0HVTNAXdegeW4LWIRTpiMcXS59Oa/mK0DOF2gWwoWitx2hHKb6GQvWz9DV0QJp5ThhOsGpchZzywg2MnGYisSASy3Rycm9cLpQ4kGFtq/f98/S28ZJe6AOIOuzTC9LSAdoB7aOOsvu2vHGLebE24jJvP0xz6eHp/52Y929a6DLG7/cXEXDwM7Pnn4DrOyHkYMJAAA=
```
![volume-control-import.png](/extensions/volume-control/images/volume-control-import.png)

## Configuration
Set the `Source Name` in the first `Set Argument" subaction.
![volume-control-source.png](/extensions/volume-control/images/volume-control-source.png)

>Uses a "get volume" request to get the source's current volume and stores it in the variable "obsRaw.volume"
>- Then increments the variable by some amount (positive to make it louder, negative to make it quieter. Do some experiments to decide how big this number should be by monitoring sources and checking the difference. (edit: keep this value very small - too large and it will break the action. The import defaults to 0.1)
>- (you can also use this to set the volume to a fixed value by unchecking the increment and setting the value to the one you want)
>- Then uses a "set volume" request to set the volume to the new value of "obsRaw.volume"
{.is-info}