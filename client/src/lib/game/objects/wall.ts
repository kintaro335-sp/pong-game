import { KaboomCtx } from 'kaboom';

export function addWall(
  k: KaboomCtx,
  opcs = { width: 1, height: 1, pos: { x: 0, y: 0 } },
) {
  const wall = k.add([
    'wall',
    k.pos(opcs.pos.x, opcs.pos.y),
    k.rect(opcs.width, opcs.height),
    k.area({
      scale: 1,
      shape: new k.Rect(new k.Vec2(0, 0), opcs.width, opcs.height),
    }),
  ]);
  return wall;
}
