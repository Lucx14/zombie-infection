import Player from "./Player.js"

export default function LocalGameModel() {
  this.player = new Player()
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
  this.playerMovement()
}

LocalGameModel.prototype.playerMovement = function() {
  if (this.keys[87]) {
    this.player.y --
  }
  if (this.keys[83]) {
    this.player.y ++
  }
  if (this.keys[65]) {
    this.player.x --
  }
  if (this.keys[68]) {
    this.player.x ++
  }
  return false;
};

LocalGameModel.prototype.eventListen = function() {
  this.canvas.addEventListener('keydown', function(e) { this.keys[e.keyCode] = true; }.bind(this));
  this.canvas.addEventListener('keyup', function(e) { this.keys[e.keyCode] = false; }.bind(this));
}
