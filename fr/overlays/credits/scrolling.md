---
title: Simple Scrolling Credits
description: Example of credits in Streamer.bot using a simple scrolling style that allows for easy font and color changes in an editor as well as including intro and outro text/images
published: true
date: 2022-07-24T04:43:20.256Z
tags: credits
editor: markdown
dateCreated: 2022-06-14T23:31:15.614Z
---

# Simple Scrolling Credits by [Lyfesaver74](https://www.twitch.tv/lyfesaver74)

## Description

Example of credits in Streamer.bot using a simple scrolling style that allows for easy font and color changes in an editor as well as including intro and outro text/images. 

**Note: Original code for these credits were taken from a Codepen fork where it's true original author could not be ascertained** 

---

Included:

-   Zipped folder with HTML, JS and CSS files
-   Video describing steps involved in adding, editing and styling credits
-   Notes to addressed updated features post-video released

## Files

[credits - simple scrolling.zip](/extensions/credits/credits_-_simple_scrolling.zip) 

Download the files needed by clicking the link above and extract the folder to where you save your files used in your stream

## Usage

Add a browser source to OBS and tick the “Local File” box and then browse to the folder you just extracted. Point to the index.html file.

## Editing/Styling

The credits are styled using the included CSS and JS files. While some of the more advanced changes will take a basic understanding of web development changing the two colors and (to a certain degree) the fonts are not complicated things to do. You will need a text editor. If you are working with an unaltered style.css you fill find the following sections on the listed line of the editor:

-   Font Class Import (Google Font) ---- Line 1
-   Font Name and Size ------------------- Line 21
-   RGB Color Code For Names Listed – Line 24
-   RGB Color Code for Titles/Sections – Line 37

## Video

<iframe width="1120" height="630" src="https://www.youtube.com/embed/7DrRWu_Lmu4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Video Notes/Updates

Since the release of this video some things have been added to the JS page, allowing for adding text and/or image URLs to the start and/or end of the credits as they scroll. You will find where to add them in the script.js file, lines 71-79.