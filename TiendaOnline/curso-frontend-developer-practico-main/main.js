const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productsList = [];
productsList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productsList.push({
    name: 'PC Gamer',
    price: 720,
    image: 'https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productsList.push({
    name: 'Blender',
    price: 250,
    image: 'https://images.pexels.com/photos/8805090/pexels-photo-8805090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productsList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productsList.push({
    name: 'PC Gamer',
    price: 720,
    image: 'https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productsList.push({
    name: 'Blender',
    price: 250,
    image: 'https://images.pexels.com/photos/8805090/pexels-photo-8805090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

/* <div class="product-card">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""></img>
            <div class="product-info">
                <div>
                    <p>$120,00</p>
                    <p>Bike</p>
                </div>
                <figure>
                    <img src="./curso-frontend-developer-practico-main/icons/bt_add_to_cart.svg" alt="">
                </figure>
            </div>
</div> */



function toggleDesktopMenu(){
    const isAsideOpen = !aside.classList.contains('inactive');
    if(isAsideOpen){
        aside.classList.add( 'inactive' );
        desktopMenu.classList.toggle("inactive");
    }else{
        desktopMenu.classList.toggle("inactive");
    }
    /* desktopMenu.classList.toggle( "inactive" ); */
}

function toggleMovileMenu() {
    const isAsideOpen = !aside.classList.contains('inactive');
    if(isAsideOpen){
        aside.classList.add( 'inactive' );
        mobileMenu.classList.toggle("inactive");
    }else{
        mobileMenu.classList.toggle("inactive");
    }
    
}

function toggleCarritoAside(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive'); 
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    if(isMobileMenuOpen || isDesktopMenuOpen){
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        aside.classList.toggle("inactive");
    }else{
        aside.classList.toggle("inactive");
    }
}

function renderProducts(arrProducts){
    for(product of arrProducts){
        //creamos el HTML de cada producto y lo agregamos al DOM
        //creamos el div que va a contener la card del producto
        const productCard = document.createElement('div');
        productCard.classList.add("product-card");
    
        const imgTag = document.createElement("img");
        imgTag.setAttribute('src',product.image);
        imgTag.setAttribute('alt','Imagen del producto')
    
        const productInfo = document.createElement('div');
        productInfo.classList.add("product-info");
    
        const producInfoDetail = document.createElement('div');
    
        const producPrice = document.createElement( "P");
        producPrice.innerText = '$ ' + product.price;
        const productName = document.createElement( "P");
        productName.innerText = product.name;
    
        producInfoDetail.appendChild(producPrice);
        producInfoDetail.appendChild(productName);
    
        const producInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./curso-frontend-developer-practico-main/icons/bt_add_to_cart.svg')
    
        producInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(producInfoDetail);
        productInfo.appendChild(producInfoFigure);
    
        productCard.appendChild(imgTag);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productsList);

navEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMovileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);