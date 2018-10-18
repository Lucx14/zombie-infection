export function Npc(speed = 1) {
  this.x = Math.random() * 800;
  this.y = Math.random() * 600;
  this.w = 10;
  this.h = 10;
  this.speed = speed;
  this.zombie = false;
}

Npc.prototype.isInfected = function() {
  return this.zombie
};

Npc.prototype.infect = function() {
  this.zombie = true
};

Npc.prototype.isCollidingWith = function(otherNPC) {
  if (Math.abs(this.x - otherNPC.x) < 10 && 
      Math.abs(this.y - otherNPC.y) < 10) {
    return true
  } else {
    return false
  }
};

Npc.prototype.isNear = function(otherNPC) {
  if (Math.abs(this.x - otherNPC.x) < 25 && 
      Math.abs(this.y - otherNPC.y) < 25) {
    return true
  } else {
    return false
  } 
}

Npc.prototype.moveTowards = function(player) {
  if (this.x < player.x) {this.x += this.speed}
  if (this.x > player.x) {this.x -= this.speed}
  if (this.y < player.y) {this.y += this.speed}
  if (this.y > player.y) {this.y -= this.speed}
}

Npc.prototype.moveAwayFrom = function(character) {
  if (this.x < character.x) {this.x -= this.speed}
  if (this.x > character.x) {this.x += this.speed}
  if (this.y < character.y) {this.y -= this.speed}
  if (this.y > character.y) {this.y += this.speed}
}
