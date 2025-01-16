// slider//
let ceoList = document.querySelectorAll('.fa-chevron-right');
let ceoOne =  document.getElementById('one');
let ceoTwo =  document.getElementById('two');
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
// subscribe//








