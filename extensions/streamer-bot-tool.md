---
title: Streamer.bot Tool
description: A Handy Tool to Assist you when building.
published: true
date: 2022-12-22T12:29:55.670Z
tags: 
editor: markdown
dateCreated: 2022-12-22T01:37:47.752Z
---

> This Tool requires Streamer.bot Version 0.1.15+ 
{.is-danger}

# Import File

- [<i class="mdi mdi-file-download"></i> **Import Code *Click to Download***](/assets/streamerbot-tool/streamerbot-tool.sb)
{.btn-grid .my-5}

# Installation
Download the Import File. 
Open the `Import Dialog` by pressing `Import` from the top right. 
Drag the downloaded `.sb` file into the `Import String` then press `Import`

You will Import 1 Action. 
![actions](/assets/streamerbot-tool/action.png)

You will need to make sure that your Websocket is enabled, also that the details match with the `websocketURL` and `websocketPORT` you can see how the image below matches the image above.
![websocket](/assets/streamerbot-tool/socket.png)
References Should Import, however if for what ever reason they don't heres a small list of the ones you may need.
```
mscorlib.dll
system.Core.dll
system.Data.dll
system.Windows.Forms.dll
System.Data.dll
Mircosoft.CSharp.dll
system.dll
newtonsoft.Json.dll
```
If the code compiles then you are ready to open the tool.

# Configuration

When you are ready you just need something to trigger the action, a button on a StreamDeck or a Command either work. 

## How To Use 

Once you've triggered your command it should open like so.

![toolMain](/assets/streamerbot-tool/tool1.png)

You have several things this can do. 

### Run Actions
You can run actions to test them, Select the action you want and press `Run Action`. You can also add arguments with this if you click on `+Args` another menu pops up.
![toolArgs](/assets/streamerbot-tool/tool2.png)
Here you can enter a `Name` and `Value` to all the Arguments you would want or need. You can then `Add` or `Edit` the Value of said Argument. You can Just enter a `Name` and press `Delete` to remove that variable. Clear will remove all added variables. 
> If you wish to `Delete` or `Clear` the Tool will need a restart, deleting will just delete the one wanted  removing and will keep the others in tact.
{.is-warning}

When Running actions It can if you wish feedback messages, if you would like them on you can control them below, you have the option for a message for when you send a request, then it can either feed back a successful message or a fail message. All 3 messages can be controlled.

### View Log

Included is my previous code to view the log easily, this should open todays log file in the default application for `.log` files. By Default in Windows this will be Notepad, however many other programs such as Notepad++ and Visual Studio Code have a monitoring feature so the log will updated in real time.

### Variables

Variables in Streamer.bot fall under 1 of each of these categories they are either `Global` or `User` meaning they are either tied to a specific user (`User`) or they are `Global` so tied to the bot rather than a person. An Example of a `Global` would be a Death Counter and Example of `User` would be Points. All Variable along with been `Global` or `User` are either `Persisted` meaning they get saved even when you close the bot or `Temp` meaning once you close the bot they are removed.

Depending on which variable settings you want to work with you can Check or Uncheck the relevant settings.

The 1st box is the Variable name. The Second box is the User (if using globals this will be ignored) and the last box is the value you want to set to (likewise if not using set this is ignored).

So once you've entered the variable you want and optionally entered the other information you can do 3 things. View, Delete or Edit/Set the variable. 

When Viewing it will look like this.
![view](/assets/streamerbot-tool/viewvari.png)

If the variable you've chosen has no value it will report back this.
![null](/assets/streamerbot-tool/nullvari.png)

When Deleting it will look like this.
![delvar](/assets/streamerbot-tool/delvari.png)

When Setting a Variable will look like this.
![setvar](/assets/streamerbot-tool/setvari.png)

# Addition Information
It's Important you do not try to run the tool from within the tool.

It's also Important to Close the Args Menu before closing the Tool as this can cause Streamer.bot to crash.

As noted on the bottom of the tool, this is for Testing Purposes Only and should be used as such, best practice would be to use inside a testing environment if possible.

# Contributors
 - [TerrierDarts](https://www.twitch.tv/TerrierDarts){.twitch}
 {.contributors}