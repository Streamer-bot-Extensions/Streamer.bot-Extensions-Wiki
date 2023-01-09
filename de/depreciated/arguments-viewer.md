---
title: Argumente-Viewer (by Silverlink)
description: Im UI-Ausdruck aller Argumentvariablen, die bei der Ausführung einer Aktion gefüllt wurden.
published: true
date: 2022-11-20T07:16:32.448Z
tags:
editor: markdown
dateCreated: 2021-06-17T00:56:22.011Z
---

# Argumente-Viewer [(by Silverlink)](https://www.twitch.tv/silverlink)

## Beschreibung

Diese UI-Erweiterung von Silverlink öffnet ein UI-Fenster, das alle `Argument`-Variablen ausgibt, die zum Zeitpunkt der Ausführung der Sub-Action ausgefüllt waren.

Dies ist äußerst nützlich, um zu erfahren, welche Variablen Ihnen zur Verfügung stehen, und um zu diagnostizieren, wenn sich etwas nicht so verhält, wie Sie es sich vorstellen.

## Installation

Um die Erweiterung zu installieren, kopieren Sie den folgenden Code und fügen Sie ihn in Ihr `Import Actions` Fenster ein:

```text
TlM0R+LCAAAAAAAABACtWfj9V5z9YeT5JcdFJmLeAipLI3qJyO+4Hmm6B0FwGRIJT899nNWrUyZVKaBX9+pvfevW7Z///U+nc7MhRRll6c3vHf5/7UDqJQS+bmbrgsBrcYeydeexCKqEpOuOGZGaFDe7qZ6/hqUlzP4/+++50/tw9QnXQn/RoTbFLxbdcVVVEPzzcPtxzQrf7gNADv4kr+jr+jJPUzfuqjIcfzngTgyKr8x
```

Nach der Installation müssen Sie möglicherweise den C#-Code öffnen, um sicherzustellen, dass er korrekt kompiliert wird. Überprüfen Sie, ob die folgenden Referenzdateien aufgeführt sind:

```text
mscorlib.dll
System.dll
System.Windows.Forms.dll
System.Drawing.dll
```

## Nutzung

Öffnen Sie eine beliebige `Action` und fügen Sie an der zu diagnostizierenden Stelle eine `C#-Method`-Unteraktion hinzu Choose `Streamer.bot Argument Viewer` Stellen Sie sicher, dass das Kontrollkästchen `Runm on UI Thread` aktiviert ist, da die Anwendung sonst abstürzen kann

Wenn die Aktion ausgeführt wird, sollte ein Fenster ähnlich dem abgebildeten erscheinen, in dem alle Argumente und ihr Inhalt aufgelistet sind

![arguments-viewer.png](/depreciated/arguments-viewer/images/arguments-viewer.png)
