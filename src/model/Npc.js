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

Npc.prototype.isNear = function(otherNPC, proximity) {
  if (Math.abs(this.x - otherNPC.x) < proximity && 
      Math.abs(this.y - otherNPC.y) < proximity) {
    return true
  } else {
    return false
  } 
}

Npc.prototype.move = function(target, direction) {
  if (direction === 'towards') {
    this._moveTowards(target)
  } else if (direction === 'away') {
    this._moveAwayFrom(target)
  }
}

Npc.prototype._moveTowards = function(target) {
  if (this.x < target.x) {this.x += this.speed}
  if (this.x > target.x) {this.x -= this.speed}
  if (this.y < target.y) {this.y += this.speed}
  if (this.y > target.y) {this.y -= this.speed}
}

Npc.prototype._moveAwayFrom = function(target) {
  if (this.x < target.x) {this.x -= this.speed}
  if (this.x > target.x) {this.x += this.speed}
  if (this.y < target.y) {this.y -= this.speed}
  if (this.y > target.y) {this.y += this.speed}
}
