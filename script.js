// Unplash API 

const count = 10;
const apiKey ='4bdZ5ID8aZU0Yp8zoqcD99ruwcGYbFWspq04oKKV3Rg'; 
const apiURL = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`

// Get Photos from unsplash API 

async function getPhotos(){

    try {

    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data); 

    } catch (error) {
      // Catch Error Here  
    }
}

// On load 

getPhotos();