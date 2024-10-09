class Person {
  name;
  number;

  constructor(name, number) {
    this.name = name;
    this.number = number;
  }
}

const raven = new Person("raven", "343434545");
const bb = new Person("Gar", "34343589");
const terra = new Person("Abril", "45940594");

const heroes = [raven, bb, terra];
const hero = "Abril";

for (let index = 0; index < heroes.length; index++) {
  if (heroes[index].name === hero) {
    console.log("Found hero number: ", heroes[index].number);
    return;
  }
  console.log("Not hero found");
}
