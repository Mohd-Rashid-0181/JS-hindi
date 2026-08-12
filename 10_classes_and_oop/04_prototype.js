

const myName = "rashid     "
const myChannel = "chai     "

// console.log(myName.truelength());

const myHero = ['Thor', 'Spiderman']

const heroPower = {
    thor : 'Hammer',
    spiderman : 'sling',

    getSpiderPower : function (){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all objects`);
    
}

Array.prototype.heyhitesh = function(){
    console.log(`hitesh says hello`);
    
}

// heroPower.hitesh()
myHero.hitesh()
myHero.heyhitesh()
// heroPower.heyhitesh()


// Inheritance

const user = {
    name : 'Chai',
    email : "Chai@google.com"
}

const teacher = {
    makeVideos : true
}

const teachingSupport = {
    isAvailable : false
}

const TASuport = {
    makeAssignment : "JSAssignment",
    fullTime : true,

    __proto__: teachingSupport
}

teacher.__proto__ = user


// Modern Syntax

Object.setPrototypeOf(teachingSupport,teacher)


const anotherUserName = "ChaiAurCode     "

String.prototype.trueLength = function (){
    console.log(`${this}`);
    console.log(`True Length is ${this.trim().length}`);
}

anotherUserName.trueLength();
"Hitesh".trueLength();
"iceTea".trueLength();