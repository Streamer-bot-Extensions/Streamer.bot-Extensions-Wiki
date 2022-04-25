---
title: Follow Bot Protection (by Carhua)
description: Checks if a follow is any of the hoss or other follow bots and wont continue sub action if it is.
published: true
date: 2022-04-25T02:50:52.438Z
tags: 
editor: markdown
dateCreated: 2022-04-25T02:50:52.438Z
---

# Follow Bot Protection (by Carhua)

## Description
Checks when a user follows if it is any of the hoss or other follow bots and wont continue sub action if it is.

# C# Version

## Installation
Copy the text from the code box below into the `Import` box in Streamer.bot to add these to your action library:

```text
TlM0RR+LCAAAAAAABACdVtuOm0gQfV9p/8Ga53gExoxNpDwYxmA8Y498A8M6D91NGwjNZbl5cJR/32qwd26JtFlLyNCnqvqcqmqK73/+0evd1DQvwjS5+dwTP7ULCYopPN2oaakFlEQ33TIiJZgVgPzFn3u9790fQKHH7YfKHRqg4agvoSPpDxWM+wqV5b4wHsnSUabKSLjrYrVOf1e04vskFWMvqzRBmFEer8wr+rL+npSeMpaeXoXz87TKLhY9LY0xKl+hiJ1QU6yr5EPgHCVeGk9acQAeESteoSRNSJXnNCk/Yh8S8iYp/4l1a+TRguRhdiFwQ7hh0QuPPT+sadJDeY6aHhApUZgUvaqg+bsAEaXZhIHxB46dQnqkoIDQd1RbUPt8ONghpOBUHA6LkORpkR7L2+V0ezjoOdA/pXl0ONTDW+FWEiRRORzigqQ5C/Gtx9hbJv8v3qYpShq30V4H+/pWBW5KqqVem05vv8xwTPydxM6eYZVPJ+Hh/dpjtKyx8cwcaZ3hgXx+jDyGY6tB9mJ0v0qXWqKKTvycOY36DRv6mTTq/W4azDGs4XgHeLHUfHby7HkBPr4TKzXWVJ0a1jdvv2YPWsRxHmuubca1qU0Dc6MKyGBnc+Zl2DiBj16ZU32x1dTMNETm2EN/tXtemDPr7O7nYLdOnf3KR7C/aegV3ai1G/IYgG/UszebAxePY2CrBiRZ+Xjg+J4RMNOQA2zvfHMzDVoO+6VAYla5YumZxrz29Mse94JPm3m6uLcEMzz5ZuyfiLQKH7VJiAzl7GlmYWrzFEvL8wu++Bdfbjp8MVuIgIPmaK6t2itE9xORNBf/s3XxD+rldtf5A37xLzxbDkh4vR8Kl/vSsWWoEwvMRBiZGuTR0CNXUyvHFhnURMDNJaeG3pBYl1utK+FBW7GBszd9qDsj4UThuCstsZm0up+4v8mEyjKUbZdHkj5sC/+xGfvuwBJIG3d38e/2a/sC9HEbklhVazODXNpeymsFNYEazAO6UQoE+TYNJW5zfeHb1Wh9bjnabk1iK3AGfurFemPOfB9B/aGPBIvvmSwyeuI6+H5KBnXPIE6MbDmCfQPol8AzlmmnlwEeiGRgNW1fJ+sA7M4PMz972BeXmjDoX7/aGkqyseUYN35kRvMAh+qi5Tp98XsK1VGrOxFCnpNuj2i+ElXzkXkB2kMitpPsqZnUj8DFNdYManLGtl7AGYhc+xlyMFlq4cQ3tQ9X/SgsVxtN3rqgZWtbZzLQE3cDfEIl5GeASm2NFFNfikRS+Rnl8TXc9qUaO/Yz9H906QfQkCyudZLQfg21mDNnD3pCfl4m4Q7iEX4uDSsyp7wepg99FV3PIfeFOA0e6JEz0Pn7oYF++eYMFBEnq1/oUBt3vxZJPPTdWC/IYNfycRLY2y7P5qSr3bHrReXaO20Oo+faFeAsxmNI7FzlHNYDpXa1aXjtQQx9YBrTth9Mg1U/66/uXM+ZN7Ma0CpAT7KnU8Rr8g3eaQLUUnT3C59IVvho66Cf1dgHPnsB3l9w+V++vJsVWU5JGmch+8Ww8ChDzaZE+ceB1+LdqJeJPJTGMOplbyj1hwPvrj8W8biP75QhRiMPSXf43cYnGvoBDyrcCm+Rssk4GYX/3iLXmf7mE6GjkXj0mQd7Wf3x6VdTuEas/dK4yaqy16RV3ju2c7jXTfAepu1TGYQFzNk45tP+Z6pFRRyPCTr2BYK5amXcH3t3qK8oo6PsHYfiUJJ+V7UoCL8tWnwl+nr79f13icHDtBP/6+vPGcZQVlDvFdqBbaDOsvsyu4I//gGSyYJNJgoAAA==
```

![follow-bot-protection-import.png](/extensions/follow-bot-protection/images/follow-bot-protection-import.png)

## Configuration
Tie the `Action` `BotCheckFollow` to the `Follows` `Event`.

![follow-bot-protection-event.png](/extensions/follow-bot-protection/images/follow-bot-protection-event.png)

Insert the `Follows` `Action` after the `Comment` in `BotCheckFollow`.

![follow-bot-protection-comment.png](/extensions/follow-bot-protection/images/follow-bot-protection-comment.png)
