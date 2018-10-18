export function Npc(speed = 1) {
  this.x = Math.random() * 800;
  this.y = Math.random() * 600;
  this.w = 10;
  this.h = 10;
  this.speed = speed;
  this.zombie = false;
}
