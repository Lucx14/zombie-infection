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

  this._underCanvas = document.getElementById("underCanvas");
  this._underCanvas.width = 800;
  this._underCanvas.height = 600;
  this._underCanvasDraw = this._underCanvas.getContext("2d");

  this._keys = []
  this._groupNpc = Array.from({length:300}, () => new Npc(Math.random() * 2))
  this.gameSpeed = 15

  this._bloodsplats = []

  this._bg = document.getElementById("background")
  this._zombie = document.getElementById("zombie")
  this._bloodsplat = document.getElementById("bloodsplat")

}

LocalGameModel.prototype.tickDraw = function () {
  document.getElementById("canvas").focus();
  setInterval(this._mainDraw.bind(this), this.gameSpeed);
  return "new frame"
}

LocalGameModel.prototype._mainDraw = function () {
  const local = this

  this._underCanvasDraw.drawImage(this._bg, 0, 0)
  this._bloodsplats.forEach(function(bloodsplat) {
    local._underCanvasDraw.drawImage(local._bloodsplat, bloodsplat.x - 5, bloodsplat.y + 15, 30, 20)
  })

  this._canvasDraw.clearRect(0, 0, this._WIDTH, this._HEIGHT)

  this._groupNpc = this._groupNpc.sort(this._sortNpcs);

  this._canvasDraw.setTransform();
  this._canvasDraw.translate(-this._player.x, -this._player.y);
  this._canvasDraw.scale(2,2);

  this._underCanvasDraw.setTransform();
  this._underCanvasDraw.translate(-this._player.x, -this._player.y);
  this._underCanvasDraw.scale(2,2);

  this._canvasDraw.drawImage(this._zombie, this._player.x - 2.5, this._player.y - 12.5, 15, 25)

  this._groupNpc.forEach(function(npc) {
    if (npc.isInfected()) {
      local._canvasDraw.drawImage(local._zombie, npc.x - 2.5, npc.y - 12.5, 15, 25)
    } else {
      local._canvasDraw.drawImage(npc.type, npc.x - 2.5, npc.y - 12.5, 15, 25)
    }
  })

  this._npcMovement();
  this._playerMovement();

  return "main draw run"
}

LocalGameModel.prototype._npcMovement = function() {
  const local = this

  this._groupNpc.forEach(function(npc) {
    if (npc.isNear(local._player, 10) && !npc.isInfected()) {
      npc.infect()
      local._bloodsplats.push({x: npc.x - 2.5, y: npc.y - 12.5})
    }

    if (!npc.isInfected()) {
      local._groupNpc.forEach(function(otherNpcs) {
        if (otherNpcs.isInfected() && npc.isNear(otherNpcs, 10)) {
          npc.infect()
          local._bloodsplats.push({x: npc.x - 2.5, y: npc.y - 12.5})
        }
      })
    }

    local._groupNpc.forEach((otherNpcs) => {
      if (!npc.isInfected()) {
        if ( npc.isNear(otherNpcs, 50) &&
             otherNpcs.isInfected() &&
             npc !== otherNpcs) {
          npc.move(otherNpcs, 'away')
        } else if (!otherNpcs.isInfected() &&
                    npc.isNear(otherNpcs, 15)) {
          npc.move(otherNpcs, 'away')
        }
      } else if (npc.isInfected()) {
        if (otherNpcs.isInfected() &&
          npc.isNear(otherNpcs, 12)) {
          npc.move(otherNpcs, 'away')
        }
        // else if (!otherNpcs.isInfected() &&
        //             npc.isNear(otherNpcs, 30)) {
        //   npc.move(otherNpcs, 'towards')
        // }
      }
    })

    if (npc.isInfected() &&
       !npc.isNear(local._player, 10)) {
      npc.move(local._player, 'towards')
    }
  })
}

LocalGameModel.prototype._playerMovement = function() {
  if (this._player.isAtBoundary(this._WIDTH, this._HEIGHT)) {
    this._player.moveFromBoundary(this._WIDTH, this._HEIGHT)
  }
  if (this._keys[87]) {
    this._player.y -= this._player.speed
  }
  if (this._keys[83]) {
    this._player.y += this._player.speed
  }
  if (this._keys[65]) {
    this._player.x -= this._player.speed
  }
  if (this._keys[68]) {
    this._player.x += this._player.speed
  }
}

LocalGameModel.prototype.eventListen = function() {
  this._canvas.addEventListener('keydown', function(e) { this._keys[e.keyCode] = true; }.bind(this));
  this._canvas.addEventListener('keyup', function(e) { this._keys[e.keyCode] = false; }.bind(this));
  return "keystroke listeners activated"
}

// prevent NPCs being drawn on top of each other if one is in fron of the other
LocalGameModel.prototype._sortNpcs = function(a, b) {
  if (a.y < b.y)
    return -1;
  if (a.y > b.y)
    return 1;
  return 0;
}
