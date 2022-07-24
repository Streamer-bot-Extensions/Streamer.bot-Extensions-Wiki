---
title: Follow Bot Protection (by Caruha)
description: Checks if a follow is any of the hoss or other follow bots and wont continue sub action if it is.
published: true
date: 2022-07-24T04:36:13.000Z
tags: 
editor: markdown
dateCreated: 2022-06-14T23:19:21.471Z
---

# Follow Bot Protection [(by Caruha)](https://www.twitch.tv/caruha)

## Description
Checks when a user follows if it is any of the hoss or other follow bots and wont continue sub action if it is.

>There are two different versions of this extension.  The first one is a simple C# code that checks for follow bots and the other reads from a file that contains a list of bot name.
{.is-warning}

# C# Version

## Installation
Copy the text from the code box below into the `Import` box in Streamer.bot to add these to your action library:

```text
TlM0RR+LCAAAAAAABACdVtuOm0gQfV9p/8Ga53gExoxNpDwYxmA8Y498A8M6D91NGwjNZbl5cJR/32qwd26JtFlLyNCnqvqcqmqK73/+0evd1DQvwjS5+dwTP7ULCYopPN2oaakFlEQ33TIiJZgVgPzFn3u9790fQKHH7YfKHRqg4agvoSPpDxWM+wqV5b4wHsnSUabKSLjrYrVOf1e04vskFWMvqzRBmFEer8wr+rL+npSeMpaeXoXz87TKLhY9LY0xKl+hiJ1QU6yr5EPgHCVeGk9acQAeESteoSRNSJXnNCk/Yh8S8iYp/4l1a+TRguRhdiFwQ7hh0QuPPT+sadJDeY6aHhApUZgUvaqg+bsAEaXZhIHxB46dQnqkoIDQd1RbUPt8ONghpOBUHA6LkORpkR7L2+V0ezjoOdA/pXl0ONTDW+FWEiRRORzigqQ5C/Gtx9hbJv8v3qYpShq30V4H+/pWBW5KqqVem05vv8xwTPydxM6eYZVPJ+Hh/dpjtKyx8cwcaZ3hgXx+jDyGY6tB9mJ0v0qXWqKKTvycOY36DRv6mTTq/W4azDGs4XgHeLHUfHby7HkBPr4TKzXWVJ0a1jdvv2YPWsRxHmuubca1qU0Dc6MKyGBnc+Zl2DiBj16ZU32x1dTMNETm2EN/tXtemDPr7O7nYLdOnf3KR7C/aegV3ai1G/IYgG/UszebAxePY2CrBiRZ+Xjg+J4RMNOQA2zvfHMzDVoO+6VAYla5YumZxrz29Mse94JPm3m6uLcEMzz5ZuyfiLQKH7VJiAzl7GlmYWrzFEvL8wu++Bdfbjp8MVuIgIPmaK6t2itE9xORNBf/s3XxD+rldtf5A37xLzxbDkh4vR8Kl/vSsWWoEwvMRBiZGuTR0CNXUyvHFhnURMDNJaeG3pBYl1utK+FBW7GBszd9qDsj4UThuCstsZm0up+4v8mEyjKUbZdHkj5sC/+xGfvuwBJIG3d38e/2a/sC9HEbklhVazODXNpeymsFNYEazAO6UQoE+TYNJW5zfeHb1Wh9bjnabk1iK3AGfurFemPOfB9B/aGPBIvvmSwyeuI6+H5KBnXPIE6MbDmCfQPol8AzlmmnlwEeiGRgNW1fJ+sA7M4PMz972BeXmjDoX7/aGkqyseUYN35kRvMAh+qi5Tp98XsK1VGrOxFCnpNuj2i+ElXzkXkB2kMitpPsqZnUj8DFNdYManLGtl7AGYhc+xlyMFlq4cQ3tQ9X/SgsVxtN3rqgZWtbZzLQE3cDfEIl5GeASm2NFFNfikRS+Rnl8TXc9qUaO/Yz9H906QfQkCyudZLQfg21mDNnD3pCfl4m4Q7iEX4uDSsyp7wepg99FV3PIfeFOA0e6JEz0Pn7oYF++eYMFBEnq1/oUBt3vxZJPPTdWC/IYNfycRLY2y7P5qSr3bHrReXaO20Oo+faFeAsxmNI7FzlHNYDpXa1aXjtQQx9YBrTth9Mg1U/66/uXM+ZN7Ma0CpAT7KnU8Rr8g3eaQLUUnT3C59IVvho66Cf1dgHPnsB3l9w+V++vJsVWU5JGmch+8Ww8ChDzaZE+ceB1+LdqJeJPJTGMOplbyj1hwPvrj8W8biP75QhRiMPSXf43cYnGvoBDyrcCm+Rssk4GYX/3iLXmf7mE6GjkXj0mQd7Wf3x6VdTuEas/dK4yaqy16RV3ju2c7jXTfAepu1TGYQFzNk45tP+Z6pFRRyPCTr2BYK5amXcH3t3qK8oo6PsHYfiUJJ+V7UoCL8tWnwl+nr79f13icHDtBP/6+vPGcZQVlDvFdqBbaDOsvsyu4I//gGSyYJNJgoAAA==
```

