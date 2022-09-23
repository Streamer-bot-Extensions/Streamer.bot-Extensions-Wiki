---
title: Youube - User Queue Systems(by TerrierDarts)
description: Apply a Queue system to your stream so Viewers can Join or Line up their Ideas
published: true
date: 2022-09-06T22:02:56.467Z
tags: play with viewers, user queue
editor: markdown
dateCreated: 2022-05-17T01:05:41.733Z
---

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

# Contributors

 - [<i class="mdi mdi-twitch"></i> TerrierDarts](https://www.twitch.tv/TerrierDarts)
 - [<i class="mdi mdi-twitch"></i> WaldoAndFriends](https://www.twitch.tv/WaldoAndFriends)
 - [<i class="mdi mdi-youtube"></i> Haunter](https://www.youtube.com/channel/UC9qO6-NFvWwhde5o2B_DMzQ)
 {.contributors}