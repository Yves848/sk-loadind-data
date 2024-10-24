export const load = async (loadEvent) => {
  const {fetch} = loadEvent;
  console.log('home page universal load function calles');
  const response = await fetch('/api/current-time');
  const currentTime = await response.text();
  return { currentTime };
}

export const prerender = true;