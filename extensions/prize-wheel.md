---
title: Prize Wheel (by MarkusoOoO)
description: 
published: true
date: 2022-05-18T01:56:58.255Z
tags: 
editor: markdown
dateCreated: 2022-05-18T01:56:58.255Z
---

# Prize Wheel [(by MarkusoOoO)](https://www.twitch.tv/markusoooo)

## Description
Fully customizable "Wheel of fortune / Roulette" working with from OBS v27.1.3!
Please treat this as an empty example working template.
You can find all files together in this [link](/extensions/prize-wheel/files/Roulette by MarkusoOoO.zip) in zip folder and all guide information in "Readme.txt" file. 
There are two options inside this zip folder, one is making items in wheel to be horizontal and second option is making text to be vertical, so choose one which suits you more to start with (you will find later on, that there is option to modify it yourself).

## Prerequisite
*Streamer.bot v0.1.4+ (I will refer in this document to Streamer.bot as "SB" for short from now on) >>> https://streamer.bot/
*OBS v27.1.3+ (if you are using v27.2.0+ please make sure to also update Move transition plugin (find link below) to latest version, otherwise your OBS will crash) >>> https://obsproject.com/cs/download
*OBS Plugins:
	- Websocket server plugin by Palakis v4.9.1+ >>> https://obsproject.com/forum/resources/obs-websocket-remote-control-obs-studio-from-websockets.466/
	- Move transition plugin by Exeldro v2.5.3+ >>> https://obsproject.com/forum/resources/move-transition.913/
	- Copy source plugin by Exeldro v0.1.3+ >>> https://obsproject.com/forum/resources/source-copy.1261/

## Step by step
1/	Open SB and in `Actions` tab right click and select import. Navigate to path `../Roulette Example Horizontal(Vertical) Text/StreamerBot Actions/..` and you can either drag and drop `Roulette.txt` file into import window
in SB or copy this `Roulette.txt` bunch of symbols into `Import string` field in SB import window. Hit import.
```text
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
```

2/	In SB in Actions tab should appear new actions in group `Roulette by MarkusoOoO`. Look for action called `Roulette Answer`, right click on it and select copy `Copy Action Id`.
We will need this ID in step 4/, so store it somewhere, or keep in copy universe.

3/	Again, in SB navigate to tab `Servers/Clients` > `Websocket Server`. You can keep default setting (`Address: 127.0.0.1`, `Port: 8080`, `Endpoint: /`, !IF you NEED to change them for some reason, 
you will have to change those settings also in file `../Roulette Example Horizontal(Vertical) Text/Roulette Source/script.js` on line 3, which we will modify in step 4/ of guide). 
You can tick `Auto Start`, to stop worrying about this server not starting and hit `Start Server`. All done here.

4/	Now, we need to paste our Action ID from step 2/ into `../Roulette Example Horizontal(Vertical) Text/Roulette Source/script.js` on line 4 between '' (replace text `PUT YOUR ACTION ID IN HERE`).
Now is our roulette comunicating with SB. Which is, I guess great success, or something.

5/	We can now open OBS and using Exeldro's plugin `Copy Source` import scene `\[NS] Roulette by MarkusoOoO` into OBS. In OBS navigate to `Tools` > `Source Copy` > `Load Scene` and select
`../Roulette Example Horizontal(Vertical) Text/OBS Source/[NS] Roulette by MarkusoOoO.json`. In OBS should this scene appear with one hidden browser source called `[BS] Roulette`. Nice! Make sure to right click this source
and select `../Roulette Example Horizontal(Vertical) Text/Roulette Source/index.html`. When you click show source, you should see roulette spining. If roulette does not appear from center with zoom effect, you probably
do not have `Move transition` plugin installed correctly. On roulette is 12 options (which can be modified ôater too), currently called from Test1 to Test12. Ok, hide this source again.

6/	Back in SB, lets have a look at action called `Roulette redeem`. Check that Subactions `OBS Source Visibility State` are pointing at our browser source `[BS] Roulette` in OBS. One is on top,
which is making this source visible and one is second from bottom hiding this source again. Just double click on them and make sure, they are pointing on `Scene: [NS] Roulette by MarkusoOoO`
and `Source: [BS] Roulette`. When you click on dropdown menu and do not see anything (or if you click test and source does not hide or appear, depending on subaction), 
you probably do not have connected OBS and SB with `Websocket server` plugin.

