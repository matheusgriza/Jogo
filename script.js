const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");


//pular
function jump() {
    if (dino.classList != "jump") {
    dino.classList.add("jump");
   
    
    setTimeout(function() {
        dino.classList.remove("jump");
     }, 300)
    }
}

let estaVivo =  setInterval(function() {
 let DinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
 let cactusEsquerda = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
 
 
 if (cactusEsquerda < 50 && cactusEsquerda > 0 && DinoTop >= 140){
    alert("Game Over!")    
    }
}, 10);
 
        
