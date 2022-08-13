---
title: Followage Command (by TerrierDarts)
description: Display followers information in chat through Streamer.bot.
published: true
date: 2022-08-01T12:23:43.698Z
tags: 
editor: markdown
dateCreated: 2022-05-17T01:13:10.778Z
---

# Simple Followage
## Import Code
```
TlM0RR+LCAAAAAAABACtU7Fu2zAQ3QvkHwgB3sKCpChL6uYM7RJkaLsVGSjqKAugSYUU4wRB/r2iCNuynRYo0Em8e8fHu/dObzefEMqewfnemuwLordzwogdTFGWpVDIcYL9lPkVY4Te0meC+jbW1Y1oGCsazPIyx1zJAtdMccxLRutcrRnLm8Q1X3oKECK/CVqfsmBEoyHyjS7AKX9o5ke/GzR8tVrbvehgwdc5G4ZYcid8LxeA0Hvx6r+HOJoS2i9YnTCt3W3mya5RaY0MzoEZr7ErNc4UmUu8DU7Cz9cBjpoesWfh+jjoSd8jlMQUlCrO14CJLOpJzIrjWpUNJhWBKq/Fmrby4uIe+m4bWyWfyTkyph6KiyYOip058DcXUn+mhZf4yin7fvsnDUZ4iR1lq+DBPUwerpCavfNo3AKSW2EMaOR7IwGtErTp4N6abnUx3uBAweRGu5HShtkT8pFyqqw4ZzTHJKcCc8IFrtaUYFaQsoaCqpK2/6ocJf9TObpQ7nB8vFytb/GJeb8elxuptRg8tAs0gTNRqkx/1gF8/w1duU+r3gMAAA==
```
## Installation
In Streamer.bot in select `Import` from the top left.
Copy the `Import Code` and paste it into the `Import String`. 

This will just need a `!followage` command tied to it to work, this will get the current followage of the user who redeemed it.
## Example Use
![followagesimple.png](/extensions/followage/images/followagesimple.png)

# Followage (with targets and fail)
## Import Code
```
TlM0RR+LCAAAAAAABADlV0tv2zgQvhfofxAM5BYWfIvqLXtoEWCxh93uqehhyBk6AhTJq0fToOh/X8qyG1txC7txH0BPkmYoavjNN9+MPj5/lmWL99R2ZVMvXmbicm2o4ZbS02IxPULok7tLlrfjc5Z9nC7JVeK4zliXWxCciSgLpn0A5mNUDI3jXnHvTWGmvdYv/TfQMO5fD1X1YKUafEXjfn070IN9G8yrpqqau6sl7ey0bJthNTr/gK4MOw6o7uC++3sYDxWh6nb2a6HG5vZqfabH3tDUYWhbqvvHvkc47GGxXtI1Qxvozf1qDFle7vneQ1uOR3xA9rNrA2N0NnitGSFIphUgcwieqSCtw1xocmb24h2Vy5sxVP6C73v6KQYzM28R28P+a/hP8dVIH8avPFg/XX4Jg+05/9okroW763o19LPQmxW1sEkCnyNVDYdgmhJwvQYrCquVKgLLnVZMa2eZE8gZkXdck/Row+z1dqivb28JS+ipuj94UIg9tZ+5IQ5lSUj0LkrLvLKeaYOJ7CoHFoMW0UmhnIqnZknIs6ZJHJOmnj6MIS0u4rqwho7ai+wGuswT1dlkLOtlumuzzZpUfH829fJidrxVS5FSzeBVCM2wrpyDyElwyshcsRwTXjofkQveM8s15NYHpSWdjNxZgdPfwu89bL5Ccns6yZMe6EIKYsB5ZJqLgnlfcJYoCFpg4BH99yG5kA4xKCaC5UzbmKQoiJwZIyIKr6XNi7ORfI7AMZlSx2TqSWocAbXguWCkKdW5sKnieR6Zk9IrRG9dcCersTgfAnIHge3tu3mzej1+YN2xdlwhERZWHeGOd3JuoZw3+NN4+NQG/wrK6ldu8lvlfHNTdtm/STczbKjL6qbfyGZ24dsGMEDXj+4j9JIfYqCzKug81V+huWHakWZeGMVMankWnSRpT54HzquX/Ady8LSG/1QO/kNV/JU5uCdtM1XZlbaJkNQeHjgVxmiiYQGkSxJHCVKZFM8bU0Su0EZ3ssqfU+KOGjd//BxDVhZCBcsMFAm2CJwBprrEIhhA1Fp7PFddPrUz/NZTjJOK8wCaKW9FGjjTLyl4jkyJ3IsIecF5/lOnmN1B/Wz6OV6mlZMIbp2f/gdgX3pZ7g8AAA==
```
![followage_actions.png](/extensions/followage/images/followage_actions.png)
## Installation
In Streamer.bot in select `Import` from the top left.
Copy the `Import Code` and paste it into the `Import String`. 

This will just need a `!followage` command tied to the FollowAge action. 
![followage_command.png](/extensions/followage/images/followage_command.png)
> This command is set up to allow an input after the command you will need to make sure the command location is set to start. {.is-info}
## Example Use
This command has a slight bit more than the previous example, so a user can just do `!followage` to get their own follow age, however the user can now do targeted followages (as seen below) to get the followage of another user. It will also throw an error if the user does not follow the broadcaster.
![followage_fail.png](/extensions/followage/images/followage_fail.png)

# C# Followage
## Import Code
```
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
```
## Installation
In Streamer.bot in select `Import` from the top left.
Copy the `Import Code` and paste it into the `Import String`. 
Like the previous examples, this just needs a `!followage` command tied to the action. Ensure it location is set to start as you want the command to accept any input if the user so chooses!

# Contributors

### <img src="/logos/twitch-6860918_1280.png" height=25></img> [*TerrierDarts*](https://www.twitch.tv/terrierdarts)
### <img src="/logos/twitch-6860918_1280.png" height=25></img> [*Farlezz*](https://www.twitch.tv/Farlezz)