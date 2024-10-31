

// JavaScript's manier van overerving
// niet helemaal wat je gewend bent vanuit C#/Java/...

function Mammal() {
    this.age = 345678;
    this.talk = function() {
        console.log('mwwwwwwooooaaaaaaa ik ben ' + this.age + ' jaar oud');
    }
}

function Human(name) {
    this.name = name;
    this.age = 27;

    // this.talk = function() {
    //     console.log('hoi');
    // }
}
Human.prototype = new Mammal();

const kasper = new Human('Kasper');
console.log(kasper);

kasper.talk();


// class Rectangle {
//     width = 3;
// }
function Rectangle() {
    this.width = 6;
}
class Square extends Rectangle { // syntactic sugar

}

console.log(new Square());
// Object.setPrototypeOf(new Square(), {});
console.log(new Square().width);

// extension methods (C# Kotlin)

Date.prototype.toPrettyString = function() {
    return `${this.getDate()}-${this.getMonth() + 1}-${this.getFullYear()}`;
};



let nu = new Date();
console.log(nu.toPrettyString());