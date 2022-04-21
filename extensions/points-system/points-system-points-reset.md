---
title: Points Reset (by TerrierDarts)
description: This extension will allow you to reset your points all back to zero if you so wish.
published: true
date: 2022-04-21T11:29:42.174Z
tags: 
editor: markdown
dateCreated: 2022-04-20T15:58:30.664Z
---

# Points Reset (by TerrierDarts)

This extension will allow you to reset all you current users points back to 0. This works by unsetting the current user variables that are named "points", based of VRFlads Points system. There is a 2nd action included that will allow you to reset any user variable.

# Import Code

**COMING SOON**

# Configuration

You will need the following references in order to get the code to compile.

```
mscorlib.dll
Microsoft.VisualBasic.dll
Newtonsoft.Json.dll
```

You will also need to create the following command.
```
!resetPoints   = Tied to NewResetPoints
!resetVariable = Tied to UserVariableResetter
```

## Example Usage
```
!resetPoints
>>Output = Points have been reset.
!resetVariable Tokens 
>>Output = Tokens have been reset.
```
