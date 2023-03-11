const Pet = require('../src/pet');
const pet = new Pet('Fido');

describe('constructor', () => {
  it('returns an object', () => {
    expect(pet).toBeInstanceOf(Object);
  });
  it('sets the name property', () => {
    expect(pet.name).toEqual('Fido');
  });
  it('has a initial age of 0', () => {
    expect(pet.age).toEqual(0);
  });
});

describe('growUp', () => {
  it('increments the age by 1', () => {
    pet.growUp();
    expect(pet.age).toEqual(1);
  });
  it('increments hunger by 5', () => {
    expect(pet.hunger).toEqual(5);
  });
  it('decrements fitness by 3', () => {
    expect(pet.fitness).toEqual(7);
  });
});

describe('walk', () => {
  it ('increases fitness by 4, without exceeding MAXIMUM_FITNESS', () => {
    pet.fitness = 4;
    pet.walk();
    expect(pet.fitness).toEqual(8);
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
});

describe('feed', () => {
  it ('decreases hunger, without being less than MINIMUM_HUNGER', () => {
    pet.hunger = 5;
    pet.feed();
    expect(pet.hunger).toEqual(2);
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });
});

describe('checkup', () => {
  it ('return "I need a walk" if fitness <= 3', () => {
    pet.fitness = 3;
    pet.checkUp();
    expect(console.log('I need a walk'));
  });
  it ('return "I am hungry" if hunger >= 5', () => {
    pet.hunger = 5;
    pet.checkUp();
    expect(console.log('I am hungry'));
  });
  it ('return "I am hungry AND I need a walk" if both of above are true', () => {
    pet.hunger = 6, pet.fitness = 2;
    pet.checkUp();
    expect(console.log('I am hungry AND I need a walk'));
  });
  it ('return "I feel great!" if neither of above are true', () => {
    pet.hunger = 2, pet.fitness = 8;
    pet.checkUp();
    expect(console.log('I feel great!'));
  });
});