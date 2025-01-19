// slider//
let ceoList = document.querySelectorAll('.fa-chevron-right');
let ceoOne =  document.getElementById('#one');
let ceoTwo =  document.getElementById('#two');
let ceoList2 = document.querySelectorAll('.fa-chevron-left');

for( var i=0; i<ceoList.length; i++)
{
    ceoList[i].addEventListener('click' , function () {
        ceoOne.classList.replace('d-flex' , 'd-none');
        ceoTwo.classList.replace('d-none' , 'd-flex');

    })
    ceoList2[i].addEventListener('click' , function () {
        ceoOne.classList.replace('d-none' , 'd-flex');
        ceoTwo.classList.replace('d-flex' , 'd-none');
        
    })
    
}
// shop//
let addpro = document.querySelector('#shop');
let imgShop = document.querySelector('#img');
let titleShop = document.querySelector('#title');
let priceShop = document.querySelector('#price');
let tbody = document.querySelector('.tbody');
 const allProduct = [];
addpro.addEventListener('click', function addProduct(){
    const products = {
        image:imgShop.src,
        title:titleShop.innerHTML,
        price:priceShop.innerHTML
    }  
    allProduct.push(products);
    console.log(allProduct);
});
function displayProducts () {
    let cartonna = "";
    for(let i=0; i< allProduct.length; i++){
        cartonna +=`
        <tr>
                        <td>${allProduct[i].image}</td>
                        <td>${allProduct[i].title}</td>
                        <td>${allProduct[i].price}</td>
                        <td>1</td>
                        <td>
                            <button class="btn btn-outline-danger fw-bolder fs-6 ">-</button>
                            1
                            <button class="btn btn-outline-primary fw-bolder fs-6">+</button>
                        </td>
                        <td>1</td>
                        <td>
                            <button class="btn btn-danger btn-m fw-bolder" id="removeBtn">X</button>
                        </td>
        </tr>
        `
    }
    tbody.innerHTML = cartonna;
}
