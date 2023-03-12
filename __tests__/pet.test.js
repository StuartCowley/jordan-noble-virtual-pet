const Pet = require('../src/pet');

describe('constructor', () => {

  it('returns an object', () => {
    const pet = new Pet('Fido');
    expect(pet).toBeInstanceOf(Object);
  });
  it('sets the name property', () => {
    const pet = new Pet('Fido');
    expect(pet.name).toEqual('Fido');
  });
  it('has a initial age of 0', () => {
    const pet = new Pet('Fido');
    expect(pet.age).toEqual(0);
  });
});

describe('growUp', () => {

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');
    pet.age = 30;
    expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
  }); 
  it('increments the age by 1', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.age).toEqual(1);
  });
  it('increments hunger by 5', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });
  it('decrements fitness by 3', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  });
});

describe('walk', () => {

  it ('increases fitness by 4, without exceeding MAXIMUM_FITNESS', () => {
    const pet = new Pet('Fido');
    pet.fitness = 4;
    pet.walk();
    expect(pet.fitness).toEqual(8);
    pet.walk();
    expect(pet.fitness).toEqual(10);
  }); 
  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');
    pet.age = 30;
    expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
  }); 
});

describe('feed', () => {

  it ('decreases hunger, without being less than MINIMUM_HUNGER', () => {
    const pet = new Pet('Fido');
    pet.hunger = 5;
    pet.feed();
    expect(pet.hunger).toEqual(2);
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });
  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');
    pet.age = 30;
    expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
  });
});

describe('checkup', () => {
  it ('return "I need a walk" if fitness <= 3', () => {
    const pet = new Pet('Fido');
    pet.fitness = 3;
    pet.checkUp();
    expect(console.log('I need a walk'));
  });
  it ('return "I am hungry" if hunger >= 5', () => {
    const pet = new Pet('Fido');
    pet.hunger = 5;
    pet.checkUp();
    expect(console.log('I am hungry'));
  });
  it ('return "I am hungry AND I need a walk" if both of above are true', () => {
    const pet = new Pet('Fido');
    pet.hunger = 6, pet.fitness = 2;
    pet.checkUp();
    expect(console.log('I am hungry AND I need a walk'));
  });
  it ('return "I feel great!" if neither of above are true', () => {
    const pet = new Pet('Fido');
    pet.hunger = 2, pet.fitness = 8;
    pet.checkUp();
    expect(console.log('I feel great!'));
  });

describe('isAlive', () => {

  it ('return true if fitness > 0, hunger < 10, age < 30', () => {
    const pet = new Pet('Fido');
    pet.fitness = 0, pet.hunger = 10, pet.age = 30;
    expect(pet.isAlive).toBe(false);
    pet.fitness = 5, pet.hunger = 8, pet.age = 10;
    expect(pet.isAlive).toBe(true);
  });  

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');
    pet.age = 30;
    expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
  });
  });
});