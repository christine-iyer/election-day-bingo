const axios = require("axios"); // Import axios if using Node.js

const addresses = [
  "16 Abaco Drive Cape Elizabeth, ME 04107",
  "10 Abaco Drive Cape Elizabeth, ME 04107",
  "2 Abaco Drive Cape Elizabeth, ME 04107",
  "7 Abaco Drive Cape Elizabeth, ME 04107",
];

// Define the API key before using it
const apiKey = "YOUR_REAL_GOOGLE_MAPS_API_KEY"; // Make sure this is valid

async function geocodeAddresses(addresses, apiKey) {
  const results = [];

  for (let address of addresses) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
      const response = await axios.get(url);

      if (response.data.status === "OK") {
        const location = response.data.results[0].geometry.location;
        results.push({ address, location });
      } else {
        console.error(`Geocoding failed for ${address}: ${response.data.status}`);
      }

      // To comply with rate limits, wait briefly between requests.
      await new Promise(resolve => setTimeout(resolve, 200)); // 200 ms delay
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }

  return results;
}

// Make sure `apiKey` is defined before calling `geocodeAddresses`
geocodeAddresses(addresses, apiKey).then(results => {
  console.log("Geocoded Results:", results);
});
