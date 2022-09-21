---
title: RCON (por ItsTheBOFH)
description: Esta es una extensión para Streamer.bot que te permite usar el cliente RCON para conectarte a Servidores de Juegos por medio de protocolos RCON para ejecutar comandos.
published: true
date: 2022-07-24T06:10:21.956Z
tags:
editor: markdown
dateCreated: 2022-05-18T01:44:31.853Z
---

# Código de Importación
```
TlM0RR+LCAAAAAAABADVWE2P2zYQvQfIf2AN5BKEC4oiRTEIAqRJ2+SSAM3HoXUOQ3K4EWpLW0neDwT57x1J3l2vbC+sNJs2PtgWSQ057808Dvn5/j3GZqdYN0VVzh6z5FHfUMIS6Wk2Gx7Bt9TdUMuf3TNjn4cf6ipCN84568Gj5dLZhCutMp77kHNQ4ACDii4Rg63+pb9XuOrtuwSk9ai4jlZzJQ1w543lIQUb8pjYRLqN97AEt8BuxrZe4XX75XJ/SlpcniygRfYzNIVnf1RLV+CGheO6Wp10Q01oA3+HTVuUxxv9sDiDi+b3VYdFhEWzMUkNZaiWz3ootnt9VfpVXWPZbvdtwXcDwn5IU61qj1cEXLWfQl10Pr9ee3hSFWXbzG4OOunoa9ptYPre0DsJ3RI+rK3ttRQwwmrRfoBFz4+42TtwbRIvRWod91muuBIgOSQpsZ4LBxazNE/kyOwZFsefOmDE0chke3HSey1Hfl/yVK4Wi9EiyoDn1JNet355tA/Wg+CrCD9Ys6rG8A9AzJ74armkAPBV0z4dvT/Q+yrsXG69Kl8tlxgKCsrFxU6CILZYX8VVsgtzLTGXKCirjAxcOTQ8z43haBEi5CmYEKdjLnZjPpvtRlwdgvgPFMjWZ2hSm3Kru0A2GLlNLPDUqwRQZlEI9x0COZGTcBWH4NoL4jfDdoe1Eb67SRhg9toYL5TgkKucNJ7UnmCOPIUYjMk9NavvAPNBKG/AcCchfMWi3KMz/FJo2C6lGQDNrJFWxsBF9JIrJAGmCNZcu6DSmEflIUwHVE4FNDsE0LU33bKfP57P3zcEz3zefCpOoZzPX1R+taQtk5retjUSrvWRq9r5/FnTYNda07Y6fB/h+TgGoT4e3u6B86wfdgHLBePIuv2dPWhO4Kxcr+HBGJOq/os2/xdF/W9WNzKK5SnlT7eiz19G00HR/lrVv5wX7T5BQhNTEWlnDd7TfqoyypToPDdCSq10IFmCqcRm0zQ+/wFIPSaTPbH008Ax/v+JlVKZFF3KwVvBVRRUGWtheIYpqpA5mSXmjolNxGH10qBDWowmXcL5nr10KIu3it4N7xXaLHOZp+IFkPQqpyJfKSrylc4zINEC1JP1SojJgmW/pmLcVJAtaH2Ny10V/w0sZ/PZExqENVubeTrfIqnHSWi0IRrPUwRK/zT33EIuucyMNF4Lp/3k9E9kuidO3mLLKKIHbxvWbTnPrnJvTwxNCaF+ggva767NspdYj/N9faYwFnSSWu4w0DlQOMetMIInWeJF0KmJkH1FiNhv5/uk9Jk9pM+LN+z1m3fs3Zv3z192zzsdp6OyR6+o6CR/6QiVWzozI52o0kQ4r6VT+WRluMXxb0YsLKtV2bIqsqEKOtrpncQsw1w7bjAn7yL56RKvuXdCqqhBGSXu3js9mTq2yR3bS14AZ5XWQMIW6ACRY8Kdpaj1VqWQZ1FR73cg70D2buraeBP9am1r4II9OfsELWsr1j0UJeuMM09te6WO0tpnNucepOfd9RCVsDGjilapFIVO0Pj/VOoOOi3ciJmHrJvmEohQ7Q+bPKaJjl3YhIScBwBy3mQUO6kSxiWSyvi7Dxuz4eHl34/jO6vfOiO3XlytMyHSwi2Jl9CSEl2j6+6EUqIXbOqsd1Ifzuflbd4E2m4tQnYo+A6HfbVYwEmD4drnj0NnP3oYOdxc3nYROu1C0y0q39WqWyu/AsEEGdjbLlGb2eZy7t/78g8mt8HcvBUAAA==
```
# Instalación
En Streamer.bot, en el panel de `Importación` de la parte superior izquierda, copia el `Código de Importación` y pégalo en la `Cadena de Importación`.

Usando el cliente RCON: https://github.com/gorcon/rcon-cli

Almaceno el cliente RCON dentro del directorio de recursos dentro del directorio de Streamer.bot.

Recomiendo almacenar la información de conexión al servidor dentro del archivo rcon.yaml.  Puedes encontrar el formato para esto en su sitio de github.com.

Aquí está mi plantilla para el canje de puntos personalizados.   Tomé la plantilla de canje del Sistema de Puntos de Lealtad (System Loyalty Ponts) y lo ajusté un poco.
# Configuración

Si tienes cualquier pregunta sobre cómo estoy usando esto, por favor no dudes en contactarme.  Ahora mismo estoy usando esto solo para 7 Days to Die, pero el plan es expandirlo a Minecraft y probablemente a Farm Sim 22.

Lo que está por venir: Estoy tratando actualizar esto para no tener que usar un programa externo para llamar al servidor del juego, sin embargo en este momento mi conocimiento de C# es un poco (muy) escaso.  Intentaré escribir código en C# para Streamer.bot para hacer esto, pero no sé qué tanto tiempo me tomará.   Si tienes cualquier pregunta, siéntete con la libertad de contactarme en el Discord de Streamer.bot o mi Discord.  https://discord.io/itsthebofh.

# Colaboradores

 - [<i class="mdi mdi-twitch"></i> ItsTheBOFH](https://www.twitch.tv/ItsTheBOFH)
 {.contributors}