---
title: Lista de conversadores Activos (por BoomSoMuch)
description: Cuando cualquiera conversa por primera vez durante la transmisión, esto añadiré su nombre a un archivo de texto.
published: true
date: 2022-07-24T06:08:07.566Z
tags:
editor: markdown
dateCreated: 2022-05-18T01:22:46.750Z
---

# Lista de Conversadores Activos [(por BoomSoMuch)](https://www.twitch.tv/boomsomuch)

## Descripción
Cuando cualquier conversa por primera vez durante la transmisión, esto agregará su nombre a un archivo de texto.

## Código de Importación

```text
TlM0RR+LCAAAAAAABADFlctu3CAUhveV+g7WSNmFCDBgyK6t1CibLhIpXXS64HKcWPLYUwy5KMq719iZjOOZqJlF1JXN+eEHPs6Bx8+fsmxxC76r2mZxmpHjIdDoFfStxWJsaht6uesjv1I7yx7HTy9VLvUz1LBCCosUKzhiVmkkba4Qd0LQHBeGGzp6DYP+RIjJv4l1vY1Co00NyS/4CNv4ZjHfK9+F7GfrXTfxuvZtXCf5K9xUjcvCDWSXFhqYdtL1nX7oLmLaYqnrbuLudePa1Zdhh7uqbRsbvYcm7Go7VF6RGbqUVT0s/dvpcnkWq6B9dhliWS6XacJbyK4quOvhn4T7sF3uMDTAfZpzcRQ78EczUa/X0OyQmhyIFKKgDhQiTLn+QIhC2uUlcjKnXEmqS5zPPO+gur5JU+ITPFvKwzrtIn8dfQE/8+kPAe5TKm2jT8f/DdDrM5sQAi1MLrhEpnAFYo4ypByWiDEpHScgMVMfTIi9h1DXRm+T+WzKW+2rVC8/nqtj5HUBXc9wjmqd6rsL8AYQ1w+qGp2y+erZ9V+ODkod63Cl67hnbSPhUgDhWFKksaGI5ZIjXWCHRGGxKogqRFkcSphQchhj/B7Gh7Bse5g6TG/Lic1IY4Hn2TjcFOdufuUNoo/N+WoFrtIB6oe9Na3LAP7liiJ7C14apURuUWFliZhRgAwvFaLUFNhwghk5OJ0Jxfth725ig5u+B/ck3z40r19K541z2guS5EIKCry/DYAhJkqKDAWHODUcW6slAXE4SHpY1uYTjJvf3/OX5yyZDM/PRLJtXet1B26ijuJgNPYcH+CN+PQXnUG+1gUIAAA=
```

## Instalación
En Streamer.bot, en el panel de `Importación` de la parte superior izquierda, copia el `Código de Importación` y pégalo en la `Cadena de Importación`.

![active-chatter-import.png](/extensions/active-chatter-list/images/active-chatter-import.png)

## Configuración
Haz doble click en la `Sub-acción` `Write to file (Escribir a Archivo)` y luego cambia el `File Path (Directorio de Archivo` de manera que apunte a un archivo válido. ![active-chatter-write-to-file.png](/extensions/active-chatter-list/images/active-chatter-write-to-file.png)

Después, liga la `Acción` `First Words` al evento de primeras palabras `First Word Event`. ![active-chatter-first-words-event.png](/extensions/active-chatter-list/images/active-chatter-first-words-event.png)

Ahora ya existirá una lista limpia solo de ls personas que han hablado durante la transmisión.
> Esto también puede usarse para obtener nombres de usuario aleatorios, u otras cosas divertidas en otras `Acciones`. 
> 
> {.is-info}