// Write your solution here!

var cats = ["Milo", "Otis", "Garfield"]

function  destructivelyAppendCat(name){

    cats.push(name);
    return cats;
}

function  destructivelyPrependCat(name){
    cats.unshift(name);
    return cats
}

function  destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}

function  destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}

function appendCat(name){
    var myCat=[ ...cats,name];
    return myCat
}

function  prependCat(name){
    var hisCat = [name,...cats];
    return hisCat
}

function   removeLastCat(){
    var kat = cats.slice(0,cats.length-1);
 
   return kat;
}

function  removeFirstCat(){
    var paka = cats.slice(1)
    return paka
}