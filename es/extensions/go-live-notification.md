---
title: Notificación de Inicio de Transmisión (por TheShiningOne)
description: Cambia tu notificación de inicio de transmisión sin necesidad de ir al panel de control
published: true
date: 2022-08-03T15:36:43.592Z
tags:
editor: markdown
dateCreated: 2022-08-03T13:08:33.972Z
---

# Código de importación
```
TlM0RR+LCAAAAAAABACtVltzokgUft+q/Q9WntdUC17CVM1DJKBgQgbQBlnnAbpbRJrLcNHg1Pz37YaYaLLzsrVWWdjnO+c73+k+zfHnn3/0ejcHUpRRlt586Ql/tYbUTwhb3dx0Sx9VDC6Z5W++7vV+dg8GRZj7DYXhcLyVQF8cgnF/SO62fcmf3PVHAQ6kbSAJ27txx9UG/ahJzfnTmtJ3K0n9gBLOVxU1ubC/IFpjohZZMo/KKisa5rL1aXnhcxYs7/w0JL0w69HoQHppVkXbCPlc/kX+sMjq/L2+1ubTo9+UVp1+Ji/8FGfJfbsJn1GUpaguCpJWn7FPG3e1eVfK36W0ZkxKVET5a8qPaExIfs8r/JSyE0y2hAlC5EPmFpS/bDZOxCo6lpvNU4SKrMy21a2hLDcbtWBqjlkRj4ebzWF4C25FIA6kzSYpUVbQKLjFlF5r+a+MdlNWJPnf+QxS3c6rKm+JL3m/X29R0FREznC79dg18iBB4UqkJzyD1fMRLD7aHuMRxfJIw3Pr+K84tTKUwJ03o7XXjFZr1yjQqTTkECzQHEbBjO61mVEy+0lTDNNWaB1wXxMsCOOTXQOsXStfN9PGc9Q4EEYlsadtPlN4yT1nBHi878Aay/eSNmN6mmt8IceTBzNjOekROzrzfQrXiXQI5KlKZnCPXYsyH45PZJM/Yx0naqPNYRNwTlnPOB86ZYdHAb8E8ghggYK1ENZ4vj54olpqgtT4Ds6D/YBjLAfOsKzxvLrsejsUMf2uOvBYPdoDCIMEipqyA3g+tc/2pQNPSFBTzw5zbV62OmSoU+RCikQLoiQOv9nT2nNRCF09X7T64rLNYVLDc60sEEzu09bP+IA/k+JHOj0g0ez8XPC6F681zvSDN+e895EjVkhLpKPn6js8o4cgHu0CByJtnyMthrHvWjJKJHaWxo7peWBnATx3B1zwkuMEQqSMDiwu8R3jNX4wwDMV+I5Uu7JWurIurJnuNTsDVi/jzUIyOEa+MzqyM3hbsx6iKKYKixmzGG85gLYLdHsJVMUE6hIqfN3inLP0XY9Cd/ociFbuJXTP+4Vp63RT+g1CLVzG0speeTqLZ0/pWVMt1VFZznQgParHiNfBeuXEtSKm4TmaThg334uTz87GcywLO7Ah8A0TWqyrbaw9KFzLyZ8pjbH0NNbPWWtn3M5KgisqLW2lxba2oi5tZt+6A8m1zz1yPmezNgWpZnfnsp+XeK6ze4W7Pec93Z1bzu8cO/u33nqMd3TtWBSlT7XpWPFC1qeY94Wo5yTpzkKLjmG3L/rWhHBlq5JmrVTFglq0WHZ3k3Hu2T2kQWrWKwHWnqKeiDPaL+ZvOtvcZ+2Y92I0BSiFtNXkAkNO2Tf8+vXDSzovCMqSPKK/eUtjQv3Grvzi8+Bo8W60TjAWhndjqT8eC1J/KE4m/UAc3PWJIIzH/h2Z+Nvhh8RHEoU7TgpuwTVSNTkXI/HPNXIeiVcjuUV+M5Y7iSkmLzzRu/XX+ef3j2NwxlO0E+n75fSk1M9Lgi/QDmyJOs/uD8NFKAtLEjaVz/6//gEXskjLyAgAAA==
```

# Instalación

En Streamer.bot, en el panel de `Importación` de la parte superior izquierda, copia el `Código de Importación` y pégalo en la `Cadena de Importación`. Referencias Requeridas
```
System.dll
System.Net.Http.dll
```
Después de importar el código necesitarás obtener un encabezado de autorización, y el hash de la carga del navegador desde el cual hayas iniciado sesión en tu cuenta con la que transmitas. Para ello, necesitarás ir a tu panel de control de Twitch, luego al gestor del stream y abrir las `Herramientas de Desarrollo` (usualmente con F12) y cambiar a la pestaña de `Red`. Luego presiona `Editar Información del Stream`, haz click en `Hecho`, y habrá una petición POST a `gql.twitch.tv/gql` con `operationName:   "EditBroadcastContext_LiveUpNotificationMutation"`. Necesitarás copiar esta solicitud como cURL y pegarla en cualquier editor de texto. Dentro, encontrarás todos los datos requeridos. En código, encontrarás los marcadores donde deberás colocar tus datos.

![go-live.png](/extensions/go-live-notification/images/go-live.png)

> Después de cada reinicio de sesión en Twitch deberás obtener estos datos de nuevo. 
> 
> {.is-warning}

# Ejemplo de Uso
Tendrás una acción `Change go live notification` que podrás usar como desees.

> Este método utiliza una API sin documentar, por lo que puede dejar de funcionar en cualquier momento. 
> 
> {.is-warning}

# Contributors

 - [<i class="mdi mdi-twitch"></i> TheShiningOne](https://www.twitch.tv/TheShiningOne)
 {.contributors}