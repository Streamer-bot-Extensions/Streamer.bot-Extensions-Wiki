const ws = new WebSocket("ws://127.0.0.1:8080/");
ws.addEventListener("open", (event) => {
	console.log("Connected to Streamer.bot");

	ws.send(
		JSON.stringify({
			request: "Subscribe",
			id: "123",
			events: {
				twitch: ["StreamUpdate"]
			}
		})
	);
});

ws.addEventListener("message", (event) => {
	if (!event.data) return;

	const data = JSON.parse(event.data);
	console.log(event.data);
  if(data.event?.type == "StreamUpdate")
    {
    var oldgame = data.data.oldGame.id;
      var newgame = data.data.game.id;
      if(oldgame !=newgame)
      {
       
      
      console.log(oldgame +"--"+ newgame);
      animateOne(oldgame, newgame)
      }
    }
  });


const gameArtEl = document.getElementsByClassName('cover-art')[0];
const cartridgeEl = document.getElementsByClassName('cartridge')[0];

function animateOne(oldgame, newgame) {
var gameBoxUrl = "https://static-cdn.jtvnw.net/ttv-boxart/" + oldgame + "-100x125.jpg";
gameArtEl.style.setProperty('background', "url("+gameBoxUrl+")");
  console.log("Anni1");
  var anim1 = setTimeout(() => animateIn(newgame), 3000);
}

function animateIn(newgame)
{
  cartridgeEl.classList.add('do-slide-in');
  var anim2 = setTimeout(() => animateTwo(newgame), 4500);
}

function animateTwo(newgame) {
  var gameBoxUrl = "https://static-cdn.jtvnw.net/ttv-boxart/" + newgame + "-100x125.jpg";
  gameArtEl.style.setProperty('background', "url("+gameBoxUrl+")");
  setTimeout(() => cartridgeEl.classList.remove('do-slide-in'), 5500);
  console.log("Anni2");
}