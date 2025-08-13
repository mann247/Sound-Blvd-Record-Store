//Nia Manning
//August 13th, 2025
//Sound Blvd. Records

"use strict";
document.addEventListener('DOMContentLoaded', function(){
    //Finds where the pictures will go in the html
    var marqueeTrack = document.getElementById('marqueeTrack');
    if(!marqueeTrack){
        console.log('No Marquee');
        return; //stops code if the id is not found
    }

    //get product data from json file
    fetch('vinyl.json')
        .then(function(response){
            //checks if the file loads, if it doesn't load properly show an erros
            if(!response.ok){
                throw new Error('Could not load vinyl.json file');
            }
            console.log("images loaded.")
            return response.json(); //turns the file into js objects
        })
        .then(function(products){
            //keeps items that have an image
            var productImg = products.filter(function (product){
                return product && product.image; //make sure the product exists and has an image property.
            });

            //Shows the first 12 images on the site (if more pictures added)
            var showProductImg = productImg.slice(0,12);

            //add the products image to the html
             showProductImg.forEach(function (product){

                //creates a div
                var itemDiv = document.createElement('div'); //image container
                itemDiv.className = 'marquee-item';

                //create a link
                var link = document.createElement('a');
                link.href = 'products.html';
                link.className = 'product-link';
                link.setAttribute('aria-label', product.name || 'View Product');

                //creates an image
                var img = document.createElement('img');
                img.src = product.image; //image from JSON
                img.alt = product.name;  //alt text for accessibility
                img.loading = 'lazy'; //loads only when needed
                img.decoding = 'async';

                link.appendChild(img); //puts image inside the link
                itemDiv.appendChild(link); //puts link inside the container
                marqueeTrack.appendChild(itemDiv); //put a container inside the marquee
            });
        })
        //if no images are available, please show this message
        .catch(function (error){ 
            console.error('Error loading products: ', error);
        });
});