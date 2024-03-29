const circle = document.getElementById("bar");
const container = document.getElementById("switch");
const card = document.querySelector("#card-container");

let PorcTime = 0;
let cresce = false;
let changing = false;
let LoopTimer;
container.addEventListener("mousedown", OnMouseOver);
container.addEventListener("mouseup", OnMouseOut);

function OnMouseOver() {
  if (!changing || !cresce) {
    clearTimeout(LoopTimer);
    cresce = true;
    changing = true;
    changeSize();
  }
}
function OnMouseOut() {
  if (changing || cresce) {
    clearTimeout(LoopTimer);
    cresce = false;
    changing = true;

    changeSize();
  }
}

function changeSize() {
  if (cresce && PorcTime < 100) {
    circle.style.width = PorcTime + "%";

    PorcTime++;
    // LOOP
    if (PorcTime == 100) {
      card.classList.toggle("flip");
      if (card.classList.contains("flip")) {
        document.getElementById("button-text").innerHTML = "Clique e Entre";
      } else {
        document.getElementById("button-text").innerHTML =
          "Clique e Cadastre-se";
      }
      setTimeout(() => {
        PorcTime--;
      }, 10);
    }
  } else if (!cresce && PorcTime > 0 && PorcTime != 100) {
    PorcTime--;
    circle.style.width = PorcTime + "%";
  } else {
    changing = false;
    return;
  }
  LoopTimer = setTimeout(changeSize, 0);
}


const toggleButtonArea = document.getElementById('switch-mobile')
const toggleButton = document.getElementById('dot')
const textMobile = document.getElementById('text-mobile-button')


toggleButtonArea.addEventListener('click',()=>{
  document.body.classList.toggle('on')
  card.classList.toggle("flip")
  if(document.body.classList.contains('on')){
    toggleButton.classList.add('slide-right')
    toggleButton.classList.remove('slide-left')
    textMobile.innerHTML = 'Clique e faça Login'
  }else{
    toggleButton.classList.add('slide-left')
    toggleButton.classList.remove('slide-right')
    textMobile.innerHTML = 'Clique e faça seu Cadastro'

  }
  
})