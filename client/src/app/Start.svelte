<script>
  import { userName, location } from '../lib/storage/store';
  let userNameT = '';

  const startClient = () => {
    userName.set(userNameT);
    location.set('main');
  };
</script>

<div>
  <input bind:value={userNameT} />
  <button on:click={startClient}> Iniciar </button>
</div>

<style>
  input {
    margin: 0;
    padding: 0;
  }
</style>
