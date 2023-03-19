window.addEventListener("load", init);
const kutyaLista = [
  { nev: "Dézi", kor: 12, fajta: "foxterrier" },
  { nev: "Dézi", kor: 10, fajta: "kuvasz" },
  { nev: "Dézi", kor: 9, fajta: "puli" },
  { nev: "Dézi", kor: 8, fajta: "agár" },
  { nev: "Dézi", kor: 7, fajta: "újfullandi" },
  { nev: "Dézi", kor: 6, fajta: "keverék" },
];
function init() {
  //*const ELEM = document.querySelector("article")
  //*ELEM.innerHTML= "<button>Kutya</button>"
  //*const gomb = document.querySelectorAll("article buttn")[0]q
  const ARTICLE = document.querySelectorAll("article");
  /**Írjuk ki a divekbe és azon belül p tagbe a kutyák fajtáját */
  let txt = osszeallit();
  //itt helyezzük bele az articlebe
  ARTICLE[0].innerHTML = txt;
  
  const ASIDE = document.querySelectorAll("aside");
  ASIDE[0].appendChild(urlap());
}
const NEV = "Név: ";
const KOR = "Kor: ";
const FAJTA = "Fajta: ";

function osszeallit() {
  let txt = "";
  for (let index = 0; index < kutyaLista.length; index++) {
    txt += `<div>`;
    let sorrend = 0;
    for (const key in kutyaLista[index]) {
      let megnevezes = "";
      switch (sorrend) {
        case 0:
          megnevezes = NEV;
          sorrend += 1;
          break;
        case 1:
          megnevezes = KOR;
          sorrend += 1;
          break;
        case 2:
          megnevezes = FAJTA;
          break;
        default:
          break;
      }
      txt += `<p>${megnevezes + kutyaLista[index][key]}</p>`;
    }
    txt += `<button onclick="this.parentNode.remove()">Gomb</button>`;
    txt += `</div>`;
  }
  console.log(txt);
  return txt;
}

function urlap() {
    let form = document.createElement("form");
  
    let nameLabel = document.createElement("label");
    nameLabel.textContent = "Kutya neve:";
    form.appendChild(nameLabel);
    
  
    let nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("class", "bgc");
    nameInput.setAttribute("id", "inputNev");
    nameInput.setAttribute("name", "nev");
    form.appendChild(nameInput);
  
    let ageLabel = document.createElement("label");
    ageLabel.textContent = "Kora:";
    form.appendChild(ageLabel);
  
    let ageInput = document.createElement("input");
    ageInput.setAttribute("type", "text");
    ageInput.setAttribute("class", "bgc");
    ageInput.setAttribute("id", "inputKor");
    ageInput.setAttribute("name", "kor");
    form.appendChild(ageInput);
  
    let breedLabel = document.createElement("label");
    breedLabel.textContent = "Fajtája:";
    form.appendChild(breedLabel);
  
    let breedInput = document.createElement("input");
    breedInput.setAttribute("type", "text");
    breedInput.setAttribute("class", "bgc");
    breedInput.setAttribute("id", "inputFajta");
    breedInput.setAttribute("name", "fajta");
    form.appendChild(breedInput);
  
    let submitButton = document.createElement("input");
    submitButton.setAttribute("type", "button");
    submitButton.setAttribute("class", "felvet");
    submitButton.setAttribute("value", "Felvétel");
    submitButton.setAttribute("onClick", "osszeallitButton()");
    
    form.appendChild(submitButton);
  
    return form;
  }

  function osszeallitButton() {
    let iNev = document.getElementById("inputNev").value;
    let iKor = document.getElementById("inputKor").value;
    let iFajta = document.getElementById("inputFajta").value;

    const ADATLISTA = [iNev, iKor, iFajta]

    if (iNev != "" && iKor != "" && iFajta != "")
    {
        let txt = "<div>";

      let sorrend = 0;
      
      for (let index = 0; index < ADATLISTA.length; index++) {
        let megnevezes = "";
        switch (sorrend) {
          case 0:
            megnevezes = NEV;
            sorrend += 1;
            break;
          case 1:
            megnevezes = KOR;
            sorrend += 1;
            break;
          case 2:
            megnevezes = FAJTA;
            break;
          default:
            break;
        }
        txt += `<p>${megnevezes + ADATLISTA[index]}</p>`;
      }
      txt += `<button onclick="this.parentNode.remove()">Gomb</button>`;
      txt += `</div>`;
    console.log(txt);
    
    document.querySelectorAll("article")[0].innerHTML += txt;

    document.getElementById("inputNev").value = "";
    document.getElementById("inputKor").value = "";
    document.getElementById("inputFajta").value = "";
    }    
  }
