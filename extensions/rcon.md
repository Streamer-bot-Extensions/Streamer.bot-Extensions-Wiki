---
title: RCON (by ItsTheBOFH)
description: 
published: true
date: 2022-06-11T05:06:37.238Z
tags: 
editor: markdown
dateCreated: 2022-05-18T01:44:31.853Z
---

# RCON [(by ItsTheBOFH)](https://www.twitch.tv/itsthebofh)
## Description
This is extension for Streamer.bot which allows you to use a RCON Client to connect go Game Servers via RCON Protocols to run commands. 

What Is used to create: 
Loyalty Point System by VRFlad : https://www.youtube.com/watch?v=VCnoT7wqNrE : https://discord.com/channels/834650675224248362/878288822620782612/882719082833653770
Streamer bot points extension by VRFlad : https://discord.com/channels/834650675224248362/878288822620782612/883712020711620668 <-- I just liked the rank stuff so added it in. 

Using the rcon client: https://github.com/gorcon/rcon-cli

I store the rcon client inside the asset directory inside the streamer.bot directory. 

I recomend storing the server connection information inside the rcon.yaml file.  You can find the format for this on their github.com site. 

Here is my template for the custom points redeem.   I took the template redeem from the Loyalty Points System and tweaked it some more. 

## Import Code
```
TlM0RR+LCAAAAAAABADVWE2P2zYQvQfIf2AN5BKEC4oiRTEIAqRJ2+SSAM3HoXUOQ3K4EWpLW0neDwT57x1J3l2vbC+sNJs2PtgWSQ057808Dvn5/j3GZqdYN0VVzh6z5FHfUMIS6Wk2Gx7Bt9TdUMuf3TNjn4cf6ipCN84568Gj5dLZhCutMp77kHNQ4ACDii4Rg63+pb9XuOrtuwSk9ai4jlZzJQ1w543lIQUb8pjYRLqN97AEt8BuxrZe4XX75XJ/SlpcniygRfYzNIVnf1RLV+CGheO6Wp10Q01oA3+HTVuUxxv9sDiDi+b3VYdFhEWzMUkNZaiWz3ootnt9VfpVXWPZbvdtwXcDwn5IU61qj1cEXLWfQl10Pr9ee3hSFWXbzG4OOunoa9ptYPre0DsJ3RI+rK3ttRQwwmrRfoBFz4+42TtwbRIvRWod91muuBIgOSQpsZ4LBxazNE/kyOwZFsefOmDE0chke3HSey1Hfl/yVK4Wi9EiyoDn1JNet355tA/Wg+CrCD9Ys6rG8A9AzJ74armkAPBV0z4dvT/Q+yrsXG69Kl8tlxgKCsrFxU6CILZYX8VVsgtzLTGXKCirjAxcOTQ8z43haBEi5CmYEKdjLnZjPpvtRlwdgvgPFMjWZ2hSm3Kru0A2GLlNLPDUqwRQZlEI9x0COZGTcBWH4NoL4jfDdoe1Eb67SRhg9toYL5TgkKucNJ7UnmCOPIUYjMk9NavvAPNBKG/AcCchfMWi3KMz/FJo2C6lGQDNrJFWxsBF9JIrJAGmCNZcu6DSmEflIUwHVE4FNDsE0LU33bKfP57P3zcEz3zefCpOoZzPX1R+taQtk5retjUSrvWRq9r5/FnTYNda07Y6fB/h+TgGoT4e3u6B86wfdgHLBePIuv2dPWhO4Kxcr+HBGJOq/os2/xdF/W9WNzKK5SnlT7eiz19G00HR/lrVv5wX7T5BQhNTEWlnDd7TfqoyypToPDdCSq10IFmCqcRm0zQ+/wFIPSaTPbH008Ax/v+JlVKZFF3KwVvBVRRUGWtheIYpqpA5mSXmjolNxGH10qBDWowmXcL5nr10KIu3it4N7xXaLHOZp+IFkPQqpyJfKSrylc4zINEC1JP1SojJgmW/pmLcVJAtaH2Ny10V/w0sZ/PZExqENVubeTrfIqnHSWi0IRrPUwRK/zT33EIuucyMNF4Lp/3k9E9kuidO3mLLKKIHbxvWbTnPrnJvTwxNCaF+ggva767NspdYj/N9faYwFnSSWu4w0DlQOMetMIInWeJF0KmJkH1FiNhv5/uk9Jk9pM+LN+z1m3fs3Zv3z192zzsdp6OyR6+o6CR/6QiVWzozI52o0kQ4r6VT+WRluMXxb0YsLKtV2bIqsqEKOtrpncQsw1w7bjAn7yL56RKvuXdCqqhBGSXu3js9mTq2yR3bS14AZ5XWQMIW6ACRY8Kdpaj1VqWQZ1FR73cg70D2buraeBP9am1r4II9OfsELWsr1j0UJeuMM09te6WO0tpnNucepOfd9RCVsDGjilapFIVO0Pj/VOoOOi3ciJmHrJvmEohQ7Q+bPKaJjl3YhIScBwBy3mQUO6kSxiWSyvi7Dxuz4eHl34/jO6vfOiO3XlytMyHSwi2Jl9CSEl2j6+6EUqIXbOqsd1Ifzuflbd4E2m4tQnYo+A6HfbVYwEmD4drnj0NnP3oYOdxc3nYROu1C0y0q39WqWyu/AsEEGdjbLlGb2eZy7t/78g8mt8HcvBUAAA==
```

If you have any questions on how I'm using this please feel free to reach out.  Right now I'm using this for just 7 Days to die, but plan to expand to Minecraft, and potentially Farm Sim 22.

What is to come: 
  I am trying to update this so that I do not have to use an external program to make the call to the game server, however at this Time my C# is a little (very) lacking.  I am going to be trying to write C# code for streamer.bot to be able to do this but do not know how long that will take.   If you have any questions please feel free to reach out on the streamer.bot discord or my discord.  https://discord.io/itsthebofh.
