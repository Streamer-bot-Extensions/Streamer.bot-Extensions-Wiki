---
title: YouTube - User Queue Systems(by TerrierDarts)
description: Apply a Queue system to your stream so Viewers can Join or Line up their Ideas
published: true
date: 2022-09-24T19:49:12.971Z
tags: play with viewers, user queue
editor: markdown
dateCreated: 2022-09-23T16:31:29.084Z
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