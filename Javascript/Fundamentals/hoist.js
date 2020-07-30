//1--------------------------------------------
var hello
console.log(hello)
var hello= 'world';
//Result: undefined is printed to the console

//2--------------------------------------------
var needle
function test(){
    var needle = 'magnet';
    console.log(needle);
}
var needle='haystack'
test();
//Result: magnet is printed to the console

//3--------------------------------------------
var brendan
function print(){
    brendan='only okay'
    console.log(brendan);
}
var brendan='super cool';
console.log(brendan);
//Result: console logs super cool

//4--------------------------------------------
var food
function eat(){
    var food;
    food='half-chicken';
    console.log(food);
    var food='gone'
}
var food= 'chicken'
console.log(food);
eat();
//Result: console logs chicken and half-chicken

//5--------------------------------------------
var mean
mean();
console.log(food);
    var mean = function() {
        var food;
        food = "chicken";
        console.log(food);
        var food = "fish";
        console.log(food);
    }
console.log(food);
//Result: Error mean is not a function

//6--------------------------------------------
var genre;
function rewind() {
    var genre;
    genre='rock';
    console.log(genre);
    var genre= 'r&b'
    console.log(genre);
}
console.log(genre);
var genre='disco'
rewind()
console.log(genre);
//Result: console logs undefined, rock, r&b, and disco

//7--------------------------------------------
function learn() {
    var dojo
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);
//Result: console logs san jose, seattle, burbank, san jose

//8---------------------------------------------
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
//Result: {'name': Chicago, 'students':65, 'hiring':true}
//        TypeError: Assignment to constant variable




