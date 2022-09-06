---
title: Create %line%variable%%
description: This is a short example of how you can create a workaround for %line%variable%%
published: true
date: 2022-08-19T13:01:44.699Z
tags: 
editor: markdown
dateCreated: 2022-07-01T00:18:30.446Z
---

# Import Code
```
TlM0RR+LCAAAAAAABADtVltzolgQft+q/Q+pbM3bkuUqMG9ilGCMEzWKus7DuYFMuA3gBafmv28DmqC5bGZramtna6hCpLtPn4+vG/r78usvZ2fna5akXhSevz8Tfy8NIQoY3J2fV7eIZOBOwfJncX929qW6gMujRRyjDYc4ROUauoA5WaUNTiOCzkmC3sBqQ6FIJlWuctHnFVsV+cOV7z9aWYiwz4p8WbJiNfuW+CvKOkkUXHlpFiU5hDjIT2sxB8BDFNIoOOt5Iavt5ybRKi7chf23s/YWBbFfD0D+BuXpcBU+zZyUGZslA0+9JArJKklYmD31PWHtiLkyZI0Sr3jo/h6+4/nsFmVL4RHbPs4vCTtvv/8DyEvLxBfZNjuJ21ejgQSi8A4nSPAj647OYYwdDlNGNSQqWGD6ycIN89xl8Qz8BX/syfK42FkQpWP7gdOjGr5WxwpgSNm22ObR+vX3l9g57sIHM2UpSbx4X5BT7z1jcdP31uxJQapyModBuQg7qUvpbL1fLGyAGG3SxeLGI0mURk520W/fLRadBNBsouS+IS8Wa/mCv5B4aO/FIkhJlPgevqC+f4zln2Yc5WnGggto1s/fPWkrSliZtJ7z4zFHOM9YK6Il93Taj3FA3LHk76g5yT5s+OtTW+/ev33evo1x2FYvB1G/FRrCLNjGs9z4hM3OjuTG5bi97GKw4WAM/rTf8pqu1TI21O6myL5xZ4G+xi2jw8zJJzod+tet+0NMkROuzf2prSfmMoacxRlgyXKHgZ/OR83tUdzVfEk8I0D21h+bHR5dtt3bkbEkAd3ZfNObF2smxpKa7tby+dXE1O/oVbd4puj6LnV7uX60Foszl14tecucx9gc77FVJ5GGObKV0BZ4F5v+aj692VqX/B6XMprbnfuBvU3vKl9U3xv2OsoF+46R6e+s8pyv4RnMAod1aR3F0aCTV1gmg9l0GN14Td0yO/lc6uNBq1vDbnnTkTLGQp8nAeyfu/GHvLnuifW1xnruGTy7GrgltgF//ci3sat4oXg6MqBWik92VsFliavnd/2ZPTSwub0pffmyvndc9MpjLthXGEZoeuNS0U+h3rs5xM6kgTsbGfnMVu6xuOdwZAQk0LM938e1BT9tVVgGIkyhcHCK5xks7bh3319TW+Ght457qtNd4mC4xjUMkA9qBf0ddFZzU8+erKkwrKhdxh7Wre6CiUxb7qZ3jO/veZgOXAQnETV3Br2yr+2urCnkL3oIbHmBjZpL37rqL7E9rrg6rhe8a+5qLE74wbQbUlvwYf/IKt+9yS28Wxs6HWwtb/PQq7aoCHjCn2B8U568lid/IU8+nw4FEsjw/nSF+UO/G/rlID6dTXHCSBTEMBqf/6RT5qN8lKHk6QyuZk45FKWGJDqCKnMKQgonCwLjNOzAj4IY4nWiwWj81qGoF8f3HIviW8biS6JBfEU0oDDdgMh7UTIoDlMlrYE4UUYgGTS+EHBM4ShTGtQRHcdBje8mGU5H9luYEWrMHP5+PNVaZrFBOdhrLhL5PopTRmveynmg+FTNYqI3ZNFROFVraJysqIjDDmEcclSmiCJSZaz9K2p2sq/0jy5nX2nMjG2zF7tSlRyKkaZzVGUyJ/MNmcMqgybFsqMTEVMJ0Z9C9qeQfTh+dCF7KlBbLwi4Vpf2/OF6vBeZhRApRHBNRJbilEwnPgjRGIvytwjVtwm518XPJRYVcT7t8gXOEQism50VzUA0ECH1CqGK7I4HWECInuRp9wejlnIHAsEAYS5gewJ5Xa/ENtYFemUItGWBGCpFx+4/IzBUSdYkwMcpPK+CwHA0Tud1mBqKhghV4TMmKT+mwDjcv/QZf5egjRXGq+zds19xUZEaGgNikERETlYxAk5AW8gqcRQJYSBN+/9pi+JSRVYCobYUlgUBzOFD/Ne/APVw8q6GEwAA
```

# Installation
In Streamer.bot in select `Import` from the top left.
Copy the `Import Code` and paste it into the `Import String`.

Natively `%line#%` will not accept variables, so `%line%randomNumber%%` will not work. The code above will help with that so you can then use `%lineOutput%` in other parts of the code.

The 2 actions you will import will do it slightly different.

## RandomLine

 The `RandomLine` Action is like the `%randomLine%` however it will allow you to read the same random line from 2 (or more with editing) different text files. In the Imported example we use 2 text files called `Questions` and `Answers` and then these will be output to arguments `%line1Output%` and `%line2Output%`. If you would like to use these in future actions you will need to set them to the globals using the `Set Global`

 ## Varaible Line

 The `VariableLine` Action will allow you to have it read a line based on a variable. This could be `%rawInput%` or if you use a global you could use `%globalVariable%`. This will then read the line based on that variable and output it to `%lineOutput%` for you to use as you wish.

 # Contributors

 - [<i class="mdi mdi-twitch"></i> TerrierDarts](https://www.twitch.tv/TerrierDarts)
 {.contributors}
