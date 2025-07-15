
let  product={}
 
fetch('https://fakestoreapi.com/products/1')
.then( response => response.json())
  .then(data => {

    product=data;
        
   document.getElementById('product-card').innerHTML=
   `<h3 class='product-title'>${product.title}</h3>`
  })
  .catch(error=>console.log(error) );


 


