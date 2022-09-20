/*
NAAM        : De Houwer 
VOORNAAM    : Jimmy
KLASGROEP   : 
DATUM       :  18/juni/2022
*/

// Vul hieronder aan met jouw code...


// API call wanneer venster geladen wordt.
const requestCat = async = () => {
    
    //Declareren van variabelen
   
    const populateMenu = document.querySelector('#cat_list');


    //fetchen van categorie API
     fetch('https://fakestoreapi.com/products/categories')

    .then(res => res.json())
    .then(categories => {console.log(categories)
        
        //functie om de categorieen in de dropdown menu te plaatsen
        populateCatMenu = () => {
            //loop door de categories en voeg deze toe aan het dorpdownmenu
            for(let i=0; i<categories.length; i++){ 
                populateMenu.innerHTML += `<li><a class="dropdown-item" href="#!">${categories[i]}</a></li>`
            };
        }//populateCatMenu
        populateCatMenu(); //functie aanroepen
        
    fillProdList = () => {

    }
    
    })//data

    .catch(err => {`Error: `, error.statusText})

    
    

};

 
const makeRequest = async = () => {

    
//Declareren van variabelen
    const productImage = document.querySelector('.card-img-top');
    const ProductTitle = document.querySelector('h5.fw-bolder');
    const ProductPrice = document.querySelector('#price');
    const productId = document.querySelector('.btn');
    const foundProducts = document.querySelector('#n_prod');
    const avRating = document.querySelector('#av_rating');


    //fetchen van product API
    fetch('https://fakestoreapi.com/products/')

    .then(res => res.json())
    .then(products => {console.log(products)



        //truncate string functie
    trunCateString = (title, char) => {
        if(title.lenght > char){
            return str.slice(0, num) + '...';
        }else {
            return str;
        }
    }

        //for loop om de productinfo uit de API te halen en in de productenlijst te plaatsen
    for(i=0; i<products.length; i++){
        productImage.src = products[i].image;
        ProductTitle.innerHTML = products[i].title;
        ProductPrice.innerHTML = products[i].price;
        productId.innerHTML = link.setAttribute("href", `details.html?prod_id=${products[i].id}`);
    }
    
    
    })//products
    .catch(err => {`Error: `, error.statusText})
}

requestCat()
makeRequest()



