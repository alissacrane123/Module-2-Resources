

function multiplyByFive(num) {
  // console.log(this);
  return num * 5;
}

console.log(multiplyByFive);

const pony = {
  name: "Lucy",
  whatIsThis: function () {
    console.log(this);
  },
  sayName: function () {
    console.log("Hello my name is " + this.name);
  },
  changeName: function (name) {
    this.name = name;
  }
};


pony.whatIsThis();
pony.sayName();
pony.changeName("Tony");


let ponyName = pony.sayName;

ponyName();

let boundName = pony.sayName.bind(pony);
boundName();


const lizard = {
  name: "Lionel"
};


let boundLizardName = pony.sayName.bind(lizard);

boundLizardName();

