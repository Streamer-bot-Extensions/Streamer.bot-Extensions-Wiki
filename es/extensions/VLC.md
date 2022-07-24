---
title: VLC Extension
description: Code and instructions on how to get SB to control VLC
published: true
date: 2022-07-24T04:35:04.284Z
tags: 
editor: markdown
dateCreated: 2022-06-14T23:17:53.328Z
---

# VLC Controls Extension
## Description
This extension will allow you to control VLC using Streamer.bot actions

## Configure VLC for HTTP communication
1. Close VLC 
1. Open any folder in Windows Explorer
1. In the address bar up top, type in: %appdata%
1. Double click VLC folder
1. Open the file 'vlcrc' using any text editor like Notepad
1. Hit CTRL-F and search for 'http-password'
1. Remove the # at the start of that line and add 1234 to the end so that it looks like: `http-password=1234`
1. Search for `http-host` and add 127.0.0.1 to the end so it look like this: `http-host=127.0.0.1`
1. Search for `http-port` and add 8020 to the end so it look like this: `http-port=8020`
1. Save and start VLC

## Verify HTTP Communication
Play a video in VLC

Go to http://127.0.0.1:8020 
You should see a VLC interface in the browser if all is well

## Streamer.bot Configuration and Action Import Code
Go to the `Server/Clients` tab and then navigate to the `HTTP Server` tab.

Start the HTTP server

Right click in the Actions column and choose 'Import' then paste the following code:

```
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
```

# Enjoy!!!