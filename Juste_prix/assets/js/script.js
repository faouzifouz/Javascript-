
let essai=0;
let valmin=20;
let valmax=80;
let alea=Math.floor(Math.random()*(valmax - valmin))+valmin;
console.log(alea);
nbNombre=0


function debut(){
    while (nbNombre != alea){
    nbNombre= parseInt(prompt("Entre un chiffre  entre 20 et 80:"));
    essai ++;
    if ((nbNombre < 20) || (nbNombre > 80)){
        alert("Tu sais pas lire entre 20 et 80 !, retente");
    }
    
     else {
        if (nbNombre < alea ){
            alert("C'est plus!");
        }
        else if (nbNombre > alea){
            alert("C'est moins!");
        }
    }
}
alert("Bien vu turlututu, tu as gagné en "+ essai + " coups!");
}

