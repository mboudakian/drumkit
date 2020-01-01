//selecciono el array de elementos clase drum
let buttonsArray = document.querySelectorAll(".drum");

//funcion para que se dispare el switch cuando se haga click (detecta el click)
buttonsArray.forEach(function(boton) {
  boton.addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;

    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
});

//se activa el switch con las teclas. El parametro es la propiedad key del objeto evento (detecta la tecla)
document.addEventListener("keydown", function(event) {
  makesound(event.key);
  buttonAnimation(event.key);
});

//funcion con switch que une la letra con el sonido
function makesound(key) {
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
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(key);
  }
}

/*agregar animaciones con un timeout para resetear*/

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
