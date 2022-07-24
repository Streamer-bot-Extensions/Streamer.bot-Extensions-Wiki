---
title: Heat Map and Tower Block Game
description: Use Heatmap with the Tower Block Game
published: true
date: 2022-07-24T04:36:30.758Z
tags: 
editor: markdown
dateCreated: 2022-06-14T23:19:46.081Z
---

# Heat (Tower Block Game)

> This import/set-up will only work if you have already installed the core heat package. 
[Heat Map Core](/en/extensions/heat-map/heat-map-core) {.is-danger}
## Tutorial

## Set Up
First you will need to visit the [Tower Block](/en/overlays/tower-blocks-and-websocket-example) page to get the assets you need and you can use the Import from that page. Once you've extracted the files and put them somewhere safe, create a browser source somewhere suitable and with that index file, the main page explains this in more detail.

So for the heat to work you are going to need create a new folder in the `Heat Sources` Action. Call it some identifiable, I would call the folder the same name as the source, and put the following actions in. `OBS Get Scene Item Properties` link this to the Tower Game Browser Source. Then add a `Execute Method(Check if Match,Execute)` If you already have an example folder in there you can just duplicate and rename and relink to make the process easier.

![towergame1.png](/extensions/heat-map/towergame1.png)

The Next set up is to create a duplicate of the action `Game-Tower-Begin`, you will need to rename this action so it is exactly the same as the name of the source. If they are not the same this will not work.

![towergame2.png](/extensions/heat-map/towergame2.png)

In the Action `Game-Tower-Launcher` you will need to change variable `%user%` to `%userName%` , also make sure the `OBS Source Visibility State` Sub-Actions in `Game-Tower-Launcher` and `Game-Tower-End` are pointed to the correct source also these Action contain enable and disable Sub-Actions Channel Points. If you wish to use a chat command as a trigger then delete the Channel Enable/Disable Sub-Action and replace with the equivalent for commands.

As Explained in the main Tower Block you need to ensure that Streamer.bot WebSocket is enabled
![sbwebsocket.png](/extensions/heat-map/sbwebsocket.png)

> That should now have the Tower Block Game working with heat. {.is-success}

## Additional Comments

In the heatmap Action that triggers when is clicked, the one that is called the same as your source, there is a Sub-Action of `if("user" Not Equals "%towerPlayerArgs%") then break` you can have this trigger another action if the player who did not trigger the tower game clicks. So for example you could have it trigger an action that sent a message to chat saying `%user% it is not your turn` 
