---
title: Followage Command (by TerrierDarts)
description: Display followers information in chat through Streamer.bot.
published: true
date: 2022-05-26T13:22:42.163Z
tags: 
editor: markdown
dateCreated: 2022-05-17T01:13:10.778Z
---

# Followage Commands

## Simple Followage [(by TerrierDarts)](https://www.twitch.tv/terrierdarts)
### Import Code
```
TlM0RR+LCAAAAAAABACtU7Fu2zAQ3QvkHwgB3sKCpChL6uYM7RJkaLsVGSjqKAugSYUU4wRB/r2iCNuynRYo0Em8e8fHu/dObzefEMqewfnemuwLordzwogdTFGWpVDIcYL9lPkVY4Te0meC+jbW1Y1oGCsazPIyx1zJAtdMccxLRutcrRnLm8Q1X3oKECK/CVqfsmBEoyHyjS7AKX9o5ke/GzR8tVrbvehgwdc5G4ZYcid8LxeA0Hvx6r+HOJoS2i9YnTCt3W3mya5RaY0MzoEZr7ErNc4UmUu8DU7Cz9cBjpoesWfh+jjoSd8jlMQUlCrO14CJLOpJzIrjWpUNJhWBKq/Fmrby4uIe+m4bWyWfyTkyph6KiyYOip058DcXUn+mhZf4yin7fvsnDUZ4iR1lq+DBPUwerpCavfNo3AKSW2EMaOR7IwGtErTp4N6abnUx3uBAweRGu5HShtkT8pFyqqw4ZzTHJKcCc8IFrtaUYFaQsoaCqpK2/6ocJf9TObpQ7nB8vFytb/GJeb8elxuptRg8tAs0gTNRqkx/1gF8/w1duU+r3gMAAA==
```
### Set-Up
This will just need a `!followage` command tied to it to work, this will get the current followage of the user who redeemed it.
### Example Use
![followagesimple.png](/extensions/followage/followagesimple.png)
## Followage (with targets and fail) [(by TerrierDarts)](https://www.twitch.tv/terrierdarts)
### Import Code
```
TlM0RR+LCAAAAAAABADlV0tv2zgQvhfofxAM5BYWfIvqLXtoEWCxh93uqehhyBk6AhTJq0fToOh/X8qyG1txC7txH0BPkmYoavjNN9+MPj5/lmWL99R2ZVMvXmbicm2o4ZbS02IxPULok7tLlrfjc5Z9nC7JVeK4zliXWxCciSgLpn0A5mNUDI3jXnHvTWGmvdYv/TfQMO5fD1X1YKUafEXjfn070IN9G8yrpqqau6sl7ey0bJthNTr/gK4MOw6o7uC++3sYDxWh6nb2a6HG5vZqfabH3tDUYWhbqvvHvkc47GGxXtI1Qxvozf1qDFle7vneQ1uOR3xA9rNrA2N0NnitGSFIphUgcwieqSCtw1xocmb24h2Vy5sxVP6C73v6KQYzM28R28P+a/hP8dVIH8avPFg/XX4Jg+05/9okroW763o19LPQmxW1sEkCnyNVDYdgmhJwvQYrCquVKgLLnVZMa2eZE8gZkXdck/Row+z1dqivb28JS+ipuj94UIg9tZ+5IQ5lSUj0LkrLvLKeaYOJ7CoHFoMW0UmhnIqnZknIs6ZJHJOmnj6MIS0u4rqwho7ai+wGuswT1dlkLOtlumuzzZpUfH829fJidrxVS5FSzeBVCM2wrpyDyElwyshcsRwTXjofkQveM8s15NYHpSWdjNxZgdPfwu89bL5Ccns6yZMe6EIKYsB5ZJqLgnlfcJYoCFpg4BH99yG5kA4xKCaC5UzbmKQoiJwZIyIKr6XNi7ORfI7AMZlSx2TqSWocAbXguWCkKdW5sKnieR6Zk9IrRG9dcCersTgfAnIHge3tu3mzej1+YN2xdlwhERZWHeGOd3JuoZw3+NN4+NQG/wrK6ldu8lvlfHNTdtm/STczbKjL6qbfyGZ24dsGMEDXj+4j9JIfYqCzKug81V+huWHakWZeGMVMankWnSRpT54HzquX/Ady8LSG/1QO/kNV/JU5uCdtM1XZlbaJkNQeHjgVxmiiYQGkSxJHCVKZFM8bU0Su0EZ3ssqfU+KOGjd//BxDVhZCBcsMFAm2CJwBprrEIhhA1Fp7PFddPrUz/NZTjJOK8wCaKW9FGjjTLyl4jkyJ3IsIecF5/lOnmN1B/Wz6OV6mlZMIbp2f/gdgX3pZ7g8AAA==
```
![followage_actions.png](/extensions/followage/followage_actions.png)
### Set-Up
This will just need a `!followage` command tied to the FollowAge action. 
![followage_command.png](/extensions/followage/followage_command.png)
> This command is set up to allow an input after the command you will need to make sure the command location is set to start. {.is-info}
### Example Use
This command has a slight bit more than the previous example, so a user can just do `!followage` to get their own follow age, however the user can now do targeted followages (as seen below) to get the followage of another user. It will also throw an error if the user does not follow the broadcaster.
![followage_fail.png](/extensions/followage/followage_fail.png)

## C# Followage [(by Farlezz)](https://www.twitch.tv/farlezz)!
### Import Code
### Set-Up
### Example Use