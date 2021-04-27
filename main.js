// EXO1
// Créer une fonction qui prend deux paramètres, et les additionne, et fait un console.log du résultat.(Additionner)

let chiffre1 = prompt("chiffre1");
let chiffre2 = prompt("chiffre2");

const addition = function (chiffre1, chiffre2) {
    return console.log(chiffre1 + chiffre2);
}

addition(chiffre1,chiffre2);

// EXO2
// Créez une fonction qui prend deux paramètres, et soustrait le deuxième au premier, et faites un console.log du résultat.(Soustraction)

let chiffre1 = prompt("chiffre1");
let chiffre2 = prompt("chiffre2");

const soustraction = function (chiffre1, chiffre2) {
    return console.log(chiffre1 - chiffre2)
}

soustraction(chiffre1, chiffre2);

// EXO3  
// Créez une fonction qui prend deux paramètres, et les multiplie, et faites un console.log du résultat.(Multiplication)

let chiffreUn = prompt("chiffre1");
let chiffreDeux = prompt("chiffre2");

function multiplication(chiffreUn, chiffreDeux) {
    return console.log(chiffreUn * chiffreDeux);
}
multiplication(chiffreUn, chiffreDeux);

// EXO4 
// Créez une fonction qui prend deux paramètres, et divise le premier par le deuxième, et faites un console.log du résultat.(Division)

function division(chiffre1un, chiffre2deux) {
    return console.log(chiffre1un / chiffre2deux);
}

division(17, 4);

// EXO5
// Créez une fonction qui prend deux paramètres, et retourne le reste de la division du premier par le deuxième, et faites un console.log du résultat.(Modulo)

let chiffreun = prompt("chiffre1");
let chiffredeux = prompt("chiffre2");

function mudolo(chiffreun, chiffredeux) {
    return console.log(chiffreun % chiffredeux);
}

mudolo(chiffreun,chiffredeux);


// EXO6
// Créez une fonction qui prend un paramètre, et retourne le carré de ce nombre, et faites un console.log du résultat.(Racine carrée)

let chiffreUn= prompt("chiffre1");

function racine(chiffreUn) {
    return console.log(Math.sqrt(chiffreUn));
}

racine(chiffreUn);


// EXO7
// Créez une fonction qui prend deux paramètres, et retourne le premier nombre à l'exposant du deuxième, et faites un console.log du résultat.(Exposant)

let chiffreUn = prompt("chiffre1");
let chiffreDeux = prompt("chiffre2");

function exposant(chiffreUn, chiffreDeux){
    return console.log(Math.pow(chiffreUn, chiffreDeux));
}

exposant(chiffreUn, chiffreDeux);

// EXO8
// Créer une function [capitalize] qui transforme n'importe quelle chaine de caractères avec la première lettre en majuscule et le reste en minuscule;

let text = prompt("mot?")

function capi(text){
    return console.log(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() )
}

capi(text)

//or

function capi(text){
    return (text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() )
}

console.log(capi(text))


// EXO9
// Créer une function [calcul] ayant 3 paramètres
// nbr1 , operator , nbr2
// Je dois pouvoir mettre un nombre choisir entre + - * ou / et un second nombre et obtenir une réponse (Utilisez un switch)

let nbr1 = +prompt("nombre1");
let operator = prompt("operateur");
let nbr2 = +prompt("nombre2");

function calcul(nbr1, operator, nbr2){
    switch (operator) {
        case `+`:
            return console.log(nbr1 + nbr2)
        case `-`:
            return console.log(nbr1 - nbr2)
        case `*`:
            return console.log(nbr1 * nbr2)
        case `/`:
            return console.log(nbr1 / nbr2)
        case `%`:
            return console.log(nbr1 % nbr2)
        default:
            return console.log("please enter valid operator")
    }
}

calcul(nbr1, operator, nbr2)


// pour moi - calculator

let nbr1 = +prompt("entrez un premier chiffre svp");
let operateur = prompt("quel operateur?");
let nbr2 = +prompt("entrez un deuxieme chiffre svp?");

function calculator (nbr1, operateur, nbr2) {
    switch (operateur) {
        case '+':
            return console.log(nbr1 + nbr2);
        break
        case '-':
            return console.log(nbr1 - nbr2);
        break
        case '*':
            return console.log(nbr1 * nbr2);
        break
        case '/':
            return console.log(nbr1 / nbr2);
        break
        case '%':
            return console.log(nbr1 % nbr2);
        break
        default:
            return console.log("entrez un chiffre svp")
    }
}
calculator (nbr1, operateur, nbr2)
