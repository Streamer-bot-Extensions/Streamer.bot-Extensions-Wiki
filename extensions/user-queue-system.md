---
title: User Queue Systems(by TerrierDarts)
description: Apply a Queue system to your stream so Viewers can Join or Line up their Ideas
published: true
date: 2022-09-06T22:02:56.467Z
tags: play with viewers, user queue
editor: markdown
dateCreated: 2022-05-17T01:05:41.733Z
---

# Tutorial

<div class=“iframe-container”><iframe src="https://www.youtube.com/embed/wxCPOULpZv8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" style="border: none; max-width: 100%; width: 100%; aspect-ratio: 16/9;"></iframe></div>

> This extension has been updated since I recorded the tutorial. {.is-info}

# Import Code
```
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
```

# Installation
In Streamer.bot in select `Import` from the top left.
Copy the `Import Code` and paste it into the `Import String`. 

> This import contains **11 Actions and 10 Commands** {.is-info}
# Imports {.tabset}
## Imported Actions
![queueimportactions.png](/extensions/user-queue-system/images/queueimportactions.png)
## Imported Commands
![queueimportcommands.png](/extensions/user-queue-system/images/queueimportcommands.png)

Once the code is imported you will need to make sure the code inside the `QueueCode` Action compiles, it should compile from import however if it does not make sure the following references are added.
```
mscorlib.dll
System.dll
System.Core.dll
System.Linq.dll
```
The next thing will be to make sure none of the imported commands have created a duplicate, meaning if you already have a `!leave` command you will need to change one so they are now unique avoiding any clashes. 

The next thing is to work out, ***How you want to trigger the join Action?*** Normally done through chat commands or Channel Points and ***What information do you want to queue up?*** Normally this will be a username or a suggestion but other things can be used.

In `OpenQueue`, `CloseQueue`, `Start Queue` and `EndQueue` you will see 2 Sub-Actions one that enables/disables a Channel Point and one for a Chat Command. Depending on which method you choose you can either disable the Sub-Action or you can delete it. You just need to make sure that `OpenQueue` and `StartQueue` enable the Command or Channel Point redeem likewise you will need to make sure that `CloseQueue` and `EndQueue` disable it.  

To answer the 2nd Question you need go into `JoinQueue` and you will need to change the value of the Sub-Action `Set Argument %addQueue% to '%user%'`. The value will need to be whatever you wish it to log, the main would be `%user%`, `%rawInput%` or a mix of both `%user Suggested %rawInput%`.

> It's Important to note if you use any but just `%user%` the sub-action **QueuePosition** and **LeaveQueue** Will _**NOT**_ work. {.is-danger}

> By Design this allows users to join more than once, if you do not want this to happen I recommend using a **User Cooldown**. {.is-warning}

# Configuration

If you want a different output message just change the `Twitch Message` Sub-Action or the `SetArgument` Sub-Actions depending on which Action you wish to adjust. In the SetArgument Sub-Actions you can freely use Variables as you would in the `Twitch Message` Sub-Action. However some other variables avaliable which you will need to use. 
|Action|Variable|Description|Output|
|---|---|---|---|
|Join Queue|`%pos.val%`|This will output the number of the position| `1`
|Join Queue|`%pos.form%`| This will output the ordinal of the position| `1st`|
|Pull Queue|`%puller%`| This will output the data that is at top of the queue.|`Lyfesaver74` or `Pikastu`|
|QueuePosition|`%pos.val%`|This will output the numbers of all the positions for the user.|`1,3,5,6,12`|
|QueuePosition|`%pos.form%`|This will output the ordinals of all the positions for the user.|`1st,2nd,4th,12th,21st`|
|QueuePosition|`%next.val%`|This will post the next/most recent postison number of the user.|`5`|
|QueuePosition|`%next.form%`|This will post the next/most recent postison ordinal of the user.|`5th`|




