let img = document.querySelector("#img1");
let button = document.querySelector("#but")

let suffle = ()=>{
    let random = Math.floor(Math.random()*6);
    img.setAttribute("src",`${random}.png`);
}




button.addEventListener('click',()=>{
   setTimeout(suffle,1000)
    img.setAttribute("src","dice.gif");
});