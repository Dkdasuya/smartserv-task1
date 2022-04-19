
let response,data;
async function getData(){
     response = await fetch('https://s3.amazonaws.com/open-to-cors/assignment.json');
     data = await response.json();
     showData();
}

function showData(){
    const products = data.products;
    const arrayProduct=Object.values(products);
    arrayProduct.sort((a,b)=>b.popularity-a.popularity);
    const table = document.querySelector('.table');
    for(let i=0;i<arrayProduct.length;i++){
        table.append(createCard(arrayProduct[i]));
        // Hi am Dheeraj
    }
}

function createCard(product){
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('div');
    title.textContent = product.title;
    const subcategory = document.createElement('div');
    subcategory.textContent = "Subcategory : "+product.subcategory;
    const price = document.createElement('div');
    price.textContent = "Price : "+product.price;
    const popularity = document.createElement('div');
    popularity.textContent ="Popularity : "+ product.popularity;

    card.append(title);
    card.append(subcategory);
    card.append(price);
    card.append(popularity);

    return card;

}

getData();



