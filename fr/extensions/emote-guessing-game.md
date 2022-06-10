---
title: Emote Guessing Game (by @Kleinhalbi)
description: 
published: true
date: 2022-06-09T05:09:00.221Z
tags: 
editor: markdown
dateCreated: 2022-05-19T04:40:06.602Z
---

# Emote Guessing Game [(by Kleinhalbi)](https://www.twitch.tv/Kleinhalbi)

## Description
As requested by @Dewaldsch I created an Emote Guessing Game. This is how it works:
* You have a file with all global Twitch emotes
* The bot randomly picks one emote to be guessed by the users (the same emote won't be picked twice by the bot, unless you've gone through the whole list)
* The Chat will be put in emote only and slow mode (5 seconds)
* The game will end when a user typed in the correct emote or after 10 minutes are over, whatever happens first

## Installation

Import the import code below into the `Import Pane`.
![emote-guessing-game-import.png](/extensions/emote-guessing-game/images/emote-guessing-game-import.png)

## Configuration

Make sure the `Action` called `"03 Check chat messages"` is NOT enabled.
Create a text file will all the emotes you want to use.
Here is a list to all global Twitch emotes:
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