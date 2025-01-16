// form//
let sendMassege = document.querySelector('.Massegebtn');
console.log(sendMassege);
let firstNameInput = document.getElementById('firstNameInput');
let lastNameInput = document.getElementById('lastNameInput');
let emailInput = document.getElementById('emailInput');
let massegeInput = document.getElementById('massegeInput');
console.log(firstNameInput);
console.log(lastNameInput);
console.log(emailInput);
console.log(massegeInput);

sendMassege.addEventListener('click', function () {
    console.log('hello');
    
    // Create the contactUser object
    let contactUser = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        massege: massegeInput.value
    };

    // Retrieve existing array or initialize a new one
    let usersArray = JSON.parse(localStorage.getItem('contactUsers')) || [];

    // Add the new contactUser to the array
    usersArray.push(contactUser);

    // Save the updated array back to localStorage
    localStorage.setItem('contactUsers', JSON.stringify(usersArray));
    
    // Log the new user and the updated array
    clearform();
});
function clearform() {
    let contactUser = {
        firstName:firstNameInput.value='',
        lastName :lastNameInput.value='',
        email:emailInput.value='',
        massege:massegeInput.value=''
    }   
}

// end//

