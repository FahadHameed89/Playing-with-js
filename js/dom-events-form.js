// alert ("DOM Events Form Script Loaded...!")
// Script Loads correctly...!

// We can grab our form, and get it to 'listen' for 'Submit!'
const helloForm = document.querySelector('form');
console.log(helloForm);

// This grabs the name field
const nameField = document.getElementById('your-name');
console.log(nameField);

// This grabs the actual list output
const helloList = document.querySelector('#hello-list');
console.log(helloList) ;

/**
 * Event Listener: Form Submit
 */

 // Event Listeners pass an argument to our function, an event object
helloForm.addEventListener ('submit', ( event )=> { 
    event.preventDefault(); // This stops a form from a default submission
    console.log (event); // This logs whatever is under Event
    console.log (event.target); // This logs the element that the event occured on.

// How to get our ''value from our form field?
const name = nameField.value;
console.log( name) ;

// How do i make a new Lsit element?

// How do  Iinsert a value/text into the List element?


} );


