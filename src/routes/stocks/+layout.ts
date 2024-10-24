export const load = async (loadEvent) => {
  const {fetch} = loadEvent;
  const mostActiveStocksResponse = await fetch('http://localhost:4000/most-active-stock');
  const topGainingStocksResponse = await fetch('http://localhost:4000/top-gaining-stock');
  const topLosingStocksResponse = await fetch('http://localhost:4000/top-losing-stock');
  // const mostActiveStock = await mostActiveStocksResponse.json();
  // const topGainingStock = await topGainingStocksResponse.json();
  // const topLosingStock = await topLosingStocksResponse.json();

  return {
    mostActiveStock: await mostActiveStocksResponse.json(),
    topGainingStock: await topGainingStocksResponse.json(),
    topLosingStock: await topLosingStocksResponse.json()
  }
}