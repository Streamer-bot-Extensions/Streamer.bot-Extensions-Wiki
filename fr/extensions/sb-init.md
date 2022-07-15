---
title: SB-Init (by Krayn)
description: An Action that queues itself when Streamer.bot starts.
published: true
date: 2022-06-14T23:29:29.229Z
tags: 
editor: markdown
dateCreated: 2022-06-14T23:29:26.453Z
---

# SB-Init [by Krayn](https://www.twitch.tv/krayn_)

## Description
An Action that queues itself when Streamer.bot starts.

## Installation
Copy the import code below and paste into the `Import Pane`:
```text
TlM0RR+LCAAAAAAABACtVVtvokAUft9k/4PhuZjhJtKkDxZbq03doPVSlz4MMwNlO1yWi2ib/vedgboi2k2bLInKnG/mO9/58Bxev39rtYQ1SVI/CoXzlnRWBkIYELYShGoJUcbglEV+8nWr9Vr9MMjHfB8wdFV3kSaqqIvYl6aJ0FAMUVF1Te9ghLpQq7jKQ79zknP+MKd0HyUhdCjhfFmSk318J2Z6KQ5DP6vxeEmUx3udZQzSAm7TSc6rcSFNa0QJDHEU9MpijlEUhShPEhJmx9iRAQcm/FtliWKSosSP3zMLDfSZkLhH/TVp1l7JJi5hshBp5C9B89y2C5/VVaS2feejJEojN2uPr+5t+zphmoooee6otr1W26CtAEUybDtIUZRQ32ljSoU64eNhZmebETPCZV14OY6dAHkzhb7gwTz7UYDbvhUXeDFK4eLOe5A3T0i58yzpcjhdaCymUYbrfSsa8Q+6mfvOgP4a3qzWcGF5bE+MTS/mGGFcpkX7sysvn4Xz3FqMAVwY+a05urd8aeQEFAz9wlsF1ymSZzHPbS7B2PTAbZN3MqAvaGC8rKYH3NvVciKhQC31uBbXXtM0GK0dufAmyyf6oMxB46z8sBx6xOwZw36vPG8uRxTfzLeOfwlQOKd/9YRc08VF4/HGCUFREPv09PPFhMLtNINJdhKuOgypiuQ6UBdBR2IdpjlYdCQdi8RwsKroqtrVO420BfG9J84J2uAQybYxl2Lw6xDZddRBZ5bIB91ZSQwx2fBE++jb2UeNkpENFyWkTivlRTPOI7vYHz4huIdQlJftCE5Zgh0XQo1NGaJDV1Q7GItQxUBEBMqyJiMFaPCrlkjgf/ohf8aPNaR5lZpdhzwB3Mzf0QZSjbKjQVVzB7qAzV2oiTomqqhiQxK7imwwd/SuYsiygzTp6+4A+bQ/zYn2GXekmju728fmzB3wBOXge6yPakphnBJcQyuwJKp2Vm+ZHfj2B/c4W63qBgAA
```
![sb-init-import.png](/extensions/sb-init/images/sb-init-import.png)

## Configuration
In the `Action` it waits 10 sec to give SB time to connect to twitch and then send a "streamerbot connected" message.
The only important part is the name of the `Action` being `"SB-Init"` and the code `Subaction` which should **NOT** be changed...
The rest of the `Action` can be adapted to anything you want done right after SB starts.

>Right after means right after queues are initialized...you may have to wait for the features you want to be actually loaded (like the Twitch connection).
{.is-info}