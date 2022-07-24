---
title: Trap Card (by MarkusoOoO)
description: This is my take for "Trap card" inspired (read stolen) by Nutty (but he approved that I will share it).
published: true
date: 2022-07-24T05:16:38.175Z
tags: trap, trapcard, chat, timeout
editor: markdown
dateCreated: 2022-07-24T01:07:25.259Z
---

# Trap Card [(by MarkusoOoO)](https://www.twitch.tv/markusoooo)

## Description
After you redeem it, it will timeout first user who will write something into chat (I put two if checks for MODs and VIPs, so it will ignore those roles - you can change this behaviour).

## Streamer.bot action
```text
TlM0RR+LCAAAAAAABADVmEtvJDUQx+8r7XdojRRxicHutts2t4gDWiT2gJZcEIeyXU5a9HQP/ciD1X4HDkRISHy5fBKq55HM9CRLOmSAlSJ1j8vPX5Wr/p33r18lyewCm7aoq9mXiTheNlQwR/o1e9fAwkMTkqJqF0WDIXHXydu+665nq47gOxrYUt8fht9J8n71IFMRhhmkAJfyNGNWKcdkBpGBRc0Uzw0XgoPNcDXXctDPPfbLlV00RgaNzBsOTCqjmePGMxkF517b1Cm+NQ4rcCUOK0YoW7w37J3khHZ8AR31ve901tT9YrvXlg3KS7huv+ur/bkbqEI9P1ki2Lf6uvJ902DV7dv2sO2gW3Zp677xw9b58U77BTTFcNa364N1tOXvW2xmu90Wg0vbbomka3rctQZsu6KCYROn6/k+MlfACH3ZnUK58s039S8YR31W3s6jtAG1YB6tZVJ6YOR+ZEYp74JwWgCMBl5icXY+IOKfj07aXS+G5UQqdts33qr6shxtogp4NUx13/rh+DHAY5BF+20dsIGuHp+/XgzNKyfveWPN5B0xHg1bOflNeHCrTV+9mc8xFBSK5fWDToLYYXMXXeIh3tqnWqpMMYPKMGmiYFYTby1SHo0ORgKfzptP5S2ex/u0WHwypLmG6L0RjF4oj6U5ZyYTgbnoBKAM3sH4ShyCdPoU0h1eDcvOvuiKOdZ9lxz1dKmPhvWSuzxIyRxxPs4aDUaknBVOvK/7ZeZ6kEYIzqUWc2a0E0yCNcyB4cxC1BjA5cZnk2lMhpFNgXF788ftza/T//78e0T8IUQmy6LPKQuaPBCiwCNzdnhTJgsh6oyq2+ERySmI1mECmwqZHG0KwtFnbTK8J7vFcRIQm1rNETKq4zqlXJV65jRKFgYNAILnuXKHB6KeAmQrn8xAGatNTjUst0OoZ8PFlxnLMhO5d8qgyEfbbjui99jVccZrCouU7opVJGcMMGsUZ1Q1Heka0HSjpmPgciqIfAvE5vXHsUL5ephmKVO2TL4uS1i0GLasK+OG6FgEknPRWJWxlJ50A7hgTiIJBCMxuMgFmPiiInAnxe9rwBKKkIT6svqfa8AtmXYgIfi4ylxX235/xnV+s9rJlOeMBAgVREc+tRkP5CVnTa5THeT0/JamB5F6n6SWRqG1TDNSHLml4HcpAeYKWRTghZfc8GD/BS39JG03qiB39+sfFw2jcswDfVCk0gyxlWoGiqSuclRWvQ5IufjwRWOS6rq9+e1ZQuP3ZyLKrDcyowIVI1CcRE2qTFDYUGUKxkvNVRjT/6+02CarKD6afw5Xmxsxsqzy61723Do/CgVCG2S5jkMiCvTNybljXKKMHiFV+hm6gk/ORE+SWi+kLB4MBBAqsyYEhk4TCEsgXKAvQsjpm9CggRyfoTinK4ttifViymJ4rHqu5MFH/uU0UTW4svY/FdXZfoW+0w2XRefPvzqHbra9m9evPvwFPm4VUz8TAAA=
```
![trap-card.png](/extensions/trap-card/images/trap-card.png)

## How it works?
It is made from two actions:

`Trapcard laid down` action is first part of this and it should by used in channel point rewards, or as command. It will put into chat message, saying that trapcard has been laid down and it will enable our second action.

`Trapcard Activated` is second action, which should be placed in Streamer.bot into `Settings` > `Events` > `General` > `Chat message`. This action is disabled after import (leave it like that) and after first action (`Trapcard laid down`) enables it, it will timeout whoever writes something into chat. (I have it set to timeout viewers for 120 seconds, you can change that).  It will also write that trapcard has been activated by whom and also who placed it. After that, this action will disable itself.

I noticed small inconvenience, that after import you have to reassign which action should be enabled and disabled. It is bottom subaction for both actions. Just put in both sub-actions `Trapcard Activated`.

So into `Trapcard Activated` put into bottom subaction `Trapcard Activated` action disable.

And into `Trapcard laid down` put into bottom subaction `Trapcard Activated` action enable.