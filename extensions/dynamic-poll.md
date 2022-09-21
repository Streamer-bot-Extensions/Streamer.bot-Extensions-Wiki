---
title: Dynamic Poll by (NotZelda)
description: Create Simple Polls using this Extension!
published: true
date: 2022-07-24T06:09:01.264Z
tags: 
editor: markdown
dateCreated: 2022-05-18T01:30:19.607Z
---

# Import Code
```
TlM0RR+LCAAAAAAABADFVluTmlgQft+q/Q/WvG6cOtwMpCoPoiMwjiR4AWXNw7mJxMMlICqm8t/3gDMZUWcveVmrEOju0/31d7o5/f3331qtux3N8jCJ7z60xHe1IIYR5W93d6dXiLdcnXPJn9V7q/X9dOOqkFR2cgdLSCNqG4oQt2VZJm1NE1GbElECnY6sUYhOvupF3wpaVP7jgrFXKY0hYrTyt80KeiY/YFYQOsiSyAzzbZKV3GQFWX5m8wK4X/KnELc+J4y19LJlJ1ufMgLPggdZUqSvydUyyPawzMdFfO05gzFJom7NwLUWJzEusozG22vdFWsN5hqwX6HUYkJznIXpc8hL7YbStMvCHb0KeQJMV5QDwvQicq3sfVguvZBntM+Xy1GIsyRPVtt7+2G6XA4yjmafZJuOvFzu5HtwLwFJ0JbLKMdJxkJ0TxhrYvlVj5My39Lo/imMv9VOz31+aaaDyi3tJaSmicztFEU4mEnsSAx3+2kPhpeyp429Q8aBLaRxikTl+LQhDEVuCb3R+76TClhkhV/qUzq3ge+BYmqwAk9zuxeAITbdEBnsq2XY+WJuH60H25k8sILLCt8BQ8rjWb1uYJm6sIgO6aLUQyRqufXgyr5nC8SYJUPnxYb7DPm9d7qwNOYYlNgyH9cE8JimC6w+CBbzxxgLeYijgTTxlD2ZO+F8osyQYAMcVViD9NNL3PrSxcXcCl7tx1NsHFLS62rnvp+Yvee4wbBH1Mdyw3NPfmKxTH+NQ/1APJdzxnYobK6dSXoO52M0GoDmuoqPnjL1PWUz5WuxOIj9SRA6E32PxENuGes15pz4nltYpg14bpxjZ231rGBYdmMrxPzeiJtZPRw+lvuAmI+CP7nA2VN3HBfj+a0X4iwgxppZ5phR0wkWkQuI6DIU6gAas8AKydEySUqM4NlO53WwD/DcZbiuBbmxHyQalCebw7jJw0DweW1ATytu8m5oOXrQ9rV9PAo+T/TCn+OA19GR9A9HnkdVj38Mexe5GP4Oh92E1wCwjA1f1z18KvXU6u9v7KUy4hzHPJf33DYblpsGdtrA9VxfTVyF4403wxt7Cl1QuIY2fcaZDC85N0HdC2d5pyh2At90y8W85rHKuc97S/T5/j6x8Y5jB6OjlbzU8pntVS0Pp82+OPFhJwtPKXzv4CDen8S0He7bQ9KYVT3iiFpBeA9zXmaI50P6o3JoDEpfspEV2fvZYPGPcRxBtzhWiXPwFQ7qfe/jyF1XPVtzN3jd96feqZ6nkl6/Y16fZznlf4f3Mi6u6nT+yPthXBJv9pPrFf9OrJyPHy8+7mlGcRKlIXvj604og+VkC7PrA6fWn87j95SfxiustmUR0rZMgNBGaKW0JVVSVUUTKEHoIvCehsG6cgruQVOzLdMKjFb9mpobR2ktf+MkPwGMCT1Uk8ar9Me7t87HHczCypX9fE6SIoP1qfjuwozV80QH3CIDapIqaxC2IcCrtqwA1EYKUPifDDsqopqIlf9KhiBKt6lojDT/mgzwK2Tg9LP7BhE3eUCyChASxbYsqLwoZE3m4xrotImqqYqiqB2ViP8zD8IZDy+PXy4nKqMKUQ83X84HMcZgmlNypj0pa0cny9PgebaUL4siPuC92P/4C+JSvAsQCwAA
```

# Installation
In Streamer.bot in select `Import` from the top left.
Copy the `Import Code` and paste it into the `Import String`. 

To set this up you will need to create a command, tied to the action "Dynamic Poll". 
> Remember because you want it to read input you will need to have the 'Location' set to 'Start' {.is-warning}

You can also control the Length, Bits Per Vote and Channel Points by adjusting the `Set Arguments` within the action. 
|Argument|Description|
|---|---|
|`duration`|This is how long you want the poll to be in seconds. |
|`bitsPV`|This is how many bits you want viewers to be able to use to vote again.|
|`cpPV`|This is how many Channel Points you want viewers to be able to use to vote again.|

> Remember Channel Points used in this way are non-refundable so take care in the amount you use. {.is-danger}
# Example Use
```css
TerrierDarts: Question|Option1|Option2|Option3|etc
TerrierDarts: !createpoll How Are You!?|Amazing|Terrible|The Best
```

# C# Version 

If you have an idea on how you would like to run a poll with set question and answers, you may wish to use this c# code.
```cs
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
# Contributors

 - [<i class="mdi mdi-twitch"></i> NotZelda](https://www.twitch.tv/NotZelda)
 - [<i class="mdi mdi-twitch"></i> Nate1280](https://www.twitch.tv/Nate1280)
 {.contributors}