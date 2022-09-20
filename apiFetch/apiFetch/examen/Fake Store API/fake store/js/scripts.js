/*
NAAM        : De Houwer 
VOORNAAM    : Jimmy
KLASGROEP   : 
DATUM       :  18/juni/2022
*/

// Vul hieronder aan met jouw code...


const productImage = document.querySelector('.card-img-top');
const ProductTitle = document.querySelector('h5.fw-bolder');
const ProductPrice = document.querySelector('#price');
const productId = document.querySelector('.btn');
const foundProducts = document.querySelector('#n_prod');
const avRating = document.querySelector('#av_rating');
const cardField = document.querySelector('#prodList');
const populateMenu = document.querySelector('#cat_list');
const shopList = document.querySelector('#cat_list')


// API call for categories
const requestCat = async = () => {
    
    //fetchen van categorie API
     fetch('https://fakestoreapi.com/products/categories')

    .then(res => res.json()) //response to JSON format
    .then(categories => {
        
        categories.forEach(e => {
            populateCatMenu(e)
           });
        
    })//end of categories

    .catch(error => {`Error: `, error.statusText})

    }; //end of requestCat function

    
    
    //functie om de categorieen in het dropdown menu te plaatsen
    populateCatMenu = (menuItem) => { 
        
        const listItem = document.createElement('li')
        const listAnchor = document.createElement('a')
        listAnchor.classList = 'dropdown-item'
        listAnchor.innerText = menuItem
        listAnchor.href = `#!`
        shopList.appendChild(listItem)
        listItem.appendChild(listAnchor)
        
    }//End of populateCatMenu function

    
 //API call for products
const makeRequest = async = () => {

    
    //fetchen van product API
    fetch('https://fakestoreapi.com/products/')

    .then(res => res.json()) //response to JSON format
    .then(products => {
        console.log(typeof(products[0].price))
        
        products.forEach(e => {
            makeCards(e)
            });
        
        })//end of products

    .catch(error => {`Error: `, error.statusText})

}//end of makeRequest function



//function to generate cards
    makeCards = (items) => {

        const cards = document.createElement('div')
        cards.classList = 'col mb-5'
        
        const card = document.createElement('div')
        card.classList = 'card h-100'
        card.style = 'align-items: center'

        const imgDiv = document.createElement('div')
        imgDiv.classList = ''
        imgDiv.style = 'max-height: 200px; max-width: 150px; min-height: 200px;'

        const cardImg = document.createElement('img')
        cardImg.classList = 'card-img-top'
        cardImg.src = items.image
        

        const cardDetail = document.createElement('div')
        cardDetail.classList = 'card-body p-4'

        const detailText = document.createElement('div')
        detailText.classList = 'text-center'

        const detailHeader = document.createElement('h5')
        detailHeader.classList = 'fw-bolder'
        detailHeader.innerText = items.title

        const detailWarning = document.createElement('div')
        detailWarning.classList = 'd-flex justify-content-center small text-warning mb-2'

        const detailStar = document.createElement('div')
        detailStar.classList = 'b-star-fill'
        detailStar.style = 'b-star-fill::before'
        

        const cardPrice = document.createElement('p')
        cardPrice.id = 'price'
        cardPrice.innerText = `$${items.price}`

        const cardButton = document.createElement('div')
        cardButton.classList = 'card-footer p-4 pt-0 border-top-0 bg-transparent'

        const cardText = document.createElement('div')
        cardText.classList = 'text-center'

        const cardAnchor = document.createElement('a')
        cardAnchor.classList = 'btn btn-outline-dark mt-auto'
        cardAnchor.href = `#!`
        cardAnchor.innerText = 'Add to cart'

        
        cardField.appendChild(cards)
        cards.appendChild(card)
        card.appendChild(imgDiv)
        imgDiv.appendChild(cardImg)
        card.appendChild(cardDetail)
        card.appendChild(cardButton)
        cardDetail.appendChild(detailText)
        detailText.appendChild(detailHeader)
        detailText.appendChild(detailWarning)
        detailText.appendChild(cardPrice)
        detailWarning.appendChild(detailStar)
        detailWarning.appendChild(detailStar)
        detailWarning.appendChild(detailStar)
        card.appendChild(cardButton)
        cardButton.appendChild(cardText)
        cardText.appendChild(cardAnchor)

         
        
        //productId.innerHTML = link.setAttribute("href", `details.html?prod_id=${products[e].id}`);
 }

    

    requestCat(); //functie aanroepen
    makeRequest();


    