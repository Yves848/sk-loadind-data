<script>
  import { goto, preloadData } from '$app/navigation';
  export let data;
</script>
<h1 class="tall">Welcome to SvelteKit @ {data.currentTime}</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<a href="/products" data-sveltekit-preload-code="hover">Products</a>

<button 
  on:mouseover={async () =>{
    await preloadData('/products');
  }}
  on:focus={async () =>{
    await preloadData('/products');
  }}
  on:click={
  () => goto('/products')
}>Go to products</button>

<style>
  /* .tall { 
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  } */
</style>