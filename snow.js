//creating new classs
class snow {
    constructor(x,y){
        //attributees of snow
        var options = {
            friction: 0.01,
            restitution:0.5          
        }
        //creating shape of snow
        this.snow = Bodies.circle(x,y,5,options)
        this.radius = 5;
        this.img = loadImage("snow4.webp");
        //adding world to world and adding this.snow
        World.add(world, this.snow);
    }
//creating snow at random positions
    updateY(){     
        if(this.snow.position.y > height){
            Matter.Body.setPosition(this.snow, {x:random(0,600), y:random(0,400)})
        }
    }
//displaying snow  and resizing the image size
    display(){
        imageMode(CENTER);
        image(this.img,this.snow.position.x,this.snow.position.y,this.radius+30,this.radius+30);
    }
}

