let carts = document.querySelectorAll('.add-cart')

let products = [
    {
        name : 'Diano',
        tag : 'diano',
        price : 350,
        inCart: 0
    },
    {
        name : 'Incore',
        tag : 'incore',
        price : 350,
        inCart: 0
    },
    {

        name : 'Minarba',
        tag : 'minarba',
        price : 350,
        inCart: 0
    },
    {
        name : 'No-Request',
        tag : 'norequest',
        price : 350,
        inCart: 0
    },
    {
        name : 'Nirvana',
        tag : 'nirvana',
        price : 350,
        inCart: 0
    },

]



for(let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', ()=>{
        cartNumbers(products[i])
    })
}
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if( productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    console.log("The product clicked is" , product)
    let productNumbers = localStorage.getItem('cartNumbers');
    console.log(productNumbers);
    console.log(typeof productNumbers);
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    console.log("My items are",cartItems);
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart +=1;
    } else{
        product.inCart = 1;
        cartItems = {
            [product.tag] : product
        }
    }
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));

}
    
    



}

onLoadCartNumbers()