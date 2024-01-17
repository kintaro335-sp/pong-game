<script>
// components
import Game from "./app/Game.svelte";
// store
import { location } from './lib/storage/store';

</script>
<div>
  {#if $location === 'game'}
    <Game />
  {/if}
</div>
