<script>
  export let data;
  const products = data.products;
  const Component = data.Component;
</script>
<h1>{data.title}</h1>
{#each products as product (product.id)}
<div>
  <Component {product}></Component>
</div>
{/each}