![follow-bot-protection-import.png](/extensions/follow-bot-protection/images/follow-bot-protection-import.png)

## Configuration
Tie the `Action` `BotCheckFollow` to the `Follows` `Event`.

![follow-bot-protection-event.png](/extensions/follow-bot-protection/images/follow-bot-protection-event.png)

Insert the `Follows` `Action` after the `Comment` in `BotCheckFollow`.

![follow-bot-protection-comment.png](/extensions/follow-bot-protection/images/follow-bot-protection-comment.png)

# File Version

## Installation
Copy the text from the code box below into the `Import` box in Streamer.bot to add these to your action library:

```text
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
```
![follow-bot-protection-import2.png](/extensions/follow-bot-protection/images/follow-bot-protection-import2.png)
![follow-bot-protection-import3.png](/extensions/follow-bot-protection/images/follow-bot-protection-import3.png)

They will now be in the `Actions` tab.

![follow-bot-protection-actions.png](/extensions/follow-bot-protection/images/follow-bot-protection-actions.png)

### Check References

#### BotCheck Refs

![follow-bot-protection-references1.png](/extensions/follow-bot-protection/images/follow-bot-protection-references1.png)

#### BotCheckAdd Refs

![follow-bot-protection-references2.png](/extensions/follow-bot-protection/images/follow-bot-protection-references2.png)

#### BotCheckRem Refs

![follow-bot-protection-references3.png](/extensions/follow-bot-protection/images/follow-bot-protection-references3.png)

#### BotCheckBanToggle Refs (should be there by default)

![follow-bot-protection-references4.png](/extensions/follow-bot-protection/images/follow-bot-protection-references4.png)

Open `Execute Code (******)` by double clicking or right click and choose edit action.

Press `Find Refs` if Streamer.bot won't automatically find the references then they need to be added manually. Right click and press `Add reference from file...`

![follow-bot-protection-find-refs.png](/extensions/follow-bot-protection/images/follow-bot-protection-find-refs.png)

