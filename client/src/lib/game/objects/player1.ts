import { KaboomCtx } from 'kaboom';

export function initPlayer1(k: KaboomCtx) {
  // player primitive props

  //

  const player1 = k.add([
    k.pos(0, 0),
    k.area({ scale: 1, shape: new k.Rect(new k.Vec2(0, 0), 10, 70) }),
    k.rotate(0),
    k.rect(10, 70),
    k.pos(),
    'player1',
  ]);

  player1.onUpdate(() => {
    const mousepos = k.mousePos();
    if (mousepos.y + 30 > k.width()) {
      player1.pos = k.vec2(0, k.width() - 70);
      return;
    }
    if (mousepos.y < 35) {
      player1.pos = k.vec2(0, 0);
      return;
    }
    player1.pos = k.vec2(0, mousepos.y - 35);
  });

  return player1;
}
