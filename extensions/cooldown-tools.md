---
title: Cooldown Tools
description: With these tools you can make the most out of cooldowns!
published: true
date: 2022-08-13T15:25:36.027Z
tags: 
editor: markdown
dateCreated: 2022-07-19T15:54:51.993Z
---

# Cooldown Tools

With these tools you can control cooldown.

## Tool to Set a Cooldown Amount

### Description
Using this extension you can set global and user cooldowns through chat commands.
### Import Code
```
TlM0RR+LCAAAAAAABAC9V22TokYQ/p6q/Iet/Ry3BtTb5b4JKwi6ZEUFJd4HhmFxjuHlQFS8uv+eBnTFl00uqVSsooTunqef7unpmfn+6y93d/cbL81oHN1/vuN/qwSRE3rwdX9ffzruGtQZSP4ov+/uvtd/oKKktGsjzxEEvtNqd3jc6nTwY+uJexJabcF97HAYuQTxNVY16Fvu5SV+lDN2knqRg5lX4q3T3GvIdy7LiSencTig2TpOCzB5c1jWsDkSnnjrOymOGYm3UcOhn8Z5UupFJ6NuQ+GwrVNkRh5dQ6ZOROKwV4V+rXXjyM3T1IvW17qrdJ2l7Cf4VibEy9yUJgf39xfawPOSHqMb78p9Td5784Cc612wqJTS5+XSohDdNlsuX6ibxln8tn7Q+9PlUk6B2TZOg0+d5XLTeUAPbdTmhOUyzNw4ZRQ/EMbOufxbxEmRrb2wwmvCfTmPBBdrT4pJlS0y1xMcuv6szfZEMde/b9HwUjYK2GtTPg3NNlGE3OWFkEjdIfzno2CX4Kj/+DyOdSkSuUW4SxaF+BUr8t4txOdZf6VhkOFwBvpMl2jPVyVxSywtc6wXfxEKGyyJsqeYX8ncYEMpONqUmPDfq5++Pp5I3RfME8CzN0NJmxmmPlNpcG430JEbstwuxNCxdmymyMiReoLa71Eb3hfmbm/PDeRY3cgtut/KGNSvR17147aNotSrSrLHfHdKBqr/OhGVEm/ENLawDBEru5k9X6GhYidYMceLuREPp+c4k0CgTghxSeLJJyoxOyXecMpr32xLRyMmrtxIZ8OTv6TM+3tM0slWVfQNtrgVDo39JIJ3CrENdEYGBuSYHGRda2HtOHu6ex/3Sn264IU1tuTclk/2V/nrJ6IbaStvAnPIc+uF1Q3Gc61YzIOS87vsEEduhnJGrNnTJJALN5S7Z34GL/QyJ3YoFLYlf4U5iRv5Kew5Wbnh2Hesjv8+vl9jDsdnuTjnW8v2ZKBVNVqNDeW1PSnzojHCy4UtZydOkkZGzNjMDnMM9fa3eI41LmM/cDSwGrJAZSg3FWF6sLua++pRoNlKYoQVgcJ8PGNeyNRn5I+h5khoFrCGZhiBzfNLMVSAZ1svsXN3YKIXesXzoiYuahVidecmc9sVV+BJ9lYB3GBNkuc+nU/AF3dcG/5NLBLKhTowVi6f3cDo/RSGYy38YVWj3RW2Zv7rFPluaO6IZe4hF09vUlVD+cLiGORCUCV1pdJe2uCf3JiPG3PU8HfkDL7UkGSY11ZYUm/g1I93g3fDF/QsPx8310r/gNmHuPhdgNskNwYmrAlYQ3wnPtRIpipNu+3N/Fz6mfEm1DkHcesrm5/FanDkL1b1YitCG1Nxas/HV2upgSVU/fe2LrFpLybQj52iJ7xOehT6OXPpf5gf2YT+pp34BgYH6xb6nZDXtcCC0cU6+DiW+hlzojpiOoM+p9tzfb+wCOwNmunyZqE25kEt/UuX/bLxDJAu+R/oFBaq0got5npa16JGcduIoSd+lMsP67CxRz0feyTMLTL43WYBPRLytcGKsSF8t0/m2oooDPr0qlwLiS1tfbtpd7Mn/bUfs5zT4H+tT9iDxn7ll/7jWr2Ub0boPKaxZQTQX8t9tprzRv72p5rqbVUJ/UzujviN88OYWpbAnfqOwezBGnq8zEG9obdJJx/R7sxRZnDuKfcTMYHzzOP7/jJHfskT+mUMOs2QTnrHMoSrffVW7Fe1We4x5drp+LCvwP79fl6CcYlwcW5NUs+Nw4SyDw6uxGNOMVk76fW5utLX9423LveI3wShJTiIb3WER9RyHtFTi3N576379IlDHXTheOtRf1WCogd0rlkXSUlGKH/nmuO14eyeUmk+uKvUFCPi7UpHJ+mP4+uXy1uCUrqoDulfmpcLxpwk80hDWysroNqyvkU1hsKwMIRLy9H+x5/1hpxS3Q0AAA==
```
### Installation
In Streamer.bot in select `Import` from the top left.
Copy the `Import Code` and paste it into the `Import String`.
Ensure that the C# Code that has been Imported Compiles, if it does not you will need to add the following References:
```
System.dll
System.Core.dll
```
The Final thing you will need to do is create a Command, I would recommend at least with Mod Permissons,  you can call this command what you wish but `!setCooldown` seemed good, and link it to the newly imported action.

