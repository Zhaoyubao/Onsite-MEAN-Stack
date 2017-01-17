// function person(name) {
//     this.name = name;
//     this.distance_traveled = 0;
//
//     this.say_name = function() {
//         console.log(this.name.toUpperCase());
//         return this;
//     }
//     this.say_something = function(str) {
//         console.log(`${this.name.toUpperCase()} says ${str}`);
//         return this;
//     }
//     this.walk = function() {
//         console.log(`${this.name.toUpperCase()} is walking`);
//         this.distance_traveled += 3;
//         console.log(`Distance Traveled: ${this.distance_traveled}`);
//         return this;
//     }
//     this.run = function() {
//         console.log(`${this.name.toUpperCase()} is running`);
//         this.distance_traveled += 10;
//         console.log(`Distance Traveled: ${this.distance_traveled}`);
//         return this;
//     }
//     this.crawl = function() {
//         console.log(`${this.name.toUpperCase()} is crawling`);
//         this.distance_traveled += 1;
//         console.log(`Distance Traveled: ${this.distance_traveled}`);
//         return this;
//     }
// }
//
// var yubao = new person("yubao");
// yubao.say_name().say_something("I'm a ninja.").walk().run().crawl();
// console.log(yubao.distance_traveled);
//
var person = {
    name : "Ninja",
    distance_traveled : 0,
    say_name() {
        console.log(person.name.toUpperCase());
        return person;
    },
    say_something(str) {
        console.log(`${person.name.toUpperCase()} says: ${str}`);
        return person;
    },
    walk() {
        console.log(`${person.name.toUpperCase()} is walking!`);
        person.distance_traveled += 3;
        return person;
    },
    run() {
        console.log(`${person.name.toUpperCase()} is running!`);
        person.distance_traveled += 10;
        return person;
    },
    crawl() {
        console.log(`${person.name.toUpperCase()} is crawling!`);
        person.distance_traveled += 1;
        return person;
    }
}

person.say_name().walk().run().crawl();
console.log(person.distance_traveled);
