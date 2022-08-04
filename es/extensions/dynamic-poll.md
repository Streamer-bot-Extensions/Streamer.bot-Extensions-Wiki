---
title: Encuesta Dinámica (por NotZelda)
description:
published: true
date: 2022-07-24T06:09:01.566Z
tags:
editor: markdown
dateCreated: 2022-05-18T01:30:19.750Z
---

# Encuesta Dinámica [(por NotZelda)](https://www.twitch.tv/notzelda)

## Código de Importación
```
TlM0RR+LCAAAAAAABADFV9uSokgQfd+I/Qejn4eO4iKNEzEPYiuiLdNqi8i6D9RFZC2EAVHpifn3TUDHS9sxl5cxgkAq08yTJ08V6de//6rV7rYsSYNoffexJn4oF9ZeyODp7q569MgGzCms/FM812pfqxuYAlr4qSolMkJ1YdFQVUERFUnAFGkCViVaR3VZXSioilX+6EvGsiL+OuP8tMrWHuasiLdJMnZaP4J5zOFbQGrPEec1Pa9Z0cZlnHpngf0kyuIT8HLN4zsvT0dZUd7C4+lZ5MRb0yhsltW9tZJoTbIkYevNW9sbRi5YuYB9glIuU5aSJIgPKa+tK8biJg+27E3KCjBbMABE2FXm0tj6OJ9PA6hol87ng4AkURotNvdW+2U+7ySAZhclK1WZz7fKPbqXkSw25vMwJVHCA3xPOb/E8rsRx3m6YeH9U7D+UgY9j/nvZTk437BWREuaqGPFOCT+ROav1LA3n3eof732tLK22NjzmTyKsVR/fVpRjkM796aDh8dhLBKJZ26uvzDHQu4UZS8Gz8hLarV81CddO8AG/880rHTmWK9m2xqO2zyDtcwdoj6DfGar6ZtdXZyF+3iW6wGWGqnZthV3aonUmET94dEHYgZwb1UXkUeAob42u70lRZCzayPzEfkzp7cmYhqQsCOPp/UddYaBM65PsGghEhZY/fjzMW956dLMMf2T/+iFGPuYtpqN89hP3NoBbtRvUa2Xr6D26AIPDTu52e2ILvDgTRtZgeVNzE66cw7cnOV/nLT9bCLZmdsWOZGtpStNInPV9onRSHFLj2bOwJ+FNseBDj3p5NCXlTluBmYr9Xu5uS7uxLHht0WPFL+fN9dmQFKzO8rpdFLWC3j9U05tC7VxwLScSROfGksOvpx1h0UeRKUyF/KMiW8G9NXs0pga/sFPBz3szvPd4KHw2Y/o1Aa8fIuDgssTN0f+b3NY/vaZdCu9FTyC3mSzvY+JPNSOfX8O/Ld1Ge6WBM0I7Mg0Vv7zuLn/nOux+bi70d/6wIU4UNcD+Cb9fHWBhV1o5KC5oh/txq6saT3IhtPRqn+mkYmsp54zwp6NMttovNBur9hLUX9c6uUUq4uuNNDcPuX6f57RydxjP4y6iKfQo0AP3Ol+S3Md4VxfYugTOfTG7dr5zKl6jqXZeX9SE7QK1ytcmdm1+ExqZG53cFFjxdNIBG6+a3YIfhT2N/AzwVAXfRzkfdCcK1vYDM98+Q9qLDU2ityxnrnOEsF3ucBPwomPZb2MQfKdjw17ScOqZjzWl7DvduC7BVwxkTpwfhxt4CubaVELbRX125vKr13oJgWdg5/mQ0+XcJbwMvcU3ai3F9OuNXSd3hTLI/7jmit/O+jRJz7aTg7667dW1+dIjNewf6TlEod1jjv6tshHRJ0T7m7hLAM96o+gaQlyoyIW6BENXs3oeGbNZP1n8pTnhV3uSSualJq0cnfaQe54ucPSPp2c9mZ6vZ+eWvqKOqDZcl/uYL/zc4ygGyuaTesZaG6I4Ww/56r/cnUGF2eF08sO58z3/i/gzF4MP326etHGCSNRGAf8nTctZdzLxxsvefvyL+3V3EPwYsGY6AnsYUEEpRh+vIZKYQwiokRV7UFTG1eJdyzwl0VQdI8uLZs8LsA0is+l5cZYU66/MzFVANeU7cEin1a/fXhvVtl6SVCEsg4zC80Sr5xQPly58XJuU9EtMhpiHSsyYwISFVFQqAJkEKUuSKqMF0QFGxV/lQxRkm9TcTE6/jQZ6HfIwMEmfbbfoeImE0SSPI8gVaBUpoLCpAdBY8qDsPCwSBcNJksi+sNMiL/DBIl/jQdtoUoiqEIgC40JiuapgqZ5Hmijromkzh4UWfvDPEhnPBy/nqbUw5xvFCnKkfvMROBviBenjJ5ZK2MZqPKs/uocjd/+B79oIUNvDQAA
```

