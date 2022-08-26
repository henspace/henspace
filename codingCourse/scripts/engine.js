/** Engine to simplify use of Phaser 3 when teaching coding.
 * Modules aren't used so that the Engine can be used in testing playgrounds like JSFiddle.
 * To simplify code, all graphics are picked up from a single atlas.
 * 
 * The game is structured around 4 scenes, preload, start, game, and end.
 * The load scene is managed entirely by the engine. The other scenes use StartSceneBase, GameSceneBase
 * and EndScene base. These are intended to have their create and update methods overridden.
 * 
 * The GameEngine is instantiated as window.Game. It's start method should be call in the window.onload event
 * passing a number of parameters.
 */
const VERSION = "1.0.0";
const ASSETS_LOCATION = window.location.hostname == '127.0.0.1' ? './assets' : 'https://henspace.github.io/codingCourse/assets';
const ATLAS_KEY = 'atlas';

/** The main engine. This also contains some utility methods to get the dimensions of the screen.
 */
class GameEngine {
  /**
   * 
   * @param {*} config 
   */
  start(config) {
    this.config = config;

    let gameConfig = {
      version: VERSION,
      type:Phaser.AUTO,
      backgroundColor: '#000000',
      disableContextMenu: true,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: config.width,
        height: config.height, 
      },
      scene: [PreloadScene, StartScene],
      physics: {
        default: 'arcade',
        arcade:{
          gravity: {
            y: 200
          },
          debug: true
        }
      }
    }
    this.game = new Phaser.Game(gameConfig);
  }
  

  getTopLeft() {
    return {x: 0, y: 0 };
  }

  getTopRight() {
    return {x: this.config.width, y: 0};
  }

  getBottomLeft() {
    return {x: 0, y: this.config.height};
  }

  getBottomRight() {
    return {x: this.config.width, y: this.config.height};
  }

  getCenter() {
    return {x: this.config.width / 2, y: this.config.height / 2};
  }

  goToStartScene() {
    this.game.scene.start('start');
  }
  goToGameScene() {
    this.game.scene.start('game');
  }
  goToEndScene() {
    this.game.scene.start('end');
  }

  addBackgroundToScene(scene) {
    const graphics = scene.add.graphics();
    graphics.fillGradientStyle(this.config.backgroundColor.topLeft, this.config.backgroundColor.topRight,
      this.config.backgroundColor.bottomLeft, this.config.backgroundColor.bottomRight);
    graphics.fillRect(0, 0, this.config.width, this.config.height);
  }

}


class Scenery {
  scene;

  /** @type {Phaser.Physics.Arcade.Group} */
  group;
  constructor(scene) {
    this.scene = scene;
    this.group = scene.physics.add.group();

  }

  /**
   * Create an object and add
   * @param {{x: number, y:number, frame: string}} config 
   */
  addGameObject(config) {
    var gameObject = this.group.create(config.x, config.y, ATLAS_KEY, config.frame)
      .setScale(0.5).setImmovable(true)
    gameObject.body.allowGravity = false;  
  }
}


class Player extends Phaser.Physics.Arcade.Sprite {
  /**
   * Create the Player
   * @param {{scene: Phaser.Scene, x: number, y: number, frame: string}} config
   */
	constructor(config) {
    super(config.scene, config.x, config.y, ATLAS_KEY, config.frame);
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this).setScale(0.5);
  }
}


class PreloadScene extends Phaser.Scene {
  constructor() {
    super('preload');
  }

  create() {
    let center = Game.getCenter();
    this.load.multiatlas(ATLAS_KEY, `${ASSETS_LOCATION}/spaceshooter.json`, ASSETS_LOCATION);
    this.load.on('complete', () => {
      console.log("Load complete");
      this.scene.start('start');
    });
    this.load.start();
    return this.add.text(center.x, center.y, "LOADING... PLEASE WAIT", {
      fontFamily: "DynaPuff,'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize:'32px',
      color: '#ffffff',
      align: "center",
      wordWrap: {width: 200, useAdvancedWrap: false},
    }).setOrigin(0.5).setShadow(2, 2, "#000000", 2); 
    
  }    
}

class StartSceneBase extends Phaser.Scene {
  constructor() {
    super('start');
  }

	preload() {
  }

  create()
  {
    Game.addBackgroundToScene(this);
    this.scenery = new Scenery(this);
    
  }

}

class GameSceneBase extends Phaser.Scene {
  constructor() {
    super('start');
  }

	preload() {
  }

  create()
  {
    this.scenery = new Scenery(this);
  }

}

class EndSceneBase extends Phaser.Scene {
  constructor() {
    super('start');
  }

	preload() {
  }

  create()
  {
    this.scenery = new Scenery(this);
  }
}

window.Game = new GameEngine();








