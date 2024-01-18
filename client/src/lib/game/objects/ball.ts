import { KaboomCtx } from 'kaboom';

export function initBall(k: KaboomCtx) {
  // ball primitive props
  const initialPosition = { x: k.width() / 2, y: k.height() / 2 };

  // attributes

  const ball = k.add([
    'ball',
    k.pos(initialPosition.x, initialPosition.y),
    k.rect(15, 15),
    k.area({ scale: 1, shape: new k.Rect(new k.Vec2(0, 0), 15, 15) }),
    {
      trajectory: -25,
      speed: 50,
    },
  ]);

  ball.onUpdate(() => {
    const { trajectory, speed } = ball;
    ball.trajectory = trajectory > 360 ? trajectory - 360 : trajectory;
    ball.trajectory = trajectory < -360 ? trajectory + 360 : trajectory;
    const radians = (ball.trajectory - 90) * (Math.PI / 180);
    const vel_x = Math.cos(radians) * speed;
    const vel_y = Math.sin(radians) * speed;
    ball.move(vel_x, vel_y);
  });

  ball.onCollide('player1', (player1) => {
    const b_y = ball.pos.y;
    const p_y = player1.pos.y - 35;
    const deviation = ((p_y - b_y) / 35) * 175;
    ball.trajectory = deviation + 90;
  });

  ball.onCollide('player2', (player2) => {
    const b_y = ball.pos.y;
    const p_y = player2.pos.y - 35;
    const deviation = ((p_y - b_y) / 35) * 175;
    ball.trajectory = deviation + 90;
  });
  ball.onCollide('wall', () => {
    ball.trajectory *= -1;
    ball.trajectory += 180;
  });

  return ball;
}
