---
title: Comando de tasa de bits (por WaldoAndFriends)
description: Guarda la tasa de bits actual cuando el Evento StreamStatus es emitido por el websocket de OBS, asignándo una acción al Evento.
published: true
date: 2022-11-20T07:25:58.817Z
tags: 
editor: markdown
dateCreated: 2022-07-31T00:41:30.281Z
---

## Import Code
```
TlM0RR+LCAAAAAAABADNVLFu2zAQ3Qv0H1QB2cyAlChZ7JYURYYCLVAXWYoMR/IUC5UlV6ScBIH/vaRkwbKtDEYaIJOoe8d3vHePfP74IQjCDTamqKvwc8BmXaCCFbq/8JMsbAMWA1WvVlDpsIdBWZduXMZv/x8Ez/3HQYX2+7jkQnMqiWIyI1zkjAhUnKDKI51lwHXCeq5u098WW1+vastyH8UKZImezzYt7uPD4X5cL4KvG6xsQIKFbRBWCwu2NSPi+6Zu10Mu6bPHOJQP8GR+tr71HEozqtK4duvVVdfpKarqSrVN4+hOsRN1DhTqUjQaW1Sw46azA3ADTeE7/77r03S9XfeTCA9z135yxp6q1KGmbhuFUxXKTu+wlqbT5PKPG7Qhjo0YVEc1+pFKLQRIoUhOlSKcISViPqeEpVkmBSaUJ/Ro4wMW90svEL08OoB9Wvv6LIoO48O8DozQH6LS+Oip9tHtsLw71v7G03QDuBuPrCxhbVCP0B7czqZdnMVzBTrJSZJLIDxLOIFUSAJC5lGWCk2j5NUuHq7YlGu/LMGb+6asJZTvwLYv++l/OXZ0MW53pJ35Jqk05tCW9nbnZjppW8kimsdA0iTihHPNCMRUkSxOOaQQyYzF59uWvca2s5fktfjoy4a/lu7B7ccUDA9wYYKL3frim1ybY1UbzNHt0FdK1W033kk5UpanImWc0HieEq6z2D3MqEkMDLjTJWGanS0HPVcN9haX2H/6zP4mDuD2H6QtbArkBgAA
```

## Instalación
En Streamer.bot, en el panel de `Importación` de la parte superior izquierda, copia el `Código de Importación` y pégalo en la `Cadena de Importación`.

![bitrate-command-import.png](/assets/bitrate-command/images/bitrate-command-import.png)

## Configuración
Asigna la `Acción` `OBS Event - StreamStatus` al `Evento` `StreamStatus` en la pestaña de `OBS`. ![bitrate-command-obs-event.png](/assets/bitrate-command/images/bitrate-command-obs-event.png)

Luega crea un `Comando` llamado `!bitrate` establecido con la opción Location en `Exact` y asígnale la Acción `!bitrate`. ![bitrate-command-command.png](/assets/bitrate-command/images/bitrate-command-command.png)
> El chat ahora podrá usar el comando `!bitrate` para desplegar la tasa de bits actual. 
> 
> {.is-info}

# Colaboradores

 - [WaldoAndFriends](https://www.twitch.tv/WaldoAndFriends){.twitch}
 {.contributors}