## Example Usage
```!setCooldown <target> <command> <time> ```

`target` is `global`, `user` or `both` depending on which cooldown you wish to set.
`command` is the command.
`time` is the how long you wish the cooldown to now be.

> If your command location is set to `Anywhere` then you may trigger this or the cooldown action when using this. 
{.is-warning}

---
## Tool to Remove The Current Cooldown 

### Description
This extension will remove both User and Global Cooldowns on the action you tell it to so it can be redeemed again.
### Import Code
```
TlM0RR+LCAAAAAAABACtVtuSokgQfd+I/YeOfl47CtBumYh9EFoQtZ0WFZR1HqiLSFNcmouCE/PvW4C2oj2zGxtrBAFkZp08dTIL8/vvv93d3e9InLhhcP/ljv+jMgS2T9jb/X39aqOUuRNm+at8v7v7Xt+Yy8Vl3IbDtoA6sPUocqDVFkSh1QXwscW3sd0BbX5DhE2NVS16z0hW4gcZpWcrCWxISYmXxhm5sOeIZpgocegP3CQN44KFbGyaXMScCOvED3fkTg5DisN9cJHTicMsKkMkO3HRhcOme7tI9Cy4RY3tAId+r9r9rReFAcrimATpre9GsYZqn1KuoT6hXkVjkqDYjY5M7q+8HiFRj7o7csOk3gfZEAaOyBWhyil/Wa9Nl210n6zXLy6KwyTcpA+T/ny9VmJGch/G3mN7vd61H8CDAAROXK/9BIUxdeEDprTJ5b8izookJf7/jieHMalALzG/NeWBRUrkEFfVwMtJBH3kLAR6wKqRft2D0bVt7NHXS/vcNwSsihniRR/LnRG7Z2Mvj2DQf3qehhM5kLiVn0erQnqDqnJAhfS86G+HkNmgv2D+ZCK7PUeTpT02h4ltvjgrX9xBWVKIarzhpU5HsneKKTHZvVdfgwlAPs2sQvJtM6cLVQG23BO1fs+12PPKyA/WUge22QlQ0XkvuWlvp3z1hQS9KP2aGh0g35njgea8ziS1xBvTIV2ZugTVfGEtt2CkWhFUjelqqYejeRNn5omu7TO+snTOCUrMdok3mvPDd8ucgDGVtiiY0NE5X1Tq+bEn+RyrqZMdNLkt9PXDLGDPLtvbYELxQGfa4aOtY67MnLPm+ce6V9dxV7yYQlPJLOUcr7leU79+JKFguCUzVhueS1dmx5suh8Vq6ZWcP2zHfWSGryTYXHRnnlIgX+k08gxe3GtNLF8sLFN5YzUJL/QprCXeIn/q2Gbb+VjfrzFH04YWTb617YAHw6r3qrW+klqzUpchxbxSWEpy5iQP8Zjqu8WxxqyP/hHPNqfl3o8cdaj51NMoyAxVnB/jbmpfXSr7TstSAFXRZfV4hryYaM/AmbKew75RsLOxgIDFPL8UowuuFp/vVkxXFreDqr7DfNtdzlgsd+ptJ/pFPg7xRlGtrfqe9UNgURRMS75DGEwPL+72vJfAYL05rLhZqihA90afq168OiOMN1oaFAmVRgwTH8yi7BfMckkc/nd6R5bbCy9rV+utcNaS9fwg79Z939lCc+G8zoGjuX1XkxMH+UaOTeOAP74HF9fgE43qfOx742TTc595lqLv9Fvdw2P9Wd16znjWrOWnNfgF/tTME2M5ochje+FzDwo4Q8W2PFORJe+dF7mXaoNzPT7H7+6mnKSx7+nOYr1j+d1wKA8tKCzOWqiGR4RTXXRx7LYzVoPQmklfVyZHWZ8ctEFa5s3K9w2rG2RnD6tbqvVp/8IfWQNwc4ZrbUHDtmFntPkdZv08MAroSgAFBv3ooXJdAP68+sOOYoJCP3LpT/6xMaF2MUvt+Ha2qPz12CUA9PgEuo8tsAGk1e7yuGUDDrY2T0822DxtuHabu0q8J66zLUHBA2h60iIqyYjlr+k5jU6Nca3y/GRkqykGmORlorP1x+nx2/WkpJYpqunk2+WARakdJQRfeGtnBVRH1sPkxVK2zPfZ4HaK//E3PPprruQKAAA=
```
### Installation
In Streamer.bot in select `Import` from the top left.
Copy the `Import Code` and paste it into the `Import String`.
Ensure that the C# Code that has been Imported Compiles, if it does not you will need to add the following References:
```
System.dll
System.Core.dll
```
The Final thing you will need to do is create a Command, I would recommend at least with Mod Permissons,  you can call this command what you wish but `!removeCooldown` seemed good, and link it to the newly imported action.
## Example Usage
```!removeCooldown <command>```
`command` is the command.

