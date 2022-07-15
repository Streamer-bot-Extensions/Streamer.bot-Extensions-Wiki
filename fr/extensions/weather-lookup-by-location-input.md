---
title: Weather Lookup By Location Input (by Web_Mage)
description: 
published: true
date: 2022-06-14T23:30:32.488Z
tags: api, extension, obs
editor: markdown
dateCreated: 2022-06-14T23:30:29.567Z
---

# Weather Lookup By Location Input [(by Web_Mage)](https://www.twitch.tv/web_mage)

## Description

This extension will allow you and your chat to look up weather conditions around the globe.

## Prerequisites

>You must sign up for an API Key from [https://www.weatherapi.com](https://www.weatherapi.com){.is-warning}

There is no initial charge for a key. They allow up to 1,000,000 calls/month on their free tier.
Once you have your API Key, either save it to a text file or keep the webpage open.
You will need the key later in the setup process.

## Install Steps

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
--Begin Import String--
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
--End Import String--
```

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

>You need to have the weather lookup already installed and configured. If you don't have valid data coming back, then this widget will not work.{.is-important}

There are a couple ways to handle this, either online or having the html page locally on your machine. The choice is up to you.

### Install Steps (Offline) ###

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

### Install Steps (Online) ###

1. Create a new browser source in OBS. Set the URL to about:blank and the size to whatever you'd like.
2. In StreamerBot, navigate to the current weather lookup action.
   Add a new Set Browser URL sub-action by right clicking, then
   Add Action -> OBS -> Set Browser Source URL.
3. Pick the scene, then the browser source you created in step 4.
4. For the URL, use
   `https://codepen.io/Web_Mage/pen/eYGXwbz?apikey=%global_selfApiKey%&query=%global_locationQuery%&lang=%global_weatherLanguage%`
5. Adjust your browser source dimentions to crop out the code blocks on the side, so that you only see the widget.
6. Test by doing a lookup. The widget should change to match what is generated in chat.

### Alternate Usage ###

To use the widget as just an onscreen overlay for your local weather.

1. Create a new Action with just an OBS browser source, like the above install steps.
2. Instead of using about:blank, use the url but with the variables hard coded in. (e.g. `<your path>/index.html?apikey=<your APIkey>&query=<your location>&lang=<your language>`)
3. Run the widget's action as a timed action set to 5 minutes. This will allow the widget to refresh without user intervention.
