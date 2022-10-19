---
title: Barrel Roll (van IRLCreate)
description: Geeft je een kanaalpunt van een barrel roll
published: true
date: 2022-07-17T21:37:25.692Z
tags: leuke, barrel roll, kanaalpunt
editor: markdown
dateCreated: 2022-05-14T15:30:26.979Z
---

  

# Barrel Roll (door [IRLCreate](https://www.twitch.tv/TommoIRL))



## Beschrijving



Dit is een instelling om een roleffect te maken zoals de Ster Fox meme.



## Tutorial



<br>

<iframe src="https://www.youtube.com/embed/nlNkGBWA1A0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allow fullscreen style="border: none; max-width: 100%; width: 100%; aspect-ratio: 16/9;"></iframe>



# Installatie

Wist je ooit in een Twitch stream en begon iemand te zoomen als Star Fox en zich af te vragen – "hoe in de heilige wereld van Twitch en alles wat goed is, dat heeft gedaan?" Geen probleem, dat was hier om mee te helpen!

### Vereiste bestanden
- [OBS Move Transition Plugin](https://obsproject.com/forum/resources/move-transition.913/)
- [OBS Websocket Plugin](https://obsproject.com/forum/resources/obs-websocket-remote-control-obs-studio-from-websockets.466/)


## OBS Filters

- Na het installeren van beide plug-ins moet u dan met de rechtermuisknop op uw geneste scène met uw camera klikken en naar 'filters'.
- Onder 'Effect Filters' voeg een 'Move Source' filter toe
    - Bron = uw camera's bron
    - Duur = 1500ms
    - Easing = Ease out
- Klik op 'Transformatie krijgen'
    - Onder het `rot` gedeelte verander dit naar `360`
        - Hier is een voorbeeld van hoe mijn eruitziet:
```
pos: x 960.0 y 653.0 rot: 360.0 scale: x 1.000 y 1.000 crop: l 332 t 0 r 202 b 226
```
Alles wat niet wordt vermeld, kan standaard worden gelaten. Klik met de rechtermuisknop op die filter en 'Dupliceren'
- Binnen het nieuwe filter, scroll naar beneden naar 'Transform'
    -  Verander de `rate` in `-1`.
- Wijzig de 'Aangepaste duur' naar '12ms'

Ga terug naar je eerste filter en scroll naar beneden tot je 'Acties' > 'Volgende Move' ziet en stel de volgende stap in naar je tweede filter. Dit zal je direct terugklappen en klaar zijn voor de volgende inwisseling, anders zul je maar één keer draaien en wordt het niet gereset.

## StreamerBot Actie importeren

Kopieer de tekst uit het onderstaande codevak in het `Import` vak in Streamer.bot om deze toe te voegen aan uw acties:

```text

TlM0RR+LCAAAAAAABACFU01v3CAQvVfKf0A+pVKIzC7x4tzy0UaR2h42vdU5YDxsLGHY2mbTVZT/Xj7WWq+dqhyMmTc8Hm+Gt7NPCCU7aLva6OQakYsQ0LwBt0qSuOSid3DnIr/8GqG3ODmornweYWzF8irDwLISU5ILzJfyCi+rtHLYkoJgkSts+m3Ben5tlTpGQfNSgefrWwvH+CDmlrctKLQ2So24Nq2xWw//NE1jHtffRhhXr3zfra2/meSqG5G2XFemuQkXm6PCaGHdabqfYzMzTgwJKZ0ADT8Osu/c3PKjqpAha9VDO6SU8WZkktT1vPd4ehp24jQEEY/B/PQw8AefYUyYY9UoXZRXTBJcLliO6SqnmDPiipjloiwpLHhOJxtfod68eFPSy4mqfr/1WunqNDyU56TUUYOu4I9vuWP0/eJfjlawq8WsZaJLxurqa62Ckw/XRfF9j+7begdFESAEUjq7uqK4N+gGjboIPQX8S8DROfl82WyXs0Lpunu5BWlauDO6r7Wt9WbWFSF3Z5QNBSVTc6LfaU6ZWGQSLzgFTLlkOJdphTORlmVOViyD6fH/9Zt8bHcyLfjB7HRk9vD7PO3tB08SGvx5/CSU4tsOqhEawUAUM+PLHsD3v8gITAxeBAAA

```

## Het Kanaalpunt aanmaken

Na het toevoegen van deze actie, ga naar Platforms > Twitch > Channel Point Beloningen. Maak een beloning en selecteer onder 'actie' de nieuwe actie Barrel Roll.