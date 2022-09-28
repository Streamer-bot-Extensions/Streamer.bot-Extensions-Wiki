---
title: Tiempo de Espera de Acciones
description: Aplicar tiempo de espera acciones si son activadas por múltiples fuentes
published: true
date: 2022-07-24T06:08:05.566Z
tags: acciones, tiempo de espera
editor: markdown
dateCreated: 2022-06-17T18:16:14.167Z
---

# Tiempo de Espera de Acción

## Descripción
Este proyecto te permitirá establecer tiempos de espera basados en la acción en lugar del activador, por ejemplo si tienes un efecto de sonido que es activado por un `Botón de Deck` y por un `Comando de Chat`, entoncés querrás aplicar un tiempo de espera para que solo uno de estos permita ser activado en el tiempo que establezcas.

## Código de Importación
```
CódigoAQUÍ
```
Una vez que lo hayas importado, deberá compilar sin necesidad de agregar otras referencias adicionales.

## Forma de Uso

Para usar esto en otra acción, necesitarás usar la Sub-Acción `Execute Method`. Necesitarás seleccionar el tipo de tiempo de espera que deseas. ![actioncooldownmethod.png](/depreciated/actioncooldown/images/actioncooldownmethod.png)

### Button Cooldown (Tiempo de Espera de Botón)
Esto te permitirá agregar un tiempo de espera a una acción que está ligada solo a un botón, o a una acción a la cual quieres aplicarle un tiempo de espera si es que la misma proviene de un botón. Esto es útil para decks compartidos con varias personas. Necesitarás agregar el siguiente JSON a los `argumentos` dentro de la configuración del botón, y editarlo de acuerdo a tus especificaciones.
```json
{
"buttonName":"NOMBREDELBOTON",
"buttonCooldown": 30,
 "buttonPress": true
}
```

### FullActionGlobal (AcciónGlobalCompleta)
Esto te permitirá agregar un Tiempo de Espera Global a una acción, sin importar cómo es que fue activada. Para agregar esto a una acción, necesitarás configurar dos `Set Arguments`, uno para `actionName` y otro para `actionCooldown`. Al final, deberá verse así. ![fullactionexample.png](/depreciated/actioncooldown/images/fullactionexample.png)
