---
title: Ad Snooze (by TheShiningOne)
description: 
published: true
date: 2022-08-03T15:33:48.193Z
tags: 
editor: markdown
dateCreated: 2022-08-03T13:05:03.866Z
---

# Ad Snooze [(by TheShiningOne)](https://www.youtube.com/c/TheShiningOne)
## Description
The ad snooze can snooze a twitch ad when you have your twitch ad scheduler on
## Tutorial
<div class=“iframe-container”><iframe src="https://www.youtube.com/embed/ORb1EGwZRPA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allow fullscreen style="border: none; max-width: 100%; width: 100%; aspect-ratio: 16/9;"></iframe></div>

## Import code
```
TlM0RR+LCAAAAAAABACtVduSokgQfd+I/Qejn1ejBNFlIuahpUVBmx2wRWTtB+rCpSkuy0XFifn3rYK2W7tnXjbWCKOoPFknT2YW5Pfff+v17g6kKKMsvfvSE/5oDamXELa7u+u2HqoYXDLL33zf633vFgZFmPv5PgJIGsH+RARCfyQA0v9zjKU+mfgjXwJjSQRex9Ue+qcmNedPa0rfrST1ICWcrypqcmU/IVpjohZZsojKKisa5uJ7tLzyuQhep1l2Jr17fBUtKLI6f8+mtXn06DWlVaefqQovxVly36b8GUVZiuqiIGn1GftUpptS/UTnu6AWxKRERZS/Br77gMaE5Pc0OpBPgTvZxCdMFiIf4reg8mW/30Ysr2O53z9GqMjKzK8Gxuxpv1cLpumYFfF4tN8fRgMwEIE4lPf7pERZQSM4wJTeavmvjOumrEjyv/MZpBosqipvia95n29LBJuKKBluG4AdI4cJCjYiPeO5Xf11BMuPtlUsUaxIGl5Yx5/i1MpQYofunNZuI212jlGgc2koAViihR3BOX3R5kbJ7GdtZpjrGa0h9zXBkjA+xTHAzrHyXTNt3K0aQ0EqyXraxjOFU+5uJcDPe1u7xsq9rM2ZnuYWXyrx5MHMWEx6xFud+T4Gu0Q+QGWqkrn9gh2LMh+OTxSTr7GOE7XRFnYDOaeiZ5wPnbPDSsAnqEgACxTshKDGi93BFdVSE+TG2+Icvgw5xmLgDCsaj6srjhuiiOl31KHL8tEeQAATW9RmIcCL6fpif9raZySoqbsOcm1RtjoUW6fIsSkSLRslcfBtPa1dBwW2o+fLVl9ctjFMariOlUHB5D5t/owPeHM5XtHpAYlm5+eA11q85jjXD+6C895HW7FCWiIfXUcP8ZweYCyFcGsj7SVHGjVqKMhjd6PGjqKVjqILO6Zhx+rJtDOfLCDDY+RtpSOr59sez9XGFWxgCmEIE4nCGZ2x82NNPUbbjWxvqKxsYnlqzYzpZmipbK9bDFuxPxKkAxRzarE8+R1gvW95H8/3R98BXAMlC4vC1ODYueVdsBzSKUXMxmpGXZXXVpfeMbfF3rjWJ2Yzst2TNjTiMERC+Jov/Wbbur8B4fTxZSM4bGXPzHco+zaI+F1nNX/r6So2DjDlWsy3Hm1Ei90JKTUFuWbvArufYQQFS1o+db1l78UJs57z94ffbabzvIrZqgSR6bS9azwn73oRaSW7h+7T0F47QLXtWeivZzarm73Wovitp7vXO7+iBoWJNUUirXdN+Kazi33Rbg1RMgrwQh+6rZ3KD2Yud1xfv374uOYFQVmSR/QXX1dMqNesK6/4/Nlv8W4MigiK4zEa9iVhAvsjfyz24cQT+tCTEJr4voB9+CHwkURByEnBANwiVZNzMTL/3SKXgXYzPlvkFyO0k5hicuKB3q0/Lo/PH4fYnIdoJ8nz9eyj1MtLgq/QDmyJOs9uuF8dZceShM3Ui/+PfwGlQapTdAgAAA==
```

References Required
```
System.dll
System.Net.Http.dll
```

## Set Up
After importing code you will need to get authorization header, and hash from payload from your browser where you logged-in in your broadcast account.
For that you need to go to you Twitch dashboard in stream manager and open ```developer tools``` in the browser (usually F12) and swhitch to ```Network``` tab. Then press ```Snooze``` (you have to be live), and there will be POST request to ```gql.twitch.tv/gql``` with ```operationName:	"SnoozeAd"```. You need to copy this request as cURL and pate it in any text editor. Inside you will find all required data. In code you will find placeholders for your data.

![snooze.png](/extensions/ad-snooze/images/snooze.png)

> After each relogin on Twitch site you wiil have to get this data again.
{.is-warning}

## How To Use
You will have ```Snooze Ad``` action which you can trigger how you like, for example on ```Raid Event```, so when someone raided you their viewers will not get stuck on the ads.

> This method uses undocummented API, so it can break at any moment.
{.is-warning}