- - -
title: Comandos de Clips. published: true date: 2022-07-27T20:05:49.484Z tags: editor: markdown dateCreated: 2022-07-25T17:02:16.506Z
- - -

# Crear un Clip
```cs
using System;

public class CPHInline
{
    public bool Execute()
    {
    CPH.CreateClip();
    return true;
    }
}
```

# Obtener el conteo de Clips de un Usuario
Esto necesitará ser un `comando de chat`, sin embargo puede ser usado si usas shououts de video.
```cs
using System;
using System.Collections.Generic;

public class CPHInline
{
    public bool Execute()
    {
        object user;
        bool targeted = args.TryGetValue("targetUser", out user);
        if (targeted)
        {
            var target = args["targetUser"].ToString();
            var allClips = CPH.GetClipsForUser(target);
            int viewCount = allClips.Count;
            CPH.SendMessage(target + " has " + viewCount + " clips");
        }
        else
        {
            var target = args["user"].ToString();
            var allClips = CPH.GetClipsForUser(target);
            int viewCount = allClips.Count;
            CPH.SendMessage(target + " has " + viewCount + " clips!");
        }

        return true;
    }
}
```

# Publicar automáticamente cuando un nuevo clip es creado.
Esto necesitará estar ligado a una `Acción Temporizada`
```cs
using System;

public class CPHInline
{
    public bool Execute()
    {
        var user = "TerrierDarts"; //replace you name here.
        int currentCount; // = 0;
        var allClips = CPH.GetClipsForUser(user);
        int viewCount = allClips.Count;
        bool success = int.TryParse((CPH.GetGlobalVar<string>("clipCount")), out currentCount);
        if (success)
        {
            if (viewCount == currentCount)
            {
             //No New Clip
            }
            else
            {
                var clip = allClips[viewCount - 1];
                var clipUrl = clip.Url;
                var creator = clip.CreatorName;
                CPH.SendMessage("A NEW Clip has been created by, " + creator + " " + clipUrl);
                CPH.SetGlobalVar("clipCount", viewCount, true);
            }
        }
        else
        {
            CPH.SetGlobalVar("clipCount", viewCount, true);
        }

        return true;
    }
}
```

# Colaboradores
### <img src="/logos/twitch-6860918_1280.png" height=25></img> [*TerrierDarts*](https://www.twitch.tv/terrierdarts)

