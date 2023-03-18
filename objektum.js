window.addEventListener("load", init);
const kutyaLista=["foxterrier","kuvasz","puli","agár","újfullandi","keverék"]
function init(){
//*const ELEM = document.querySelector("article")
//*ELEM.innerHTML= "<button>Kutya</button>" 
//*const gomb = document.querySelectorAll("article buttn")[0]q
const ARTICLE=document.querySelectorAll("article")
/**Írjuk ki a divekbe és azon belül p tagbe a kutyák fajtáját */
osszeallit()
//itt helyezzük bele az articlebe
}

function osszeallit(){
    let txt=""
    for (let index = 0; index < kutyaLista.length; index++) {
             txt+=`<div><p>nev</p></div>`   
    }
    console.log(txt)
}

