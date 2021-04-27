//function

//3 manieres de les declarer

function test(params) {

}

let test = function (params) {

}

const test = function (params) {

}

const test = () => {

}

test();

//test

const bonjour = function (txt) {
    console.log("Bonjour " + txt);
}

bonjour("cactus");


function name(txt1, txt2) {
    console.log(txt1 + txt2);
}
name("salut ", "cactus");

function name(txt1, txt2) {
    return console.log(txt1 + txt2);
}

name('Bonjour ', "Dorian");
