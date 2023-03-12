const MAXIMUM_FITNESS = 10;
const MINIMUM_AGE = 0;
const MINIMUM_HUNGER = 0;


function Pet(name) {
    this.name = name;
    this.age = MINIMUM_AGE;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype = {
    get isAlive() {
      return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
}

Pet.prototype.growUp = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  };

Pet.prototype.walk = function() {
     if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
    if (this.fitness + 4 >= 10) {
        this.fitness = MAXIMUM_FITNESS;
    }
    else {
        this.fitness += 4;
    }
}

Pet.prototype.feed = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
    if (this.hunger - 3 < 0) {
        this.hunger = MINIMUM_HUNGER;
    }
    else {
        this.hunger -= 3;
    }
}

Pet.prototype.checkUp = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
    if (this.fitness <= 3 && this.hunger < 5){
        console.log('I need a walk');
    }
    else if (this.hunger >= 5 && this.fitness > 3){
        console.log('I am hungry');
    }
    else if (this.fitness <= 3 && this.hunger >= 5){
        console.log('I am hungry AND I need a walk');
    }
    else {
        console.log('I feel great!');
    }
}

// add similar logic to the walk and growUp functions.

// make the checkUp function return this same string if pet is dead.

// if fitness <= 0, or age >= 30, throw an error

module.exports = Pet;