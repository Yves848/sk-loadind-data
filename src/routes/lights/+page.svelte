<script lang="ts">
  export let data;
  const {lights} = data;

  let day = lights.day;
  let night = lights.night;

  interface iLight {
    day: string
    night : string
  }

  const handleLights = async (mode: boolean) : Promise<void>=> {
    const response = await fetch('api/ligths',{
      method: "POST",
      body: JSON.stringify({
      "mode": (mode ? "day" : "night")
    })
    });
    
    console.log(`Satus : ${response.status}`);

    const  res = await fetch('api/ligths',{
    // mode: 'cors',
    headers: {
      "content-type": "application/json"
    }
  });
  console.log(response);
  const lights = await res.json();
  day = lights.day;
  night = lights.night;
  }
</script>

<p>day : {day} - night : {night}</p>

<button on:click={() => handleLights(true)}>Day</button>
<button on:click={() => handleLights(false)}>Night</button>