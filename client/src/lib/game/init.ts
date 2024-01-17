import kaboom from 'kaboom';
import initObjects from './objects';

export function initPongGame() {
  const k = kaboom({
    canvas: document.getElementById('pong-game') as HTMLCanvasElement,
    background: [0, 0, 0],
    global: false,
    width: 500,
    height: 500,
    debug: true,
    maxFPS: 60,
  });
  initObjects(k);
  return k;
}
