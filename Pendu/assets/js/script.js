window.onload = function pendu() {

 let mot=['B', 'O', 'N', 'J', 'O', 'U', 'R'];
 let vide=['_', '_', '_', '_', '_', '_', '_'];
 let finish = [];
 let entree;
 let affich;
  
guessLetter();

function guessLetter(){

let  entree = prompt("Entree une lettre ou pendez vous !").toUpperCase();
console.log(entree);
  for (let i = 0; i <= mot.length; i++) {
      if (entree===mot[i]) {
        vide.splice(i, 1, entree);
        finish.push(entree);
        alert("Ouf ! t'a failli y passer, entre une nouvelle lettre")
        console.log(vide);
        console.log(mot);
        console.log(finish);
            
      }       
  }
  guessLetter();
  fin();
  function fin(){
    finish=mot;
      alert("Bravo, mais tu m'a trop pris la tête, on va te pendre quand même !" +finish);

  }
  

   
}

}