7/	Only thing to do now, is to test if everything works as expected. You can create new command in SB for that. In SB navigate to `Commands`, right click > `Add`. 
In `Commands` section fill in `!test` for example (this is command which will trigger our action via twitch chat) and in `Action` select `Roulette Redeem` action.
Now, if you write `!test` into your twitch chat, you should see roulette appear and after it stops spinning, you should see text in your chat appear. It says what redeem you hit
and what is actual result on roulette. If everything matches, congrats, you made this work! Now you can customize it for your needs and desires (or make out with your favorite unicorn plushie) <3

!IMPORTANT - I suggest to put action `Roulette Redeem` into its own blocking queue in SB, since it would not work properly if it would get spammed and overlapped! Or put at least 5 seconds global cooldown on command 
or channel point redeem which is triggering this action!


## What can be customized and how?
1/  Obviously, you have 12 actions in SB, and those can be changed to your needs, if you want to change titles of those options, you have to do TWO things:
	1/ Change title in `../Roulette Example Horizontal(Vertical) Text/Roulette Source/script.js` on lines 10 to 21 (in `prizes` VUE  variables list)
	2/ Change value in coresponding IF statements in Action `Roulette Redeem` (double click coresponding `if` statement and in field `value` change one of `Test#` to your desired title)
2/  You can change all colors in `../Roulette Example Horizontal Text/Roulette Source/style.css`, this requires a bit of CSS knowledge
3/  If you know your stuff around frontend web-dev, then you can fully customize how this roulette works and looks (from timings to number of fields, etc..). I will list some advanced modifiers below.

### Vertical / Horizontal text
All I did to make text vertical is, that I added below three lines in `style.css` into `#wheel p` on line 120:
```
-webkit-transform: rotate(-90deg);
-moz-transform: rotate(-90deg);
writing-mode: vertical-lr;
```

### Probability / Weights option
When you open `script.js` REPLACE WHOLE `line 40` with code below. 
Notice numbers in brackets `{ ... }` after weightedRand12 in index variable... those are prices/items in wheel, starting with `0` - which corresponds with prize on `line 9` and ending with `11`, which corresponds with last item in prizes at `line 20`. 
After each prize is colon `:` and actual weight. In example below, we are saying wheel, that probability to land on `prize 0`(`line 9`) is 25%,  probability to land on `prize 6`(`line 15`) is 50% and probability to land on `prize 10`(`line 19`) is 25%. All other prizes have 0% probability.
When you will be customizing those numbers, make sure you are adding into sum of 100% (to have full control of probability).
```
function weightedRand12(spec) {
          var i, sum=0, r=Math.random();
          for (i in spec) {
            sum += spec[i];
            if (r <= sum) return i;
          }
      }
let index = weightedRand12({0:0.25, 1:0.0, 2:0.0, 3:0.0, 4:0.0, 5:0.0, 6:0.50, 7:0.0, 8:0.0, 9:0.0, 10:0.25, 11:0.0});
```

### Add / Remove number of prizes / items
In `script.js` starting on line 9, is array of `prizes`. Just delete/add how many prizes you want to have in your wheel (example with 3 prizes will is on image below).
![prize-wheel.png](/extensions/prize-wheel/images/prize-wheel.png)

In `style.css` I did a little change to make this easier to modify. On line 94, there is css selector for class `bg`. On line 95 you need to change `transform` value to this > `rotate(calc(360deg/X));` where X is presents number of prizes you want to have in your wheel (look at the second screenshot below for my example with 3 prizes).
![prize-wheel.png](/extensions/prize-wheel/images/prize-wheel1.png)

If you want to have more than 12 prizes in the wheel (so, to add more of them, then what is in default template), you also need to add more code, because in `style.css` starting from lines 75, there are classes specified only for 12 prizes. So just copy code from below as many times as you need to, to manipulate those backgrounds (otherwise those backgrounds will stay white). Just change X for each prize number starting with 13 and put your RGB value in background-color.
```
#wheel .piece:nth-child(X) .bg {
  background-color: #"RGB VALUE";
}
```