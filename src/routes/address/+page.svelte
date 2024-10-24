<script>
  let address = '';
  export let data;
  const {addressList} = data;
</script>

<h1>Select your address</h1>

<select bind:value={address}>
  <option value="">Please select an address</option>
  {#each addressList as addr, i}
  <option value="{addr}">{addr}</option>
  {/each}
</select>