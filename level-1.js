// question 1

var city = "oslo"

// question 2

var person = { 
    name: "katarina",
    country: "norway"
}

// question 3

var outOfStock = true;
if (outOfStock === true){ 
    console.log("Out of stock");
}
else { 
    console.log("In stock");
}

// question 4

var numbers = [ 5, 10, 15, 20, 25 ];
for (var i=0; i < numbers.length; i++){
    console.log(numbers[i]);
} 

// question 5

for (var i = 15; i<=25; i++){
    console.log(i);
}

// question 6

for (var i = 15; i<=25; i++){
    if (i===20){ 
        console.log(i);
    }
}

// question 7

var sandals = {
    brand: "Birkenstock",
    size: 39,  
    instock: true
}

var boots = {
    brand: "Louboutin",
    size: 43,  
    instock: false
}

var shoes = [ sandals, boots ];
for (var i=0; i < shoes.length; i++){
    console.log(shoes[i].size);
    console.log(shoes[i].instock);
}

// question 8

function whatIDontLike(item) {
    console.log("i dont like "+item);
}
whatIDontLike("snow");

// question 9

function substraction(numberOne, numberTwo) {
    console.log(numberTwo-numberOne);
}
substraction(200, 500);

// question 10

var pets=[];
function addToArrayPets(item) {
    pets.push(item)
}
addToArrayPets("monkey");
