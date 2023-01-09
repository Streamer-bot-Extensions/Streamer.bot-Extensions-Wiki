---
title: Aktion Abklingzeit
description: Abklingzeiten auf Aktionen anwenden, wenn sie von mehreren Quellen ausgelöst werden
published: true
date: 2022-11-20T07:16:29.604Z
tags: actions, cooldown
editor: markdown
dateCreated: 2022-06-05T17:16:14.167Z
---

# Aktion Abklingzeit

## Beschreibung
Mit diesem Projekt können Sie Abklingzeiten basierend auf der Aktion und nicht auf dem Auslöser festlegen. Wenn Sie z. B. einen SFX haben, der durch einen `Deck-Button` und einen `Chat-Befehl` ausgelöst wird, können Sie eine Abklingzeit festlegen, so dass in der von Ihnen angegebenen Zeit nur eine dieser Aktionen ausgelöst werden kann.

## Code Importieren
```
CodeHIER
```
Nach dem Import sollte es kompiliert werden, ohne dass weitere Referenzen hinzugefügt werden müssen.

## Verwendung

Um sie in einer anderen zu verwenden, müssen Sie die `Ausführungsmethode` Unteraktion verwenden. Sie müssen die gewünschte Art der Abklingzeit auswählen. ![actioncooldownmethod.png](/depreciated/actioncooldown/images/actioncooldownmethod.png)

### Tasten Abklingzeit
Dies ermöglicht es Ihnen, eine Abklingzeit zu einer Aktion hinzuzufügen, die nur an eine Taste gebunden ist, oder zu einer Aktion, für die die Abklingzeit nur gelten soll, wenn sie von einer Taste kommt. , dies ist nützlich für gemeinsam genutzte Decks mit mehreren Personen. Fügen Sie die folgende Json zu den `Argumenten` innerhalb der Schaltflächeneinstellung hinzu und bearbeiten Sie sie nach Ihren Wünschen.
```json
{
"buttonName":"BUTTONNAME",
"buttonCooldown": 30,
 "buttonPress": true
}
```

### FullActionGlobal
Damit können Sie einer Aktion eine globale Abklingzeit hinzufügen, unabhängig davon, wie sie ausgelöst wird. Um dies zu einer Aktion hinzuzufügen, müssen Sie 2 `Set Argumente` einrichten, eines für `actionName` und eines für `actionCooldown`. Sie sollte folgendermaßen aussehen. ![fullactionexample.png](/depreciated/actioncooldown/images/fullactionexample.png)
