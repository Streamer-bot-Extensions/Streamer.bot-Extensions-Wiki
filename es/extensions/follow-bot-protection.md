---
title: Protección de "Follow" por Bots (por Caruha)
description: Verifica si un usuario que empieza a seguir al canal pertenece a los bots de Hoss o a cualquier otro bot para generar "follows" y, de ser así, no continuará con la acción.
published: true
date: 2022-07-24T06:09:13.698Z
tags:
editor: markdown
dateCreated: 2022-04-02T10:50:52.282Z
---

# Protección de "Follow" por Bots [(por Caruha)](https://www.twitch.tv/caruha)

## Descripción
Verifica si un usuario que empieza a seguir al canal pertenece a los bots de Hoss o a cualquier otro bot para generar "follows" y, de ser así, no continuará con la acción.
> Hay dos versiones diferentes de esta extensión.  La primera es un simple código de C# que verifica si hay bots para generar "follows", y la otra lee desde un archivo que contiene una lista de nombres de bots. 
> 
> {.is-warning}

# Versión C#

## Código de Importación

```text
TlM0RR+LCAAAAAAABACdVtuOm0gQfV9p/8Ga53gExoxNpDwYxmA8Y498A8M6D91NGwjNZbl5cJR/32qwd26JtFlLyNCnqvqcqmqK73/+0evd1DQvwjS5+dwTP7ULCYopPN2oaakFlEQ33TIiJZgVgPzFn3u9790fQKHH7YfKHRqg4agvoSPpDxWM+wqV5b4wHsnSUabKSLjrYrVOf1e04vskFWMvqzRBmFEer8wr+rL+npSeMpaeXoXz87TKLhY9LY0xKl+hiJ1QU6yr5EPgHCVeGk9acQAeESteoSRNSJXnNCk/Yh8S8iYp/4l1a+TRguRhdiFwQ7hh0QuPPT+sadJDeY6aHhApUZgUvaqg+bsAEaXZhIHxB46dQnqkoIDQd1RbUPt8ONghpOBUHA6LkORpkR7L2+V0ezjoOdA/pXl0ONTDW+FWEiRRORzigqQ5C/Gtx9hbJv8v3qYpShq30V4H+/pWBW5KqqVem05vv8xwTPydxM6eYZVPJ+Hh/dpjtKyx8cwcaZ3hgXx+jDyGY6tB9mJ0v0qXWqKKTvycOY36DRv6mTTq/W4azDGs4XgHeLHUfHby7HkBPr4TKzXWVJ0a1jdvv2YPWsRxHmuubca1qU0Dc6MKyGBnc+Zl2DiBj16ZU32x1dTMNETm2EN/tXtemDPr7O7nYLdOnf3KR7C/aegV3ai1G/IYgG/UszebAxePY2CrBiRZ+Xjg+J4RMNOQA2zvfHMzDVoO+6VAYla5YumZxrz29Mse94JPm3m6uLcEMzz5ZuyfiLQKH7VJiAzl7GlmYWrzFEvL8wu++Bdfbjp8MVuIgIPmaK6t2itE9xORNBf/s3XxD+rldtf5A37xLzxbDkh4vR8Kl/vSsWWoEwvMRBiZGuTR0CNXUyvHFhnURMDNJaeG3pBYl1utK+FBW7GBszd9qDsj4UThuCstsZm0up+4v8mEyjKUbZdHkj5sC/+xGfvuwBJIG3d38e/2a/sC9HEbklhVazODXNpeymsFNYEazAO6UQoE+TYNJW5zfeHb1Wh9bjnabk1iK3AGfurFemPOfB9B/aGPBIvvmSwyeuI6+H5KBnXPIE6MbDmCfQPol8AzlmmnlwEeiGRgNW1fJ+sA7M4PMz972BeXmjDoX7/aGkqyseUYN35kRvMAh+qi5Tp98XsK1VGrOxFCnpNuj2i+ElXzkXkB2kMitpPsqZnUj8DFNdYManLGtl7AGYhc+xlyMFlq4cQ3tQ9X/SgsVxtN3rqgZWtbZzLQE3cDfEIl5GeASm2NFFNfikRS+Rnl8TXc9qUaO/Yz9H906QfQkCyudZLQfg21mDNnD3pCfl4m4Q7iEX4uDSsyp7wepg99FV3PIfeFOA0e6JEz0Pn7oYF++eYMFBEnq1/oUBt3vxZJPPTdWC/IYNfycRLY2y7P5qSr3bHrReXaO20Oo+faFeAsxmNI7FzlHNYDpXa1aXjtQQx9YBrTth9Mg1U/66/uXM+ZN7Ma0CpAT7KnU8Rr8g3eaQLUUnT3C59IVvho66Cf1dgHPnsB3l9w+V++vJsVWU5JGmch+8Ww8ChDzaZE+ceB1+LdqJeJPJTGMOplbyj1hwPvrj8W8biP75QhRiMPSXf43cYnGvoBDyrcCm+Rssk4GYX/3iLXmf7mE6GjkXj0mQd7Wf3x6VdTuEas/dK4yaqy16RV3ju2c7jXTfAepu1TGYQFzNk45tP+Z6pFRRyPCTr2BYK5amXcH3t3qK8oo6PsHYfiUJJ+V7UoCL8tWnwl+nr79f13icHDtBP/6+vPGcZQVlDvFdqBbaDOsvsyu4I//gGSyYJNJgoAAA==
```
## Instalación
En Streamer.bot, en el panel de `Importación` de la parte superior izquierda, copia el `Código de Importación` y pégalo en la `Cadena de Importación`.

