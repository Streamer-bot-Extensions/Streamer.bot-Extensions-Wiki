---
title: Documentation Write Up Advice
description: 
published: false
date: 2022-07-04T07:35:43.036Z
tags: 
editor: markdown
dateCreated: 2022-07-01T00:18:30.446Z
---

# Documentation Write Up Advice
If you've created an Extension and you are wanting to write documentation for your new extension but are unsure on how then here's a little system to follow.

## Outline
Each extension follows a guide so when anyone clicks on any extension what they see is roughly the same.
We recommend using the following guide as your order of text you can copy and paste the below code to get you started.
```
# Title of Extension
## Descripton
DESCRIPTON HERE
## Tutorial
Tutorial HTML Code here with width and height of 1120x630 (if avaliable)
## Import code
Put your Streamerbot import code here in ``` ``` so it looks like a codeblock
## Set Up
This is where you explain a step by step setup on how to get your extension set up
## How To Use
This is where you explain how your extension works and the user will use it.
```
If you need more advice on markdown you can check out this https://docs.requarks.io/en/editors/markdown

<a href="https://submissions.botextensions.dev/embed/feedback" target="_blank" style="position: relative;"
  onclick="
    event.preventDefault();
    var contentEl = document.getElementById('cf-widget-content');
    var backdropEl = document.getElementById('cf-widget-backdrop');
    var isShown = contentEl.style.display != 'none'
    contentEl.style.display = isShown ? 'none' : 'block';
    backdropEl.style.display = isShown ? 'none' : 'block';">
  Submit an Extension Idea
  <iframe src="https://submissions.botextensions.dev/embed/feedback" id="cf-widget-content" class="cf-widget-content"
    style="
      display: none;
      height: 600px;
      width: 450px;
      border: 1px solid lightgrey;
      border-radius: 15px;
      box-shadow: -7px 4px 42px 8px rgba(0,0,0,.1);
      position: absolute;
      z-index: 1;
      top: 125%;
      left: 50%;
      transform: translateX(-50%);">
  </iframe>
</a>
<div id="cf-widget-backdrop" class="cf-widget-backdrop"
  onclick="
    document.getElementById('cf-widget-content').style.display = 'none';
    document.getElementById('cf-widget-backdrop').style.display = 'none';"
  style="
    display: none;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;">
</div>