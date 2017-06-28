// Enemies our player must avoid
var hspeed=200;
var lspeed=100;
var score=0;
var Enemy=function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x=x;
    this.y=y;
    this.speed=this.speed();
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update=function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x<500)
    {
      this.x=this.x+this.speed*dt;
    }
    else
    {
      this.x=-100;
    }
};
Enemy.prototype.speed=function()
{
  return Math.abs(Math.floor(Math.random()*(hspeed-lspeed+1)+lspeed));
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render=function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player=function(x,y) {
  this.sprite = 'images/char-boy.png';
  this.x=x;
  this.y=y;
};
Player.prototype.update=function()
{
  for (i=0;i<3;i++)
  {
          if ((this.x+55>allEnemies[i].x) && (this.x<allEnemies[i].x+55) && (this.y+55>allEnemies[i].y) && (this.y<allEnemies[i].y+55))
          {
              this.reset(100,435);
              alert("FINAL SCORE IS "+" "+ score);
              score=0;
          }
      }
}
Player.prototype.handleInput=function(keycode)
{
  if(keycode=='up')
  {
    if(this.y>50)
    {
      this.y=this.y-85;
    }
    else
    {
      this.reset(this.x,this.y);
      score++;
    }
  }
  else if(keycode=='down')
  {
    if(this.y<435)
    {
      this.y=this.y+85;
    }
  }
  else if(keycode=='right')
  {
    if(this.x<400)
    {
      this.x=this.x+100;
    }
  }
  else if(keycode=='left')
  {
    if(this.x>0)
    {
      this.x=this.x-100;
    }
  }
}
Player.prototype.reset=function(x,y)
{
  this.x=x;
  this.y=435;
}
Player.prototype.render=function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [
    new Enemy(0, 60),
    new Enemy(0, 140),
    new Enemy(0, 210)
];
// Place the player object in a variable called player
var player = new Player(100,435);
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
