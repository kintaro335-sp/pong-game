import { KaboomCtx } from 'kaboom';
import { initPlayer1 } from './player1';
import { initBall } from './ball';
import { addWall } from './wall';

export default function initObjects(k: KaboomCtx) {
  initPlayer1(k);
  initBall(k);
  addWall(k, { width: k.width(), height: 1, pos: { x: 0, y: 0 } });
  addWall(k, {
    width: k.width(),
    height: 1,
    pos: { x: 0, y: k.height() },
  });
}