> If your command location is set to `Anywhere` then you may trigger this or the cooldown action when using this. 
{.is-warning}

---
## Add User Cooldowns to Channel Points
### Description
This code will allow you to add user cooldowns to channel points so the same person cannot redeem the same reward.
> Note, the redeem will still be triggered but if its under cooldown nothing will happen and the user will just be refunded. {.is-info}
### Import Code
```
TlM0RR+LCAAAAAAABACFVltzokgUft+q/Q9WntcUgsYwVfOgKAhGElEuss4D3Y3QsbksiAan5r9vN+QCmslYRTX06fOd79za8/Pvvzqdm6Of5TiJb751+H+qjdiLfPp1c1N/evBAxTnd+Zd9dzo/64WKMGLnOHTP9YYe30Ue2nX7d3fDrsj5XpcH3P0dAh5CANRYldJ/hV8w/Lgg5GPXjz1AfIZ3yAq/sf8CSYF8OUuiGc4PSVbSIzuP5I0zb4Sl0Itjn3SeEhwfOmbuZx0pSQhKTnHDfpAlRfrhX7XnkZNX5kYRX4NnXoySaFQF4VoKkxgWWebHh2vZVeBawfuM+ZfEKwXk5zDD6SuZmwvp3vfTEcFH/4pM7Yq/8ylV6F9wqoTSt+3WxtTXU77dLjDMkjzZHW716Xq7lTPK85Rk+7v+dnvs33K3Aif0xO02ymGSEQxuESE3TcAfbcugPPhSgipfkaOnIIKBKZAzUqzD44mbT5bpCdla7tmLYMO/hFBYBMveWF3ZA7o3IKp0f1yaurkyxUezHE/WnLgwpqKzxuzdkKn+cLJMAlUaBXBmYaCQZ1XRjoA/MRwL8la55MUjUIwj4vvJfMnN2Vl1lusSHlV67KG2OFXRqd7LHgioUCdcQPUKFFklkgYm4GgxThblXJFLV9CBGmsE8fR92tAhXGEp4hrNNOZnMl/t37nVNt0Q4nGPcWL4G0eLYS/HNC4EYg09EONoCkZJucRz6UJ3qi9X0mABeKSByD3OZ9bZddSUxfD9jDTmN44agEg+uKuRqF5xHYTANrGzov70dA5GpHDL4FMMGFl71+6dkEKOALexXJo7ODNSwA80V/oD79rn0nVQCKNl8LQa0xWd7VJ73TP+jDE1Qlovpmf3iKoMjqhHbdsmw5puHINYCqH+Dh6BAL/QY7VlVO8X/mLAi3mFO3VTGOscy42hyJxrVXYKa6YNTOo/5M2E1ebDHhEkG4LnGM+ezPKg2TRm9/CV/xMOqxw/SONiQ+3RNdrYL2d3tad2xB6SxvnG0bma94WvColUKSyAYCieo52RtG/Vqd/iXj8okktVMVI32tCYjBKgyGfKr4rRw2pMsVDl95zlXTBCIOtkQ2vbnS3atut4pCBeBpT/Myxp3ll9xy6B8ZLVtkZl5wUO957tRvN1u4de+RfUP47ZWytWhCRWO40ekbhgbcucJw3Gm3iR1Hb2n/GYmNOgMHmrcKc9AgU9dGn8Nx+9HMzLEX4oVbYmTUzE4mq+EDdeplc9+Oqji0ctrCf8FcYmanyzs6f3e0T6OjeN3l279mC/tq0z5OXYXdU1okp5oOITZutr32aqpAaeswgA5WVVd8N4wmrUVUQB4HEEBDXY2LRelZDKRpVukx+Lizp7z3Gh4s9iUD9VPZO3Wm719oTaeHbtU0LvAoHeVXtax6VrGwQ4LL9i8Wn+6/jS3jZ6MOoHbiTntG8+y4HYvic4XQpaffmWf86aoRQpelLFgrD75Kq/3mv84h6h/eaGgMbikiv1iUOOVqgzo0T2B78dzetu+f37xf9rmvkwiVJMfvMHi3zilauDl11PA415qbfzhMGQH3QB5MVuXxz2u/fDndeFIicOh2K/fw+4C8MnHwchA+VuubbkUKaMjMh+bcnbnNOasyrJb2atmmKM/Bdm6GP319vrj8vZRmEmqmHiR3MkIsRLcx81pLWwAqpP1lNgQ5WqRREdtd7O//of1eNvEp0KAAA=
```
### Installation
In Streamer.bot in select `Import` from the top left.
Copy the `Import Code` and paste it into the `Import String`.
> This code will auto refund any action that is still in cooldown. {.is-info}

