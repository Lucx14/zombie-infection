import Player from "./Player.js"
import { Npc } from "./Npc.js"

export default function LocalGameModel(player = new Player(), npc = new Npc()) {
  this._player = player
  this._npc = npc
  this._canvas = document.getElementById("canvas");
  this._canvas.width = 800;
  this._canvas.height = 600;
  this._canvasDraw = this._canvas.getContext("2d");
  this._WIDTH = this._canvas.width;
  this._HEIGHT = this._canvas.height;
  this._keys = []
  this._groupNpc = Array.from({length:200}, () => new Npc(Math.random() * 2))
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

  const local = this
  this._groupNpc.forEach(function(npc) {
    if (npc.isInfected()) {
      local._canvasDraw.fillStyle="green";
    } else {
      local._canvasDraw.fillStyle="black";
    }
    local._canvasDraw.beginPath();
    local._canvasDraw.rect(npc.x, npc.y, npc.w, npc.h);
    local._canvasDraw.fill();
  })

  this._npcMovement();
  this._playerMovement();
  return "main draw run"
}

LocalGameModel.prototype._npcMovement = function() {
  const local = this

  this._groupNpc.forEach(function(npc) {
    if (npc.isCollidingWith(local._player)) {
      npc.infect()
    }

    if (!npc.isInfected()) {
      local._groupNpc.forEach(function(otherNpcs) {
        if (otherNpcs.isInfected() && npc.isCollidingWith(otherNpcs)) {
          npc.infect()
        }
      })
    }

    local._groupNpc.forEach((otherNpcs) => {
      if (npc.isCollidingWith(otherNpcs) &&
          npc !== otherNpcs) {
        npc.moveAwayFrom(otherNpcs)
      }
    })

    if (npc.isInfected() &&
       !npc.isCollidingWith(local._player)) {
      npc.moveTowards(local._player)
    }
  })
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
