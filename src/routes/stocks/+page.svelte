<script>
  import {invalidateAll} from '$app/navigation';
  export let data;
  function refresh() {
    invalidateAll();
  }
</script>


{#each data.stocks  as stock }
  <h2>{stock.symbol} - ${stock.price}</h2>
{/each}

<button on:click={refresh}>Refresh Stocks</button>