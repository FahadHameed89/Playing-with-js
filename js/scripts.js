// alert( "Hello User! Javascript is operating as expected!");

// This is a single  line comment - just like c# //

/*
    Multi-line Comment
    This is much easier to block stuff out with, but keep in mind they mustbe closed with the closed brackets!
*/

/**
 *  Assignments and Variables
 */

 // Variables declares with the 'var' keyword are considered function-scoped. (DO NOT USE VAR UNLESS THERE'S A REALLY GOOD REASON!!!)
 // Typically we avoid using VAR and instead use new declaration keywords. They were commonly used in the past but not so much anymore. So we avoid them when we are building modern code because they introduce bad habits.
 var myFirstVariable = "Hello There Bud"; 

 // Variables declared with the 'let' keyword are considered 'block-scoped' - Whichever code block its declared within is the ONLY place it operates. Anything from outside the {} will not be able to 'see' the LET statements. 
 let mySecondVariable = "How ya doin?";

 // Constants cannot change after they have been set. It's a one time operartion and trying to do it again will result in a nasty error.
 const myThirdVariable = myFirstVariable + ", " + mySecondVariable; // Note we can use Concatenation with the '+' sign.

 /**
  * Data Types in JS
  */


const myString = "This is a string that cannot be altered!";

const myInteger = 34;   // Ints and Floats are technically the same data-type in JS.
const myFloat = 16.7832;    // The datatypse is simply called 'number'.
const myNaN = NaN; // Not a Number -- You'll see this when you try to add 2 non-numbers, try to divide by 0. 

const myTrueBool = true;    // Booleans can be true or false. Lowercase always
const myFalseBool = false;
const myNull = null; //     If nothing inside a variable but is still defined. 
const myUndefined = undefined; // The variable does not exist.
const myArray = [       // Can store multiple pieces of data, from different datatypes, even from other arrays!.
    myString,
    myInteger,
    myFloat,
    myNaN,
    myTrueBool,
    myFalseBool,
    myNull,
    myUndefined,
];