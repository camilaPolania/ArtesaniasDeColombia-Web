var sizes = ["small", "medium", "large" ],
	bubbleConatiner = document.getElementById("bubbleContainer"),
	normalBtn = document.getElementById("normal"),
	startY = 400,
	endY = -100;

var particules = new TimelineMax();

for(var i=0; i<50; i++){
	var sizeIndex = randomNumber(0,2);
	var size = sizes[sizeIndex];
	var speed = (3 - sizeIndex);
	var bubble = $('<div calss="bubble ' + size + 'Bubble"/>').appendTo(bubbleContainer);
	particules.set(bubble, {y:startY, x:100}, 0);

	particules.to(bubble, speed, {y:endY, x:randomNumber(0,300),
	repeatDelay:Math.random()*2, repear:500}, Math.random() *2)
}

