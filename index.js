function wakeDog (dog, breed) {
  let txt = `Wake ${dog} the ${breed}`;
  console.log(txt);
  return txt;
}

function leashDog (dog, breed) {
  let txt = `Leash ${dog} the ${breed}`;
  console.log(txt);
  return txt;
}

function walkToPark (dog, breed) {
  let txt = `Walk to the park with ${dog} the ${breed}`;
  console.log(txt);
  return txt;
}

function throwFrisbee (dog, breed) {
  let txt = `Throw the frisbee for ${dog} the ${breed}`;
  console.log(txt);
  return txt;
}

function walkHome (dog, breed) {
  let txt = `Walk home with ${dog} the ${breed}`;
  console.log(txt);
  return txt;
}

function unleashDog (dog, breed) {
  let txt = `Unleash ${dog} the ${breed}`;
  console.log(txt);
  return txt;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog (dog, breed) {
  return routine.map(fn => fn(dog, breed))
}