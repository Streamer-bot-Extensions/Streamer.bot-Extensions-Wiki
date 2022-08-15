---
title: Emote Guessing Game (by Kleinhalbi)
description: A Chat Game where they need to hyess the secret emote! 
published: true
date: 2022-07-24T06:09:07.463Z
tags: 
editor: markdown
dateCreated: 2022-05-18T01:25:14.682Z
---



# Import Code
```
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
```

# Installation

In Streamer.bot in select `Import` from the top left.
Copy the `Import Code` and paste it into the `Import String`. 
![emote-guessing-game-import.png](/extensions/emote-guessing-game/images/emote-guessing-game-import.png)

# Configuration

Make sure the `Action` called `"03 Check chat messages"` is NOT enabled.
Create a text file will all the emotes you want to use.

<details>
<summary>Here is a list to all global Twitch emotes:</summary>

```text
4Head
:(
:)
:D
:O
:\
:p
;p
:|
;)
<3
>(
ANELE
ArgieB8
ArsonNoSexy
AsexualPride
AsianGlow
B)
BCWarrior
BOP
BabyRage
BatChest
BegWan
BibleThump
BigBrother
BigPhish
BisexualPride
BlackLivesMatter
BlargNaut
BloodTrail
BrainSlug
BrokeBack
BuddhaBar
CarlSmile
ChefFrank
CoolCat
CoolStoryBob
CorgiDerp
CrreamAwk
CurseLit
DAESuppy
DBstyle
DansGame
DarkKnight
DarkMode
DatSheffy
DendiFace
DogFace
DoritosChip
DrinkPurple
DxCat
EarthDay
EleGiggle
EntropyWins
ExtraLife
FBBlock
FBCatch
FBChallenge
FBPass
FBPenalty
FBRun
FBSpiral
FBtouchdown
FUNgineer
FailFish
FamilyMan
FootBall
FootGoal
FootYellow
FrankerZ
FreakinStinkin
FutureMan
GayPride
GenderFluidPride
Gimme5
GingerPower
GivePLZ
GlitchCat
GlitchLit
GlitchNRG
GrammarKing
GreenTeam
GunRun
HSCheers
HSWP
HarleyWink
HassaanChop
HeyGuys
HolidayCookie
HolidayLog
HolidayOrnament
HolidayPresent
HolidaySanta
HolidayTree
HotPokket
HungryPaimon
IntersexPride
InuyoFace
ItsBoshyTime
JKanStyle
Jebaited
JonCarnage
KAPOW
Kappa
KappaClaus
KappaPride
KappaRoss
KappaWealth
Kappu
Keepo
KevinTurtle
Kippa
KomodoHype
KonCha
Kreygasm
LUL
LesbianPride
MVGame
Mau5
MaxLOL
MercyWing1
MercyWing2
MikeHogu
MingLee
MorphinTime
MrDestructoid
NewRecord
NinjaGrumpy
NomNom
NonbinaryPride
NotATK
NotLikeThis
OSFrog
O_o
OhMyDog
OneHand
OpieOP
OptimizePrime
PJSalt
PJSugar
PMSTwin
PRChase
PanicVis
PansexualPride
PartyHat
PartyTime
PeoplesChamp
PermaSmug
PicoMause
PinkMercy
PipeHype
PixelBob
PogChamp
Poooound
PopCorn
PorscheWIN
PowerUpL
PowerUpR
PraiseIt
PrimeMe
PunOko
PunchTrees
PurpleStar
R)
RaccAttack
RalpherZ
RedCoat
RedTeam
ResidentSleeper
RitzMitz
RlyTho
RuleFive
RyuChamp
SMOrc
SSSsss
SabaPing
SeemsGood
SeriousSloth
ShadyLulu
ShazBotstix
ShowOfHands
SingsMic
SingsNote
SmoocherZ
SoBayed
SoonerLater
Squid1
Squid2
Squid3
Squid4
StinkyCheese
StinkyGlitch
StoneLightning
StrawBeary
SuperVinlin
SwiftRage
TBAngel
TF2John
TPFufun
TPcrunchyroll
TTours
TakeNRG
TearGlove
TehePelo
ThankEgg
TheIlluminati
TheRinger
TheTarFu
TheThing
ThunBeast
TinyFace
TombRaid
TooSpicy
TransgenderPride
TriHard
TwitchLit
TwitchRPG
TwitchSings
TwitchUnity
TwitchVotes
UWot
UnSane
UncleNox
VirtualHug
VoHiYo
VoteNay
VoteYea
WTRuck
WholeWheat
WhySoSerious
WutFace
YouDontSay
YouWHY
bleedPurple
cmonBruh
copyThis
duDudu
imGlitch
mcaT
panicBasket
pastaThat
riPepperonis
twitchRaid
JW2Roar
CaitlynS
KEKHeim
PoroSad
PogBones
ItsHappening
Jebasted
WheelDark
WheelLight
```
</details>

Go to `Action` `"01 Prepare game"` and edit `"Set global emotesFilePath"` to the path of the file containing all the emotes you want to use.
![emote-guessing-game-emotes-file.png](/extensions/emote-guessing-game/images/emote-guessing-game-emotes-file.png)

Then edit `"Set global gamesFilePath"` to the path of an empty .txt file to be used by the bot for the game.
![emote-guessing-game-game-file.png](/extensions/emote-guessing-game/images/emote-guessing-game-game-file.png)
 
Go to `Settings -> Events -> Set "Chat Message" Action` to `"03 Check chat messages"`.
![emote-guessing-game-chat.png](/extensions/emote-guessing-game/images/emote-guessing-game-chat.png)

Go to `Settings -> Timed Actions -> Create an Action` as follows:
Enabled OFF, Repeat OFF, Name "End Emote Guessing Game", Interval 600 seconds, Random OFF, Lines 0, Action "04 Time over" (edited)
![emote-guessing-game-timed-action.png](/extensions/emote-guessing-game/images/emote-guessing-game-timed-action.png)

Now you can assign any command, reward, whatever to the action `"01 Prepare game"` to start the game. 

>Optionally assign `"05 End game"` if you decide to end an ongoing game, because of a raid or whatever...
{.is-info}

# Example Use
This is how it works:
* You have a file with all global Twitch emotes
* The bot randomly picks one emote to be guessed by the users (the same emote won't be picked twice by the bot, unless you've gone through the whole list)
* The Chat will be put in emote only and slow mode (5 seconds)
* The game will end when a user typed in the correct emote or after 10 minutes are over, whatever happens first

# Contributors

 - [<i class="mdi mdi-twitch"></i> Kleinhalbi](https://www.twitch.tv/Kleinhalbi)
 {.contributors}
