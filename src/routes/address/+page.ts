export const load = async (loadEvent) => {
  const {fetch}= loadEvent;
  const response = await fetch('api/postcodes');
  const postcodes = await response.json();
  const addressList = postcodes.map((postcode: { buildingName: any; line1: any; line2: any; }) => {
    return `${postcode.buildingName}, ${postcode.line1}, ${postcode.line2}`;
  });
  return {addressList}
}