---
title: Process Uptime Checking (by BamBam)
description: This is a process uptime checking utility.  If you configure it then it will write your process uptime to a file in this format Uptime: 01.03:41:15    days.hours:min:seconds format.
published: true
date: 2022-05-29T22:33:06.958Z
tags: 
editor: markdown
dateCreated: 2022-05-18T01:51:52.518Z
---

# Process Uptime Checking [(by BamBam)](https://www.twitch.tv/bambam4275)

## Description
This is a process uptime checking utility.  If you configure it then it will write your process uptime to a file in this format `Uptime: 01.03:41:15` `days.hours:min:seconds` format.

## Installation
Copy the import code from below and paste into the `Import Pane`:
```text
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
```
![process-uptime-checking-import.png](/extensions/process-uptime-checking/images/process-uptime-checking-import.png)

## Configuration
Change the `Sub-action` `Set Argument` `processUptimeSavePath` to match your file path.
![process-uptime-checking-file-path.png](/extensions/process-uptime-checking/images/process-uptime-checking-file-path.png)

Change the `Sub-action` `Set Argument` `processUptimeSaveFile` to the text file you want to save to.
![process-uptime-checking-file-path.png](/extensions/process-uptime-checking/images/process-uptime-checking-file-path.png)

Change the `Sub-action` `Set Argument` `processUptimeName` to the name of the process you want to track.
![process-uptime-checking-file-path.png](/extensions/process-uptime-checking/images/process-uptime-checking-file-path.png)

### References
In the `Execute C# Code` `Sub-action` make sure you have the following references:
![process-uptime-checking-references.png](/extensions/process-uptime-checking/images/process-uptime-checking-references.png)
