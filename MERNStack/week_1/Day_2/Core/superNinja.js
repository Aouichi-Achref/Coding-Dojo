
class ninja{
    constructor(name,health=90,speed=3,strength=3){

        this.name=name
        this.health=health
        this.speed=speed
        this.strength=strength
        
    }

    sayName(){
        console.log(this.name)
        return this
    }
    showStatu(){
        console.log(`name= ${this.name}-----health= ${this.health}
                ---speed= ${this.speed}---strength= ${this.strength}`);
        return this
                
        }

    dirnkShark(){
        this.health+=10
        return this
    }

}

class Sensei extends ninja {
    constructor(name) {
        super(name); 
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake(); 
        console.log("What one programmer can do in one month, two programmers can do in two months.");
        return this
    }
}

//? example output

const superSensei = new Sensei("Master YI");
superSensei.speakWisdom();

//! "What one programmer can do in one month, two programmers can do in two months."

superSensei.showStats();

//! "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"