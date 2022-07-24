---
title: Movie Poster (by GoWMan)
description: Allow viewers to display their Profile Picture in a Movie Poster with Streamer.bot.
published: true
date: 2022-07-24T04:53:45.336Z
tags: 
editor: markdown
dateCreated: 2022-07-24T00:34:45.681Z
---

# Movie Poster [(by GoWMan)](https://www.twitch.tv/gowman)

## Description
Allow viewers to display their Profile Picture in a Movie Poster with Streamer.bot.

## Resources
Movie Poster:  [Resources](/overlays/movie-poster/files/movie-poster.zip)

### Streamer.bot
Download and drag the `movie-poster.sb` file into the `Import Pane`: [movie-poster.sb](/overlays/movie-poster/files/movie-poster.sb) ![movie-poster-sb-file](/overlays/movie-poster/images/movie-poster-sb-file.png) ![movie-poster-import](/overlays/movie-poster/images/movie-poster-import.png)

### OBS Studio
Create a new `Browser Source` and make sure `Local File` is **NOT** checked. The source can be set to the canvas size or to a size that you prefer. ![movie-poster-browser-source](/overlays/movie-poster/images/movie-poster-browser-source.png)
> The URL doesn't matter as we will have Streamer.bot automagically set this. 
> 
> {.is-info}

## Configuration
Double click on the `Obs Set Browser Source Url` `Subaction` and make sure that it points to the `index.html` file in `\Browser Sources\movie-poster`. ![movie-poster-browser-source-url](/overlays/movie-poster/images/movie-poster-browser-source-url.png)
> Do NOT remove the `?user=%user%&targetUserProfileImageUrl=%targetUserProfileImageUrl%` from the end of the `Obs Set Browser Source Url` `Subactions` or it will NOT work. 
> 
> {.is-danger}
> Do NOT check `Local File` in the `OBS Browser Source`. 
> 
> {.is-danger}

Double click on the `Sound` `Subaction` and make sure that it points to the `movie-sound.mp3` file in `\Sounds`. ![movie-poster-sound](/overlays/movie-poster/images/movie-poster-sound.png)

Make sure both `OBS Set Source Visibility` `Subactions` are pointing to your OBS connection and the new `Browser Source` you created. ![movie-poster-source-visibility](/overlays/movie-poster/images/movie-poster-source-visibility.png)

Create a `Channel Point Reward` and tie it to the `Action` `Movie Poster`. ![movie-poster-cpr](/overlays/movie-poster/images/movie-poster-cpr.png)

Now when a viewer redeems the Movie Poster reward they will see their profile picture popup on stream with their username and a random movie title.