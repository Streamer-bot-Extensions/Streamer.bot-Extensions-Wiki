---
title: Followage Command (by TerrierDarts)
description: Display followers information in chat through Streamer.bot.
published: true
date: 2022-07-24T05:12:50.575Z
tags: 
editor: markdown
dateCreated: 2022-07-24T01:01:56.615Z
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
![followagesimple.png](/extensions/followage/images/followagesimple.png)
## Followage (with targets and fail) [(by TerrierDarts)](https://www.twitch.tv/terrierdarts)
### Import Code
```
TlM0RR+LCAAAAAAABADlV0tv2zgQvhfofxAM5BYWfIvqLXtoEWCxh93uqehhyBk6AhTJq0fToOh/X8qyG1txC7txH0BPkmYoavjNN9+MPj5/lmWL99R2ZVMvXmbicm2o4ZbS02IxPULok7tLlrfjc5Z9nC7JVeK4zliXWxCciSgLpn0A5mNUDI3jXnHvTWGmvdYv/TfQMO5fD1X1YKUafEXjfn070IN9G8yrpqqau6sl7ey0bJthNTr/gK4MOw6o7uC++3sYDxWh6nb2a6HG5vZqfabH3tDUYWhbqvvHvkc47GGxXtI1Qxvozf1qDFle7vneQ1uOR3xA9rNrA2N0NnitGSFIphUgcwieqSCtw1xocmb24h2Vy5sxVP6C73v6KQYzM28R28P+a/hP8dVIH8avPFg/XX4Jg+05/9okroW763o19LPQmxW1sEkCnyNVDYdgmhJwvQYrCquVKgLLnVZMa2eZE8gZkXdck/Row+z1dqivb28JS+ipuj94UIg9tZ+5IQ5lSUj0LkrLvLKeaYOJ7CoHFoMW0UmhnIqnZknIs6ZJHJOmnj6MIS0u4rqwho7ai+wGuswT1dlkLOtlumuzzZpUfH829fJidrxVS5FSzeBVCM2wrpyDyElwyshcsRwTXjofkQveM8s15NYHpSWdjNxZgdPfwu89bL5Ccns6yZMe6EIKYsB5ZJqLgnlfcJYoCFpg4BH99yG5kA4xKCaC5UzbmKQoiJwZIyIKr6XNi7ORfI7AMZlSx2TqSWocAbXguWCkKdW5sKnieR6Zk9IrRG9dcCersTgfAnIHge3tu3mzej1+YN2xdlwhERZWHeGOd3JuoZw3+NN4+NQG/wrK6ldu8lvlfHNTdtm/STczbKjL6qbfyGZ24dsGMEDXj+4j9JIfYqCzKug81V+huWHakWZeGMVMankWnSRpT54HzquX/Ady8LSG/1QO/kNV/JU5uCdtM1XZlbaJkNQeHjgVxmiiYQGkSxJHCVKZFM8bU0Su0EZ3ssqfU+KOGjd//BxDVhZCBcsMFAm2CJwBprrEIhhA1Fp7PFddPrUz/NZTjJOK8wCaKW9FGjjTLyl4jkyJ3IsIecF5/lOnmN1B/Wz6OV6mlZMIbp2f/gdgX3pZ7g8AAA==
```
![followage_actions.png](/extensions/followage/images/followage_actions.png)
### Set-Up
This will just need a `!followage` command tied to the FollowAge action. ![followage_command.png](/extensions/followage/images/followage_command.png)
> This command is set up to allow an input after the command you will need to make sure the command location is set to start. {.is-info}
### Example Use
This command has a slight bit more than the previous example, so a user can just do `!followage` to get their own follow age, however the user can now do targeted followages (as seen below) to get the followage of another user. It will also throw an error if the user does not follow the broadcaster. ![followage_fail.png](/extensions/followage/images/followage_fail.png)

