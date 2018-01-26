// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = Math.floor((Math.random() * 200) + 100);;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x >= 505) {
       this.x =  0;
    }
    else {
      this.x = this.x + this.speed * dt;
    }
    // Enemy collaps with player
    if(this.x < player.x + 60 &&
       this.x + 40 > player.x &&
       this.y < player.y + 30 &&
       this.y + 40 > player.y) {
       player.reset();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function() {
// Player reach the weather
 if (this.y <= 0) {
      this.reset();
  }
};
// Draw the player on the screen, required method for the game.
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};
//Move the player according to keys pressed.
Player.prototype.handleInput = function(keyControl) {

   if(keyControl == 'left' && this.x > 0) {
      this.x -= 100;
   }
   if(keyControl == 'right' && this.x < 400) {
      this.x += 100;
   }
   if(keyControl == 'up' && this.y > 0) {
      this.y -= 83;
   }
   if(keyControl == 'down' && this.y < 400) {
      this.y += 83;
   }
};

Enemy.prototype.checkCollision = function() {
  if (this.y > 360) {
      this.y = 360;
  }
  if (this.x > 400) {
      this.x = 400;
  }
  if (this.x < 0) {
      this.x = 0;
  }
};


Player.prototype.reset = function() {
  this.x = 200;
  this.y = 360;
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy(0, 50);
var enemy2 = new Enemy(0, 140);
var enemy3 = new Enemy(0, 220);

var allEnemies = [enemy1, enemy2, enemy3];

var player = new Player(200, 360, 50);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
