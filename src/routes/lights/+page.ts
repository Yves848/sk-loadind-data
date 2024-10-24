export const load = async(loadEvent) => {
  const {fetch} = loadEvent;
  // const  response = await fetch('http://192.168.50.202/data',{
  //   mode: 'cors',
  //   headers: {
  //     "Content-type":"Application/json",
  //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  //     'Access-Control-Allow-Origin': '192.168.50.202',
  //     'Access-Control-Allow-Headers': '*'
  //   }
  // });
  const  response = await fetch('api/ligths',{
    // mode: 'cors',
    headers: {
      "content-type": "application/json"
    }
  });
  console.log(response);
  const lights = await response.json();
  return { lights }
}

