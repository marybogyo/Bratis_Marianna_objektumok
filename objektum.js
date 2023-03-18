window.addEventListener("load", init);
const kutyaLista=[ {nev: "Dézi", kor: 12, fajta: "foxterrier"},
{nev: "Dézi", kor: 10,fajta: "kuvasz"},
{nev: "Dézi", kor: 9,fajta: "puli"},
{nev: "Dézi", kor: 8,fajta: "agár"},
{nev: "Dézi", kor: 7,fajta: "újfullandi"},
{nev: "Dézi", kor: 6,fajta: "keverék"}
]
function init(){
//*const ELEM = document.querySelector("article")
//*ELEM.innerHTML= "<button>Kutya</button>" 
//*const gomb = document.querySelectorAll("article buttn")[0]q
const ARTICLE=document.querySelectorAll("article")
/**Írjuk ki a divekbe és azon belül p tagbe a kutyák fajtáját */
let txt=osszeallit()
//itt helyezzük bele az articlebe
ARTICLE[0].innerHTML=txt
}

function osszeallit(){
    let txt=""
    for (let index = 0; index < kutyaLista.length; index++) {
             txt+=`<div>`
             for (const key in kutyaLista[index]) {
                txt+=`<p>${kutyaLista[index][key]}</p>`
        
             }
           
             txt+= `</div>`   
    }
    console.log(txt)
    return txt
}

