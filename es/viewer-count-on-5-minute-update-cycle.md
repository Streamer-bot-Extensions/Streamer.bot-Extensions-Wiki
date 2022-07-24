---
title: Viewer Count on 5 Minute Update Cycle (by MarkusoOoO)
description: Update your viewer count every 5 minutes with Streamer.bot.
published: true
date: 2022-07-24T05:03:14.012Z
tags: counter, basic, easy
editor: markdown
dateCreated: 2022-07-24T00:48:02.529Z
---

# Viewer Count on 5 Minute Update Cycle [(by MarkusoOoO)](https://www.twitch.tv/markusoooo)

## Description
For anyone who would like to use SB only for viewers counter, which will be updated every 5 minutes. You can use variable which exists only when you hit Start Streaming and you have to have action assigned into `Present Viewers (occurs every 5 minutes)` event.

If both of those conditions are met, variable named `%viewerCount%` will be populated with number. Otherwise this variable will not exist. That was causing some issues, but I figured out, that if you create `Fallback action`, for times, when that variable is not existing, this variable can work just fine.

## Streamer.bot action
In Streamer.bot in `Actions` tab, right click at white space and select `Import`. Copy the string (bunch of text) below and paste it into the `Import Sring`.
```text
TlM0RR+LCAAAAAAABADtVD1v2zAQ3Qv0PwgGspkFKVKW1K0I0CJLhhboEng4kadEKC25lGjHCPzfS4pWLMvuYBTpFA2S7oPHd/ce7uXjhyiabdC0VVPPPkds3jtqWKGzZrNgguxcuHWeB29H0Uv4uFClfJ5UIFJkQLgUnAhBEwIpRbIoy5QmSsRZxkOt/tBvi9bXr63WRy/WUGj09Tpj8egfwHwFrQuQv6KfFW7RRLeNrbtR1UfT2LVPvLVt16xcXOEoDHoLu/a79W2WoNvRDQZq1ay+9F2eR2VTS2sMusvOYmeTOZlOn9JKrPH+0EOA3gbs0cP9j+URYchurJHT9EmnfWKHzx7PjE78Dm2NPaq7nhp6eMiF1/BMSgRO8yKPKRQ5WSQyJyKXjGSZAsIYA75AiGPAycEtVo9PHhX9RCdod2vfEM9P3QNlJ0IIGGqFz77S0bsffpfT+X/zZXoSlmPatIZ1i2oUDcH9/LKKqRSZSHKn3QxdxymVpEglJcAkCparZBGrf1bxu3hH4r3Z9Dl9ys1bCZkmKZbAkSSxKojg3DFKQRLgVIiE8UIg+79Cnv9t3BswlZfPMMLReCYImzUaOFC+mE+KaDva3q9+GA3zuoXdHze2vlutUFXQod5N9R1uKDs0r0qkl8iQKeVpwqXbKjEjgtGMQJk509kpFTHL1NVksJheywZ7i7XiPyEz7IYhuP8Dz3PgAmYHAAA=
```
![viewer-count-on-5-minute-update-cycle.png](/extensions/viewer-count-on-5-minute-update-cycle/images/viewer-count-on-5-minute-update-cycle.png)

## How it works?
Here are my two actions. Both of them are just pointing to same Text GDI in OBS.

Action called `Viewer Count` should be one inside event I already mentioned. You can find that event in SB under `Settings` > `General` > `Present Viewers (occurs every 5 minutes)` (or you can put those subactions from `Viewer Count` into already existing Action if you already have one sitting there).

And second action called `Fallback Viewer Count` is being called from `Viewer Count` if variable `%viewerCount%` is not existing and changing our Text GDI to number 0 (or anything you change it to).

I know this is really basic, but hopefully it will help someone, who wants to use Streamer.bot only in their setup.