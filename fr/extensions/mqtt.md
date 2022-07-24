---
title: MQTT (Smarthome) Extension
description: An extension to allow Streamer.bot to talk to an MQTT broker used in most smart home software like Home Assistant, OpenHAB, HomeSeer, etc
published: true
date: 2022-07-24T04:42:09.329Z
tags: smarthome
editor: markdown
dateCreated: 2022-06-14T23:28:04.537Z
---

# MQTT Extension [(by Krayn)](https://www.twitch.tv/krayn_)
## Description
This extension will allow you to connect Streamer.bot to any MQTT broker, such as those found in Home Assistant, HomeSeer, OpenHAB, etc...

With proper a MQTT integration SB will be able to control nearly all smarthome devices and even allow bot to bot communication.

## Requirements
File: [mqtt-broker_(1.1).zip](/extensions/mqtt/files/mqtt-broker_(1.1).zip)

## Installation
1) Extract the zip and put the MQTTnet.dll into the SB folder
2) Import the Action(s) included with the mqtt.txt file (you might need to remove an extra line at the end of the import code)
3) Edit the Action "MQTT-Broker"
    3.1) provide the URL to your own MQTT broker in the "Set argument %broker%" sub-action
    3.2) Edit the "Execute Code (MQTT)" sub-action - find refs (if needed manually add the reference to "MQTTnet.dll") and compile
4) After the Delay sub-action in the Action "MQTT-Broker" you can add all topics you want to Subscribe to just like shown in the included example
5) After first importing the code you might need to trigger the Action "MQTT-Broker" manually once...it is run on startup automatically

The zip also includes a "mqtt-test" Action which publishes the payload "OFF" to the same topic as my example subscription in "MQTT-Broker"...
This is an easy test to see if it works as i can externally turn on the device that is behind that topic, it triggers the event since SB is subscribed to the topic and turns it off again. Obviously you can either use this Action to test it out yourself or just delete it and replace it with your own Actions..it mostly serves as an example on how to publish a payload to a topic

Credits:
I should also mention this is based on a MQTT library found here: https://github.com/dotnet/MQTTnet