![follow-bot-protection-import.png](/extensions/follow-bot-protection/images/follow-bot-protection-import.png)

## Configuración
Liga la `Acción` `BotCheckFollow` al `Evento` `Follow`.

![follow-bot-protection-event.png](/extensions/follow-bot-protection/images/follow-bot-protection-event.png)

Inserta la `Acción` `Follows` después del `Comentario` en `BotCheckFollow`.

![follow-bot-protection-comment.png](/extensions/follow-bot-protection/images/follow-bot-protection-comment.png)

# Versión de Archivo

## Código de Importación

```text
TlM0RR+LCAAAAAAABADtWtuS4kYSfd+I/Qd2nk2HLtAgR/gBqUGI2wzQSKBtP6ikQlLrhpGAFg7/+2ZVSTQX9cy0PfbuOHYiiGakqqzMrKzMc7L49Z//qNU+7PE29ZP4w481/gf6ILYiDP/7ICeZ4mE7+MAeW3YGw1J482/y/1rtV/YHXvkOGc/dN9qcxHF1bAutegNJYh01BLEuCg20trDQdPg1k0Un/bLDO7JOvAvD16c4tlCIibxsu8Ovz6uVoq/cbbLbFO9qShIhKzt7a4UHK09nO2Lg2grTM5lbK3aSqEPtun1rJ7G9225xnN2+u/HFhT++oDB97eDU3vqbYukPdEha89e1XYq3NR++xjWUZKGfZnfZS1Zb+yG+EhFgvOmE/h7f6Mesw2sM2tv4Sk36Uvnx6cnwwfxD+vQ09u1tkibr7G7SfXx66m1B9UOyDZ6e9o077k7kRF56eopSO9mGPrpzwvBSk98nb56nGY7uYGcyP8J3c7z1rdA/WsQl33gNIu1c2M+XnkJ5hpXEodvlLCcbFNnuQgyPjqpnHw/c8PrZKAg/VT4PZyHuT1sP0w1vC+HOzOVHvJxwpsHtdFVvOEpzbhoOj9RePlt6BzvSjzBuj+IxzEkmSizzq+hls8rlZxhztHP5YdH1BgieoWgB79OJ4ndcTZEPjjFILWPsriJpjxS5h1X92VnOwqESlGOITPjbKT7tvaZ0PW0uc5YaHrW+s0HqAeb3dlq3N35U5I2m8uHKaLjTxctY6+tHczmAcbNktZy6Fuijqb0dnst70ycy4P1cPjr9AejmkHcwVvbseOoiYeU6qhdqatNDxsLV5l0PdBko+iA0Bb2h9QcN7YFzUaSLWo89G3Y7vsF1MyPqZvi5k33UJWeYaxvi51cbyvVsYjf3CHY4XRPsWLif5nJH8xt7U+1xq7nkI3GWWuD7UTwDv2star9Kxxb+YR8n6uXMVo3I8GywxcgHsH96/hj1MnM+cGBf9wtxlltGMwb/MllszkRxz/Xr7EfCJDGNyRb2bgN+iizjBfygN4guxbMdEqfuShyEK9gveLaHvXXNSAI9wr0z7yTgl9BUZA7lcu7AfqyMCWcZ0k5Tpd1KWIBv22Q/Draq74bzzoU9lrFyh0pPJeuOgnJdj/hjTL7PojA158HmIjb66YUM+ulOpnOlOUaCA/Fn7ofKgMqEuPFAZ2oD6MyjCGIDdGR+lyMkvATgl1TrT8Dfk9w0ehD/JCaaoTa/3k/2GeVtd1r4Q1O7IJfoSO0X7Sjk2PfGrY6wB2RPNMV7hLiA2OWXdDzspS3aZD8LPxR66PR8JlexsxlOb3XCFXqyNSfiKHRyC3QFGTtz7vqWKsFZrbbtzTkP8vvnqG3+/et03j8H7Jm8sVefs+fdc8Ce96/TOc1RpsFAWcKYYJIicUJy31XOozlDqniWm8sZb0cNF+KGNx8v4389rco5DlrOZXKOdJIb7LwjaSx+dotI98xuL0Vdkqf141Ad7B34boszGn/Dx5TGuE3G9SFnGy+pprKxkJNyJHBlzHvkPK2MWQBnjOTYDPIvnKNebke95kggMqcXulK5sb6j4/uwruEkJGcTWXY88PBconkQckekEb0UeQfnJGS5ena88I1q7omOK8F1h33Ts325oYHf6bweqweXZ+W6xpQ5MIS1Qo7m22h2JGcawfkDubdnWIWxikfzLewj1MKZB2f6OIQaMQp4z1EnybDvbq5y8EZTVpHWd13tkXM1X9tU7HGL1hyIkaJGbmxu4CGf7BvNbX2IgT5SJR/2w1gttTYd99BItCg8Tkld9IOTjCkva6PgZW9yEIdRGx4OCnmyYhrEbwt3JXjhSkjvtX7G3sWcPySx5UKcTkOo5e7uUZXiudGMUO4GWkD30y3t+ujLLTuGMcxXCVYCwA3SY1HzkuGykHftQ2ZvhXy63zTvg80n35J1ALuEdvxlebrQ2ziKy4/Luqf2AlPVAzibGYvjWQhYpVn6CepPAuspgCM2uDyjVbYXPia6sPFNSeu/tLXeJEGinkL98yGGFxDb4fk+KAu6d4+m0QweDYKfejHkhUDzyT42XCzSOJVADm+LcrgSZ6SWKlCv/JEiR6Az4JbSFrJHY5f6wpdFyDNwdkgdAl/5BOd0/AXIswm2IjZ3iT81OJ/NoMRPZC7IgTPcC1ZCj+DAHHz0vBKgNsbTQan3et5xy+8m1YFggU6iGcwPw2X2e32kMpsgJ4qcW3Ee6QfONecsB3CWTQ/1J+HHnJzTAamLgFU6FbWV+1xOrIg1yH+K3EeCFADG/EjwAcEFFAcSv6ks1lmeA13J+gWOWNG8ejZevc1zJ/37M8BEi1PeIXqtpz/9dMWNNltsJ9GGkKZKcuTg0MrnmbW9JXf0PWO0PM8hABJcXcKCVG9gC9cty76vixZuNUTU5J3GNSk7YN/1iFDujrt8k+UbooxE/l2+KQnsBRNmasQOfiHCXp/+Vn79+ZqOqkQMJXs/n7PYMLQ2KXbO3rKXv/1QTeMl3r6XHIurt7DUrDeazn1dsjGqO7Z4zzfv20J73fxmNL7jON8dk7/QuYimCzIPA9Jamm392K1lSUnjaxkuePy//pZE/q9qC/yfyO8pUQSSA6BqA4XqGQmEODl7czkGYqjn5pQU3pDoGGIAu1gB0KM2AUrLxTOvo4WZPNI33miZHEaP4Xo5T2/AgF0AE+0K0BLyPlW03UiYAUDr7gmhQoRQKU0O/OYXyZ2S30uiSUElAdEfKQgFOavlILb51AeAK0IxOTjLqb+cNxeIB+IaEd+7ZbGIAbAdoUB7DoAwu69ztKAuqUwKIM/lsaJeTd6hOGfgux0UUDrv2r8MyGVHCk5Z08A1lx6xv3jWJMDqmYBliJcjIeYmIb+i5mJD4gHQ7kyDgCQA70AwYI88ACIbJDQIEX4uyG2yWsoHE4CS1rkorgwYLBi5mBXr3pCKeXCxV1WE9Rq0agGzxRFIM4faADrrxA8kjgIg4B4hAQhAne0fXFtonxoVMIY0KrwCjN2Cfohx5o8FKeis8UHtZwSOfB+5tzqWZ2/YI/ute0hn42FPj84ZySobBOz8faGh8TY5KeLa3uniYAN7N4a4gLM2AEA1Ob5h25tzxv33z0FH/f3rPLx/DhLH/Pvtef8cdFy8f52H0xwKiMmYqfCyt4VFUklICBh1PwP+gxOhSYt4qYrxI5y58swG7Mx2Xb0/aBbnNBwZQG6U7itpW7zRBLuQeyjPCI1j0uga+dVNjRsQftnclFg+K/IenznnxJvkNhbrpPb0gimQL9oUWY5vGlpFc2Q/EmluzCF3nfLtOcGk82iT84poFvbT5ijNO6SRq48Ra6pBPWlOwN5ni51DKnt4lbNJ3gWCIJpL7SSPNDlBdzJPAMLtYpZ3zpoqYRETIeRAjzSJpav1N5iQlTNCvRBgD7p8aIsTz4T4AWLeKUngSOnEWDxrJJxkLTbruU0aMUSfAM/lEBP/9cdfIP3aH5JXtf+UHLJ6fdmoumnATv1Xu2TZVElO/rx9pFH8Wpu7N/X9q3MvrVPN4Ktyb1Uz+aaR51XGEIkXqGtVTTzQp/mAVAmIrnt9KSBRzHW2Jt23cBKiaDYxl5PjCjAP8d+0n9F6v54f3IGYVcfxkouLJrfHfExrNWdBTnnLj/8Vciq0LKvV5hp1/v6+XW84HFdHHNeqNzlJarek+/uWIP3tyKmNBa65JnfMjsgDI8d2vY2ldd3G9ppHgiTcW9+OnM5w9N2R0wudi2i6IKcwINnjtEYm1tbbJPobU9KRH//yl3FG0rxWX0KG85vHUeBA/tGBd4wreSTJgzati9wQuIwPueVZUyfpCvIVzf3dcIdIroQccsL2/ROv9CHYAevoDdOY8IC5k1Njvl9Vuxfnl5v5agk1BTiqo1TzI4vxMCrnD3FAobhwLfV546JVC7lr/OGOcgl4LZ+xZmtx2Xpx0dnkgIsFRI/xAx2/QfGU1jyQ462E1J0vmA20/hrkosH1CgzVK+rz7WVg0Yi9xhVvcydaD26xnchd+M/guddLa+W9l0cUNwVsH2ijNSVYmlwoI//Es0sufFZPi7UY96c1+1O/wGjHxqvtp+Y+uyhl67CGbXmZj6YFpiwuuOmYvpMg4aVs2LJLbHbpf7FXn8F9VKfhsgIzsIuhky0XeHLekSCGGteXQG9e2p5hSPqjgHAQIkMSzEWPG0IMvfqY3zsUvzL/lritiBl2ubx4e68Al135HjAxxy7vyKVV0cfIzTlPL7aZn6lexwvM+QXsAjGTIdEMzYeE4JjTmgTzmfFgj+YVeOWtS6j4m8g9XaiaUS8FHve1F7EbU0m3FXjuGgd/nvMpTuvEZQh+Y+dTPTufVM9KPC+cYkMaFBcSM/bDhtteB3BEp6/nELscuZg66U34acz9OTjPkngec+t1fY3XqN6wW626JAIC4jlLsJvonsMO9/fDedLaaTewBcAO3wPOk5w6WuNWvdFsCYLUuredJv5mOE+24sfEdc9/YPedoL0KzYvIusB8bExaQ1b8P4Tz/gAoA0D12jgXXjxbHFPSB0mtSNyb08F9BVeQwISDO1t6ANJ0jhDJcgy7qQ5pcWKNY1I0e7kpTpAWU/Bx25S+TFoMkKnFLwcIOKLJxgmdrpMiYeChHhTn5xc67pPv+sUt+Q2Z/JpfGkDC5i5uha8TVUVDubyV/8pffj1e/Tri7FcRhzLJVxHxs6KrkzFf16SGgnfhpzP/QFGlyfbaT4RcF8Du9/nc/bpie3MDXzZ0bpqD01I+3R/WVLz6JUhV0+C6GfhnFhPcarTbVtupCy0O8mrLduqWINp1YCwCx3Nti7Ot77eYkD9sJKsI5cvf/gM696kn6i4AAA==
```
## Instalación
En Streamer.bot, en el panel de `Importación` de la parte superior izquierda, copia el `Código de Importación` y pégalo en la `Cadena de Importación`. ![follow-bot-protection-import2.png](/extensions/follow-bot-protection/images/follow-bot-protection-import2.png) ![follow-bot-protection-import3.png](/extensions/follow-bot-protection/images/follow-bot-protection-import3.png)

