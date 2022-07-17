---
title: Untitled Page
description: 
published: false
date: 2022-07-17T08:00:04.882Z
tags: 
editor: markdown
dateCreated: 2022-07-17T07:53:09.965Z
---

<html>
<style>@import url(https://fonts.googleapis.com/css?family=Noto+Sans);
* {
  box-sizing: border-box
}
.floating-help {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 60px;
  height: 60px;
  transform: translateY(70px);
  transition: all 250ms ease-out;
  border-radius: 50%;
  opacity: 0;
  background: -moz-linear-gradient(-45deg,#183850 0,#183850 25%,#192c46 50%,#22254c 75%,#22254c 100%);
  background: -webkit-linear-gradient(-45deg,#183850 0,#183850 25%,#192c46 50%,#22254c 75%,#22254c 100%);
  background-repeat: no-repeat;
  background-attachment: fixed
}
.floating-help.enter:hover {
  opacity: 1
}
.floating-help.enter {
  transform: translateY(0);
  opacity: .6
}
.floating-help.expand {
  background: 0 0;
  width: 400px;
  max-height: 600px;
  height: 80%;
  border-radius: 0;
  cursor: auto;
  opacity: 1
}
.floating-help :focus {
  outline: 0
}
.floating-help button {
  background: 0 0;
  border: 0;
  color: #fff;
  text-transform: uppercase;
  border-radius: 3px;
  cursor: pointer
}
.floating-help .help {
  display: flex;
  flex-direction: column;
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  border-radius: 0;
  transition: all 250ms ease-out;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0
}
.floating-help .help.enter {
  opacity: 1;
  border-radius: 0;
  margin: 0;
  width: auto;
  height: auto
}
.floating-help .help .helpheader {
  flex-shrink: 0;
  padding-bottom: 0;
  display: flex;
  background: 0 0
}
.floating-help .help .helpheader .helptitle {
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0 0
}
.floating-help .help .helpheader button {
  flex-shrink: 0
}
@keyframes show-help-even {
  0% {
    margin-left: -480px
  }
  100% {
    margin-left: 0
  }
}
@-moz-keyframes show-help-even {
  0% {
    margin-left: -480px
  }
  100% {
    margin-left: 0
  }
}
@-webkit-keyframes show-help-even {
  0% {
    margin-left: -480px
  }
  100% {
    margin-left: 0
  }
}
@keyframes show-help-odd {
  0% {
    margin-right: -480px
  }
  100% {
    margin-right: 0
  }
}
@-moz-keyframes show-help-odd {
  0% {
    margin-right: -480px
  }
  100% {
    margin-right: 0
  }
}
@-webkit-keyframes show-help-odd {
  0% {
    margin-right: -480px
  }
  100% {
    margin-right: 0
  }
}
  </style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
var element = $('.floating-help');

setTimeout(function() {
    element.addClass('enter');
}, 1000);

element.click(openElement);

function openElement() {
    element.find('>i').hide();
    element.addClass('expand');
    element.find('.help').addClass('enter');
    element.off('click', openElement);
}

function closeElement() {
    element.find('.help').removeClass('enter').hide();
    element.find('>i').show();
    element.removeClass('expand');
    setTimeout(function() {
        element.find('.help').removeClass('enter').show()
        element.click(openElement);
    }, 500);
}
</script>
<div class="floating-help">
    <i class="fa fa-lightbulb-o fa-3x" aria-hidden="true"></i>
    <div class="help">          
        <iframe src='https://ideas.botextensions.dev/embed/ideas' style="
  width: 100%;
  height: 100%;
"></iframe>
    </div>
</div>
  </html>