You will just need to add a `Set Argument %rewardCooldown% to XX` XX is the time of cooldown in Seconds, then you need to add a method pointing to the newly imported code. It will look something like this.
![channelpointcooldown.png](/extensions/cooldowns/channelpointcooldown.png)


---
## Heat Cooldown
### Description
This will allow you to add cooldowns to your heat clicks and actions.
### Import Code
```
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
```
### Installation
In Streamer.bot in select `Import` from the top left.
Copy the `Import Code` and paste it into the `Import String`.
 In any action you wish to add a Heat Cooldown to you will need to add the following actions at the top of the action. More info on this can be found [HERE](/en/extensions/heat-map/heat-cooldown) 
![heatcooldown.png](/extensions/heat-map/images/heatcooldown.png)

---

## Cooldown on Multiple Actions
### Description
With this extension you will be able to add `Global` or `User` Cooldowns to Multiple Actions all under the same cooldown.
### Import Code
```
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
```
### Installation
In Streamer.bot in select `Import` from the top left.
Copy the `Import Code` and paste it into the `Import String`.
In all the actions you want in there own Cooldown Timer you will need to add 2 `Set Arguments` 1 called `cooldownTime` which is the length of the cooldown you want in seconds, and 1 called `cooldownName` this will be how we define your cooldowns. 
You will finally need to add a `Execute Method` and point it to the Newly Imported code. You will then need to select the Global or User Variant depending on what type of cooldown you wish to add. 

Note all Actions inside the same cooldown must match the variant, time and Name. 