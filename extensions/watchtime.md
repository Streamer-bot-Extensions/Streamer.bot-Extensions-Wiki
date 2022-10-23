---
title: Watchtime (by GoWMan)
description: This will allow users to keep track of how much time they have spent watching the stream.

published: true
date: 2022-07-24T06:11:11.642Z
tags: 
editor: markdown
dateCreated: 2022-05-18T02:09:42.575Z
---

# Import Code
```text
TlM0RR+LCAAAAAAABADdWNuOo0gSfV9p/8Hq1x2XuJi2PdI8YFzG+MK08QXDuh8gEwPlxDAG7IJR//tEAr67erp7tlY7WxKqIjLzEHEyMuJk/f7Pf9RqH/bOLvbD7Yefa+xPhWFrBQ68ffhQvloogeEYLP+m77Xa7+UvGPIxndfC/HotCGy92WDZeoNHbN1CTVR3WOujxXONj0ybLbGKRb+lTkrxtykhZ6uztWziULxklzpn+9EZMU3CmohxTbcS5CU+WM+T3F2YRnTWo0GLHKws1lIa4doi8QX4ztriMBCLAO9HUbhF6W7nbJP7sTtSroj5Zs+LidiJ0c6PKieK+YGV+MgiJKtZGMe1w3FlDaDSGDaslnhWUrN2Tq1yEab62xoC69MN/MZxIpH4e+cuipIDZ+0AAHJugikGpZ9XK90Hkg7xajX20S6Mw3XypD7PVqveDgI8hLvNarVvPDFPPMOz7dUqiFG4I779hAm59uTH8KZZnDhBgXYJ9vk6CjtLHCnEBeF4qUZ2gNw5T3IsL5JfD8zw1jbaqHtbfiUGr0U2J+SjDSZ2sMgsfdzsTiIWcSQ1s87MWaqMqTPpdN4Ce6hK2w5rBK+RkXVebLmXo6zTnT97AxtsdjCH8ViVfNFVpM4B64MY8FwjaO9tqdNz5MULXmpkKG2Ocygm/Barp7VXZJIguZ1hqcNY8txF/QFB3CKFd87SF7y5HOSK/BohflJhlA8OepnSX+TFeJdxh8/FnJYmkxcsk70N487sNcf9AeUhVuS2bwXgT7fxr6Hey0xetZVttZ4w935JjItlL4J4GUtniSKbe+R3GBP4sXRhC36niNeIoU9cSzfcoVxhBiSfyYQzpwM8Itp+zmsZnQ8cuJ9mjKtsTM/uq0TxN1fxfBcG0TKsz/3hhBmefb7ltrAd43cNfpGhAHgtOFMezBX3o6zTt2m8/cEe6zhU5IVncC5wTQjmFpki91IT9hkF7RfgIVf6moe4JB+5l36Ujxm0M0XyInsL/EzFttIVm4oM/ksdyDXwJRO6Ng/+dGMYj3fXsZSPc7i3nfanN6i4b5xjq7CVPvawrIaQB4n5ALd4YP9gPm8stRerD2dCnz/ipHhuuHM/TasY2CRaLmIfzhpBG8EDDH85FeY2qzIooOfJjX59K4ZLHyk/z+pkKgl9c6ktKPYC8vcT9bHbCG++HyvS4NJvfwRnB20XZDiDs+huBtKEXI5Tf6/eh5mYj2E/3op3wnaUEVEJ7hXnQzeWyrf4cPkeQ27QHH0Y//o6b9tFnbk4C/AdBi8HaYVx8pOuW09++eWm3kc7B4VB5JM3Cj52iJVNE2t339aK8bKpN9kWFjjo4m2ow/WGvWbqtrBGdYFjeGHdEta2I9x8+OD4rkdBmSfmeiTJIupMm/5cjxw795UYKN3YYueVgp2tX45/fr5txDKFKRrY58v+TYgVxQ6+GC0Hv/z0WMlATAyzbrbqLYFz6o21zdVtXmjVm46FkdVkm5hx/rKSkZ3kLAVqc+jmfxcl83Xd8n8pO2QS2hbxc4tG+b8uaXBscwPPlslHKD0gaxrvL1n6pgcyoGwzIDuM5WCL2KoF+Hft+tFaH9qnZ8qqR+UD8qH0n9r+ILO53sbgenlZepU/aSedyPTFsPy22IYyf4N9LTEetdNTqZVLWXKD377yX17EiJv/KSbEznxPeyv9P7jK9nKN8tUWsqBzFurBgPZvyiQwKY892noWMwQyZbQxgUt2ZuogewMtH175s/mqVKLSxdZ7DOTY5uS/pPiP/Chk23WsLaVrHL5LzlBpGbAe7mvEPLfsoz+pVvkzlAbNcZ9xgb8XkPAblAFHshaZgZHOT7aHsbUf2EghQ4E7kGnXckESc/VFPAynrb2twx7BeUAPfP9PxXP6RnZwnbzXVsAvg2unZn9MZcXG0s1gtGFBSi5Afo/fivkqL8vzxtzbyhx+Y99cTu2WcVtym0Xb8QPM+N5W8hnY/CABHuH6pJVXBqgPqKoFkI8lJ5LrO3kHzry3h3OXQ3zN8fKWg8EbHJzWfCsnfzUPMvVFaYxf3AblxJR7wnvmQYF/zIFLfra3/Khv8KN5zgUX03IPT++zC4yyZgjn+jB7sK/fnT/jV3U25sbd49lpp3CFzB9w/qb0flh7+sf6L8hljk3CCb+IQYpn5hzsQSudHOX5s8rafY1FwZxK9Op8lX4cc+3M8+CaZ/6WZ+1rPLujjNYJ+h3v2j4Vw4rfZ2NJcriuuePcYIdT8TfgiFOnm2LtWDrAlbfcG63wSUzusMpvRIoUHjFgjnuDz9zi7I/fGfrH9dQHscIR/xs58g61w+ti/ZX2azLVhcCGKzT8nZnQb0/5MKV9ND6spx3B1HvZ+Tyxe3urhed9r85KP85hbmjT/DnuuXxRV/oxC+P5kQPFP/Fytbcj6XbPv3lPfix/YM4P5A714VDhHN63rpbP8SoN3Kn0XyaGjsmw+jcCXMN9pU/2GPg3libU4AExQc9grscYnFdoEcUXd2A/60IZdKcUg53mjFKN39dZij3ylYfa6a3r9XU+05ii9rtctVuMjXGLY+rwWPVG+6NVtwSuURdwQ3AaPIPYVvPve9Wmv8qZ5X35OPjlDwUpHyB+GAAA
```

