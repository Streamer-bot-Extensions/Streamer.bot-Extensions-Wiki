---
title: Temps de recharge des actions
description: Applique le temps de recharge aux actions si elles sont déclenchées par plusieurs sources
published: true
date: 2022-11-20T07:16:29.604Z
tags: actions, temps de recharge
editor: markdown
dateCreated: 2022-06-05T17:16:14.167Z
---

# Temps de recharge des actions

## Description
Ce projet vous permettra de définir des temps de recharge en fonction des actions plutôt que le déclencheur, par exemple si vous avez un effet SFX qui est déclenché par un `Bouton de Deck` et par une `Commande de Tchat` alors vous pouvez appliquer un temps de recharge pour que seulement 1 d'entre eux est autorisé a être déclenché au moment que vous indiquez.

## Importer le code
```
CodeICI
```
Une fois que vous l'avez importé il devrait se compiler sans avoir besoin d'ajouter d'autres références.

## Utilisation

Pour utiliser cela dans un autre vous devrez utiliser la Sous-Action `Exécuter la Méthode`. Vous devrez choisir le type de temps de recharge que vous voulez. ![actioncooldownmethod.png](/depreciated/actioncooldown/images/actioncooldownmethod.png)

### Temps de recharge des boutons
Cela vous permettra d'ajouter un temps de recharge à une action seulement liée à un bouton ou à une action que vous ne voulez appliquer le temps de recharge seulement s'il provient d'un bouton. , ceci est utile pour les decks partagés avec plusieurs personnes. Vous devrez ajouter le json suivant aux `Arguments` dans le réglage du bouton, et le modifier selon votre spécification.
```json
{
"buttonName":"NOMDUBOUTON",
"buttonCooldown": 30,
 "buttonPress": true
}
```

### ActionComplèteGlobale
Cela vous permettra d'ajouter un Délai de Temps de recharge global à une action sans peu importe la façon dont elle est déclenchée. Pour ajouter ceci à une action, vous devrez configurer 2 `Définir les Arguments` un pour `NomDeL'action` et un pour `TempsDeRechargeDeL'action`. Cela devrait ressembler à ceci. ![fullactionexample.png](/depreciated/actioncooldown/images/fullactionexample.png)
