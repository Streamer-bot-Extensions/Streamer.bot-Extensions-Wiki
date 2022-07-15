---
title: Dynamic Poll by (NotZelda)
description: 
published: true
date: 2022-06-11T16:33:49.099Z
tags: 
editor: markdown
dateCreated: 2022-05-18T01:30:19.607Z
---

# Dynamic Poll [(by NotZelda)](https://www.twitch.tv/notzelda)

## Import Code
```
TlM0RR+LCAAAAAAABADFV9uSokgQfd+I/Qejn4eO4iKNEzEPYiuiLdNqi8i6D9RFZC2EAVHpifn3TUDHS9sxl5cxgkAq08yTJ08V6de//6rV7rYsSYNoffexJn4oF9ZeyODp7q569MgGzCms/FM812pfqxuYAlr4qSolMkJ1YdFQVUERFUnAFGkCViVaR3VZXSioilX+6EvGsiL+OuP8tMrWHuasiLdJMnZaP4J5zOFbQGrPEec1Pa9Z0cZlnHpngf0kyuIT8HLN4zsvT0dZUd7C4+lZ5MRb0yhsltW9tZJoTbIkYevNW9sbRi5YuYB9glIuU5aSJIgPKa+tK8biJg+27E3KCjBbMABE2FXm0tj6OJ9PA6hol87ng4AkURotNvdW+2U+7ySAZhclK1WZz7fKPbqXkSw25vMwJVHCA3xPOb/E8rsRx3m6YeH9U7D+UgY9j/nvZTk437BWREuaqGPFOCT+ROav1LA3n3eof732tLK22NjzmTyKsVR/fVpRjkM796aDh8dhLBKJZ26uvzDHQu4UZS8Gz8hLarV81CddO8AG/880rHTmWK9m2xqO2zyDtcwdoj6DfGar6ZtdXZyF+3iW6wGWGqnZthV3aonUmET94dEHYgZwb1UXkUeAob42u70lRZCzayPzEfkzp7cmYhqQsCOPp/UddYaBM65PsGghEhZY/fjzMW956dLMMf2T/+iFGPuYtpqN89hP3NoBbtRvUa2Xr6D26AIPDTu52e2ILvDgTRtZgeVNzE66cw7cnOV/nLT9bCLZmdsWOZGtpStNInPV9onRSHFLj2bOwJ+FNseBDj3p5NCXlTluBmYr9Xu5uS7uxLHht0WPFL+fN9dmQFKzO8rpdFLWC3j9U05tC7VxwLScSROfGksOvpx1h0UeRKUyF/KMiW8G9NXs0pga/sFPBz3szvPd4KHw2Y/o1Aa8fIuDgssTN0f+b3NY/vaZdCu9FTyC3mSzvY+JPNSOfX8O/Ld1Ge6WBM0I7Mg0Vv7zuLn/nOux+bi70d/6wIU4UNcD+Cb9fHWBhV1o5KC5oh/txq6saT3IhtPRqn+mkYmsp54zwp6NMttovNBur9hLUX9c6uUUq4uuNNDcPuX6f57RydxjP4y6iKfQo0AP3Ol+S3Md4VxfYugTOfTG7dr5zKl6jqXZeX9SE7QK1ytcmdm1+ExqZG53cFFjxdNIBG6+a3YIfhT2N/AzwVAXfRzkfdCcK1vYDM98+Q9qLDU2ityxnrnOEsF3ucBPwomPZb2MQfKdjw17ScOqZjzWl7DvduC7BVwxkTpwfhxt4CubaVELbRX125vKr13oJgWdg5/mQ0+XcJbwMvcU3ai3F9OuNXSd3hTLI/7jmit/O+jRJz7aTg7667dW1+dIjNewf6TlEod1jjv6tshHRJ0T7m7hLAM96o+gaQlyoyIW6BENXs3oeGbNZP1n8pTnhV3uSSualJq0cnfaQe54ucPSPp2c9mZ6vZ+eWvqKOqDZcl/uYL/zc4ygGyuaTesZaG6I4Ww/56r/cnUGF2eF08sO58z3/i/gzF4MP326etHGCSNRGAf8nTctZdzLxxsvefvyL+3V3EPwYsGY6AnsYUEEpRh+vIZKYQwiokRV7UFTG1eJdyzwl0VQdI8uLZs8LsA0is+l5cZYU66/MzFVANeU7cEin1a/fXhvVtl6SVCEsg4zC80Sr5xQPly58XJuU9EtMhpiHSsyYwISFVFQqAJkEKUuSKqMF0QFGxV/lQxRkm9TcTE6/jQZ6HfIwMEmfbbfoeImE0SSPI8gVaBUpoLCpAdBY8qDsPCwSBcNJksi+sNMiL/DBIl/jQdtoUoiqEIgC40JiuapgqZ5Hmijromkzh4UWfvDPEhnPBy/nqbUw5xvFCnKkfvMROBviBenjJ5ZK2MZqPKs/uocjd/+B79oIUNvDQAA
```

## Set-Up
To set this up you will need to create a command, tied to the action "Dynamic Poll". 
> Remember because you want it to read input you will need to have the 'Location' set to 'Start' {.is-warning}

You can also control the Length, Bits Per Vote and Channel Points by adjusting the `Set Arguments` within the action. 
|Argument|Description|
|---|---|
|`duration`|This is how long you want the poll to be in seconds. |
|`bitsPV`|This is how many bits you want viewers to be able to use to vote again.|
|`cpPV`|This is how many Channel Points you want viewers to be able to use to vote again.|

> Remember Channel Points used in this way are non-refundable so take care in the amount you use. {.is-danger}
## Example Use
```css
TerrierDarts: Question|Option1|Option2|Option3|etc
TerrierDarts: !createpoll How Are You!?|Amazing|Terrible|The Best
```

## Other Example

If you have an idea on how you would like to run a poll with set question and answers, you may wish to use this c# code written [by Nate1280](https://www.twitch.tv/nate1280).
```c
using System;
using System.Collections.Generic;

public class CPHInline
{
    public bool Execute()
    {
        // replace the text between the "'s with the poll question
        var pollQuestion = "Which poll option is best?";

        // these are your poll options, you can have upto 5, if you don't want 5, just delete the lines you don't want, so say
        // you would like 2, delete Option 3, 4, and 5.
        // and be sure to rename your options by changing the text inbetween the "'s
        var pollOptions = new List<string>();
        pollOptions.Add("Option 1");
        pollOptions.Add("Option 2");
        pollOptions.Add("Option 3");
        pollOptions.Add("Option 4");
        pollOptions.Add("Option 5");

        // change the number below to alter the duration of the poll, it is in seconds
        var duration = 60;

        // the next two are options, leave them at 0 to disable them, or, set them to a value to enable them
        var bitsPerVote = 0;
        var channelPointsPerVote = 0;

        CPH.TwitchPollCreate(pollQuestion, pollOptions, duration, bitsPerVote, channelPointsPerVote);

        return true;
    }
}
```