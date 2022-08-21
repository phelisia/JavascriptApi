let products=document.getElementById('products');
let fruits=document.getElementById('fruits');
let vegetables=document.getElementById('vegetables');

// products
const getProductsList =fetch("http://localhost:5000/products");
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
