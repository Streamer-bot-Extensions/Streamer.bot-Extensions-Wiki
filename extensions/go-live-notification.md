---
title: Go Live Notification (by TheShiningOne)
description: Change your going live notification without needing to go into the dashboard
published: true
date: 2022-08-03T15:36:43.592Z
tags: 
editor: markdown
dateCreated: 2022-08-03T13:08:33.972Z
---

# Import code
```
TlM0RR+LCAAAAAAABACtVltzokgUft+q/Q9WntdUC17CVM1DJKBgQgbQBlnnAbpbRJrLcNHg1Pz37YaYaLLzsrVWWdjnO+c73+k+zfHnn3/0ejcHUpRRlt586Ql/tYbUTwhb3dx0Sx9VDC6Z5W++7vV+dg8GRZj7DYXhcLyVQF8cgnF/SO62fcmf3PVHAQ6kbSAJ27txx9UG/ahJzfnTmtJ3K0n9gBLOVxU1ubC/IFpjohZZMo/KKisa5rL1aXnhcxYs7/w0JL0w69HoQHppVkXbCPlc/kX+sMjq/L2+1ubTo9+UVp1+Ji/8FGfJfbsJn1GUpaguCpJWn7FPG3e1eVfK36W0ZkxKVET5a8qPaExIfs8r/JSyE0y2hAlC5EPmFpS/bDZOxCo6lpvNU4SKrMy21a2hLDcbtWBqjlkRj4ebzWF4C25FIA6kzSYpUVbQKLjFlF5r+a+MdlNWJPnf+QxS3c6rKm+JL3m/X29R0FREznC79dg18iBB4UqkJzyD1fMRLD7aHuMRxfJIw3Pr+K84tTKUwJ03o7XXjFZr1yjQqTTkECzQHEbBjO61mVEy+0lTDNNWaB1wXxMsCOOTXQOsXStfN9PGc9Q4EEYlsadtPlN4yT1nBHi878Aay/eSNmN6mmt8IceTBzNjOekROzrzfQrXiXQI5KlKZnCPXYsyH45PZJM/Yx0naqPNYRNwTlnPOB86ZYdHAb8E8ghggYK1ENZ4vj54olpqgtT4Ds6D/YBjLAfOsKzxvLrsejsUMf2uOvBYPdoDCIMEipqyA3g+tc/2pQNPSFBTzw5zbV62OmSoU+RCikQLoiQOv9nT2nNRCF09X7T64rLNYVLDc60sEEzu09bP+IA/k+JHOj0g0ez8XPC6F681zvSDN+e895EjVkhLpKPn6js8o4cgHu0CByJtnyMthrHvWjJKJHaWxo7peWBnATx3B1zwkuMEQqSMDiwu8R3jNX4wwDMV+I5Uu7JWurIurJnuNTsDVi/jzUIyOEa+MzqyM3hbsx6iKKYKixmzGG85gLYLdHsJVMUE6hIqfN3inLP0XY9Cd/ociFbuJXTP+4Vp63RT+g1CLVzG0speeTqLZ0/pWVMt1VFZznQgParHiNfBeuXEtSKm4TmaThg334uTz87GcywLO7Ah8A0TWqyrbaw9KFzLyZ8pjbH0NNbPWWtn3M5KgisqLW2lxba2oi5tZt+6A8m1zz1yPmezNgWpZnfnsp+XeK6ze4W7Pec93Z1bzu8cO/u33nqMd3TtWBSlT7XpWPFC1qeY94Wo5yTpzkKLjmG3L/rWhHBlq5JmrVTFglq0WHZ3k3Hu2T2kQWrWKwHWnqKeiDPaL+ZvOtvcZ+2Y92I0BSiFtNXkAkNO2Tf8+vXDSzovCMqSPKK/eUtjQv3Grvzi8+Bo8W60TjAWhndjqT8eC1J/KE4m/UAc3PWJIIzH/h2Z+Nvhh8RHEoU7TgpuwTVSNTkXI/HPNXIeiVcjuUV+M5Y7iSkmLzzRu/XX+ef3j2NwxlO0E+n75fSk1M9Lgi/QDmyJOs/uD8NFKAtLEjaVz/6//gEXskjLyAgAAA==
```

# Installation

In Streamer.bot in select `Import` from the top left.
Copy the `Import Code` and paste it into the `Import String`. 
References Required
```
System.dll
System.Net.Http.dll
```
After importing code you will need to get authorization header, and hash from payload from your browser where you logged-in in your broadcast account.
For that you need to go to you Twitch dashboard in stream manager and open ```developer tools``` in the browser (usually F12) and swhitch to ```Network``` tab. Then press ```Edit stream info```, click ```Done```, and there will be POST request to ```gql.twitch.tv/gql``` with ```operationName:	"EditBroadcastContext_LiveUpNotificationMutation"```. You need to copy this request as cURL and pate it in any text editor. Inside you will find all required data. In code you will find placeholders for your data.

![go-live.png](/extensions/go-live-notification/images/go-live.png)

> After each relogin on Twitch site you wiil have to get this data again.
{.is-warning}

# Example Use
You will have ```Change go live notification``` action which you can use how you like.

> This method uses undocummented API, so it can break at any moment.
{.is-warning}

# Contributors

 - [<i class="mdi mdi-twitch"></i> TheShiningOne](https://www.twitch.tv/TheShiningOne)
 {.contributors}