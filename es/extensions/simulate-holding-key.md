---
title: Simular Mantener Presionada Tecla (por ConfuzzedCat)
description: Una forma de simular el mantener presionada una tecla.
published: true
date: 2022-08-31T00:41:44.442Z
tags: confuzzedcat,, key, simulate, hold, holding, keypress
editor: markdown
dateCreated: 2022-08-25T02:42:53.510Z
---

> Esto solo está probado en Windows, y puede no funcionar en Linux. 
> 
> {.is-info}

# Código de importación
```
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
```
# Instalación
En Streamer.bot, en el panel de `Importación` de la parte superior izquierda, copia el `Código de Importación` y pégalo en la `Cadena de Importación`.

# Configuración
Hay tres variables o argumentos que pueden ser cambiados. `blacklist`, `whitelist` y `testing`.
## Blacklist (Lista Negra)
Una tecla puede ser colocada en lista negra simplimente escribiendo el caracter en los valores de entrada del argumento, por ejemplo colocando `adBc` no permitirá esos caracteres de ser mantenidos. Déjalo vacío si no quieres colocar en lista negra ningún caracter.

## Whitelist (Lista Blanca)
La lista blanca funciona de la misma manera que la lista negra, solo que no se ejecutará si la tecla no está incluida en la lista blanca. Déjalo vacío si no quieres colocar en lista blanca ningún caracter. Esto permitirá todos los caracteres que no son incluídos en la lista negra.

## Prueba (Testing)
El argumento testing agregará un retraso de 5 segundos previo a mantener la tecla presionada. Establécelo como falso, cuando quieras que la acción sea instantánea.

## Tiempo por Defecto (DefaultTime)
Si no se introduce ningún tiempo, esto dictarás cuánto tiempo se presionará la tecla en milisegundos.

# Ejemplo de Uso
Simplemente ejecuta un comando `!holdkey` con una tecla y la cantidad de tiempo (en milisegundos) indicando cuanto tiempo la tecla deberá permanecer presionada, por ejemplo: `!holdkey A 4000 `. Esto mantendrá la tecla `a` por 4 segundos. *Actualización*: La cantidad de tiempo ya no se requiere y es solo opcional. Si se deja vacío, se usará la variable DefaultTime.
> Esto enviará la tecla en la ventana en la ventana actualmente enfocada. Asegúrate de estar en la ventana correcta antes de que el comando se ejecute. 
> 
> {.is-warning}

## Teclas/Caracteres Disponibles
0-9 y a-z. Las letrasp ueden ser tanto mayúsculas como minúsculas, no importa que el caracter estará siempre en minúsculas una vez que sea presionado.

## Canjeo de Puntos de Canal
Usa la acción HoldKey_redeem para ello, ya que mnejará la entrada correctamente.

# Colaboradores

- [ConfuzzedCat](https://www.twitch.tv/ConfuzzedCat){.twitch}
 {.contributors}