Reference files can be located at:  
`C:\Windows\Microsoft.NET\Framework\v4.0.30319` or `C:\Windows\Microsoft.NET\assembly\GAC_MSIL\`
It is recommended to search both folders and use the one that works for compiling.

![follow-bot-protection-references5.png](/extensions/follow-bot-protection/images/follow-bot-protection-references5.png)

After adding it should show in the `References`!  Hit `Compile` to see if all is fine in the `Compiling Log` tab.

![follow-bot-protection-compile-log.png](/extensions/follow-bot-protection/images/follow-bot-protection-compile-log.png)

After successful compile hit `Save and Compile`!

Copy the `sub-action` and paste it to your `Follows` `sub-actions`.
>**Skip this part if there is no follower action or use another bot to show them!**
{.is-warning}

![follow-bot-protection-copy-action.png](/extensions/follow-bot-protection/images/follow-bot-protection-copy-action.png)
![follow-bot-protection-subaction.png](/extensions/follow-bot-protection/images/follow-bot-protection-subaction.png)

or add with `Add Action` -> `Action` and choose the `Action` `BotCheck`.

![follow-bot-protection-add-action.png](/extensions/follow-bot-protection/images/follow-bot-protection-add-action.png)
![follow-bot-protection-subaction2.png](/extensions/follow-bot-protection/images/follow-bot-protection-subaction2.png)

 >Make sure the bot check is at the top!
 {.is-danger}

 ## Events
Set `Action` `BotCheck` to trigger on `Follows` `Event`. 

![follow-bot-protection-events1.png](/extensions/follow-bot-protection/images/follow-bot-protection-events1.png)

or if there is no `Follows` `Action` just put `BotCheck` `Action` in the `Follows` `Event`.

![follow-bot-protection-events2.png](/extensions/follow-bot-protection/images/follow-bot-protection-events2.png)

Press test and a file will be created with a few bot names (all �hoss� variants).

## Adding bot names with command
Add a `Command` called `!addbot` tied to the `Action` `BotCheckAdd` set to `Start` and set `Group Permissions` to `Moderators`.

Whenever a Moderator does `!addbot <Username>` it will get added to the `botlist.txt` file as a new line.

![follow-bot-protection-add-bot.png](/extensions/follow-bot-protection/images/follow-bot-protection-add-bot.png)

## Removing bot names with command
Add a `Command` called `!rembot` tied to the `Action` `BotCheckRem` set to `Start` and set `Group Permissions` to `Moderators`.

Whenever a Moderator does `!rembot <Username>` it will get removed from the `botlist.txt` file..

![follow-bot-protection-remove-bot.png](/extensions/follow-bot-protection/images/follow-bot-protection-remove-bot.png)

## Add Ban Toggle (Off by Default)
Add a `Command` called `!toggleban` tied to the `Action` `BotCheckBanToggle` set to `Start` and set `Group Permissions` to `Moderators`.

Whenever a Moderator does `!toggleban` it will toggle auto ban on or off.
>By default it is off as the variable does not exist yet. Variable will be created on first use of !toggleban it will send chat message of `@user Ban: False or @user Ban: True`
>False = Off and True = On
{.is-warning}

![follow-bot-protection-toggle-ban.png](/extensions/follow-bot-protection/images/follow-bot-protection-toggle-ban.png)

## Botlist File Info and example of false ban
Names can be part of the whole username in case of hoss these cover them all that are known so far.
It is **recommended** to add as much of the name as possible, so there won't be many false bans for legit users who follow and have the string as part of their name. 

>Hoss uses all variants of hoss00312 / h0ss00312 and that is why it has only 4 first letters added.
{.is-warning}

![follow-bot-protection-toggle-text-file.png](/extensions/follow-bot-protection/images/follow-bot-protection-toggle-text-file.png)

**Here is a case of false ban**: If a user named `�hasselhoss�` for example comes to the stream and follows, they will get banned (if ban is set to true) as part of the name is in the list of bots!

>botlist.txt file will be located in the data folder!
{.is-danger}

![follow-bot-protection-toggle-folder1.png](/extensions/follow-bot-protection/images/follow-bot-protection-toggle-folder1.png)
![follow-bot-protection-toggle-folder2.png](/extensions/follow-bot-protection/images/follow-bot-protection-toggle-folder2.png)

>The file can manually be created but the file name must be botlist.txt and names are one (1) on each line!
{.is-danger}

## Bots known atm:
hoss
h0ss
ho5s
h05s
hos5
h0s5
ho55
h055
h0st
host
h05t
ho5t
lunar_
lun4r_
manolia
blueberrydogs
