export function Npc(speed = 1) {
  this.x = Math.random() * 800;
  this.y = Math.random() * 600;
  this.w = 10;
  this.h = 10;
  this.speed = speed;
  this.zombie = false;

  this._people = [this._army = document.getElementById("army"),
                  this._police = document.getElementById("police"),
                  this._person1 = document.getElementById("person1"),
                  this._person2 = document.getElementById("person2"),
                  this._person3 = document.getElementById("person3"),
                  this._person4 = document.getElementById("person4"),
                  this._person5 = document.getElementById("person5")]

  this.type = this._people[Math.floor(Math.random()*this._people.length)];
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
