---
title: Comando de Antigüedad de Seguimiento (por TerrierDarts)
description: Despliega la información de los seguidores en chat a través de Streamer.bot.
published: true
date: 2022-08-15T12:41:20.694Z
tags:
editor: markdown
dateCreated: 2022-05-02T10:13:10.282Z
---

# Seguimiento Simple
## Código de Importación
```
TlM0RR+LCAAAAAAABACtU8GOmzAUvFfqP1hIucUVLCaGvaWHbQ9VD21v1R6M/UyQjE1tvEm02n+vjZWGJNtKlfYEfjPveZh5PL9/h1D2BNb1Rmf36G49FzQbIJyyLB0ZnwLsQuVnPCP0nB4B6kXkCdZUtSAUNzmVmJQVx4yQFsvqjjeyLTeskmnW3PTLg4/ztVfqXAXNWgVx3mQ9LOoHrryAB2uGz72bjD0GimTKLTgnwd/7YVTwYJQye9bB4s7OGj9Gykfmer4AmNqzo/vm9e1Uy7Qww3b++luUG829taCnW+zGsQvXZooz3nL4cRyj8GJ9gT0x20czzhn8gZLhNG84kXWNiSg4Ji0Q3LRlhWXO6YbIpi5pfdW4h77bRan5h/wSmZKG6krEybGLlP6VVNKnBRziLefqy/pvHkxwiIqylXdgv4YMV0jO2Tk07QDxHdMaFHK95oBWCdp28MXobnX1eaMFCSENseXc+DmT/DXnSkpE2bYUM6DBPtoWuC5IhQta87xoyKah5H+dK/K3dK5YOHd6fbxerU/xinm/HpcbqRQbHYgFmsB5UGKmv2/RGtqGIWz6if/yG8E1mYYVBAAA
```
## Instalación
En Streamer.bot, en el panel de `Importación` de la parte superior izquierda, copia el `Código de Importación` y pégalo en la `Cadena de Importación`.

Asegúrate de que estás recibiendo la información de seguimiento de quien canjeó el comando.

Esto solo requerirá un comando `!followage` ligado a la acción para funcionar. Esto obtendrá la antigüedad de seguimiento al canal del usuario que lo canjeó.

> Si el usuario no sigue al canal, no funcionará. {.is-warning}
## Ejemplo de Uso
![followagesimple.png](/extensions/followage/images/followagesimple.png)

# Antigüedad de Seguimiento (con objetivos y fallos)
## Código de Importación
```
TlM0RR+LCAAAAAAABADtV8Fu3DYQvRfoPwgL+BYWJEVSZG/uwa2Booc0PRU9DMnhWoBW2lJSbCPIv5eSvLZWXqe7ycJJgZ4kcYbk8PHNm9GH77/LstV7jG3Z1KsfM/5mHKhhg+lrtZo+wXXJ3KaRP4fvLPswPZKp9IMfIvi8yHPifIFE5CCIVt4QCRqNEcpwNNNa46S/e+yH9eu+qp5GsQZb4bBeF3ucjd+5qvd4FZvNL2XbNfE+uQSo2pnPLuCrpqqa28s1znZbx6bfDsafoC3dzADVLdy3b/v6+XoRat9sLsdzP7e6pnZ9jFh3z23PsNrDa3Rpmz46fHe/xUfEH23vIZYDDE/oP5omqHVhjZaGkRy4IILmnhgLjgiUiisRbGB2MfEWy/XNECr9ge5buikGuRjeIbZ3P5+6oym+2uPdsMvT6Mc3L2GwO+dvDxcX4fa63vbdIvRmixEeLoEukar6QzBNF3A9gmULJiQCEstDgkgaSWwhLAkFh+AZl0VYghX7+nqzQV9Ch9X9wYNC6DA+coMtEEpsuHwK4QCEyeHtv28yrrO3ET1Ih5wHpRkQ7kWig2E0nZVSYpzHxAbvVFGcSgfGz8oHdgwfOrwbQlpdhDGD+xbjRXYDbWYR62waLOt1eovZg0/K8l+ben2xON42YsCUnP7SuaYfU5QdQo6j9ToRgHhlB80KNGlWUERp7VAyVhjpTkburMCJz0mkPWw+kU3q9GwShZOeUUEoFQmxYIBYaZAUjhlljLJB4H87m3Kl0HmTChcFmU5YOGKt8ERqRjEo9Gjys2XTEupjKJEfQ4m9+pK/XF86iGvs/kipdrjS5FQx6lMp59YTAUOlQaVT4QGVC+ktCnpypWHnw4LPsNi9/rUsxD8PG4zVeGZyKUdg26KfWSfjDtRlg3Ma9V+jwbmCsvqWm5ydoL+7Kdts4FjmG2yzuuke1Dy7sLEB76AdKXiEjB9M2RC8AhYkAQM8FUCeZBy8IsByz0IuUHP/dWWcviJPT2t4XoOnv2MVvmWe7onlQp3mYjmR9gWpBKED5IUl3DlGhEqIg9VAlAQGBWVMO/k1pfKolvz1WzAsKKR/Q04s06nCUJneisBJyltllaUJupNheyl3v7TC/N+AvUYDxqTMg/dAdMCk5iL1HNrlnHChC43aKydP/rs9awM2/5k5m5gPj8lzUuTZ1DRts0n6t/P/+A9uKKRsshEAAA==
```
![followage_actions.png](/extensions/followage/images/followage_actions.png)
## Instalación
En Streamer.bot, en el panel de `Importación` de la parte superior izquierda, copia el `Código de Importación` y pégalo en la `Cadena de Importación`.

Esta acción tiene algunas acciones par Obtener Información/Antigüedad de Seguimient que necesitarás revisar para que coincidan. En `FollowAge` necesitas usar la sub-acción `get target info from input` y `Add Follow Age Info from targetUser`. Entonces en `FollowAgeSelf` necesitarás agregar `Add follow age info from who redeemed`

Esto solo requerirá un comando `!followage` ligado a la acción FollowAge. ![followage_command.png](/extensions/followage/images/followage_command.png)
> Este comando está configurado para permitir una entrada después del comando, por lo que necesitarás asegurarte que la opción "location" del comando esté configurada como "start". {.is-info}

## Ejemplo de Uso
Este comando es un poco más amplio que el ejemplo previo, de manera que un usuario puede simplemente usar `!followage` para obtener su propia antigüedad como seguidor, pero el usuario también puede obtener seguimientos específicos (como se ve abajo) para obtener la antigüedad como seguidor del canal de otro usuario. También arrojará un error si el usuario no sigue al emisor. ![followage_fail.png](/extensions/followage/images/followage_fail.png)

# Antigüedad de Seguimiento en C#
## Import Code
```
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
```
## Instalación
En Streamer.bot, en el panel de `Importación` de la parte superior izquierda, copia el `Código de Importación` y pégalo en la `Cadena de Importación`.

Una vez más, tendrás que asegurar que las sub-acciones de Get Info están configuradas correctamente, así que necesitarás agregar una sub-acción `Add target info from input` y `Add follow age info from follower`. Al igual que en los ejemplos anteriores, esto solo necesita un comando `!followage` ligado a la acción. ¡Asegúrate que la opción "location" esté configurada como "start", debido a que se desea que el comando acepte cualquier entrada si el usuario así lo decide!

# Colaboradores

- [<i class="mdi mdi-twitch"></i> TerrierDarts](https://www.twitch.tv/terrierdarts)
- [<i class="mdi mdi-twitch"></i> Farlezz](https://www.twitch.tv/Farlezz)
{.contributors}