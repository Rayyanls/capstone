var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["086f9dd3-e3ff-4199-8913-6ccf527cc2e4","421546b2-5890-4cb5-b334-0011cb874603","2d9dd936-3d36-41fe-b439-8c9eac72da90","4eb964af-ad73-4f72-83cb-19c0589b0898","cd570c2f-91f2-4198-876e-35567e6d3929"],"propsByKey":{"086f9dd3-e3ff-4199-8913-6ccf527cc2e4":{"name":"ufo_1","sourceUrl":null,"frameSize":{"x":386,"y":267},"frameCount":1,"looping":true,"frameDelay":10,"version":"QqrvXsPLP64iFDfWuNiHYjZQUtRVPTEV","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":267},"rootRelativePath":"assets/086f9dd3-e3ff-4199-8913-6ccf527cc2e4.png"},"421546b2-5890-4cb5-b334-0011cb874603":{"name":"planet11_1","sourceUrl":"assets/api/v1/animation-library/gamelab/uftJeLVlYsshEVa.ZLjPHV89eW8YxbCZ/category_icons/planet11.png","frameSize":{"x":396,"y":362},"frameCount":1,"looping":true,"frameDelay":2,"version":"uftJeLVlYsshEVa.ZLjPHV89eW8YxbCZ","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":362},"rootRelativePath":"assets/api/v1/animation-library/gamelab/uftJeLVlYsshEVa.ZLjPHV89eW8YxbCZ/category_icons/planet11.png"},"2d9dd936-3d36-41fe-b439-8c9eac72da90":{"name":"planet04_1","sourceUrl":"assets/api/v1/animation-library/gamelab/MNXTe9Vzbt4fPkzUHwmt2Pbzfo4_Gw07/category_icons/planet04.png","frameSize":{"x":400,"y":366},"frameCount":1,"looping":true,"frameDelay":2,"version":"MNXTe9Vzbt4fPkzUHwmt2Pbzfo4_Gw07","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":366},"rootRelativePath":"assets/api/v1/animation-library/gamelab/MNXTe9Vzbt4fPkzUHwmt2Pbzfo4_Gw07/category_icons/planet04.png"},"4eb964af-ad73-4f72-83cb-19c0589b0898":{"name":"astronaut_1","sourceUrl":"assets/api/v1/animation-library/gamelab/C07UkVmsjiLCWoQ9U_vl1e7INpeSMmE_/category_icons/astronaut.png","frameSize":{"x":328,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"C07UkVmsjiLCWoQ9U_vl1e7INpeSMmE_","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":328,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/C07UkVmsjiLCWoQ9U_vl1e7INpeSMmE_/category_icons/astronaut.png"},"cd570c2f-91f2-4198-876e-35567e6d3929":{"name":"planet13_1","sourceUrl":"assets/api/v1/animation-library/gamelab/bkSmyTgb1jqA3TCS_I3VopIhBEXY4Jm1/category_icons/planet13.png","frameSize":{"x":400,"y":260},"frameCount":1,"looping":true,"frameDelay":2,"version":"bkSmyTgb1jqA3TCS_I3VopIhBEXY4Jm1","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":260},"rootRelativePath":"assets/api/v1/animation-library/gamelab/bkSmyTgb1jqA3TCS_I3VopIhBEXY4Jm1/category_icons/planet13.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var spaceship = createSprite(40,80,5,5)
var planet1 = createSprite(170,80,5,5)
var planet2 = createSprite(255,200,5,5)
var star1 = createSprite(50,200,5,5)
var star2 = createSprite(300,100,5,5)
var star3 = createSprite(60,300,5,5)
var star4 = createSprite(150,200,5,5)
var star5 = createSprite(260,300,5,5)
var star6 = createSprite(150,350,5,5)
var star7 = createSprite(150,270,5,5)
var star8 = createSprite(350,200,5,5)
var star9 = createSprite(100,130,5,5)
var star10 = createSprite(40,30,5,5)
var star11 = createSprite(120,35,5,5)
var star12 = createSprite(240,30,5,5)
var star13 = createSprite(240,100,5,5)
var star14 = createSprite(370,30,5,5)
var star15 = createSprite(370,300,5,5)
var star16 = createSprite(310,350,5,5)
var end = createSprite(395,200,10,100)
var spaceman = createSprite(320,300,20,20)
var planet3 = createSprite(340,40,20,20)

end.shapeColor="yellow"
planet3.setAnimation("planet13_1")
planet3.scale=0.2
spaceman.setAnimation("astronaut_1")
spaceman.scale=0.1
spaceship.setAnimation("ufo_1");
spaceship.scale=0.1
planet1.setAnimation("planet11_1")
planet1.scale=0.1
planet2.setAnimation("planet04_1")
planet2.scale=0.1
 
 planet1.velocityY=(0,10);
 planet2.velocityY=(0,-10);

playSound("https://audio.code.org/start2.mp3", false);




function draw() {
  background("black")
 createEdgeSprites();
 planet1.bounceOff(edges);
 planet2.bounceOff(edges);
 spaceship.bounce(edges)
 spaceship.bounce(planet3)
 spaceship.bounce(spaceman)
 
 if(keyDown(UP_ARROW)){
  spaceship.y=spaceship.y-6
}
if(keyDown(DOWN_ARROW)){
  spaceship.y=spaceship.y+6
}

if(keyDown(LEFT_ARROW)){
  spaceship.x=spaceship.x-6
}

if(keyDown(RIGHT_ARROW)){
  spaceship.x=spaceship.x+6
}

if(spaceship.isTouching(planet1)||spaceship.isTouching(planet2)){
  spaceship.x=40
  spaceship.y=80
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
}
if(spaceship.isTouching(end)){
 spaceship.x=40
  spaceship.y=80
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
}
textSize(20);
fill("white");
text("Start",20,40);

textSize(20);
fill("white");
text("End",350,150);

drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