# Installation

In Streamer.bot in select `Import` from the top left.
Copy the `Import Code` and paste it into the `Import String`. 

![watchtime-import.png](../assets/watchtime/images/watchtime-import.png)

# Configuration

Add the `Action` `Auto Add Watchtime` to the `Present Viewers Event`.
![watchtime-present-viewers-event.png](../assets/watchtime/images/watchtime-present-viewers-event.png)

If there is something tied to the event already, i.e. Flad's Point System, then add a `Subaction` `Add Action > Actions > Action` and select `Auto Add Watchtime` then hit Ok, under the `Action` associated to the `Event`.  Make sure `Run Action Immediately` is `Checked`.
![watchtime-action-menu.png](../assets/watchtime/images/watchtime-action-menu.png)
![watchtime-action.png](../assets/watchtime/images/watchtime-action.png)

Create a `Command` called `!watchtime` set to `Exact` and tie it to the `Get Watchtime User` `Action`.
![watchtime-present-user-command.png](../assets/watchtime/images/watchtime-present-user-command.png)

>This will NOT work for the `Broadcast User` and will only add `Watchtime` while the stream is live.
{.is-warning}

# Contributors

 - [<i class="mdi mdi-twitch"></i> GoWMan](https://www.twitch.tv/GoWMan)
 {.contributors}