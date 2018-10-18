import Player from "./Player.js"
import { Npc } from "./Npc.js"

export default function LocalGameModel(player = new Player(), npc = new Npc()) {
  this._player = player
  this._npc = new Npc()
  this._canvas = document.getElementById("canvas");
  this._canvas.width = 800;
  this._canvas.height = 600;
  this._canvasDraw = this._canvas.getContext("2d");
  this._WIDTH = this._canvas.width;
  this._HEIGHT = this._canvas.height;
  this._keys = []
  this.gameSpeed = 15
}

LocalGameModel.prototype.tickDraw = function () {
  setInterval(this._mainDraw.bind(this), this.gameSpeed);
  return "new frame"
}

LocalGameModel.prototype._mainDraw = function () {
  this._canvasDraw.clearRect(0, 0, this._WIDTH, this._HEIGHT);

  this._canvasDraw.fillStyle="red";
  this._canvasDraw.beginPath();
  this._canvasDraw.rect(this._player.x, this._player.y ,this._player.w , this._player.h);
  this._canvasDraw.fill();

  if (this._npc.zombie === true) {
    this._canvasDraw.fillStyle="green";
  } else {
    this._canvasDraw.fillStyle="black";
  }

  this._canvasDraw.beginPath();
  this._canvasDraw.rect(this._npc.x, this._npc.y ,this._npc.w , this._npc.h);
  this._canvasDraw.fill();

  this._npcMovement();
  this._playerMovement();
  return "main draw run"
}

LocalGameModel.prototype._npcMovement = function() {
  if ((this._npc.x >= this._player.x - 5 && this._npc.x <= this._player.x + 15) &&
      (this._npc.y >= this._player.y - 5 && this._npc.y <= this._player.y + 15)) {
    this._npc.zombie = true
  }

  if (this._npc.zombie === true) {
    if (this._npc.x < this._player.x) {this._npc.x += this._npc.speed}
    if (this._npc.x > this._player.x) {this._npc.x -= this._npc.speed}
    if (this._npc.y < this._player.y) {this._npc.y += this._npc.speed}
    if (this._npc.y > this._player.y) {this._npc.y -= this._npc.speed}
  }
}

LocalGameModel.prototype._playerMovement = function(e) {
  if (this._keys[87]) {
    if (this._player.y > 0) {
      this._player.y -= this._player.speed
    }
  }

  if (this._keys[83]) {
    if (this._player.y < this._HEIGHT - this._player.h) {
      this._player.y += this._player.speed
    }
  }

  if (this._keys[65]) {
    if (this._player.x > 0) {
      this._player.x -= this._player.speed
    }
  }

  if (this._keys[68]) {
    if (this._player.x < this._WIDTH - this._player.w) {
      this._player.x += this._player.speed
    }
  }

  return false;
};

LocalGameModel.prototype.eventListen = function() {
  this._canvas.addEventListener('keydown', function(e) { this._keys[e.keyCode] = true; }.bind(this));
  this._canvas.addEventListener('keyup', function(e) { this._keys[e.keyCode] = false; }.bind(this));
  return "keystroke listeners activated"
}