Ahora aparecerán en la pestaña de `Acciones`.

![follow-bot-protection-actions.png](/extensions/follow-bot-protection/images/follow-bot-protection-actions.png)

### Comprobar Referencias

#### Referencias de BotCheck

![follow-bot-protection-references1.png](/extensions/follow-bot-protection/images/follow-bot-protection-references1.png)

#### Referencias de BotCheckAdd

![follow-bot-protection-references2.png](/extensions/follow-bot-protection/images/follow-bot-protection-references2.png)

#### Referencias de BotCheckRem

![follow-bot-protection-references3.png](/extensions/follow-bot-protection/images/follow-bot-protection-references3.png)

#### Referencias de BotCheckBanToggle (Deberían estar ya por defecto)

![follow-bot-protection-references4.png](/extensions/follow-bot-protection/images/follow-bot-protection-references4.png)

Abre `Execute Code (******)` haciendo doble click, o click derecho y después elige editar acción.

Presiona `Find Refs` (encontrar referencias). Si Streamer.bot no encuentra las referencias de manera automáticamente, requerirán ser añadidas manualmente. Click derecho y presiona `Add reference from file..` (Agregar referencia desde archivo)

![follow-bot-protection-find-refs.png](/extensions/follow-bot-protection/images/follow-bot-protection-find-refs.png)

