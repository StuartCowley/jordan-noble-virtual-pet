const MAXIMUM_FITNESS = 10;
const MINIMUM_AGE = 0;
const MINIMUM_HUNGER = 0;


function Pet(name) {
    this.name = name;
    this.age = MINIMUM_AGE;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  };

Pet.prototype.walk = function() {
    if (this.fitness + 4 >= 10) {
        this.fitness = MAXIMUM_FITNESS;
    }
    else {
        this.fitness += 4;
    }
}

Pet.prototype.feed = function() {
    if (this.hunger - 3 < 0) {
        this.hunger = MINIMUM_HUNGER;
    }
    else {
        this.hunger -= 3;
    }
}

module.exports = Pet;

//The Pet should have an initial hunger of 0

//The growUp method should increase the hunger property by 5

//The Pet should have an initial fitness of 10

//The growUp method should decrease the fitness property by 3