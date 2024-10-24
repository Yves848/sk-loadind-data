export const load = async (loadEvent) => {
  const {fetch, parent } = loadEvent;
  const title = "Featured products";
  const parentData = await parent();
  const {username} = parentData;
  const response = await fetch('http://localhost:4000/featured-products');
  const featuredProducts = await response.json();

  return {
    title,
    featuredProducts,
    username
  }
}