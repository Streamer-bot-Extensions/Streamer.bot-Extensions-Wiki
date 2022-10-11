---
title: Weer Opzoeken Per Locatie (door Web_Mage)
description:
published: true
date: 2022-07-25T15:17:21.987Z
tags: api, extensie, obs
editor: markdown
dateCreated: 2022-05-18T02:07:55.239Z
---

# Weer Opzoeken Per Locatie [(door Web_Mage)](https://www.twitch.tv/web_mage)

## Beschrijving

Met deze extensie kunnen u en uw chat de weersomstandigheden over de hele wereld opzoeken.

## Benodigdheden
> U moet zich aanmelden voor een API-sleutel vanaf [https://www.weatherapi.com](https://www.weatherapi.com ""){.is-warning}

Er is geen initiële kosten voor een sleutel. Zij staan maximaal 1.000.000 API calls per maand op hun gratis niveau toe. Zodra je een API-sleutel hebt, sla deze dan op in een tekstbestand of houd de webpagina open. U heeft de sleutel later nodig in het installatieproces.

## Installeer stappen

<details>
<summary>v2</summary>

1. Open Streamer.bot.
   - (versie 0.1.7 en hieronder) Rechtsklik in het tabblad Acties en selecteer "`Importeren`".
   - (versie 0.1.8 en hoger) Klik op de "`Import`" knop bovenaan het venster.
2. Kopieer de import tekst hieronder.
3. Plak het in het importvak dat open is in Streamer.Bot. U zou een Importable Actie moeten zien genaamd "WM-Current_Weather-v2"
4. Klik op Importeren.
5. Klik op de nieuw geïmporteerde actie en zoek de map met de naam Query setup.
6. Dubbelklik op de regel die zegt "`<Insert API Key Here>`"
7. Vind de API-sleutel die u eerder hebt gemaakt en plak deze in het tekst veld. Als u er geen hebt, volg dan de stappen in het bovenstaande vereiste onderdeel. (Optioneel: U kunt de geretourneerde taal wijzigen door de variabele te wijzigen in uw taal van keuze.)
8.  Open de Execute Code (WeatherLookup) subactie
9.  Klik op Referenties. Klik met de rechtermuisknop en selecteer "Add Reference from File"
10. Navigeer naar de .NET map (meestal `C:\Windows\Microsoft.NET\Framework\v4.0.30319\`) en selecteer System.dll. Doe dit opnieuw en selecteer System.Net.dll Je moet nu drie bestanden in je referenties hebben: mscorlib.dll, System.dll en System.Net.dll
12. Click op Compile. Je zou een bericht in het Compiling Log tab moeten zien dat zegt "Compiled successfully!"
13. Klik op Save and Complile.

```text
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
```

</details>

<details>
<summary>Originele v1</summary>

1. Laat Streamer.bot openen en klik met rechtermuisknop in het Acties tab.
2. Selecteer "`Import`"
3. Kopieer de import tekst hieronder. Selecteer 'Begin en Eind tekenreeks'-regels onderaan dit bestand.
4. Plak het in het importvak dat open is in Streamer.Bot. U zou een Importable Actie moeten zien genaamd "WM-Current_Weather"
> Als u dit niet ziet, controleer dan nogmaals of u alle tekens hieronder hebt geselecteerd. Verwijder alle spaties en verwijder --Import String-- of --End Import String-- als u ze per ongeluk gekopieerd hebt.
5. Klik op Importeren.
6. Klik op de nieuw geïmporteerde actie en zoek de map met de naam Query setup.
7. Dubbelklik op de regel die zegt "`<Insert API Key Here>`"
8. Vind de API-sleutel die u eerder hebt gemaakt en plak deze in het tekst veld. Als u er geen hebt, volg dan de stappen in het bovenstaande vereiste onderdeel. (Optioneel: U kunt de geretourneerde taal wijzigen door de variabele te wijzigen in uw taal van keuze.)
9. Open de Execute Code (WeatherLookup) subactie
10. Klik op Referenties. Klik met de rechtermuisknop en selecteer "Add Reference from File"
11. Navigeer naar de .NET map (meestal `C:\Windows\Microsoft.NET\Framework\v4.0.30319\`) en selecteer System.dll. Doe dit opnieuw en selecteer System.Net.dll Je moet nu drie bestanden in je referenties hebben: mscorlib.dll, System.dll en System.Net.dll
12. Click op Compile. Je zou een bericht in het Compiling Log tab moeten zien dat zegt "Compiled successfully!"
13. Klik op Save and Complile.

## Import Code Blok

```text
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
```

</details>

## Gebruik

1. Maak een commando of kanaal punt beloning en laat het verwijzen naar de WM-Current_Weather actie. Het commando moet een beginlocatie hebben. De kanaalpunt beloning zal een signaal nodig hebben. Iets lijkt op "Vul locatie in."
2. De bot zal het antwoord van de gebruiker gebruiken om het zoeken te doen.<br>
> Opmerking: Het zoeken kan verschillende methoden gebruiken om te zoeken. Ze staan hieronder weergegeven:

       - Stad naam (bv: Paris)
       - VS Postcode (bv: 90210)
       - VK Postcode (bv: SW1)
       - Canada postcode (bv: G2J)
       - 3 cijfer vliegveld code (bv: LAX)
3. Geniet van het zoeken naar weer over de hele wereld!

## Optionele Widget
> U moet het weer al geïnstalleerd en geconfigureerd hebben. Als je geen geldige gegevens terug hebt, dan zal deze widget niet werken. {.is-danger}

<iframe src="https://www.youtube.com/embed/IeD4yMU1kQQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allow fullscreen style="border: none; max-width: 100%; width: 100%; aspect-ratio: 16/9;"></iframe>

Er zijn een aantal manieren om dit online of lokaal op je machine te verwerken. De keuze is aan jou.

### Widget Installatie Stappen

<details>
<summary>Offline gebruik</summary>

1. A) Voor de nieuwste versie, ga naar https://coafhank.io/Web_Mage/pen/eYGXwbz en klik op Exporteren in de rechterbenedenhoek. Klik op Exporteer .zip B) Download het bijgevoegde .zip-bestand van de StreamerBot discord.
2. Navigeer naar waar je de download hebt opgeslagen en pak alle bestanden uit.
3. Als u de bestanden naar een ander gebied wilt verplaatsen, zullen de bestanden nodig zijn in de schijfmap. Het bevindt zich in \<zip>/super-mario-weather/dist/ (Als u de map niet wilt, zorg ervoor dat je alle drie de bestanden verplaatst: index. tml, script.js, en style.css)
4. Maak een nieuwe browser source in OBS. Stel de URL in op about:blank en de grootte op wat je maar wilt.
5. Navigeer in StreamerBot naar de huidige weersopzoekactie. Voeg een nieuwe Set Browser URL subactie toe door rechts te klikken, dan Voeg actie toe -> OBS -> Stel Browser Source URL in.
6. Kies de scene, dan de browser source die je hebt gemaakt in stap 4.
7. Voor de URL, gebruik `file:///<saved path>/index.html?apikey=%global_selfApiKey%&query=%global_locationQuery%&lang=%global_weatherLanguage%`
8. Test bij het doen van een zoekopdracht. De widget zou moeten veranderen om te matchen met wat er gegenereerd is in chat.

</details>

<details>
<summary> Online gebruik</summary>

1. Maak een nieuwe browser source in OBS. Stel de URL in op about:blank en de grootte op wat je maar wilt.
2. Navigeer in StreamerBot naar de huidige weersopzoekactie. Voeg een nieuwe Set Browser URL subactie toe door rechts te klikken, dan Voeg actie toe -> OBS -> Stel Browser Source URL in.
3. Kies de scene, dan de browser source die je hebt gemaakt in stap 4.
4. Voor de URL, gebruik `file:///<saved path>/index.html?apikey=%global_selfApiKey%&query=%global_locationQuery%&lang=%global_weatherLanguage%`
5. Pas de bronafmetingen van je browser aan om de codeblokken aan de kant bij te snijden, zodat je alleen de widget ziet.
6. Test bij het doen van een zoekopdracht. De widget zou moeten veranderen om te matchen met wat er gegenereerd is in chat.

</details>

<details>
<summary>Alternatief gebruik</summary>

Om de widget te gebruiken als een scherm-overlay voor uw lokale weer.

1. Maak een nieuwe actie met alleen een OBS browser source, zoals de bovenstaande installatiestappen.
2. In plaats van about:blank, gebruik de url maar met de variabelen die hard gecodeerd zijn. (bijv. `<your path>/index.html?apikey=<your APIkey>&query=<your location>&lang=<your language>`)
3. Voer de actie van de widget uit als de actie op tijd ingesteld is op 5 minuten. Hiermee kan de widget worden vernieuwd zonder tussenkomst van de gebruiker.

</details>
