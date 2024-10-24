import Product from './product.svelte';

export const load = async (loadEvent) => {
  console.log('load from page.ts');
  const notification = "End of season sale";
  const {data} = loadEvent;
  return {
    ...data,
    Component: Product,
    notification
  };
}