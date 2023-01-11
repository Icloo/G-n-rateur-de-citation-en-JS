let citationgauche = document.getElementById('citationgauche');
let citationsgauche = document.getElementById('affichercitationgauche');
let listecitationgauchedebut = ['Notre puissance','Noxus','Du sang','Toujours','Seul les couards','Un Noxien'];
let listecitationgauchemilieu = ['est','contrôlera','pour','sur le chemin de','craigent',"n'as jamais"];
let listecitationgauchefin = ['inégalée !','le monde.','Noxus !','la guerre.','la mort.','la peur.'];



citationgauche.addEventListener("click",generergauche);

function generergauche() {
    let nbcitationinput = document.getElementById('nombrecitation');
    let myRegexnb = /^\d+$/;
    let myRegexnblimit = /^[1-5]$/;

    if (nbcitationinput.value.trim() == "") {
        let myError = document.getElementById('error');
        myError.innerHTML = "Veuillez choisir combien de citations vous désirez générer";
        myError.style.color = "red";
        nbcitationinput.style.borderColor = "red";
        generergauche.preventDefault();
      } else if (myRegexnb.test(nbcitationinput.value) == false) {
        let myError = document.getElementById('error');
        myError.innerHTML = "Veuillez renseigner des chiffres uniquement";
        myError.style.color = "red";
        nbcitationinput.style.borderColor = "red";
        generergauche.preventDefault();
      } else if (myRegexnblimit.test(nbcitationinput.value) == false) {
        let myError = document.getElementById('error');
        myError.innerHTML = "Veuillez renseigner un chiffre entre 1 et 5 uniquement";
        myError.style.color = "red";
        myInput.style.borderColor = "red";
        generergauche.preventDefault();
      }  else {
        let myError = document.getElementById('error');

        while (myError.firstChild) {
            myError.removeChild(myError.firstChild);
        }
      }

    while (citationsgauche.firstChild) {
        citationsgauche.removeChild(citationsgauche.firstChild);
    }
    for (i=0;i<nbcitationinput.value;i++) {
    let randomNumber = Math.floor(Math.random()*(listecitationgauchedebut.length));
    let randomNumber2 = Math.floor(Math.random()*(listecitationgauchemilieu.length));
    let randomNumber3 = Math.floor(Math.random()*(listecitationgauchefin.length));
    let affichercitationgauche = document.createElement('p');
    affichercitationgauche.textContent = '"' + listecitationgauchedebut[randomNumber] + " " + listecitationgauchemilieu[randomNumber2] + " " + listecitationgauchefin[randomNumber3] + '"';
    citationsgauche.appendChild(affichercitationgauche);
}
}

let citationdroite = document.getElementById('citationdroite');
let citationsdroite = document.getElementById('affichercitationdroite');
let listecitationdroitedebut = ['Par','Justice','Nous','Protégons','Démacia','Les ennemis'];
let listecitationdroitemilieu = ['la volonté','sera','faisons','les','pour','de Demacia'];
let listecitationdroitefin = ['de Demacia.','rendue.','ce qui est juste.','justes.','toujours.','tomberons.'];

citationdroite.addEventListener("click",genererdroite);

function genererdroite() {
    let nbcitationinput = document.getElementById('nombrecitationdroite');
    let myRegexnb = /^\d+$/;
    let myRegexnblimit = /^[1-5]$/;

    if (nbcitationinput.value.trim() == "") {
        let myError = document.getElementById('error2');
        myError.innerHTML = "Veuillez choisir combien de citations vous désirez générer";
        myError.style.color = "red";
        nbcitationinput.style.borderColor = "red";
        genererdroite.preventDefault();
      } else if (myRegexnb.test(nbcitationinput.value) == false) {
        let myError = document.getElementById('error2');
        myError.innerHTML = "Veuillez renseigner des chiffres uniquement";
        myError.style.color = "red";
        nbcitationinput.style.borderColor = "red";
        genererdroite.preventDefault();
      } else if (myRegexnblimit.test(nbcitationinput.value) == false) {
        let myError2 = document.getElementById('error2');
        myError2.innerHTML = "Veuillez renseigner un chiffre entre 1 et 5 uniquement";
        myError2.style.color = "red";
        myInput2.style.borderColor = "red";
        genererdroite.preventDefault();
      } else {
        let myError2 = document.getElementById('error2');
        while (myError2.firstChild) {
            myError2.removeChild(myError2.firstChild);
        }
      }

    while (citationsdroite.firstChild) {
        citationsdroite.removeChild(citationsdroite.firstChild);
    }
    for (i=0;i<nbcitationinput.value;i++) {
    let randomNumber = Math.floor(Math.random()*(listecitationdroitedebut.length));
    let randomNumber2 = Math.floor(Math.random()*(listecitationdroitemilieu.length));
    let randomNumber3 = Math.floor(Math.random()*(listecitationdroitefin.length));
    let affichercitationdroite = document.createElement('p');
    affichercitationdroite.textContent = '"' + listecitationdroitedebut[randomNumber] + " " + listecitationdroitemilieu[randomNumber2] + " " + listecitationdroitefin[randomNumber3] + '"';
    citationsdroite.appendChild(affichercitationdroite);
}
}



document.getElementById('nombrecitation').addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        generergauche();
    }
})

document.getElementById('nombrecitationdroite').addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        genererdroite();
    }
})



////////////////////////////////////////////////////////////////////////////////////

let hoverdroite = document.getElementById("droitehover");
let fondnoxus = document.getElementById('myVideo2');
let fondbase = document.getElementById('myPhoto');
let fonddemacia = document.getElementById('myVideo');
let hovergauche = document.getElementById("gauchehover");


hoverdroite.addEventListener("mouseover", () => {

fondnoxus.style.display = "none";
fondbase.style.display = "none";
fonddemacia.style.display = "block";

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  
  fondnoxus.style.display = "none";
  fonddemacia.style.display = "none";
}


});

hovergauche.addEventListener("mouseover", () => {

fondnoxus.style.display = "block";
fondbase.style.display = "none";
fonddemacia.style.display = "none";


if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
 
  fondnoxus.style.display = "none";
  fonddemacia.style.display = "none";
}

});
