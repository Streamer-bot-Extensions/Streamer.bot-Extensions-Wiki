---
title: Temporizador de Comercial (por GoWMan)
description: Esto te permitirá crear un temporizador en SB que reproduce automáticamente un comercial de 180 segundos cada hora.
published: true
date: 2022-08-31T00:39:46.566Z
tags: 
editor: markdown
dateCreated: 2022-07-31T00:42:00.048Z
---

# Código de Importación
```text
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
```

# Instalación

> ¡Esto solo funcionará con Streamer.bot 0.1.5 en adelante! 
> 
> {.is-danger}

Esta configuración te permitirá una forma fácil de tener un temporizador automático de comerciales sin mantenimiento complicado, y deberá permitir una configuración de única vez.

En Streamer.bot, en el panel de `Importación` de la parte superior izquierda, copia el `Código de Importación` y pégalo en la `Cadena de Importación`.

![commercial_timer.png](/assets/commercial-timer/images/commercial_timer.png)

# Configuración

Crea una `Acción Temporizada` llamada***Auto Run Commercial*** y configúrala para tener un ***Intervalo de 3600 segundos***, ***Enabled en "No"***, ***0 líneas*** y lígala a la `Acción` llamada ***Run Commercial***.

![commercial_timer2.png](/assets/commercial-timer/images/commercial_timer2.png)

Crea un evento de OBS para `StreamStarted`, lígala a la `Acción` **Stream Started** y asegúrate de que esté **habilitada**. Crea un evento de OB S para `StreamStopped`, lígala a la `Acción` **Stream Ending** y asegúrate de que esté **habilitada**.

![commercial_timer3.png](/assets/commercial-timer/images/commercial_timer3.png)

Asegúrate de cambiar la subacción `OBS Set Active Scene` en la `Acción` **Run Commercial**** a tu ***Escena de "En Espera"*** y tu ***"Escena de "En Vivo"*** para *cambiarr en automático* de escenas en el comercial.

![commercial_timer4.png](/assets/commercial-timer/images/commercial_timer4.png)

Asegúrate de que la sub-acción Temporizada tanto en la `Acción` ***Stream Started*** como en la `Acción` ***Stream Ending*** apuntan a la `Acción Temporizada` ***Auto Run Commercial***.

![commercial_timer6.png](/assets/commercial-timer/images/commercial_timer6.png) ![commercial_timer5.png](/assets/commercial-timer/images/commercial_timer5.png)

***

Con esto finalizado, cada vez que pulses "Empezar a Transmitir" el temporizador se activará y reproducirá un comercial de 180 segundos durante tu escena de "Iniciando Pronto".  Después de eso, el temporizador le dará al chat una advertencia de 60 segundos, haciendo una cuenta atrás de los últimos 10 segundos, posteriormente se reproduce el comercial de 180 segundos y se hace el cambio de tu escena "En Vivo" a tu escena "Vuelvo Pronto".  Una vez finalizado el comercial, el temporizador hará el cambio de tu escena "Vuelvo Pronto" a tu escena "En Vivo" y le hará saber al chat que has regresado.  Esto ocurrirá una vez cada hora.  Cuando dejes de transmitir el temporizador se desactivará y dejará de funcionar hasta que inicies a transmitir de nuevo.

***

> ***Si deseas modificar cualquier cosa a este temporizador, puedes hacerlo.  Como cambiar la duración del anuncia a un lapso más corto o retirar el cambio automático entre escenas.  Si lo haces, DEBERÁS modificar los retrasos también o el temporizador no funcionará correctamente.*** 
> 
> {.is-warning}

# Colaboradores

 - [GowMan](https://www.twitch.tv/GowMan){.twitch}
 {.contributors}