## C# Followage [(by Farlezz)](https://www.twitch.tv/farlezz) & [(by TerrierDarts)](https://www.twitch.tv/terrierdarts)!
### Import Code
```
TlM0RR+LCAAAAAAABADtWFtzokgUft+q/Q+p7OuQapqLMlXzoCYiJnFWjaCs+9A3kchtQTRkav77NhAvoJlNdmfmaa2ilD7dp7/znUuf9suvv1xcXG5YnLhhcPnxQvxQDATIZ/zt8rJ8RWTNxQkf+SN/v7j4Un5xkUvzeYumDESRUQESURZkoGABIywKdIEAlkSpCRkrdRWL/kpZmusPUs87jLIAYY/l+tZxyg7jOzDd0PPCLXJY57cjXU4cplEu7oS+jwKaHMmQt0VZMkpzyxbIS46Uxnxq6LcKw06lJAxIGscsWJ/KTsioEFJMScI0Juwhi3Lc0oeKbINiN7ezoK2wiMWX1SklpwiKIpA0TVAkTRRkWZWFpgpUoakBWZNkuMBIrS3cMtdZ5pDBFahK1iUWRawO78irOOJbzijxBZQ95ZYdRr9+eI2LqvdaDvucrqN0XUNOWUJiN3rxxmVNumIsannuhp14o/QlWzDuK8JqTimEnY/zucURh9tkPr93SRwm4WJ9Nbh5mM+7MQe3DeOVKs/nG/kKXElAErX53E9IGHsuvqKed3ms8M/qzjhbs05ICwPpdBBhnzgTyXumurn+vAW318NoS61+gqx7ZwaflkS6d4Zi2xhbCh9TPC5vXA9Dx+i0HNIzXax7j4be32C4dUbTpTeTTGCPnWg3h3Gd+Xf5tOFsajh8X4+4Lc3Qu5ktDbARmM/21HCnY2WCxQEgvpfamRN9PrN2FvQ3M2v0OJsOgFnX4/czDLurGew+0+7bddq+lmBdk4aQ44eJ8/u4vSQ+fbayvo/hU4Ilyvfp0ztvtJlIo4zzENx2VnseikfXXOSbj7TT3q1p23BSm1PytNsv12NcA2c27QckUyYk8Hr2dGTNrCeRc+jucVnUe9A1jt9I+D5ibY/Cps7Qi2x36RJfW9r6gPttZBJoZlw/58feYP1pQ8EgtK1BfDsEt7lfcr/eeQMP+6OBPR08z/g+t53+BOkTZ3jEs53zDrupoSubw97EofrSw9wHuGd7JDMKHMQ3AZ32U6M3yqiV2x9pVQ483+gsxVexjVubu6z9YFtPvnFTjlXW95JBx20d3vc6neUxr7mNlTknsXj03AyG447C91RWD5b5TGA34PyvjGBd4FyM2wqWJo6tNx3sa8DQByIJ+h4ORgkbH/hgsB5/fc0YG7WYK5/FMM+1sIalzX3YCn+0HUjvQnvcdm3LTPf8wzw/2o2T/ApAHq+Z0VsfxZypGW4t/kv8VV/3QMVX3KfPdu5fcZTnl8dj6Rrp5iOq5uQ5vQUvhnWMdXUaB+dio1x/Pblx0gk0U/tG9Ig0WPK8CfudfoOWNiZH9pWYJG63rvG4bqdYGjq8rmU8tlOqPyl7zs7ztfwGN6/E7nK3d16PozNrz+grn/M5PHSZVMbfHV9brW9rnnPLJbfr5/jfqfg24/VNJL7s0F5ftB92/srXRVrtDI1iRkI/cr1XDlHKPJSN1yg+bXnKQ79oSphCMFMlJKAFUwSZykBAqKEKqqrJAFFJhO9vSrT88z37Evk9fYm1DC8ewovOkpHV/03Jd2hKNjM/4nOG+4O5KAqP1WIy87UN7rQBCUyv2sDcp2avr4ygCUy/m/BDLzSClwL30oTwJNzQaU1/PYHKQnCkv1rgzhV96nezQwKbq30zISYuzbHlmApd/9C8VIskGHId1BL5ATcMDX+vPzPcQ/NiW8N6M1U76M2EwMl/s+HnYq9gPW1kwv3BvRh++vRDihVoNABcgIaANKwKMlKBoEHIBCA3KVMVIlEVf8diVS8QbylV8C2lqnKdhK9fJ89eI6VGs0FFzATMS7cgE6AIGDShoKlwgVhDxk0JvPsaCb4fA+JbGChNgVRWEFIXAmKACDKGqoAhawpqg2BZ1WgDi833mgJfuRH/G1PAkSm7n4fa/PLHgZ5vUJwJRyLCL8coShg9kpbCQlE5s/zbZCf8+jfF5lGUuxEAAA==
```
### Set-Up
Like the previous examples, this just needs a `!followage` command tied to the action. Ensure it location is set to start as you want the command to accept any input if the user so chooses!