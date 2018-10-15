import { Tamagotchi } from '../src/tama.js';

describe("Tamagotchi", function(){
  it('should identify a Tamagotchi class',function(){
    let tama = new Tamagotchi("Tama");
    expect(tama.name).toEqual("Tama");
    expect(tama.hunger).toEqual(100);
    expect(tama.energy).toEqual(100);
    expect(tama.attention).toEqual(100);
  });
});

describe("Tamagotchi", function(){
  it('should check if the Tamagotchi is dead depending on hunger', function(){
    let tama = new Tamagotchi("Tama");
    tama.hunger = 0;
    let check = tama.CheckDead();
    expect(check).toEqual(true);
  });
});

describe("Tamagotchi", function(){
  it('should check if the Tamagotchi is dead depending on energy', function(){
    let tama = new Tamagotchi("Tama");
    tama.energy = 0;
    expect(tama.CheckDead()).toEqual(true);
  });
});

describe("Tamagotchi", function(){
  it('should check if the Tamagotchi is dead depending on attention', function(){
    let tama = new Tamagotchi("Tama");
    tama.attention = 0;
    expect(tama.CheckDead()).toEqual(true);
  });
});

describe("Tamagotchi", function(){
  it('should check if the Tamagotchi hunger level is over 100', function(){
    let tama = new Tamagotchi("Tama");
    
    this.hunger=101;

    tama.CheckOver();
    expect(tama.hunger).toEqual(100);

  });
});

// describe("Tamagotchi", function(){
//   it('should check if the Tamagotchi energy level is over 100', function(){

//   });
// });

// describe("Tamagotchi", function(){
//   it('should check if the Tamagotchi attention level is over 100', function(){

//   });
// });


// describe("Tamagotchi", function(){
//   it('should check if the Passtime() method passes time and decreases properly', function(){

//   });
// });


// describe("Tamagotchi", function(){
//   it('should check if the Play(() method adds proper values', function(){

//   });
// });


// describe("Tamagotchi", function(){
//   it('should check if the Feed(() method adds proper values', function(){

//   });
// });



