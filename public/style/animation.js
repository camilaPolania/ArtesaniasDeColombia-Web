var sizes = ["small", "medium", "large" ],
	bubbleConatiner = document.getElementById("bubbleContainer"),
	normalBtn = document.getElementById("normal"),
	startY = 400,
	endY = -100;

var particules = new TimelineMax();
console.log("holaaaa");
for(var i=0; i<50; i++){
	console.log("holaaaa");
	var sizeIndex = Math.random()*2;
	var size = sizes[sizeIndex];
	var speed = (3 - sizeIndex)
	var bubble= $('<div class="bubble ' + size + 'Bubble"/>').appendTo(bubbleContainer);
	particules.set(bubble, {y:startY, x:100}, 0);

	particules.to(bubble, speed, {y:endY, x:Math.random()*300,
	repeatDelay:Math.random()*2, repear:500}, Math.random() *2)
}

normal.onclick = function() {
	TweenLite.to(particles, 2, {timeScale:1, ease:Linear.easeNone}); // normal speed
  }

  function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}
	
