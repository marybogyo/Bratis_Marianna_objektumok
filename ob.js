window.addEventListener("load", init)
const KUTYAK = [
    {
    nev:"Dézi",
    fajta:"keverék",
    lab:4,
    magassag:52,
    nem:"szuka",
    kor:13
    },

    {
    nev:"Kíra",
    fajta:"yorkshire terrier",
    lab:4,
    magassag:20,
    nem:"szuka",
    kor:13
    }


]
function init(){
    // //**objektum, kulcs érték párok, ehhez a kulcshoz ez az érték tartozik 
    // const DEZI ={
    //     nev:"Dézi",
    //     fajta:"keverék",
    //     lab:4,
    //     magassag:52,
    //     nem:"szuka",
    //     kor:13
    // };
    // //KUTYAK.push(DEZI)
    // const KIRA={
    //     nev:"Kíra",
    //     fajta:"yorkshire terrier",
    //     lab:4,
    //     magassag:20,
    //     nem:"szuka",
    //     kor:13
    // };
    console.log(KUTYAK[0])
    console.log(KUTYAK[1])
    console.log(KUTYAK[0].nev)
    KUTYAK[0].nev="Béla"
    console.log(KUTYAK[0].nev)
    KUTYAK[0].oltas="van"
    console.log(KUTYAK[0])
    delete KUTYAK[0].lab
    console.log(KUTYAK[0])
    //**objektumok bejárása*/

    for (let index = 0; index < KUTYAK.length; index++) {
        console.log(index, ".kutya")
        for (const kulcs in KUTYAK[0]) {
            console.log(kulcs,KUTYAK[0][kulcs])
             }
        
    }
  
    console.log(KUTYAK)
   }
    