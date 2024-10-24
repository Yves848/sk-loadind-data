export const load = async (loadEvent) => {
  const {fetch, depends } = loadEvent;
  depends("stocks:actively-trading");
  const response = await fetch('http://localhost:4000/stocks');


  return {
    stocks: await response.json()
  }
}