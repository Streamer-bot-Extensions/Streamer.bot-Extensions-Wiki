---
title: Dice Roll Game (by Geocym)
description: A game of chance for users to play in chat.
published: true
date: 2022-06-09T05:08:48.831Z
tags: 
editor: markdown
dateCreated: 2022-05-19T04:39:51.438Z
---

# Dice Roll Game [(by Geocym)](https://www.twitch.tv/geocym)
This is a simple dice roll game where viewers can challenge each other in chat to roll a 20 sided die each and whoever gets the bigger number wins. 

> Import code will be provided but it may need some tweaking once installed as it relies on speciifc commands so these may need to be created and re-linked after install
{.is-warning}

## Installation
To start off copy the codeblock below and import it into Streamer.bot, it should create 5 actions:
`Battle`, `Accept Battle`, `Decline Battle`, `Challenger Wins` & `Attendance Register`


```
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
```

Once imported you must then create a blank text file in a folder of your choice, this will get automatically populated with all users currently present in chat every 5 minutes. 
> You can reuse this same file for other actions if you wish, this file will serve as your whitelist for valid targets
{.is-success}

In my example I am using the file `D:\testList.txt` but any file name and path can be used.

---

Open the `Attendance Register` Action and <kbd>Double-Click</kbd> the `Set Argument` subaction.
You will need to set the path of the text file as the value of the `attendance` variable. 

![present-viewers-attendance.png](/extensions/dice-roll-game/images//present-viewers-attendance.png)

> You will need to use double backslashes between folders
> e.g `d:\\somefolder\\textfile.txt`
{.is-info}

Repeat the same for the `Battle` Action

![battle-action-attendance.png](/extensions/dice-roll-game/images//battle-action-attendance.png)

---

Go to the `Command` Tab and create the following 3 commands:
`!battle`, `!accept`, `!decline`

Attach `!battle` to the `Battle` Action
Attach `!accept` to the `Accept Battle` Action
Attach `!decline` to the `Decline Battle` Action

Set the `!accept` and `!decline` commands to `Disabled` 

![battle-commands.png](/extensions/dice-roll-game/images//battle-commands.png)

---

Go back to the `Actions` tab and double check that the subactions for enabling the !accept and !decline commands in the `Battle` Action are pointing to the correct targets

Similar for the `Accept Battle`, `Decline Battle` and `Challenger Wins` Actions, they each have subactions to disable the same commands, ensure these are correctly linked.

---

Finally, go to the `Settings` tab and navigate through `Events` -> `General`

Attach the `Attendance Register` Action to the `Present Viewers` event. This will begin the process of populating the file you created with all the users currently in your channel. Attendance will refresh every 5 minutes

> UPDATE : in testing it was found that typing user names in anything other than all lower case would cause the user protection to not find the user
To correct this, open the `Battle` Action, and open the C# Code subaction.
On Line 10 delete the ; from the end of the line and add `.ToLower();`
{.is-warning}


## Usage
To play the game simply type in chat `!battle ` followed by the name of the viewer you wish to challenge. 

If the viewer is still in the channel it will message them asking to type `!accept` or `!decline` and the game will proceed accordingly.

If the viewer has left the channel (or at least has not been detected by the most recent attendance check) the game will tell you they are not found and exit the action.

Only the named target can use the `!accept` & `!decline` commands, all other users will be ignored.

There is no timeout on when they accept or decline, it wil even persist across streams, but if another `!battle` command is issued it will cancel the existing one and start fresh

### Extending Functionality
The game is currently configured to only put a win/lose message into chat based on the outcome of the rolls, but it can easily be adapted to add a prize action to the winner.
The way I would suggest doing this is create a `Prize` action and then add it to the bottom of the `Battle` Action and also to the bottom of the `Challenger Wins` action. 
Actions called in this way have access to all the same argument variables so you can easily pull the details you need  

The game can be configured to randomise its reponces for winning and losing too to maintain interest. The easiest way to do this is to create a subaction group that contains each of your response messages and setting the group to `Random`