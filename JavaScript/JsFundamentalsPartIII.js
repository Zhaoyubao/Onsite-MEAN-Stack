function personConstructor(name) {
    this.name = name;
    this.distance_traveled = 0;

    this.say_name = function() {
        console.log(this.name.toUpperCase());
        return this;
    }
    this.say_something = function(str) {
        console.log(`${this.name.toUpperCase()} says ${str}`);
        return this;
    }
    this.walk = function() {
        console.log(`${this.name.toUpperCase()} is walking`);
        this.distance_traveled += 3;
        console.log(`Distance Traveled: ${this.distance_traveled}`);
        return this;
    }
    this.run = function() {
        console.log(`${this.name.toUpperCase()} is running`);
        this.distance_traveled += 10;
        console.log(`Distance Traveled: ${this.distance_traveled}`);
        return this;
    }
    this.crawl = function() {
        console.log(`${this.name.toUpperCase()} is crawling`);
        this.distance_traveled += 1;
        console.log(`Distance Traveled: ${this.distance_traveled}`);
        return this;
    }
}
var yubao = new personConstructor("yubao");
yubao.say_name().say_something("I'm a ninja.").walk().run().crawl();
console.log(yubao.distance_traveled);

// =======================================================
function ninjaConstructor(name, cohort) {
    var ninja = {};
    var belts = ["yellow", "red", "black"];
    ninja.name = name;
    ninja.cohort = cohort;
    ninja.beltLv = 0;
    ninja.belt = "yellow";
    ninja.levelUp = function() {
        if (ninja.beltLv < 2){
            ninja.beltLv += 1;
            ninja.belt = belts[ninja.beltLv];
            console.log(`Level Up! Now you've got the ${ninja.belt} belt!`);
        }
        else console.log(`${ninja.name.toUpperCase()}, you've already got the blackbelt!`);
        return ninja;
    }
    return ninja;
}
var ninja = ninjaConstructor("Codingdojo", "MEAN");
// console.log(`Name: ${ninja.name.toUpperCase()}\tCohort: ${ninja.cohort}`);
// ninja.levelUp().levelUp().levelUp();

// ===================================================================
function ninjaConstructor1(name, cohort) {
    this.name = name;
    this.cohort = cohort;
    this.beltLv = 0;
    this.belt = "yellow";
}
ninjaConstructor1.prototype.levelUp = function() {
    var belts = ["yellow", "red", "black"];
    if(this.beltLv < 2) {
        this.beltLv += 1;
        this.belt = belts[this.beltLv];
        console.log(`Level Up! Now you've got the ${this.belt} belt!`);
    }
    else console.log(`${this.name.toUpperCase()}, you've already got the blackbelt!`);
    return this;
}

// var ninja = new ninjaConstructor1("Codingdojo", "MEAN");
// console.log(`Name: ${ninja.name.toUpperCase()}\tCohort: ${ninja.cohort}`);
// ninja.levelUp().levelUp();
