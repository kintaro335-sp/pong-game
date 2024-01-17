import { KaboomCtx } from 'kaboom';
import { initPlayer1 } from './player1';
import { initBall } from './ball';

export default function initObjects(k: KaboomCtx) {
  initPlayer1(k);
  initBall(k);
}
