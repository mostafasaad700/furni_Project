// slider//
let ceolist = document.querySelectorAll('.fa-chevron-right');
let ceolist2 = document.querySelectorAll('.fa-chevron-left');

let ceoOne = document.getElementById('one');
let ceoTwo = document.getElementById('two');


for( var i=0; i<ceolist.length; i++)
{
    ceolist[i].addEventListener('click' , function () {
        ceoOne.classList.replace('d-flex' , 'd-none');
        ceoTwo.classList.replace('d-none' , 'd-flex');
    })
    ceolist2[i].addEventListener('click' , function () {
        ceoOne.classList.replace('d-none' , 'd-flex');
        ceoTwo.classList.replace('d-flex' , 'd-none');
    })
}
//end//
