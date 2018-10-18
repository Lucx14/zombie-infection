import { Player } from "./Player.js"
import { Npc } from "./Npc.js"

export default function LocalGameModel() {
  this.player = new Player()
  this.npc = new Npc()
  this.canvas = document.getElementById("canvas");
  this.canvas.width = 800;
  this.canvas.height = 600;
  this.canvasDraw = this.canvas.getContext("2d");
  this.WIDTH = this.canvas.width;
  this.HEIGHT = this.canvas.height;
  this.keys = []
  this.gameSpeed = 15
}

LocalGameModel.prototype.tickDraw = function () {
  setInterval(this.mainDraw.bind(this), this.gameSpeed);
}

LocalGameModel.prototype.mainDraw = function () {
  this.canvasDraw.clearRect(0, 0, this.WIDTH, this.HEIGHT);

  this.canvasDraw.fillStyle="red";
  this.canvasDraw.beginPath();
  this.canvasDraw.rect(this.player.x, this.player.y ,this.player.w , this.player.h);
  this.canvasDraw.fill();

  if (this.npc.zombie === true) {
    this.canvasDraw.fillStyle="green";
  } else {
    this.canvasDraw.fillStyle="black";
  }

  this.canvasDraw.beginPath();
  this.canvasDraw.rect(this.npc.x, this.npc.y ,this.npc.w , this.npc.h);
  this.canvasDraw.fill();

  this.npcMovement();
  this.playerMovement();
}

LocalGameModel.prototype.npcMovement = function() {
  if ((this.npc.x >= this.player.x - 5 && this.npc.x <= this.player.x + 15) &&
      (this.npc.y >= this.player.y - 5 && this.npc.y <= this.player.y + 15)) {
    this.npc.zombie = true
  }

  if (this.npc.zombie === true) {
    if (this.npc.x < this.player.x) {this.npc.x ++}
    if (this.npc.x > this.player.x) {this.npc.x --}
    if (this.npc.y < this.player.y) {this.npc.y ++}
    if (this.npc.y > this.player.y) {this.npc.y --}
  }
}

LocalGameModel.prototype.playerMovement = function(e) {
  if (this.keys[87]) {
    if (this.player.y > 0) {
      this.player.y -= 2
    }
  }

  if (this.keys[83]) {
    if (this.player.y < this.HEIGHT - this.player.h) {
      this.player.y += 2
    }
  }

  if (this.keys[65]) {
    if (this.player.x > 0) {
      this.player.x -= 2
    }
  }

  if (this.keys[68]) {
    if (this.player.x < this.WIDTH - this.player.w) {
      this.player.x += 2
    }
  }

  return false;
};

LocalGameModel.prototype.eventListen = function() {
  this.canvas.addEventListener('keydown', function(e) { this.keys[e.keyCode] = true; }.bind(this));
  this.canvas.addEventListener('keyup', function(e) { this.keys[e.keyCode] = false; }.bind(this));
}
