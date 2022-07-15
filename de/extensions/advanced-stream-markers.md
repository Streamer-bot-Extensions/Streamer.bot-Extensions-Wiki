---
title: Advanced Stream Markers 2.0 (by NotZelda)
description: Allow viewers or broadcaster to trigger a stream marker that adds to twitch VOD but also to a .txt file showing timestamp, duration, title and description.
published: true
date: 2022-06-11T05:06:28.210Z
tags: 
editor: markdown
dateCreated: 2022-05-18T01:36:02.000Z
---

# Advanced Stream Markers 2.0 [(by NotZelda)](https://www.twitch.tv/notzelda)

## Description
Allow viewers or broadcaster to trigger a stream marker that adds to twitch VOD but also to a .txt file showing timestamp, duration, title and description.
This extension also takes the input from a command if there was one as the description. It also creates a new file every stream so that it isn't one big long list. This example can be used to speed up editing post streams as it provides context to moments.

## Installation
Copy the import code below and paste it into the `Import Pane`.
```text
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
```
![advanced-stream-markers-import.png](/extensions/advanced-stream-markers/images/advanced-stream-markers-import.png)

## Configuration
Double click the `Execute Code (Code - Marker Command)` in the `Marker Command` `Subaction`.
![advanced-stream-markers-c-sharp-code.png](/extensions/advanced-stream-markers/images/advanced-stream-markers-c-sharp-code.png)

On `Line 76` change
```cs
string path = @"C:\Users\NotZelda\Desktop\Stream Markers\" + date + "_markers.txt";
```
to
```cs
string path = @"<Your File Path Here>" + date + "_markers.txt";
```

Create a `Command` called `!marker` and set it to `Start` that is tied to the `Marker Command` `Subaction`.
![advanced-stream-markers-command.png](/extensions/advanced-stream-markers/images/advanced-stream-markers-command.png)

>There is an `Action` called `Show Navi` that can be used to display an animation everytime the command is run.
{.is-info}