## Instalación
En Streamer.bot, en el panel de `Importación` de la parte superior izquierda, copia el `Código de Importación` y pégalo en la `Cadena de Importación`.

Para configurar esto necesitarás crear un comando, ligado a la acción "Dynamic Poll".
> Recuerda que como deseas que se lean los datos ingresados, requerirás colocar la opción 'Location' establecida en 'Start' {.is-warning}

También puedes controlar la Longitud, Bits Por Voto y Puntos de Canal ajustando la sub-acción `Set Arguments` dentro de la Acción.
| Argumento  | Descripción                                                                                                    |
| ---------- | -------------------------------------------------------------------------------------------------------------- |
| `duration` | Esto indica la duración de la encuesta en segundos.                                                            |
| `bitsPV`   | Esto indica cuantos bits quieras que los espectadoes utilicen para poder votar de nuevo.                       |
| `cpPV`     | Eso indica la cantidad de Puntos de Canal que quieras que los espectadores utilicen para poder votar de nuevo. |

> Recuerda que los Puntos de Canal usados de esta manera no son reembolsables, así que ten cuidado con la cantidad que configures. {.is-danger}
## Ejemplo de Uso
```css
TerrierDarts: Pregunta|Opcion1|Opcion2|Opcion3|etc
TerrierDarts: !createpoll ¡¿Cómo Están?!|Increíble|Horrible|De lo Mejor
```

## Otro Ejemplo

Si tienes una idea de cómo te gustaría ejecutar una encuesta con un preguntas y respuestas establecidas, puedes usar este código de C# escrito [por Nate1280](https://www.twitch.tv/nate1280).
```c
using System;
using System.Collections.Generic;

public class CPHInline
{
    public bool Execute()
    {
        // replace the text between the "'s with the poll question
        var pollQuestion = "Which poll option is best?";

        // these are your poll options, you can have upto 5, if you don't want 5, just delete the lines you don't want, so say
        // you would like 2, delete Option 3, 4, and 5.
        // and be sure to rename your options by changing the text inbetween the "'s
        var pollOptions = new List<string>();
        pollOptions.Add("Option 1");
        pollOptions.Add("Option 2");
        pollOptions.Add("Option 3");
        pollOptions.Add("Option 4");
        pollOptions.Add("Option 5");

        // change the number below to alter the duration of the poll, it is in seconds
        var duration = 60;

        // the next two are options, leave them at 0 to disable them, or, set them to a value to enable them
        var bitsPerVote = 0;
        var channelPointsPerVote = 0;

        CPH.TwitchPollCreate(pollQuestion, pollOptions, duration, bitsPerVote, channelPointsPerVote);

        return true;
    }
}
```