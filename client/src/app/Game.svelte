<script>
  import { onMount } from 'svelte';
  import { initPongGame } from '../lib/game/init';

  onMount(() => {
    const k = initPongGame();
  });
</script>

<div>
  <canvas id="pong-game"></canvas>
</div>
