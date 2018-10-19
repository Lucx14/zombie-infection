import { Npc } from '../../model/Npc.js';

describe('Npc', () => {
  
  var npc;
  var otherNpc;

  beforeEach(() => {
    npc = new Npc();
    otherNpc = new Npc();
  });
  
  describe('.isInfected', () => {
    describe('when NPC is infected', () => {
      it('returns true', () => {
        npc.zombie = true;
        expect(npc.isInfected()).toEqual(true);
      });
    });
    describe('when NPC is not infected', () => {
      it('returns false', () => {
        expect(npc.isInfected()).toEqual(false);
      });
    });

  });

  describe('.infect', () => {
    it('changes zombie state to true', () => {
      npc.infect();
      expect(npc.zombie).toEqual(true);
    });
  });

  describe('.isNear', () => {
    beforeEach(() => {
      otherNpc.x = npc.x
      otherNpc.y = npc.y
    })

    describe('when another npc is in proximity', () => {
      it('returns true', () => {
        expect(npc.isNear(otherNpc, 10)).toEqual(true)
      })
    })
  });

  describe('.move', () => {
    describe("when passed the argument 'towards'", () => {
      it('moves npc towards the target', () => {
        npc.x = otherNpc.x - 20
        npc.move(otherNpc, 'towards')
        expect(npc.x).toEqual(otherNpc.x - 20 + npc.speed)
      })
    })

    describe("when passed the argument 'away'", () => {
      it('moves npc away from the target', () => {
        npc.x = otherNpc.x - 20
        npc.move(otherNpc, 'away')
        expect(npc.x).toEqual(otherNpc.x - 20 - npc.speed)
      })
    })
  });
});
