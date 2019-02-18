/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " +texte.substr(a + 1 , texte.length);
    return text;
}
var concatString = function (texte1, texte2) {
    return texte1.concat(texte2);

}
var afficherCar5 = function (texte) {
    return texte.charAt(6);
}
var afficher9Car = function (texte) {
    return texte.substr(0,9);
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim();
}
var IsString = function (texte) {
    return isNaN(texte)

}

var AfficherExtensionString = function (texte) {
    return lastIndexOf(texte);
}
var NombreEspaceString = function (texte) {

}
var InverseString = function (texte) {

}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {

}
var valeurAbsolue = function (nombre) {

}
var valeurAbsolueArray = function (array) {

}
var sufaceCercle = function (rayon) {

}
var hypothenuse = function (ab, ac) {

}
var calculIMC = function (poids, taille) {

}
