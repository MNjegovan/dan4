/**
 * Created by Ucenik on 30.3.2017..
 */
/*var imena={
        ime:"",
        prezime:"",
        mjesto_stanovanja:"Zagreb",
        godrod:1999,
        razred:3,
        skgod:"2016/2017"
};
for (i=0;i<3;i++){
    console.log(imena[i]);
}
imena.ime = document.getElementById("prvi").value;
imena.prezime = document.getElementById("drugi").value;
function funk(){
    console.log(imena[i]);
}*/
var bob = new Object;
bob.age = 29;
var susan = new Object;
susan.age = 38;
var godine = document.getElementById("drugi").value;
var nova = function (godine){
    this.age = godine
};
function funk1() {
    if (bob.age - susan.age > 0) {
        console.log(bob.age - susan.age);
        console.log("bob ima više godina");
    };
    if (bob.age - susan.age == 0) {
        console.log(bob.age - susan.age);
        console.log("imaju jednako godina");
    };
    if (bob.age - susan.age < 0) {
        console.log(bob.age - susan.age);
        console.log("suzana ima više godina");
    }
/*function funk() {
    bob.setAge = nova;
    console.log(bob.age);}*/
/*var rectangle = {
    width:4,
    height:7
}
function calcArea(){
    rectangle.width = document.getElementById("prvi").value;
    rectangle.height = document.getElementById("drugi").value;
    area = rectangle.width*rectangle.height;
    console.log(area);
}
function calcPerimeter() {
    rectangle.width = document.getElementById("prvi").value;
    rectangle.height = document.getElementById("drugi").value;
    perimeter = 2*rectangle.width + 2*rectangle.height;
    console.log(perimeter);*/
}