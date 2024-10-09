const name = "Terra";
const names = ["Raven", "BB", "Terra"];
const phones = ["5612456789", "2356879034", "3465788943"];


for (let index = 0; index < names.length; index++) {
  if (names[index] === name) {
    console.log("Found: ", names[index]);
    break;
  }
  console.log("Not found");
}