Los archivos de referencia pueden encontrarse en:   
`C:\Windows\Microsoft.NET\Framework\v4.0.30319` o `C:\Windows\Microsoft.NET\assembly\GAC_MSIL\` Se recomienda buscar en ambas carpetas y usar el que funcione para compilar.

![follow-bot-protection-references5.png](/extensions/follow-bot-protection/images/follow-bot-protection-references5.png)

¡Después de agregarla, deberá aparecer en `Referencias`!  Presiona `Compile` para ver si todo está bien en la pestaña de `Compiling Log`.

![follow-bot-protection-compile-log.png](/extensions/follow-bot-protection/images/follow-bot-protection-compile-log.png)

¡Después de compilar correctamente, presiona `Save and Compile`!

Copia la `sub-acción` y pégala en tus `sub-acciones` `Follows`.
> **¡Omite esta parte si no hay una acción de seguidor o usa otro bot para mostrarles!** 
> 
> {.is-warning}

![follow-bot-protection-copy-action.png](/extensions/follow-bot-protection/images/follow-bot-protection-copy-action.png) ![follow-bot-protection-subaction.png](/extensions/follow-bot-protection/images/follow-bot-protection-subaction.png)

O agrega con la sub-acción `Add Action` > `Action` y elige la `Acción` `BotCheck`.

![follow-bot-protection-add-action.png](/extensions/follow-bot-protection/images/follow-bot-protection-add-action.png) ![follow-bot-protection-subaction2.png](/extensions/follow-bot-protection/images/follow-bot-protection-subaction2.png)
> ¡Asegúrate de que la comprobación de bot esté en la parte superior! 
> 
> {.is-danger}

 ## Eventos Liga la `Acción` `BotCheck` para que se active con el `Evento` `Follows`.

![follow-bot-protection-events1.png](/extensions/follow-bot-protection/images/follow-bot-protection-events1.png)

O si no hay una `Acción` en `Follows`, solo pon la `Acción` `BotCheck` en el `Evento` `Follows`.

![follow-bot-protection-events2.png](/extensions/follow-bot-protection/images/follow-bot-protection-events2.png)

Presiona "test" y un archivo será creado con algunos nombres de bots (todas las variantes de Hoss).

## Agregar nombres de bots con comando
Agrega un `Comando` llamado `!addbot` ligado a la `Acción` `BotCheckAdd`, confígurala con la opción "location" en `Start` y establece los `Permisos Grupales` a `Moderadores`.

Cada vez que un moderador use `!addbot<Username>` se agregará al archivo `botlist.txt` como una nueva línea.

![follow-bot-protection-add-bot.png](/extensions/follow-bot-protection/images/follow-bot-protection-add-bot.png)

## Remover nombres de bot con comando
Agrega un `Comando` llamado `!rembot` ligado a la `Acción` `BotCheckRem` configurado con la opción "location" en `Start` y asígnale `Permisos Grupales` a `Moderadores`.

Cada vez que un moderador use `!rembot <Username>`, el usuario colocado será removido del archivo `botlist.txt`.

![follow-bot-protection-remove-bot.png](/extensions/follow-bot-protection/images/follow-bot-protection-remove-bot.png)

## Añadir un Interruptor de Bloqueo (Apagado por Defecto)
Agrega un `Comando` llamado `!toggleban` ligado a la `Acción` `BotCheckBanToggle` con la opción "location" en `Start` y asígnale `Permisos Grupales` a `Moderadores`.

Cada vez que un moderador use `!toggleban`, activará o desactivará el bloqueo automático.
> Por defecto, está apagado ya que la variable no existe todavía. La variable será creada en el primer uso de !toggleban y enviará un mensaje que dirá `@usuario Ban: False o @usuario Ban: True` False = Apagado and True = Encendido 
> 
> {.is-warning}

![follow-bot-protection-toggle-ban.png](/extensions/follow-bot-protection/images/follow-bot-protection-toggle-ban.png)

## Información del archivo Botlist y ejemplo de un bloqueo falso
Los nombres pueden ser parte de un nombre de usuario completo. En el caso de Hoss, éstos nombres cubren todos los bots conocidos hasta el momento. Se **recomienda** agregar la mayor parte del nombre como sea posible, de manera que no haya muchos bloqueos falsos para usuarios legíticos que sigan al canal y que tengan la cadena de texto como parte de su nombre.
> Hoss usa todas las variantes de hoss00312 / h0ss00312 y es por eso que solo se tienen las primeras 4 letras en el archivo. 
> 
> {.is-warning}

![follow-bot-protection-toggle-text-file.png](/extensions/follow-bot-protection/images/follow-bot-protection-toggle-text-file.png)

**Aquí hay un caso de un bloqueo falso**: Si un usuario llamado `�hasselhoss�` viene a tu transmisión y empieza a seguirte, el usuario será bloquedo (si el bloqueo está activado) debido a que parte de su nombre está en la lista de bots.
> ¡El archivo botlist.txt se ubicará en la carpeta de datos! 
> 
> {.is-danger}

![follow-bot-protection-toggle-folder1.png](/extensions/follow-bot-protection/images/follow-bot-protection-toggle-folder1.png) ![follow-bot-protection-toggle-folder2.png](/extensions/follow-bot-protection/images/follow-bot-protection-toggle-folder2.png)
> ¡El archivo puede ser creado manualmente, pero el nombre del archivo debe ser botlist.txt y debe haber un (1) nombre en cada línea! 
> 
> {.is-danger}

## Bots conocidos hasta el momento:
hoss h0ss ho5s h05s hos5 h0s5 ho55 h055 h0st host h05t ho5t lunar_ lun4r_ manolia blueberrydogs
