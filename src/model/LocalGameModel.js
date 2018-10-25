import Player from "./Player.js"
import { Npc } from "./Npc.js"
import SoundEffects from "./SoundEffects"

export default function LocalGameModel(speedBonus,
                                       resBonus,
                                       aggrBonus,
                                       player = new Player(),
                                       npc = new Npc(),
                                       soundEffects = new SoundEffects()) {
  this._player = player
  this._npc = npc
  this._soundEffects = soundEffects
  this._zombieCount = 0
  this.gameSpeed = 15
  this.speedBonus = speedBonus /40
  this.resBonus = resBonus /6
  this.aggrBonus = aggrBonus /5

  this._player.speed = 2 + this.speedBonus
  this._player.hitPoints = 1 + this.resBonus

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

  this._civilians = Array.from({length:200}, () => new Npc(Math.random() * 2))
  this._nonCivilians = Array.from({length:25}, () => new Npc(Math.random() * 2, false))
  this._groupNpc = this._civilians.concat(this._nonCivilians)

  this._keys = []
  this._groupNpc = this._civilians.concat(this._nonCivilians)
  this.gameSpeed = 15

  this._bloodsplats = []
  this._deadZombies = []

  var levels = [document.getElementById("level1"), document.getElementById("level2"),
                document.getElementById("level3"), document.getElementById("level4")]

  this._bg = levels[Math.floor(Math.random()*levels.length)];
  this._zombie = document.getElementById("zombie")
  this._playerZombie = document.getElementById("player-zombie")
  this._zombieDead = document.getElementById("zombie-dead")
  this._bloodsplat = document.getElementById("bloodsplat")

  this._timeLimit = 45000
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
  if (this._timeRemaining() < 15000 && this._timeRemaining() > 14500) {
    this._soundEffects.endLevel()
  }

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

  this._deadZombies.forEach(function(deadZombie) {
    local._drawXYModify(local._underCanvasDraw,
                        local._zombieDead,
                        deadZombie,
                        -5, 15, 30, 20)
  })

  this._groupNpc = this._groupNpc.sort(this._sortNpcs);

  this._setViewZoom(this._canvasDraw, this._player, [2,2])
  this._setViewZoom(this._underCanvasDraw, this._player, [2,2])

  this._canvasDraw.drawImage(this._playerZombie, this._player.x - 2.5, this._player.y - 12.5, 15, 25)

  this._groupNpc.forEach(function(npc) {
    local._drawXYModify(local._canvasDraw,
                        npc.isInfected() ? local._zombie : npc.type[0],
                        npc,
                        -2.5, -12.5, 15, 25)
  })

  this._npcMovement();
  this._playerMovement();

  return "main draw run"
}

LocalGameModel.prototype._setViewZoom = function(canvas, target, scale) {
  canvas.resetTransform();
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
      local._soundEffects.zombieBite()
      local._soundEffects.scream()
    }

    local._groupNpc.forEach((otherNpcs) => {
      var index = local._groupNpc.indexOf(otherNpcs)

      if (!npc.isInfected()) {

        if (npc.isNear(otherNpcs, 50) &&
             otherNpcs.isInfected() &&
             npc !== otherNpcs) {
          npc.move(otherNpcs, 'away')
          if (!npc.type[1]) {
            if (npc.shoot()) {
              local.bulletRender(npc.x, npc.y, otherNpcs.x, otherNpcs.y)
              otherNpcs.hitPoints -= (Math.random() + 1)
              local._soundEffects.gunShot();
              if (otherNpcs.hitPoints <= 0) {
                local._groupNpc.splice(index, 1)
                local._deadZombies.push({x: otherNpcs.x - 2.5, y: otherNpcs.y - 12.5})
                local._zombieCount -= 1
              }
            }
          }

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
                 npc.isNear(otherNpcs, 10 + local.aggrBonus)) {
          npc.move(otherNpcs, 'towards')
          if (npc.isNear(otherNpcs, 10)) {
            otherNpcs.infect()
            local._zombieCount += 1
          }
        }
      }
    })

    if (npc.isInfected() &&
       !npc.isNear(local._player, 10)) {
      npc.move(local._player, 'towards')
    }
  })
}

LocalGameModel.prototype.bulletRender = function(shooterX, shooterY, targetX, targetY) {
  this._canvasDraw.beginPath();
  this._canvasDraw.moveTo(shooterX, shooterY);
  this._canvasDraw.lineTo(targetX, targetY);
  this._canvasDraw.stroke()
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
