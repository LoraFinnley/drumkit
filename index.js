
// Detecting button press
// passing through the text in the HTML to call the function 'playSound'

var buttons = document.querySelectorAll(".drum").length;

for(var i = 0; i < buttons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        playSound (this.innerHTML);
        soundAnimation(this.innerHTML);
    });
}

// Detecting keyboard press
// passing through the pressed key button to call the functinon 'playSound'

document.addEventListener("keydown", function(event){
    playSound(event.key);
    soundAnimation(event.key);
});

// function 'playSound' incl. a console.log bc I like doing so

function playSound (instrument) {
    switch (instrument) {
        case "w":
                console.log(instrument);
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
            break;

            case "a":
                console.log(instrument);
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
            break;

            case "s":
                console.log(instrument);
                var tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
            break;

            case "d":
                console.log(instrument);
                var tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();
            break;

            case "j":
                console.log(instrument);
                var snare = new Audio("./sounds/snare.mp3");
                snare.play();
            break;
        
            case "k":
                console.log(instrument);
                var crash = new Audio("./sounds/crash.mp3");
                crash.play();
            break;

            case "l":
                console.log(instrument);
                var kickBass = new Audio("./sounds/kick-bass.mp3");
                kickBass.play();
            break;
        
            default: console.log(instrument);
                break;
    }
}

// function for button animation

function soundAnimation(instrument){
    document.querySelector("." + instrument).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("." + instrument).classList.remove("pressed");
    }, 100);
}