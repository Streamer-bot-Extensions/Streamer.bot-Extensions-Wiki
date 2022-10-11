---
title: Barrel Roll (por IRLCreate)
description: Te da una recompensa de puntos de canal para realizar un barrel roll
published: true
date: 2022-07-17T21:37:25.071Z
tags: divertido, barrel roll, punto de canal
editor: markdown
dateCreated: 2022-05-24T15:30:26.195Z
---

  

# Barrel Roll (por [IRLCreate](https://www.twitch.tv/TommoIRL))



## Descripción



Esta es una configuración que te permitirá crear un efecto de barrel roll como en el meme de Star Fox.



## Tutorial



<br>

<iframe src="https://www.youtube.com/embed/nlNkGBWA1A0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allow fullscreen style="border: none; max-width: 100%; width: 100%; aspect-ratio: 16/9;"></iframe>



# Instalación

¿Alguna vez estuviste en una transmisión de Twitch y alguien empezó a moverse como en Star Fox y te preguntaste – "¿Cómo en el nombre sagrado de Twitch y todas las cosas que son buenas hicieron eso?" No hay problema, ¡estamos para ayudarte con eso!

### Archivos Requeridos
- [Plugin OBS Move Transition](https://obsproject.com/forum/resources/move-transition.913/)
- [Plugin OBS Websocket](https://obsproject.com/forum/resources/obs-websocket-remote-control-obs-studio-from-websockets.466/)


## Filtros de OBS

- Después de instalar ambos plugins, necesitarás hacer click derecho en tu escena anidada con tu cámara e ir a 'filtros'.
- Bajo 'Filtros de Efecto' agrega un filtro de 'Mover Fuente'
    - Fuente = Tu fuente de cámara
    - Duración = 1500ms
    - Suavizado = Suavizado de Salida
- Haz click en 'Obtener Transformación'
    - Debajo de la sección `rot` (rotación), cambia esto a `360`
        - Aquí te dejo un ejemplo de que podría verse:
```
pos: x 960.0 y 653.0 rot: 360.0 scale: x 1.000 y 1.000 crop: l 332 t 0 r 202 b 226
```
Cualquier cosa que no haya sido mencionada se puede dejar como viene por defecto. Haz click derecho en ese filtro, y duplícalo
- Dentro del nuevo filtro, desplázate hacia abajo a 'Transformación'
    -  Cambia la rotación `rot` de regreso a `0`
- Cambia la 'Duración' a '12ms'

Regresa a tu primer filtro y desplázate hacia abajo hasta que veas 'Acciones' > 'Siguiente Movimiento' y coloca tu segundo filtro. Esto devolverá instantáneamente la cámara y te dejará listo para el siguiente canje, de lo contrario solo girarás una vez, y no se reiniciará.

## Importación de la Acción en Streamer.bot

Copia el texto del cuadro de código que se encuentra debajo en el recuadro de `Importación` de Streamer.bot para agregar esta acción a tu biblioteca de acciones:

```text

TlM0RR+LCAAAAAAABACFU01v3CAQvVfKf0A+pVKIzC7x4tzy0UaR2h42vdU5YDxsLGHY2mbTVZT/Xj7WWq+dqhyMmTc8Hm+Gt7NPCCU7aLva6OQakYsQ0LwBt0qSuOSid3DnIr/8GqG3ODmornweYWzF8irDwLISU5ILzJfyCi+rtHLYkoJgkSts+m3Ben5tlTpGQfNSgefrWwvH+CDmlrctKLQ2So24Nq2xWw//NE1jHtffRhhXr3zfra2/meSqG5G2XFemuQkXm6PCaGHdabqfYzMzTgwJKZ0ADT8Osu/c3PKjqpAha9VDO6SU8WZkktT1vPd4ehp24jQEEY/B/PQw8AefYUyYY9UoXZRXTBJcLliO6SqnmDPiipjloiwpLHhOJxtfod68eFPSy4mqfr/1WunqNDyU56TUUYOu4I9vuWP0/eJfjlawq8WsZaJLxurqa62Ckw/XRfF9j+7begdFESAEUjq7uqK4N+gGjboIPQX8S8DROfl82WyXs0Lpunu5BWlauDO6r7Wt9WbWFSF3Z5QNBSVTc6LfaU6ZWGQSLzgFTLlkOJdphTORlmVOViyD6fH/9Zt8bHcyLfjB7HRk9vD7PO3tB08SGvx5/CSU4tsOqhEawUAUM+PLHsD3v8gITAxeBAAA

```

## Creación de la Recompensa de Puntos de Canal

Después de añadir esta acción, regresa a Platforms > Twitch > Channel Point Rewards. Crea una nueva recompensa y en 'acción' selecciona la nueva acción Barrel Roll.