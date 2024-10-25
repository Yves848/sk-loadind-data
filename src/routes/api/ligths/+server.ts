export async function POST(requestEvent) {
  const {request} = requestEvent;
  const {mode} = await request.json()
  console.log(mode);
  const url = mode === "day" ? "day": "night"
  const response = await fetch(`http://192.168.50.201/${url}`,{
    method : "POST"
    // body: JSON.stringify({
    //   "mode":"day"
    // })
  });
  const postcodes = await response.json();
  return new Response("{}", { 
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function GET() {
  const response = await fetch('http://192.168.50.201/data');
  const data = await response.json();
  return new Response(JSON.stringify(data), { 
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}