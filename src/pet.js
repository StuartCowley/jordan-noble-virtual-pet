function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  };

module.exports = Pet;

//The Pet should have an initial hunger of 0

//The growUp method should increase the hunger property by 5

//The Pet should have an initial fitness of 10

//The growUp method should decrease the fitness property by 3