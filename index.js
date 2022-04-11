for (let numberOfDrum = 0; numberOfDrum < $(".drum").length; numberOfDrum++) {
  $(".drum")[numberOfDrum].addEventListener("click", () => {
    let button = $(".drum")[numberOfDrum].innerHTML;
    sounds(button);
  });
}
$("html").keypress((event) => {
  sounds(event.key);
  pressAnimate(event.key);
});

function sounds(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3")
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;
    default:
      console.log(key);
  }
}

function pressAnimate(currentKey) {
  $("." + currentKey).addClass("pressed");
  setTimeout(() => {
    $("." + currentKey).removeClass("pressed");
  }, 100);
}
