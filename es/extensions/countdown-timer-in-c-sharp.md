---
title: Temporizador de Cuenta Atrás en C# (por rondhi)
description: Al usar esta extensión podrás crear temporizadores de cuenta regresiva en Streamer.bot.
published: true
date: 2022-08-31T00:39:52.981Z
tags: 
editor: markdown
dateCreated: 2022-08-04T02:32:57.197Z
---

# Código de Importación

```text
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
```

# Instalación
En Streamer.bot, en el panel de `Importación` de la parte superior izquierda, copia el `Código de Importación` y pégalo en la `Cadena de Importación`.

1. En OBS, añade una escena llamada `[NS] Countdown Timer` y una fuente de texto en esa escena llamada `[TS] Countdown Timer`. Puedes invocar a `[NS] Countdown Timer` como una escena anidada en cualquier escena en la que desees usar dicho temporizador.

2. Streamer.bot > Acciones> `TimerStart` > doble click en `Execute Code (Countdown Timer)` > en la pestaña de `Referencias` > click derecho y `Agregar Referencias Desde Archivo...` > agrega `System.dll` > haz click en `Guardar y Compilar`

  ![image](https://user-images.githubusercontent.com/8848167/170428954-f38da1d2-6fb5-4306-a8cb-5cd5c6e3d02b.png)

### Comandos a crear en Streamer.bot y a qué acciones apuntarlos

| Comando    | Acción             | Uso           | Explicación                                                                                   |
| ---------- | ------------------ | ------------- | --------------------------------------------------------------------------------------------- |
| !timer     | Timer Start        | `!timer #`    | Hace el temporizador visible e inicia el temporizador en el número especificado en el comando |
| !timeradd  | TimerAdd X Minutes | `!timeradd #` | Añade el número deseado en minutos al temporizador.                                           |
| !timerset  | Timer Set          | `!set #`      | Púramente cosmético, establece el temporizador y lo vuelve visible en pantalla.               |
| !timerstop | Timer Stop         | `!stop`       | Detiene el temporizador, luego oculta la fuente de texto.                                     |

- !timer sin un número empezará el temporizador con el último número utilizado.

> Acciones en la acción `TimerDone` serán activadas una vez que el temporizador llegue a cero. {.is-info}

# Colaboradores

 - [<i class="mdi mdi-twitch"></i> rondhi](https://www.twitch.tv/rondhi)

