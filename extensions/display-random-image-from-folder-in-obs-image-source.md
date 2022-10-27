---
title: Display Random Image from Folder in OBS Image Source (by iAmLarcyn)
description: Display a Random Image from Folder in OBS Image Source with Streamer.bot.
published: true
date: 2022-09-04T20:52:26.123Z
tags: 
editor: markdown
dateCreated: 2022-05-18T00:13:02.828Z
---

*OBS WS v4.9*{.obs-version-badge} 
# Import Code
```
TlM0RR+LCAAAAAAABAC1V1tv2kgUfl9p/4OFVGlXqiNfsV2pD4EECklJAwED632Ym43L+FLbQJwq/71nbNJwy27T7RoB9jlzvjnnm5lvxl9//02SGmuW5WESN95J6tvKEKOIwVNjiGKaRFIvQgGT/AxuOwmnLGvUzRApICyHln+JZ0n6Wv+BK6Qi3jAdVfc1VXYYYrJhEAvufCKrBlZtTHSHGKTGqoK+rNhK9BuvOH+2shhhzgReka3Ys/3HkqyaBlmySkXbHRviG1Tmw5Uo20c830HOKsTzqrpjL0lissoyFhfHviNG9ljZS7vLCuk49QvmhzGjRyVUoZTlJAvTbVqNA++SsfSch2t2lFZdFPMZJE3YQXaVs/3O89wQktnknvcxJFmSJ35xNri887xOBhlvkmzpeWvjTDnTFV11PC/KSZLxEJ9Rzvcz+Tm8UZkXLPrFaL2bXwx4kaFNGAcV6i7o3/tk47Jg7YRWA02ngxRHJBjr/IF2J8XNRrk6tF0v+afT9mE5m1Jhsy5uk0E7bqmz6D6dla3PuNt5IGXrYny56GOw4WgM/nzQDviGuv0cuR+DWeSscbvVYd3JZzod8qv2UvgFVr89nS9I2CpnrrnsXSgBjiZ6r9Nf4Gi4xqMgFfm0b7k2m/YCPOWXaNrnM324JvEy+DRqLUhEH9yyX8VjTe1jtxPPx/M17g45Cfv0mg/XY31YIteMod/dPiPk3nNSnju9y2FKIsit65RsZH6YT4fd2rco2HjXtwmvQuNLL9zDKZg7T3F3DPmcB/OI5/PpAJOos5q3zZv5dKFcdYV/8nC9vOc4ogpqc7qt645NB8rcVVbDD/0F1fhqXpp1DaNWil0iavyHNmaXRE4xFH2OFufAT1XT1Z3gv8KHcQlWY22i3E77MXVVjuPbpBdv+R3zYuZS3gs3wX7ssn9d2gFzHVXUN3P5qtcdrOdQ41xzgJdWModxqDnoc/phUuKwpZB4wqu6pgrMAfgG798fyEOaMZJEachf0AfKOCpHBcqOZa3y14qum9SwKIi5ZjICiq7Zso1MXSaWwrQmoRSb/kHHGxYGCwGqnCn7nqJMRTKOuPY9T4K9txPUacSU3YPHfLY+vv03rR2B1tYiO0pWGWFSioqFVCRSrfSSL1g5kEu0EZFfvcyLJclr5FXgAAA9sHuNN6HAG323vvEab/fbQqcFSEUO7SsUr4BPQ3S1Rag7r/KC6LrJ43eQjMF2mBeyIKkOAMDRAbJo/HiQOexPMav2oV41ZMr2kk/8PF2NU2OtGE3kmwjLmDqGbGBDl5FumjKyfMP0FVtVTPu1Y200XzvQzR8Z6DXKQnFKGGwHfIfakztpGJOMRae28C0crw4ijUvYKED7i4yh7TadC0MBAwMDcJI1XSNNhHUkm5rhywb8ysj2DdlW/aZFDMtHiLyWNVXTT9N2eAZ4Ik39GdIOZvRPUnaHCpZVVJ2kxzJ1n2FLlYlja7KhNpmMEdNlZhuWhQwfYQv9MnpenlX6jxG0ram9QDGIR/UsZKOeUxKstAKFMcwEqeIul/6Ik4JJNFkBrRJGZJlzlC9Y/udJLnzbx46tMtmEBSUbClFljA0sw4FDwbZpYMKsV3OhKC9o6UtzRflPVAiJlRJ/X17DWLppjU7WzEBSqh1DVZkQFRNeDhzNkTXVV5mvEmTZr18eL9b88gTQXlV1sYCzsxTmUgwVMzifQ+WkZgJcEmY82Ugorx6ellUuIZysmbQJOZdoBgfzyl2HneTGaTZhCSgYFgNCsmHBDms3tSboL2VO08E69g8D/xdujB1unm6fD7jbl5yugKneJXZcJOEcpTmjO97aWQHVLev3vCfn4zcW751XhA4AAA==
```

# Installation
In Streamer.bot in select `Import` from the top left.
Copy the `Import Code` and paste it into the `Import String`. 
In OBS, create an image source and name it.
Change the arguments to the folder path containing images (only images), and the name of the obs source.
From there, you can adjust how you show/hide the source however you would like.
> If it doesn't work, you may have to manually bring in the System.IO and System.Drawing references in the Execute code step {.is-warning}

# Contributors

 - [<i class="mdi mdi-twitch"></i> iAmLarcyn](https://www.twitch.tv/iAmLarcyn)
 {.contributors}