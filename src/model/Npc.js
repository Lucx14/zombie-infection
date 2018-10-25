export function Npc(speed = 1, civilian = true) {
  this.x = Math.random() * 800;
  this.y = Math.random() * 600;
  this.w = 10;
  this.h = 10;
  this.hitPoints = 1;
  this.speed = speed;
  this.zombie = false;
  this.civilian = civilian;

  if (this.civilian) {
    this._people = [[document.getElementById("person1"), true],
                    [document.getElementById("person2"), true],
                    [document.getElementById("person3"), true],
                    [document.getElementById("person4"), true],
                    [document.getElementById("person5"), true]]
  } else {
    this._people = [[document.getElementById("army"), false],
                    [document.getElementById("police"), false]]
  }

  this.type = this._people[Math.floor(Math.random()*this._people.length)];
}

Npc.prototype.shoot = function() {
  if (Math.random() > 0.995) {
    return true
  } else {
    return false
  }
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
