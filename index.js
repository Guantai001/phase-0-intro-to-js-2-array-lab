// Write your solution here!

var cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
    
    return cats
}

function destructivelyPrependCat(name){
    cats.unshift(name)
    return cats
}

function destructivelyRemoveLastCat(){
    cats.pop()
    return cats
}

function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
}

function appendCat(name){
    var newCats = [...cats, name]
    return newCats
}

function prependCat(name){
    var newCats = [name, ...cats]
    return newCats

}

function removeLastCat(){
    var newCats = cats.slice(0, cats.length -1)
    return newCats
}

function removeFirstCats(){
    var newCats = cats.slice(1)
    return newCats
}

function removeFirstCat(){
    var newCats = cats.slice(1)
    return newCats
}
// console.log(cats)