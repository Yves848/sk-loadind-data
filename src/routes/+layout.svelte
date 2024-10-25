<script>
  import {page} from '$app/stores';
  import Lights from "../components/lights/lights.svelte";
  export let data;
  const {username} = data;
</script>

<svelte:head>
<title>{$page.data.title || 'Aquadash'}</title>
</svelte:head>

{#if $page.data.notification}
<p>{$page.data.notification}</p>
{/if}
<div>Welcome, {username}</div>
<Lights></Lights>
<slot/>