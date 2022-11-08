---
title: MQTT (Smarthome) Extension (by Krayn_)
description: An extension to allow Streamer.bot to talk to an MQTT broker used in most smart home software like Home Assistant, OpenHAB, HomeSeer, etc
published: true
date: 2022-10-23T19:36:38.898Z
tags: smarthome
editor: markdown
dateCreated: 2022-06-05T14:16:00.577Z
---

With proper a MQTT integration SB will be able to control nearly all smarthome devices and even allow bot to bot communication.

# Installation
1) Extract the zip and put the MQTTnet.dll into the SB folder
File: [mqtt-broker_(1.1).zip](/assets/mqtt/files/mqtt-broker_(1.1).zip)

2) Import the Action(s) included with the mqtt.txt file (you might need to remove an extra line at the end of the import code)
3) Edit the Action "MQTT-Broker"
    3.1) provide the URL to your own MQTT broker in the "Set argument %broker%" sub-action
    3.2) Edit the "Execute Code (MQTT)" sub-action - find refs (if needed manually add the reference to "MQTTnet.dll") and compile
4) After the Delay sub-action in the Action "MQTT-Broker" you can add all topics you want to Subscribe to just like shown in the included example
5) After first importing the code you might need to trigger the Action "MQTT-Broker" manually once...it is run on startup automatically

The zip also includes a "mqtt-test" Action which publishes the payload "OFF" to the same topic as my example subscription in "MQTT-Broker"...
This is an easy test to see if it works as i can externally turn on the device that is behind that topic, it triggers the event since Streamer.bot is subscribed to the topic and turns it off again. Obviously you can either use this Action to test it out yourself or just delete it and replace it with your own Actions..it mostly serves as an example on how to publish a payload to a topic

Credits:
I should also mention this is based on a MQTT library found here: https://github.com/dotnet/MQTTnet

# Contributors

- [Krayn_](https://www.twitch.tv/Krayn_){.twitch}
{.contributors}
