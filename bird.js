function Bird(){
	this.x =64;
	this.y = height/2;
	this.gravity = 1;
	this.lift = -15;
	this.velocity = 0;
	this.show = function(){
		ellipse(this.x,this.y,32,30);
	

	}
	this.update = function(){
		this.velocity+=this.gravity;
		this.velocity += 0.01;
		this.y+=this.velocity;
		if(this.y>height-16){
			this.velocity =0;
			this.y = height-16;
		}
		if(this.y<0){
			this.velocity =0;
			this.y = 0;
		}
	}
	this.up = function(){
     this.velocity += this.lift;
	}
}