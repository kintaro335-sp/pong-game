<script>
// components
import Game from "./app/Game.svelte";
import MainMenu from "./app/MainMenu.svelte";
// store
import { location } from './lib/storage/store';

</script>
<div>
  {#if $location === 'main'}
    <MainMenu />
  {/if}
  {#if $location === 'game'}
    <Game />
  {/if}
</div>
