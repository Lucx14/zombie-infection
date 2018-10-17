import { Player } from "./Player.js"

export default function LocalGameModel(player = new Player()) {
  this._player = player
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
}

LocalGameModel.prototype._mainDraw = function () {
  this._canvasDraw.clearRect(0, 0, this._WIDTH, this._HEIGHT);
  this._canvasDraw.fillStyle="red";
  this._canvasDraw.beginPath();
  this._canvasDraw.rect(this._player.x, this._player.y ,this._player.w , this._player.h);
  this._canvasDraw.fill();
  this._playerMovement()
}

LocalGameModel.prototype._playerMovement = function(e) {
  if (this._keys[87]) {
    this._player.y --
  }
  if (this._keys[83]) {
    this._player.y ++
  }
  if (this._keys[65]) {
    this._player.x --
  }
  if (this._keys[68]) {
    this._player.x ++
  }
  return false;
};

LocalGameModel.prototype.eventListen = function() {
  this._canvas.addEventListener('keydown', function(e) { this._keys[e.keyCode] = true; }.bind(this));
  this._canvas.addEventListener('keyup', function(e) { this._keys[e.keyCode] = false; }.bind(this));
}
