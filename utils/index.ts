export async function fetchCars() {

    // Set the required headers for the API request
    const headers: HeadersInit = {
        'X-RapidAPI-Key': '6f780524fcmsh9a7426587dc54ddp1e6dccjsn214dec2e0e23',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    };

    // Set the required headers for the API request
    const response = await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars`,
        {
            headers: headers,
        }
    );

    // Parse the response as JSON
    return await response.json();
}