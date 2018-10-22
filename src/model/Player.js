export default function Player(speed = 2) {
  this.x = 395;
  this.y = 295;
  this.w = 10;
  this.h = 10;
  this.speed = speed;
}

Player.prototype.moveUp = function() {
  this.y -= this.speed
}
Player.prototype.moveDown = function() {
  this.y += this.speed
}
Player.prototype.moveLeft = function() {
  this.x -= this.speed
}
Player.prototype.moveRight = function() {
  this.x += this.speed
}

Player.prototype.isAtBoundary = function(width, height) {
  if (this.x < 0 ||
      this.y < 0 ||
      this.x + this.w > width ||
      this.y + this.h > height
    ) {
      return true
    } else {
      return false
    }
}

Player.prototype.moveFromBoundary = function(width, height) {
  if (this.x < 0) { this.x += this.speed }
  if (this.y < 0) { this.y += this.speed }
  if (this.x + this.w > width) { this.x -= this.speed }
  if (this.y + this.h > height) { this.y -= this.speed }
}
