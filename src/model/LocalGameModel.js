import Player from "./Player.js"
import { Npc } from "./Npc.js"

export default function LocalGameModel(player = new Player(), npc = new Npc()) {
  this._player = player
  this._npc = npc
  this._zombieCount = 0

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
  this._groupNpc = Array.from({length:600}, () => new Npc(Math.random() * 2))
  this.gameSpeed = 15

  this._bloodsplats = []

  this._bg = document.getElementById("background")
  this._zombie = document.getElementById("zombie")
  this._bloodsplat = document.getElementById("bloodsplat")

  this._timeLimit = 30000
  this._endDate = new Date().getTime() + this._timeLimit
  this.gameEnd = false
}

LocalGameModel.prototype.tickDraw = function () {
  document.getElementById("canvas").focus();
  this.game = setInterval(this._mainDraw.bind(this), this.gameSpeed);
  return "new frame"
}

LocalGameModel.prototype._timeDraw = function() {
  var remainingTime = Math.round((this._endDate - new Date().getTime()) / 1000)
  document.getElementById("timer").innerHTML = `TIME: ${remainingTime}`
}

LocalGameModel.prototype._zombieCountDraw = function() {
  document.getElementById("zombie-count").innerHTML = `HORDE: ${this._zombieCount}`
}

LocalGameModel.prototype._localGameOver = function() {
  document.getElementById("local-game-over").innerHTML = `TIMES UP!`
  document.getElementById("end-message").innerHTML = 'HIT &ltSPACE&gt TO ENTER WORLD MAP'
  clearInterval(this.game);
}


LocalGameModel.prototype._timeUp = function() {
  if (this._timeRemaining() > 0) {
    return false
  } else {
    return true
  }
}

LocalGameModel.prototype._timeRemaining = function() {
  return this._endDate - new Date().getTime()
}

LocalGameModel.prototype._drawXYModify = function(canvas, imgFile, position, xModifier, yModifier, xWidth, yWidth) {
  canvas.drawImage(imgFile, position.x + xModifier, position.y + yModifier, xWidth, yWidth)
}

LocalGameModel.prototype._mainDraw = function () {
  if (this._timeUp()) { this._localGameOver(); }

  this._timeDraw()
  this._zombieCountDraw()
  const local = this

  this._underCanvasDraw.drawImage(this._bg, 0, 0)
  this._canvasDraw.clearRect(0, 0, this._WIDTH, this._HEIGHT)

  this._bloodsplats.forEach(function(bloodsplat) {
    local._drawXYModify(local._underCanvasDraw,
                        local._bloodsplat,
                        bloodsplat,
                        -5, 15, 30, 20)
  })

  this._groupNpc = this._groupNpc.sort(this._sortNpcs);

  this._setViewZoom(this._canvasDraw, this._player, [2,2])
  this._setViewZoom(this._underCanvasDraw, this._player, [2,2])

  this._canvasDraw.drawImage(this._zombie, this._player.x - 2.5, this._player.y - 12.5, 15, 25)

  this._groupNpc.forEach(function(npc) {
    local._drawXYModify(local._canvasDraw,
                        npc.isInfected() ? local._zombie : npc.type,
                        npc,
                        -2.5, -12.5, 15, 25)
  })

  this._npcMovement();
  this._playerMovement();

  return "main draw run"
}

LocalGameModel.prototype._setViewZoom = function(canvas, target, scale) {
  canvas.setTransform();
  canvas.translate(-target.x, -target.y);
  canvas.scale(scale[0],scale[1]);
}

LocalGameModel.prototype._npcMovement = function() {
  const local = this

  this._groupNpc.forEach(function(npc) {
    if ( npc.isNear(local._player, 10) && 
         !npc.isInfected() ) {
      npc.infect()
      local._zombieCount += 1
      local._bloodsplats.push({x: npc.x - 2.5, y: npc.y - 12.5})
    }

    // if (!npc.isInfected()) {
    //   local._groupNpc.forEach(function(otherNpcs) {
    //     if ( otherNpcs.isInfected() && 
    //          npc.isNear(otherNpcs, 10) && 
    //          !npc.isInfected() ) {
    //       npc.infect()
    //       local._zombieCount += 1
    //       local._bloodsplats.push({x: npc.x - 2.5, y: npc.y - 12.5})
    //     }
    //   })
    // }

    local._groupNpc.forEach((otherNpcs) => {
      if (!npc.isInfected()) {
        if ( npc.isNear(otherNpcs, 50) &&
             otherNpcs.isInfected() &&
             npc !== otherNpcs) {
          npc.move(otherNpcs, 'away')
        } else if (!otherNpcs.isInfected() &&
                    npc.isNear(otherNpcs, 15)) {
          npc.move(otherNpcs, 'away')
        } else if ( otherNpcs.isInfected() && 
                    npc.isNear(otherNpcs, 10) && 
                    !npc.isInfected() ) {
          npc.infect()
          local._zombieCount += 1
          local._bloodsplats.push({x: npc.x - 2.5, y: npc.y - 12.5})
        }
      } else if (npc.isInfected()) {
        if (otherNpcs.isInfected() &&
          npc.isNear(otherNpcs, 12)) {
          npc.move(otherNpcs, 'away')
        }
        else if (!otherNpcs.isInfected() &&
                    npc.isNear(otherNpcs, 10)) {
          npc.move(otherNpcs, 'towards')
        }
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
  if (this._keys[87] || this._keys[38]) {
    this._player.moveUp()
  }
  if (this._keys[83] || this._keys[40]) {
    this._player.moveDown()
  }
  if (this._keys[65] || this._keys[37]) {
    this._player.moveLeft()
  }
  if (this._keys[68] || this._keys[39]) {
    this._player.moveRight()
  }

}

LocalGameModel.prototype.eventListen = function() {
  this._canvas.addEventListener('keydown', function(e) { this._keys[e.keyCode] = true; e.preventDefault();}.bind(this));
  this._canvas.addEventListener('keyup', function(e) { this._keys[e.keyCode] = false; }.bind(this));
  // space to exit game listener
  this._canvas.addEventListener('keydown', function(e) { if (e.keyCode === 32 && this._timeUp()) { this.gameEnd = true }; e.preventDefault();}.bind(this));
  return "keystroke listeners activated"
}

// prevent NPCs being drawn on top of each other if one is in fron of the other
LocalGameModel.prototype._sortNpcs = function(a, b) {
  if (a.y < b.y)
    return -1;
  if (a.y > b.y)
    return 1;
}
