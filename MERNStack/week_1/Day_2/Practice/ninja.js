
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

const ninja1 = new ninja("Hyabusa");
ninja1.sayName();
ninja1.showStatu();
ninja1.dirnkShark();
ninja1.showStatu();

ninja1.sayName().showStatu().dirnkShark().showStatu();