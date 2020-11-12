var lengthOfButton= document.querySelectorAll('.drum').length;

for (i=0; i<lengthOfButton; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click', function(){

  var selected= this.innerHTML;

  play(selected);
  addClass(selected);


    });
}


document.addEventListener("keydown", function(selected) {
    play(selected.key);
 
 });




function play(selected){

    switch (selected){

        case "w":
            var playInstrument= new Audio ('sounds/crash.mp3');
            playInstrument.play();
            break;


            case "a":
                var playInstrument= new Audio ('sounds/kick-bass.mp3');
                playInstrument.play();
                break;



                case "s":
            var playInstrument= new Audio ('sounds/snare.mp3');
            playInstrument.play();
            break;


            case "d":
            var playInstrument= new Audio ('sounds/tom-1.mp3');
            playInstrument.play();
            break;


            case "j":
            var playInstrument= new Audio ('sounds/tom-2.mp3');
            playInstrument.play();
            break;


            case "k":
            var playInstrument= new Audio ('sounds/tom-3.mp3');
            playInstrument.play();
            break;


            case "l":
                var playInstrument= new Audio ('sounds/tom-4.mp3');
                playInstrument.play();
                break;


    }
}

function addClass (selected) {

   var chosen="." + selected;
    document.querySelector(chosen).classList.add("pressed");

    setTimeout(function() {
        document.querySelector(chosen).classList.remove("pressed");

    }, 100);
}