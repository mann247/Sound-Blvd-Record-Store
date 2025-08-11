//Nia Manning
//August 13th, 2025
//Sound Blvd. Records

"use strict";
fetch('vinyl.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('product-grid');

        data.forEach(product => {
            //creates card
            const card = document.createElement('div');
            card.classList.add('product-card');

            //fill the card's html
            card.innerHTML = `
            <img src="${product.image}" alt="${product.name}"/>
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
            <p>${product.description}</p>
            <button class="cart-button" aria-label="View Details for ${product.name}"> View Product </button>
            `;
            container.appendChild(card);
        });
    })
    .catch(error =>{
        console.error("Error loading products:", error);
    });