# Example Useage {.tabset}
## How to Use
In the Video I use rawInput as an example, in the following images you can 
## Start and End
Start and End Queue Will open the Queue fresh with no data, and when you end the queue that will remove all the data currently in the queue.
![startandendqueue.png](/extensions/user-queue-system/images/startandendqueue.png)
## Open and Close
Opening and Closing is your way of temporarily stopping users from joining, this will not effect the data already in the queue.
![openandclosequeue.png](/extensions/user-queue-system/images/openandclosequeue.png)
## Join
This is how a user can join the queue.
![joinqueue.png](/extensions/user-queue-system/images/joinqueue.png)
## Pull
This will pull out what ever is at the top of the queue system.
![pullqueue.png](/extensions/user-queue-system/images/pullqueue.png)
## Leave and Position
Leave is will allow a user to exit the queue and position will show where the user is in the queue. Remember this will only work if you are just adding `%user%` to the queue.
![positionleavequeue.png](/extensions/user-queue-system/images/positionleavequeue.png)
## Peak
The `!peak` command will allow you to see the next X amount of people in the queue, if the queue isn't that full it will output the whole queue meaning if you `!peak 5` and they are only 3 people it will show 3.
![peak](/extensions/user-queue-system/images/peak.png)


# Extended Features

## Output The Whole Queue To Logs.
The Latest Import Has This built in. 
### Import Code
```
TlM0RR+LCAAAAAAABAB9VNuSokgUfN+I/QfD11kNEOyWeRNURG26RSmUpR+oizRjFbBcVJyYf98C1m4vMWsEAZVZJ09WGnV+/vlHq9U+kDQL46j9vdX7qwYinxG+arebpY9yTmcc+btat1o/mxenQlzt6w/ITvax3yG7/nNH3j3hzkDu7ToDRcT9Z9JDkCiNVl30T0GKSj8qKP1CSeRDSiq9PC3IFX5CtMBkksZsGmZ5nJZ8y86n2dWei+FFHCxr8S8qSOMiqbiaaK3KLCfsivfp0S8zq4geVVM/wjEb1qd/ZFEcoSJNSZQ/cg+J3aR2Y/nLSg1jkqE0TP5rec/uCUmGNDyQh5aNYbIj3BAid51rUvvueU7IT3TMPO8lRGmcxbu8a47XnjdJuZtjnO6fZM87yF2hKwmSqHgey1Cc0hB2MaXta8H3286wzIkW4/pEeGMmkKHAlugZ6yB/PQrze2yxNw9QP9GtZCWw1z8v9phCBkrfeXkeLRMR9WjhluqabEzBdYRirdMCrTNTC4Q5moIQ6vSHoZvZdmOejbG5XI1pwbHCXQpzwvsZ2jAwpqq4ZadkW6oh7CmZMQay65gi1u14vrzs4Zohf2vNsxRVY7E/HVyBa7FBbFDTXoKZbYwV3ZhMgAXAxAj33GP8WcNx0d0A+jY1BcR43VkOEJtINsewYwdvK3Vkj4PC6gHB6p0OWzbJAJuUb4913+ba7IQdILp2/wM6drjQVAFFgM7Xtz55Hmc8Op3xdFbl+o1nIaJoRmFkWXX9aqgY09kHFpseC2od6hotSF4v+dSPyqBkBHOeHdbUxBgJwcsoC/zVcPCo2R9BCRS45rP0M8NG5zaTBqvPvdaVaOX0GSw/fuDNrHSdvtBkA6APhHs/Ctf5//9kD14tTX2zQtUCNgDWyrjXKN2NJSImBzwf0f3MrtJOlLs7laQExSwJ6W8uFSbUL1e5nz7e86sRqEhExDKUO+Rp4HdkXxh0IES7jigqCnmWBSyJ4l3jIwmDj0pU6Aq3TF4mlRml+t0yl2l2Mzpr5jfjs7EYYXKqGn2hvy6f7/dTS69a1APk/XrYUeonGcFXbEPWQs3OZrBflfIyxvgQvez/9S/u2on+cAYAAA==
```
### Installation

This code will just need a `!logQueue` command tied to the action and it may need `System.Core.dll` and `System.dll` if the C# doesn't Compile.

![logQueue](/extensions/user-queue-system/images/logQueue.png)

# Contributors

 - [<i class="mdi mdi-twitch"></i> TerrierDarts](https://www.twitch.tv/TerrierDarts)
 - [<i class="mdi mdi-twitch"></i> WaldoAndFriends](https://www.twitch.tv/WaldoAndFriends)
 {.contributors}