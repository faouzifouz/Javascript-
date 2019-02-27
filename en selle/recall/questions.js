//afficher les lettre qui commence par "a"
var selectElementsStartingWithA = function(array) {
    return array.filter((begin) => begin.startsWith("a"));
}
//afficher les mots qui commence par une voyelle
var selectElementsStartingWithVowel = function(array) {
    
    return array.filter((begin) => begin.startsWith("a")
     ||begin.startsWith("e") 
     ||begin.startsWith ("i") 
     ||begin.startsWith ("o") 
     ||begin.startsWith("u") 
     ||begin.startsWith("y"))
}
//afficher tout sauf element null
var removeNullElements = function(array) {
    return array.filter((bolean)=>bolean !== null)  ;
}
//afficher tout sauf false et null
var removeNullAndFalseElements = function(array) {
    return array.filter((bolean) =>bolean !== false).filter((element)=>element!==null)
}
//inverser les mots du tableau
var reverseWordsInArray = function(array) {
    let verlan = [];
    for (let i = 0; i< array.length; i++) {
        verlan.push(array[i].split('').reverse().join(''));
    }
    return verlan;
}
// regrouper les noms par pair 
var everyPossiblePair = function(array) {
   function pair(tableau) {
        tableau.sort();
        let table = [];
        for(let i=0; i<tableau.length; i++)
            for(let j=i+1; j<tableau.length; j++)
                table.push([tableau[i], tableau[j]]);
        return table;
        
    }
return pair(array) 
      
} 


//afficher les 2 derniers du tableau
var allElementsExceptFirstThree = function(array) {
     array.splice(0,3);
     return array
}
// remettre le tableau dans l'ordre
var addElementToBeginning = function(array, element) {
    array.unshift(element);
    return array
}
// classer les mot par la derniere lettre
var sortByLastLetter = function(array) {

    return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}
    
// couper les mots en deux
var getFirstHalf = function(string) {
    console.log(string.slice(0, string.length / 2))
    return string.slice(0, Math.round(string.length / 2));

}
//afficher le nombre negatif
var makeNegative = function(number) {
    if(number>0) {
        number = -number;
        return number;
    } else {
        return number;
    }

}
//afficher le nombre de palyndrome
var numberOfPalindromes = function(array) {
    let count = 0;
    for (i=0;i<array.length;i++) {
        let pal = array[i].split('').reverse().join('')
        if (array[i]==pal) {
            count++
        }
    }

    return count
}

var shortestWord = function(array) {
    words = Array.isArray(words) ? words : [].slice.call(arguments);

  return words.reduce(function (a, b) {
    return a.length <= b.length ? a : b;
  });
}



var longestWord = function(array) {
    return 'Write your method here';
}

var sumNumbers = function(array) {
    return 'Write your method here';
}

var repeatElements = function(array) {
    return 'Write your method here';
}

var stringToNumber = function(string) {
    return 'Write your method here';
}

var calculateAverage = function(array) {
    return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
    return 'Write your method here';
}

var convertArrayToObject = function(array) {
    return 'Write your method here';
}

var getAllLetters = function(array) {
    return 'Write your method here';
}

var swapKeysAndValues = function(object) {
    return 'Write your method here';
}

var sumKeysAndValues = function(object) {
    return 'Write your method here';
}

var removeCapitals = function(string) {
    return 'Write your method here';
}

var roundUp = function(number) {
    return 'Write your method here';
}

var formatDateNicely = function(date) {
    return 'Write your method here';
}

var getDomainName = function(string) {
    return 'Write your method here';
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
    return 'Write your method here';
}

var squareRoot = function(number) {
    return 'Write your method here';
}

var factorial = function(number) {
    return 'Write your method here';
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    return 'Write your method here';
}

var letterPosition = function(array) {
    return 'Write your method here';
}
