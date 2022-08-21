let products=document.getElementById('products');
let fruits=document.getElementById('fruList');
let vegetables=document.getElementById('vegList');

// products
const getProductsList = fetch("http://localhost:5000/products");
getProductsList
.then((response) => {
    return response.json();
  })
  .then((data) => {
    data.map(prodo => {
      let list = document.createElement('li');
     list.innerHTML=`${prodo.name} `
     products.appendChild(list);

    })
  })
  .catch(error => {
    console.log(error)
  })


//   fruits
const getFruitList = fetch("http://localhost:5000/products/fruits");
getFruitList
.then((response) => {
    return response.json();
  })
  .then((data) => {
    data.map(fruity => {
      let list = document.createElement('li');
     list.innerHTML=`${fruity.name} `
     fruits.appendChild(list);

    })
  })
  .catch(error => {
    console.log(error)
  })


//   vegetables
const getVegetablesList = fetch("http://localhost:5000/products/vegetables");
getVegetablesList
.then((response) => {
    return response.json();
  })
  .then((data) => {
    data.map(veggie => {
     let list = document.createElement('li');
     list.innerHTML=`${veggie.name} `
     vegetables.appendChild(list);

    })
  })
  .catch(error => {
    console.log(error)
  })
