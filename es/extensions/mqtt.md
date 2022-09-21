---
title: Extensión MQTT (Casa Inteligente) (por Krayn_)
description: Una extensión que permite a Streamer.bot comunicarse con un broker MQTT usado en la mayoría del software de casas inteligentes como Home Assistant, OpehHAB, HomeSeer, etc.
published: true
date: 2022-07-24T06:09:46.445Z
tags: smarthome
editor: markdown
dateCreated: 2022-06-17T18:16:00.167Z
---

Con una integración apropiada a MQTT, SB puede controlar casi cualquier dispositivo para hogar inteligente e incluso permitir comunicación de bot a bot.

# Instalación
1) Extrae el archivo zip y coloca el archivo MQTTnet.dll dentro de la carpeta de SB Archivo: [mqtt-broker_(1.1).zip](/extensions/mqtt/files/mqtt-broker_(1.1).zip)

2) Importa la acción (o acciones) incluidas en el archivo mqtt.txt (quizá necesites retirar la línea extra al final del código de importación) 3) Edita la Acción "MQTT-Broker" 3.1) Coloca la URL de tu propio broker MQTT en la sub-acción "Set argument %broker%" 3.2) Edita la sub-acción "Execute Code (MQTT)", agrega las referencias (en caso de que necesites añadir manualmente la referencia "MQTTnet.dll") y compílalo. 4) Después de la subacción Delay en la Acción "MQTT-Broker" puedes agregar todos los tópicos a los cuales quieres suscribirte justo como se muestra en el ejemplo incluido 5) Después de importar tu código por primera vez, puede ser que necesites activar la Acción "MQTT-Broker" manualmente una vez, pero es ejecutada automáticamente en el arranque

El archivo zip también incluye una acción "mqtt-test" que publica la carga "OFF" al mismo tópico que mi suscripción de ejemplo en "MQTT-Broker". Esto es una prueba fácil para ver si funciona ya que como puedo activar externamente el dispositivo detrás del tópico, activa el evento ya que Streamer.bot está suscrito al tópico y lo apaga de nuevo. Obviamente puedes usar esta Acción para probarlo tu mismo, o eliminarlo y reemplazarlo con tus propias Acciones. Sirve principalmente como un ejemplo de cómo publicar una carga al tópico.

Créditos: También debo mencionar que esto está basada en una librería MQTT que se encuentra aquí: https://github.com/dotnet/MQTTnet

# Colaboradores

- [<i class="mdi mdi-twitch"></i> Krayn_](https://www.twitch.tv/Krayn_)
{.contributors}
