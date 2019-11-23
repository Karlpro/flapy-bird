var pipes = [];
var bird;
var score = 0;
function setup(){
createCanvas(600,800);
bird = new Bird();
}
function draw(){
background(100);
textSize(32);
text(score, 10, 30);
for(var i = pipes.length-1;i>=0;i-- ){
	pipes[i].show();
	pipes[i].update();
	if(pipes[i].hits(bird)){
		text(score++, 10, 30);
	}
	if(score >= 100){
		clearRect(600,800);
	}
}
// for(var s = 0;s<20;s++){
// 		stroke(100,100,100);
// 		circle(random(0,width),random(0,height),random(0,40));
// 	}
bird.show();
bird.update();

if(frameCount %75 ==0){
	pipes.push(new Pipe());
}
}
function keyPressed(){
	if(key = " "){
		bird.up();
	}
}