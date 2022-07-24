---
title: Among Us Ban (by GoWMan)
description: Some one in chat seem sus?  Need to call an emergency mod meeting?  Want to eject that impostor?  Well now you can with the Among Us Ban Alert for Streamer.bot!
published: true
date: 2022-07-24T04:43:11.560Z
tags: 
editor: markdown
dateCreated: 2022-06-14T23:30:58.807Z
---

# Among Us Ban [(by GoWMan)](https://www.twitch.tv/gowman)

## Description
Some one in chat seem sus?  Need to call an emergency mod meeting?  Want to eject that impostor?  Well now you can with the Among Us Ban Alert for Streamer.bot!

## Tutorial
<iframe width="1120" height="630" src="https://www.youtube.com/embed/annlF5LiaFw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Resources
Source Copy:  [OBS Plugin](https://obsproject.com/forum/resources/source-copy.1261/)
Among Us Ban:  [Resources](/overlays/among-us-ban/files/amongusban.rar)

## Installation

### Streamer.bot
Copy the Import Code below and paste into the `Import Pane`:
```text
TlM0RR+LCAAAAAAABADNVk2P0zAQvSPxH6JKe8PdJLbjeCWE2uVDXEDaarkQhBx70g2kTonj/dBq/zt20qpt2sMWUUEOTj1vPB6/eZn68eWLIBjdQmPKWo8uguhVZ9BiAW42GvVTIVsHG2f56udB8Ni/HFQq75czzBinEaJJKhGJZYFSjFOUi5SktBARo7SP1S36ZcH6+NpW1cYKWuQV+HhtY2FjXyczUSqYCr0VZ97UdukhZzZbdlHdiQdzZf2JClGZrWCN0KpeTLoD7aOy1tI2Deh2H9sjYYeIzsVI0PBpla7LKZhU0LSbxHqn2jZy3ytAwWRR63lwbYJ3P0C2jondhbap/IqirODi/PzyIsuujStcli0bMG2WvQXzs62XWfZ5OkOz1qqyzrJZ24BYBFfQb+u8p01959YFs7VB+G2RNUvbAJLGWUqt4H580y6qN9a5vj7z49kgHceVho6Tj50GwtWDDgzrZxCiF4/MucrzXCChgCPClUApZQmihZRYMhVGeEjFHZTzG1+jcBzuIu3D0vOK013zWik7iutz8Gf1kTbWp1f/psCmFa1fE56IaJFKznOqHNEsRYQW7itlMkHuS1VUJCGOCnk00eGxREf/D9HRiYjOaVoIWgAiOHJDlEQo526gqVdzwRKOyemJps8h+lZUXSsmUTjYYCHuv6zAAdL30L0OuUUAjWgRijxEKQGKCHFK46EkKME5YI5VwUJxLAEuwfgwBaNhEVYEkOcQoOC2lHt/Rh3k9KXVe9du/R5/3G9nPop7g5fi967ZWjNeLPEg66LUpbmZQlE3cFnrttS21PPDLN/Wle1UH41jeqgAQJNEEpkiynGEiJQM8djVI3ZadOqTkIdwdAGOYx8fIz/+N9UXY8oTxRhSIkwQUSRC3F1EkCApK1LCYk7o6dUXb51//fPb8DrxwQfp7hRbkKyrSiwNqC20B7tAvWd/iVqDT78B0DywJ8kJAAA=
```
![among-us-ban-import](/overlays/among-us-ban/images/among-us-ban-import.png)

### OBS Studio
With Source Copy installed, go to `Tools > Source Copy > Load Scene` and select `Among Us Ban.json`.
![among-us-ban-source-copy](/overlays/among-us-ban/images/among-us-ban-source-copy.png)
![among-us-ban-source-copy-load](/overlays/among-us-ban/images/among-us-ban-source-copy-load.png)

## Configuration
Double click on the `Play Sound` `Subaction` and make sure it points to the `eject_amongus.mp3` file.
![among-us-ban-sound](/overlays/among-us-ban/images/among-us-ban-sound.png)

Double click on the `Obs Set Browser Source Url` `Subaction` and make sure that it points to the `index.html` file in `\Browser Sources\among-uspure-css`.
![among-us-ban-browser-source](/overlays/among-us-ban/images/among-us-ban-browser-source.png)

>Do NOT remove the `?user=%user%` from the end of the `Obs Set Browser Source Url` `Subaction` or it will NOT work.
{.is-danger}

>Do NOT check `Local File` in the `OBS Browser Source`.
{.is-danger}

>`%user%` will only be populated if Streamer.bot has seen the user.  If you ban a random account that hasn't been in your stream while using Streamer.bot it will only display `%user%` instead of populating with the username.
{.is-warning}