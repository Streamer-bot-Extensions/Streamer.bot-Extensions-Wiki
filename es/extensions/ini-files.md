---
title: Archivos .ini (por Robophil)
description: Lee y escribe en archivos .ini en Streamer.bot.
published: true
date: 2022-07-24T06:09:32.822Z
tags:
editor: markdown
dateCreated: 2022-05-02T10:39:37.282Z
---

# Código de Importación

```text
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
```

# Instalación
En Streamer.bot, en el panel de `Importación` de la parte superior izquierda, copia el `Código de Importación` y pégalo en la `Cadena de Importación`.

![INI_File_Import.png](/extensions/ini-files/images/INI_File_Import.png)
> (Advertencia: Esto fue hecho usando Streamer.bot v0.1.4, pero debe funcionar con versiones actualizadas) 
> 
> {.is-warning}

Las acciones INI - Get Action ![INI_File_Get_Action.png](/extensions/ini-files/images/INI_File_Get_Action.png)

e INI - Set Action ![INI_File_Set_Action.png](/extensions/ini-files/images/INI_File_Set_Action.png)

Son ambas acciones de ejemplo a manera de demostración y te permitirán experimentar con la forma en que INIFile - Get Data, e INIFile - Set Data son usadas.


Hay cuatro variables globales que son usadas para los siguientes propósitos:

```text
"INIPath" - Este será el directorio de tu archivo .ini, por ejemplo C:\Users\user\Desktop\Example.ini
"INISection" - Este será el nombre de la sección dentro del archivo INI
"INIKEY" - Este será el nombre de la clave o Key dentro de la sección
"INIKeyContent" - Este será el contenido dentro de la clave
```

Un ejemplo de como un archivo ini está estructurado es:

![INI_File_Structure.png](/extensions/ini-files/images/INI_File_Structure.png)

Suponiendo que tenemos una Sección llamada "Robophill", una Clave llamada "Points", y el Contenido es "123". Si quisiéramos obtener esta información, estableceríamos las variables globales como:

```text
INIPath = Donde tu archivo ini se encuentra
INISection = Robophill
INIKey = Points
```

Después usa la acción INI - Get Data, y la variable global INIKeyContent tendrá el valor de 123.

Si quisiéramos establecer la información, estableceríamos las variables globales de la misma manera que lo hicimos para obtener la información, pero ahora tendremos que establecer INIKeyContent al valor que queramos guardar en el archivo ini. Así que si establecemos INIKeyContent a 321, reemplazaría el 123 en el archivo ini.

Esto también funciona para palabras y/o símbolos, no está limitado solo a números. Sin embargo, lo he configurado para detectar si el contenido tiene solo números, de manera que guarda la variable global en consecuencia para ser utilizable con otros números, tales como cálculos, incrementos, etc.

# Colaboradores

 - [<i class="mdi mdi-twitch"></i> robophill](https://www.twitch.tv/robophill)
 {.contributors}
