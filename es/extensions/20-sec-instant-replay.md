---
title: Repetición Instantánea de 20 Segundos (por MarkusoOoO)
description: Crear una repetición instantánea de 20 segundos con Streamer.bot.
published: true
date: 2022-07-24T06:07:59.822Z
tags: repetición, rebobinado, efecto
editor: markdown
dateCreated: 2022-05-02T10:31:26.282Z
---

# Repetición Instantánea de 20 Segundos [(por MarkusoOoO)](https://www.twitch.tv/markusoooo)

## Descripción
Esta es mi versión de la repetición de 20 segundos usando Streamer.bot, basada en el video de Nutty. Asegúrate de seguir las indicaciones de su <a video href="https://youtu.be/NuWKrpNCE1k"></a> para configurar OBS con al menos `escenas anidadas` & `filtro de retraso dinámico`. Todo el efecto consume aproximadamente ` 8 GB de tu memoria RAM`, así que tenlo en cuenta.


## Código de Importación

```text
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
```
## Instalación
En Streamer.bot, en el panel de `Importación` de la parte superior izquierda, copia el `Código de Importación` y pégalo en la `Cadena de Importación`. ![20-sec-instant-replay.png](/extensions/20-sec-instant-replay/images/20-sec-instant-replay.png)

Además, asegúrate que todas las `Sub-Acciones` apuntan hacia tus escenas y filtros de OBS, así como tus archivos de sonidos.
> Planeo hacer un video mostrando como configurar todo esto de inicio a fin.{.is-info}


## Recursos
¡Todos los recursos pueden ser encontrados [aquí](/extensions/20-sec-instant-replay/files/Rewind-Effect.zip)!


## Configuración
Para obtener los tiempos correctamente con mi acción de ejemplo, usa la siguiente configuración para el plugin `Retraso Dinámico`:

Duración: 20s

Avance Rápido: 1000%

Retroceso Rápido: -1000%

Tecla en OBS para Avance Rápido: CTRL+NUM3

Tecla en OBS para Retroceso Rápido: CTR+NUM1