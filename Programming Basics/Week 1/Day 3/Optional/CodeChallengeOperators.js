var numberOfPieces=12;
var numberOfPeople=5;
function howMuchLeftOverCake (_piece,_people){
    if (_piece % _people===0){
        console.log("No leftovers for you!");
    }else if(_piece % _people<=2){
        console.log("You have some leftovers");
    }else if(3<=_piece % _people && _piece % _people<=5){
        console.log("You have leftovers to share");
    }else if(_piece % _people>5){
        console.log("Hold another party!");
    }
}

howMuchLeftOverCake(numberOfPieces,numberOfPeople);
