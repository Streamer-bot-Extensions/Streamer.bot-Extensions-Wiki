---
title: Posponer Anuncios (por TheShiningOne)
description:
published: true
date: 2022-08-03T15:33:48.193Z
tags:
editor: markdown
dateCreated: 2022-08-03T13:05:03.866Z
---

# Posponer Anuncios [(por TheShiningOne)](https://www.youtube.com/c/TheShiningOne)
## Descripción
El aplazamiento de anuncios puede posponer un anuncio de Twitch cuando tienes el planificador de anuncios de Twitch activado.
## Tutorial
<div class=“iframe-container”><iframe src="https://www.youtube.com/embed/ORb1EGwZRPA" title="YouTube video player" frameborder="0" allow fullscreen style =border: none; max-width: 100%; width: 100%; aspect-ratio: 16/9;></iframe></div>

## Código de importación
```
TlM0RR+LCAAAAAAABACtVduSokgQfd+I/Qejn1ejBNFlIuahpUVBmx2wRWTtB+rCpSkuy0XFifn3rYK2W7tnXjbWCKOoPFknT2YW5Pfff+v17g6kKKMsvfvSE/5oDamXELa7u+u2HqoYXDLL33zf633vFgZFmPv5PgJIGsH+RARCfyQA0v9zjKU+mfgjXwJjSQRex9Ue+qcmNedPa0rfrST1ICWcrypqcmU/IVpjohZZsojKKisa5uJ7tLzyuQhep1l2Jr17fBUtKLI6f8+mtXn06DWlVaefqQovxVly36b8GUVZiuqiIGn1GftUpptS/UTnu6AWxKRERZS/Br77gMaE5Pc0OpBPgTvZxCdMFiIf4reg8mW/30Ysr2O53z9GqMjKzK8Gxuxpv1cLpumYFfF4tN8fRgMwEIE4lPf7pERZQSM4wJTeavmvjOumrEjyv/MZpBosqipvia95n29LBJuKKBluG4AdI4cJCjYiPeO5Xf11BMuPtlUsUaxIGl5Yx5/i1MpQYofunNZuI212jlGgc2koAViihR3BOX3R5kbJ7GdtZpjrGa0h9zXBkjA+xTHAzrHyXTNt3K0aQ0EqyXraxjOFU+5uJcDPe1u7xsq9rM2ZnuYWXyrx5MHMWEx6xFud+T4Gu0Q+QGWqkrn9gh2LMh+OTxSTr7GOE7XRFnYDOaeiZ5wPnbPDSsAnqEgACxTshKDGi93BFdVSE+TG2+Icvgw5xmLgDCsaj6srjhuiiOl31KHL8tEeQAATW9RmIcCL6fpif9raZySoqbsOcm1RtjoUW6fIsSkSLRslcfBtPa1dBwW2o+fLVl9ctjFMariOlUHB5D5t/owPeHM5XtHpAYlm5+eA11q85jjXD+6C895HW7FCWiIfXUcP8ZweYCyFcGsj7SVHGjVqKMhjd6PGjqKVjqILO6Zhx+rJtDOfLCDDY+RtpSOr59sez9XGFWxgCmEIE4nCGZ2x82NNPUbbjWxvqKxsYnlqzYzpZmipbK9bDFuxPxKkAxRzarE8+R1gvW95H8/3R98BXAMlC4vC1ODYueVdsBzSKUXMxmpGXZXXVpfeMbfF3rjWJ2Yzst2TNjTiMERC+Jov/Wbbur8B4fTxZSM4bGXPzHco+zaI+F1nNX/r6So2DjDlWsy3Hm1Ei90JKTUFuWbvArufYQQFS1o+db1l78UJs57z94ffbabzvIrZqgSR6bS9azwn73oRaSW7h+7T0F47QLXtWeivZzarm73Wovitp7vXO7+iBoWJNUUirXdN+Kazi33Rbg1RMgrwQh+6rZ3KD2Yud1xfv374uOYFQVmSR/QXX1dMqNesK6/4/Nlv8W4MigiK4zEa9iVhAvsjfyz24cQT+tCTEJr4voB9+CHwkURByEnBANwiVZNzMTL/3SKXgXYzPlvkFyO0k5hicuKB3q0/Lo/PH4fYnIdoJ8nz9eyj1MtLgq/QDmyJOs9uuF8dZceShM3Ui/+PfwGlQapTdAgAAA==
```

Referencias Requeridas
```
System.dll
System.Net.Http.dll
```

## Configuración
Después de importar el código necesitarás obtener un encabezado de autorización, y el hash de la carga del navegador desde el cual hayas iniciado sesión en tu cuenta con la que transmitas. Para ello, necesitarás ir a tu panel de control de Twitch, luego al gestor del stream y abrir las `Herramientas de Desarrollo` (usualmente con F12) y cambiar a la pestaña de `Red`. Después presionarás `Snooze` (debes estar transmitiendo) y habrá una solicitud de tipo PST a `gql.twitch.tv/gql` con `operationName: "SnoozeAd"`. Necesitarás copiar esta solicitud como cURL y pegarla en cualquier editor de texto. Dentro, encontrarás todos los datos requeridos. En código, encontrarás los marcadores donde deberás colocar tus datos.

![snooze.png](/extensions/ad-snooze/images/snooze.png)

> Después de cada reinicio de sesión en Twitch deberás obtener estos datos de nuevo. 
> 
> {.is-warning}

## Cómo Usar
Tendrás una acción llamada `Snooze Ad` que puedes activar de la forma que gustes, por ejemplo en un `Evento de Raid`, de manera que cuando alguien te haga una raid sus espectadores no se atoren en los anuncios.

> Este método utiliza una API sin documentar, por lo que puede dejar de funcionar en cualquier momento. 
> 
> {.is-warning}