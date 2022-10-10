---
title: Offline Heatmap Testing
description: Test Heatmap Offline 
published: false
date: 2022-10-10T17:51:39.953Z
tags: 
editor: markdown
dateCreated: 2022-10-10T17:49:55.389Z
---

# HeatMap  Offline Testing

<html>
  <style>
    #contentContainer {
	position: relative;
	left:10px;
	width: 50px;
	height: 50px;
	border: 3px black solid;
	overflow: hidden;
	background-color: #EEE;
	cursor: pointer;
}
#thing {
	position: relative;
  width:10px;
  height:10px;
	left: 5px;
	top: 50px;
  background-color:clear;
	transition: left .5s cubic-bezier(.42,-0.3,.78,1.25), 
			top .5s cubic-bezier(.42,-0.3,.78,1.25);
}
#textBoxes
{
  
  font-family: "Lucida Console", "Courier New", monospace;
}
    </style>
 <script>
  var theThing = document.querySelector("#thing");
var container = document.querySelector("#contentContainer");

container.addEventListener("click", function (event) {
 
  var widthN = document.getElementById("width").value;
  var heightN = document.getElementById("height").value;
 var xPosition = ((event.clientX - 10) / widthN) * 2;
  var yPosition = ((event.clientY - 20) / heightN) * 2;
  console.log("X=" + xPosition + ", Y=" + yPosition);
  SendClick(xPosition, yPosition);
});
function updateCanvas() {
  gsap.to("#contentContainer", 0.2, {
    width: document.getElementById("width").value / 2,
    height: document.getElementById("height").value / 2
  });
  console.log("Canvas Update");
}
const WEBSOCKET_URI = document.getElementById("url").value;

// subscribe to Twitch events
const ws = new WebSocket(WEBSOCKET_URI);
ws.addEventListener("open", (event) => {
  console.log("Connected to Streamer.bot");

  ws.send(
    JSON.stringify({
      request: "Subscribe",
      id: "123",
      events: {
        Raw: ["SubAction"]
      }
    })
  );
});
function SendClick(x, y) {
  var user = document.getElementById("user").value
  if(user == "")
    {
      user = "535833752"
      
    }
  ws.send(
    JSON.stringify({
      request: "DoAction",
      action: {
        name: "Heat Message"
      },

      args: {
        message:
          '{"type":"click","x":"' +
          x +
          '","y":"' +
          y +
          '","id":"' +
          user +
          '"}' //'{"x":'+x+', "y":'+y+',"id":"click","type":"click"}',
      },
      id: "123"
    })
  );
  console.log("message Sent");
}

</script>
  
  <div id="textBoxes">
  User ID : <input type="text" id="user" value="535833752">
SB WS Address : <input type="text" id="url" value="ws://127.0.0.1:8080/">
Canvas Width : <input type="number" id="width" value=1920>
Canvas Height :  <input type="number" id="height" value=1080><br> Ensure Data is Correct above and press Open Click Map
<button onclick="updateCanvas()"> Open Click Map </button>
</div>
<div id="contentContainer">
  <div id="thing">
  </div>
</div>
</html>