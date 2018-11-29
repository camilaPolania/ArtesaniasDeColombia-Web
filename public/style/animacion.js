// codigo referenciado de openprocessing
var nTiles = 8;
var nFrames = 128;
var phase = 0.0;
var phaseInc = 1.0 / nFrames;

// Draw sine wave
function drawWave(w, freq, amp, phase) {
	push();
	beginShape();
	for (var x = -w / 2.0; x < w / 2.0 + 1; x++) {
		vertex(x, sin(x / w * TAU * freq + phase) * amp);
	}
	endShape();
	pop();
}

function setup() {
	canvas = createCanvas(windowWidth, 400);
    noFill();
    canvas.parent("animacion");
	seed = random(10000);
}

function draw() {
	background(20);
	resetMatrix();
	randomSeed(seed);
	noiseSeed(seed);

	var w = width / nTiles;
	var amp = w;
	var nInc = 0.25;
	
	// Create border
	var thisWidth = 1800;
	var thisHeight = 1000;
	var thisScale = thisWidth / width;
	var t = (width - thisWidth) / 2.0;
	var sw = w / 2.0 * thisScale;
	translate(t + sw, t + sw);

	for (var y = 0; y < nTiles; y++) {
		var yPos = y / nTiles * thisHeight;
		for (var x = 0; x < nTiles; x++) {
			push();
			var n = noise(x * nInc, (y + 1000) * nInc);  // Add noise to phase offset
			var xPos = x / nTiles * thisWidth;
			
			// Move to where sine will be drawn on screen
			translate(xPos, yPos);

			// Rotate approximately half of the sines
			if (random() < 0.5) {
				rotate(HALF_PI);
			}

			// Reverse direction for approximately half of the sines
			var thisPhase = phase;
			if (random() < 0.5) {
				thisPhase = 1.0 - thisPhase;
			}

			// Select between cyan and magents
			if (random() < 0.5) {
				stroke(64, 255, 255);
			} else {
				stroke(255,140,0);
			}
			
			// Select frequency / period of sine
			var freq = pow(2, random(5));
			
			// Draw the wave
			drawWave(w * 0.5, freq, amp * n * thisScale * 0.5, n * TAU + thisPhase * TAU);

			pop();
		}
	}

	// Update phasor
	phase += phaseInc;
}