

const catList = document.querySelector('#cat_list')



const fetchShopData = async = () => {
    fetch(`https://fakestoreapi.com/products/`)
    .then((response) => response.json())
    .then(items => {

        trunCateString = (title, num) => {
            (title.length > num) ? console.log((title.substring(num, title.length - (title.length - num) - num) + `...`))
             : title;
        }
        

        let shopWindow = '';
        let countOfProducts = items.length
        items.forEach((product, index) => {
            
           //console.log(product)
            
           
            shopWindow += `<div class="col mb-5">
            <div class="card h-100">
                <!-- Product image-->
                 <img class="card-img-top img-fluid" src="${product.image}" alt="https://cdn3.iconfinder.com/data/icons/popular-memes/48/JD-12-512.png">
                <!-- Product details-->
                <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Product name-->
                        <h5 class="fw-bolder" id='title'>${product.title}</h5>
                        <!-- Product reviews-->
                        <div class="d-flex justify-content-center small text-warning mb-2">
                            <div class="bi-star-fill"></div>
                            <div class="bi-star-fill"></div>
                            <div class="bi-star-fill"></div>
                        </div>
                        <!-- Product price-->
                        <p id="price">$${product.price}</p>
                    </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="details.html?prod_id=${product.id}">Add to cart</a>
                    </div>
                </div>
            </div>
        </div>`

                                    
                
                
                document.getElementById('prodList').innerHTML = shopWindow
                document.getElementById('n_prod').innerHTML = countOfProducts
                
                // if((product.title).length > 12){ document.getElementById('title').innerHTML = trunCateString(`${product.title}`, 12)
                //     } else{document.getElementById('title').innerHTML = product.title}
                
               });//end of foreach
           })//end .then(items)
        }//end of fetchShopData

        const fetchCatData = async = () => {
            fetch(`https://fakestoreapi.com/products/categories`)
            .then((response) => response.json())
            .then(cat =>{
                
                cat.forEach(category => {
                    
                    populateCatMenu(category)
                });
            })
        }//end of fetchCatData
        
        const populateCatMenu = (cat) => {
            let listItem = document.createElement('li')
            let listAnchor = document.createElement('a')
            listAnchor.classlist = 'dropdown-item'
            listAnchor.style = 'text-decoration: none; color: black'
            listAnchor.innerHTML = cat
            listAnchor.href = `#`
        
            catList.append(listItem)
            listItem.append(listAnchor)
            
            
        }//end of populateCatMenu


fetchCatData()
fetchShopData()

