const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

let photosArray = [];

// Unplash API 
// Unplash username : Neer84472
const count = 10;
const apiKey ='4bdZ5ID8aZU0Yp8zoqcD99ruwcGYbFWspq04oKKV3Rg'; 
const apiURL = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`

// Need to create a helper function coz we need to follow DRY(dont repeat yourself) principle 

function setAttributes(element, attributes){

  for(const key in attributes){

    element.setAttribute(key, attributes[key])
  }

}

// Create Elements for Links and Photos, Add to DOM

function displayPhotos(){

  //  Run function for FOR each object in PhotosArray

  photosArray.forEach((photo) => {
  
   // Create <a> to link to Unsplash 
   
   const item = document.createElement('a');
  //  item.setAttribute('href', photo.links.html) 
  //  item.setAttribute('target', '_blank')
  setAttributes(item, {

    href: photo.links.html,
    target: '_blank'
  }) 
  //  Create Image for photo 
  const img = document.createElement('img')
  // img.setAttribute('src', photo.urls.regular)
  // img.setAttribute('alt', photo.alt_description)
  // img.setAttribute('title', photo.alt_description)

  setAttributes(img, {

    src: photo.urls.regular,
    alt: photo.alt_description,
    title: photo.alt_description,
  })

  // Put <img> inside <a> element, then put both inside image container element
 
  item.appendChild(img);
  imageContainer.appendChild(item); 

 
  });

}

// Get Photos from unsplash API 

async function getPhotos(){

    try {

    const response = await fetch(apiURL);
    photosArray = await response.json();
    // console.log(data); 
    // console.log(photosArray)

    displayPhotos(); 

    } catch (error) {
      // Catch Error Here  
    }
}

// check to see if scrolling near bottom of page, Load more photos 

window.addEventListener('scroll', ()=>{

  // console.log('scrolled')
  if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000){

    // console.log('window.innerHeight:', window.innerHeight)
    // console.log('window.scrollY:', window.scrollY)
    // console.log('window.innerHeight + scrollY', window.scrollY + window.innerHeight)
    // console.log('document.body.offsetHeight - 1000', document.body.offsetHeight - 1000)

    getPhotos();
    console.log('load more')

  }

})

// On load 

getPhotos();