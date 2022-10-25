---
title: Weather Lookup By Location Input (by Web_Mage)
description: This extension will allow you and your chat to look up weather conditions around the globe.
published: true
date: 2022-07-25T15:17:21.987Z
tags: api, extension, obs
editor: markdown
dateCreated: 2022-05-18T02:07:55.239Z
---

## Prerequisites

>You must sign up for an API Key from [https://www.weatherapi.com](https://www.weatherapi.com) {.is-warning}

There is no initial charge for a key. They allow up to 1,000,000 calls/month on their free tier.
Once you have your API Key, either save it to a text file or keep the webpage open.
You will need the key later in the setup process.

## Install Steps

<details>
<summary>v2</summary>

1. Open Streamer.bot.
   - (version 0.1.7 and below) Right-click in the Actions tab and select "`Import`".
   - (version 0.1.8 and above) Click the "`Import`" button at the top of the window.
2. Copy the import string below.
3. Paste it into the Import box that is open in Streamer.Bot. You should see an Importable Action called "WM-Current_Weather-v2"
4. Click Import.
5. Click on the newly imported action and find the folder named Query setup.
6. Double-click on the line that says "`<Insert API Key Here>`"
7. Find the API Key that you created earlier and paste it into the Value box.
   If you do not have one, please follow the steps in the Prerequisite section above.
   (Optional: You can change the returned language by changing the variable to your language of choice.)
8.  Open the Execute Code (WeatherLookup) sub-action
9.  Click on References. Right click and select "Add Reference from File"
10. Navigate to your .NET folder (typically `C:\Windows\Microsoft.NET\Framework\v4.0.30319\`) and select System.dll.
  Do this again and select System.Net.dll
  You should now have three files in your references: mscorlib.dll, System.dll, and System.Net.dll
12. Click Compile. You should see a message in Compiling Log tab that says "Compiled successfully!"
13. Click Save and Complile.

```text
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
```

</details>

<details>
<summary>Original v1</summary>

1. Have Streamer.bot open and right-click in the Actions tab.
2. Select "`Import`"
3. Copy the import string  below. Select everthing between the Begin and End Import String lines at the bottom of this file.
4. Paste it into the Import box that is open in Streamer.Bot. You should see an Importable Action called "WM-Current_Weather"
     >If you do not see this, double check that you have selected all the characters below.
     Remove any trailing spaces and remove --Begin Import String-- or --End Import String-- if you accidentally copied them.
5. Click Import.
6. Click on the newly imported action and find the folder named Query setup.
7. Double-click on the line that says "`<Insert API Key Here>`"
8. Find the API Key that you created earlier and paste it into the Value box.
   If you do not have one, please follow the steps in the Prerequisite section above.
   (Optional: You can change the returned language by changing the variable to your language of choice.)
9. Open the Execute Code (WeatherAPI) sub-action
10. Click on References. Right click and select "Add Reference from File"
11. Navigate to your .NET folder (typically `C:\Windows\Microsoft.NET\Framework\v4.0.30319\`) and select System.dll.
  Do this again and select System.Net.dll
  You should now have three files in your references: mscorlib.dll, System.dll, and System.Net.dll
12. Click Compile. You should see a message in Compiling Log tab that says "Compiled successfully!"
13. Click Save and Complile.

## Import Code Block ##

```text
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
```

</details>

## Usage ##

1. Create a command or a channel point reward and have it point to the WM-Current_Weather action.
     The command will need to have a location of Start. The channel point reward will need a prompt. Something like "Enter location."
2. The bot will use the user's response to do the lookup.<br>
     >Note: The lookup can use several methods for searching. They are listed below:
          - City name (ex: Paris)
          - US Zip Code (ex: 90210)
          - UK Postcode (ex: SW1)
          - Canada postal code (ex: G2J)
          - 3 Digit Airport code (ex: LAX)
3. Enjoy doing weather lookups for around the globe!

## Optional Widget ##

>You need to have the weather lookup already installed and configured. If you don't have valid data coming back, then this widget will not work. {.is-danger}

<iframe src="https://www.youtube.com/embed/IeD4yMU1kQQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allow fullscreen style="border: none; max-width: 100%; width: 100%; aspect-ratio: 16/9;"></iframe>

There are a couple ways to handle this, either online or having the html page locally on your machine. The choice is up to you.

### Widget Install Steps ###

<details>
<summary>Offline Usage</summary>

1. A) For the latest version, go to https://codepen.io/Web_Mage/pen/eYGXwbz and click on Export in the bottom right corner. Click on Export .zip
B) Download the attached .zip file from the StreamerBot discord.
2. Navigate to where you saved the download and extract all of the files.
3. If you want to move the files to a different area, the ones needed will be in the dist folder. It is located in \<extracted zip>/super-mario-weather/dist/
	(If you don't want the folder, make sure you move all three files: index.html, script.js, and style.css)
4. Create a new browser source in OBS. Set the URL to about:blank and the size to whatever you'd like.
5. In StreamerBot, navigate to the current weather lookup action.
   Add a new Set Browser URL sub-action by right clicking, then
   Add Action -> OBS -> Set Browser Source URL.
6. Pick the scene, then the browser source you created in step 4.
7. For the URL, use
   `file:///<saved path>/index.html?apikey=%global_selfApiKey%&query=%global_locationQuery%&lang=%global_weatherLanguage%`
8. Test by doing a lookup. The widget should change to match what is generated in chat.

</details>

<details>
<summary> Online Usage</summary>

1. Create a new browser source in OBS. Set the URL to about:blank and the size to whatever you'd like.
2. In StreamerBot, navigate to the current weather lookup action.
   Add a new Set Browser URL sub-action by right clicking, then
   Add Action -> OBS -> Set Browser Source URL.
3. Pick the scene, then the browser source you created in step 4.
4. For the URL, use
   `https://codepen.io/Web_Mage/pen/eYGXwbz?apikey=%global_selfApiKey%&query=%global_locationQuery%&lang=%global_weatherLanguage%`
5. Adjust your browser source dimentions to crop out the code blocks on the side, so that you only see the widget.
6. Test by doing a lookup. The widget should change to match what is generated in chat.

</details>

<details>
<summary>Alternate Usage</summary>

To use the widget as just an onscreen overlay for your local weather.

1. Create a new Action with just an OBS browser source, like the above install steps.
2. Instead of using about:blank, use the url but with the variables hard coded in. (e.g. `<your path>/index.html?apikey=<your APIkey>&query=<your location>&lang=<your language>`)
3. Run the widget's action as a timed action set to 5 minutes. This will allow the widget to refresh without user intervention.

</details>

# Contributors

 - [<i class="mdi mdi-twitch"></i> Web_Mage](https://www.twitch.tv/Web_Mage)
 {.contributors}