import {error} from '@sveltejs/kit';
export const load = async (serverLoadEvent) => {
  const {fetch, params, url, route } = serverLoadEvent;
  console.log({params, url, route: route.id});
  const {productId } = params;
  const title = "Product Detail";
  const notification = "End of season sale! 50% off!";
  const response = await fetch(`http://localhost:4000/products/${productId}`);
  console.log({response});
  if (response.status !== 200 ) {
    throw error(404, "Product not found");
  }
  const product = await response.json();
  return {
    title,
    product,
    notification
  };
}