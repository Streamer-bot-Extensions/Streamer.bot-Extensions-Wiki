---
title: Barrel Roll (by IRLCreate)
description: Gives you a channel point redemption for doing a barrel roll
published: true
date: 2022-07-24T06:12:29.519Z
tags: fun, barrel roll, channel point
editor: markdown
dateCreated: 2022-05-14T15:30:26.979Z
---

  

# Barrel Roll (by [IRLCreate](https://www.twitch.tv/TommoIRL))

  

## Description

  

This is a set up to allow you to create a barrel roll effect like the Star Fox meme.

  

## Tutorial

  

<br>

<iframe width="1120" height="630" src="https://www.youtube.com/embed/nlNkGBWA1A0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  

# Installation

Were you ever in a Twitch stream and someone started zooming around like Star Fox and wonder – “how in the holy world of Twitch and all things good did they do that?”
No problem, that’s what were here to help with!

### Required files
- [OBS Move Transition Plugin](https://obsproject.com/forum/resources/move-transition.913/)
- [OBS Websocket Plugin](https://obsproject.com/forum/resources/obs-websocket-remote-control-obs-studio-from-websockets.466/)


## OBS Filters

- After installing both plugins, you'll then need to right click on your nested scene with your camera and go to 'filters'.
- Under 'Effect Filters' add a 'Move Source' filter
	- Source = your cameras source
	- Duration = 1500ms
	- Easing = Ease out
- Click 'Get Transform'
	- Under the `rot` section, change this to `360`
		- Here's an example of what mine looks like:
```
pos: x 960.0 y 653.0 rot: 360.0 scale: x 1.000 y 1.000 crop: l 332 t 0 r 202 b 226
```
Anything not mentioned can be left at default.
Right click on that filter and 'Duplicate'
- Inside the new filter, scroll down to 'Transform'
	-  Change the `rot` here back to `0`
- Change the 'Custom Duration' to '12ms'

Go back into your first filter and scroll down until you see 'Actions' > 'Next Move' and set the next move to your second filter. This will instantly snap you back and be ready for the next redemption, otherwise you'll only spin once and it won't reset.

## Importing StreamerBot Action

Copy the text from the code box below into the `Import` box in Streamer.bot to add this to your action library:

  

```text

TlM0RR+LCAAAAAAABACFU01v3CAQvVfKf0A+pVKIzC7x4tzy0UaR2h42vdU5YDxsLGHY2mbTVZT/Xj7WWq+dqhyMmTc8Hm+Gt7NPCCU7aLva6OQakYsQ0LwBt0qSuOSid3DnIr/8GqG3ODmornweYWzF8irDwLISU5ILzJfyCi+rtHLYkoJgkSts+m3Ben5tlTpGQfNSgefrWwvH+CDmlrctKLQ2So24Nq2xWw//NE1jHtffRhhXr3zfra2/meSqG5G2XFemuQkXm6PCaGHdabqfYzMzTgwJKZ0ADT8Osu/c3PKjqpAha9VDO6SU8WZkktT1vPd4ehp24jQEEY/B/PQw8AefYUyYY9UoXZRXTBJcLliO6SqnmDPiipjloiwpLHhOJxtfod68eFPSy4mqfr/1WunqNDyU56TUUYOu4I9vuWP0/eJfjlawq8WsZaJLxurqa62Ckw/XRfF9j+7begdFESAEUjq7uqK4N+gGjboIPQX8S8DROfl82WyXs0Lpunu5BWlauDO6r7Wt9WbWFSF3Z5QNBSVTc6LfaU6ZWGQSLzgFTLlkOJdphTORlmVOViyD6fH/9Zt8bHcyLfjB7HRk9vD7PO3tB08SGvx5/CSU4tsOqhEawUAUM+PLHsD3v8gITAxeBAAA

```

## Creating the Channel Point

After adding this action, head over to Platforms > Twitch > Channel Point Rewards.
Create a reward, and under 'action' select the new Barrel Roll action.