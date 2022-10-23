---
title: Hangman (by TerrierDarts)
description: Play A Classic Game of Hangman in your YouTube Chat!
published: true
date: 2022-09-24T17:52:16.824Z
tags: 
editor: markdown
dateCreated: 2022-09-23T16:31:20.190Z
---

# Import Code
```
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
```

# Installation
In Streamer.bot in select `Import` from the top left.
Copy the `Import Code` and paste it into the `Import String`.
## Codepen
https://codepen.io/terrierdarts/pen/qBpQExw Here is the Pen, its not necessary but its here if you want it.
## OBS Setup (Optional)
If you want, you can use the the codepen to show the game on screen. I've provided the codepen link so if you wish to make any styling adjustments you can. The best way to do this is to `Fork` the pen and then make edits. Once you've got it looking the way you wish you can `Export` once its downloaded extract the folder into somewhere safe. Then you will need to go into the dist folder and open the index.html. You will need to copy the url from the address bar and then create a browser source in OBS with that url and add 500 for Width and Height. It should look something like this.
![hangmanobs.png](/assets/hangman/images/hangmanobs.png)
> Its important you dont use `Local File` in OBS. {.is-warning}
## Streamerbot Setup

After you've imported the code you will need to enable the `Chat Commands` these can be changed to suit your use. You will need to set up 3 triggers, one to `Start Game`, `Guess Letter` and a `Guess Word`. 
|Action|Purpose|Triggers|
|---|---|---|
|`HangmanStartFromApi`| This allows you to start a game from the API.| Start Game Trigger|
|`HangmanStartFromTextFile`|  This allows you to start a game from a Textfile.| Start Game Trigger|
|`HangmanGuessLetter`| This allows you to guess a Letter| Guess Letter Trigger|
|`HangmanGuessWord`| This Allows you to guess a word.| Guess Word Trigger|

> If using this from a text place a new text file in a safe location and add each word to a new line. 
{.is-warning}


Next we need to make sure C# code compiles they should pull in the references needed but these are the ones needed.
```
system.core.dll
system.linq.dll
system.dll
```
If you are using the codepen you will need to make sure all the `OBS Set` based actions are all pointed to the Browser Source you've just added. If you chose not to use the codepen these actions can be disabled or deleted. 

Final step is to make sure the enable/disable command sub-actions are pointed correctly. 

# Configuration
All the Settings are in the action `HangManSetWordLimited` 
|Setting Name|Purpose|
|---|---|
|`hangmanLives`| This is how many chances your viewers get to find the word, each incorrect letter or word guess will remove a life.|
|`minLetters`| This is the minimum amount of letters the random word will find.|
|`maxLetters`| This is the maximum amount of letters the random word will find.|
|`lang`| The Language of the word that will be found, `it, zh, es, de, en`|
|`howToTrigger`| This is how you want your users to guess so it will either be something like "Use Channel Points" or "Use !letter and !word".
|`basePath`| This is the same as the link you posted in OBS.|
|`filePath`| This is the filepath for the text file (StartFromTextFile Only)

> Words range from 5 to 13 letters the last time I tested this. {.is-info}

# Contributors

 - [<i class="mdi mdi-twitch"></i> TerrierDarts](https://www.twitch.tv/TerrierDarts)
 
 {.contributors}