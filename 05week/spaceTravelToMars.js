'use strict';

let assert = require('assert');

let jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// create a class named CrewMember that takes in the 3 arguments and sets
// a fourth property called ship to Null
class CrewMember {
  constructor(name, job, specialSkill){
    this.name = name;
    this.job = job;
    this.specialSkill = specialSkill;
    this.ship = null;
  }
  // the enterShip method when called sets a ship to the crewmember it is called
  // on and pushes that crewmember to the empty crew array of that pertaining to
  // that Ship.
  enterShip(shipObjectInstance){
    this.ship = shipObjectInstance
    shipObjectInstance.crew.push(this)
  }
}

// create a class named Ship that takes in the 3 arguments and sets
// a fourth property called crew equal to an empty array
class Ship {
  constructor(name, type, ability){
    this.name = name;
    this.type = type;
    this.ability = ability;
    this.crew = [];
  }
  // the mission statement methond when called evaluates if the ship it is called
  // on contains a crewmember in its crew array, if so it returns the ability of
  // that ship, else it returns the string "Can't perform a mission yet."
  missionStatement(){
    if(this.crew.length){
      return this.ability
    }else {
      return "Can't perform a mission yet."
    }
  }
}

 //tests
if (typeof describe === 'function'){
  describe('CrewMember', function(){
    it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
      var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });

    it('can enter a ship', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });

  describe('Ship', function(){
    it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });

    it('can return a mission statement correctly', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}
