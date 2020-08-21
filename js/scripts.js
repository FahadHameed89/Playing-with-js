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


const myString1 = "Sword of Infinity";
const myString2 = "Shield of Legends";
const myString3 = "Necklace of Purity";
const myString4 = "Ring of Healing";
const myString5 = "Cloak of Shadows";
const myString6 = "Heroic Strength Potion";
let myInteger = 34;   // Ints and Floats are technically the same data-type in JS.
let maxHP = 34;   // Ints and Floats are technically the same data-type in JS.
let curHP = 34;   // Ints and Floats are technically the same data-type in JS.
let hStr = 3;   // Ints and Floats are technically the same data-type in JS.
let hDex = 0;   // Ints and Floats are technically the same data-type in JS.
let hInt = 1;   // Ints and Floats are technically the same data-type in JS.

const myFloat = 16.7832;    // The datatypse is simply called 'number'.
const myNaN = NaN; // Not a Number -- You'll see this when you try to add 2 non-numbers, try to divide by 0. 

const myTrueBool = true;    // Booleans can be true or false. Lowercase always
const myFalseBool = false;
const myNull = null; //     If nothing inside a variable but is still defined. 
const myUndefined = undefined; // The variable does not exist.
const myArray = [       // Can store multiple pieces of data, from different datatypes, even from other arrays!.
    myString1,
    myString2,
    myString3,
    myString4,
    myString5,
    myString6,
];

console.log("Hello to the browser console!");       // We can output literal values without a variable or container
console.log( myArray ) ;                            // We can output variables and their contents
console.log( 10 % 3 );                              // We can also just throw in an expression and see what it evaluates to (% refers to remainder, the 'modulus' operator)

/**
 *  Concatenation and Template Literals
 */

 const myName = "Fahad";                            // Standard concatenation with strings!
 const addString = "Hello, " + myName + "!!";       
console.log ( addString );

// Watch out for 'number addition' vs concatentation

console.log (3 + 3);                                // Should give (number)6!
console.log (3 + "3");                              // Should give (string)33!
console.log (3 + 3 + "3");                          // Should give (string)63!
console.log (3 + 3 + Number("32") );                // Should give (number)38 // If you enter a non-number into the Numer() field, the result is NaN
console.log (String(3) + 5);                        // Should convert to string and add 5, should be (string)35

console.log ( parseInt ( 38.957 ) );                // parseInt and parseFloat chops off the decimals 

console.log (parseFloat (123123.1322131).toFixed(2));       // Use this to chop down to 2 decimal places.

// TEMPLATE LITERAL EQUIVALENT
const templateLiteralString = `Hello, ${ myName }!`;    // Template Literals must be inside `` (backticks) not "" (quotes)
console.log (templateLiteralString);

console.log(`
This is great for formatting outputs. I can add as many lines as I want through the clever use of backticks in the console log!


Greetings User...I am ${myName}!
HP: [${curHP} / ${maxHP}]
STR: [${hStr}] - Increases damage of attacks 
DEX: [${hDex}] - Increases block gained from skills
INT: [${hInt}] - Increases magic damage

You currently have ${myArray.length} items in your inventory:
A list of your inventory items:
[${myArray[0]}] x 1 
[${myArray[1]}] x 1 
[${myArray[2]}] x 1 
[${myArray[3]}] x 1 
[${myArray[4]}] x 1 
[${myArray[5]}] x 1 
`);


/* Loops in JS
*/

console.log( "We are now looping a while loop...\n~~~~~~~~~~~~~~~~~~~~~~~~");
let myWhileIterator = 5;
while ( myWhileIterator >= 0 )    // Repeats the code block so long as the condition evaluates to (boolean)true.
{
    console.log(`While iterator: ${myWhileIterator}`);     
    myWhileIterator--;                                      // Shorthand for decrement value
    hDex++, curHP--, hStr++;
}

console.log( "We are now looping a FOR...OF loop...\n~~~~~~~~~~~~~~~~~~~~~~~~");

const myForArray = ["Goblin Cave", "Orc Den", "Golem Canyon", "Dragon Island"];
for ( const arrayItem of myForArray)    // For.Of will iterate on it's own through the array - we don't need to set a termination condition it will just cycle through the array!
{
    console.log( ` You travel through the dangerous dungeon known as ${arrayItem}`); 
}

console.log( "We are now looping a FOR loop...\n~~~~~~~~~~~~~~~~~~~~~~~~");
for (let myForIterator = 15; myForIterator < 99; myForIterator += 10)
{
    console.log (`You have defeated a creature, your EXP is now... ${myForIterator}`)
}
// let myNum = 5;
// myNum++; // This means myNum + 1
// myNum += 1; // This is the same as the above line, just written slightly differently. 


console.log(`
You have travelled through the various dungeons and have become stronger! You have spent some of your HP doing battle...


Greetings User...I am still known as ${myName}! Your statistics are below:
HP: [${curHP} / ${maxHP}]
STR: [${hStr}] - Increases damage of attacks 
DEX: [${hDex}] - Increases block gained from skills
INT: [${hInt}] - Increases magic damage

You currently have ${myArray.length} items in your inventory:
A list of your inventory items:
[${myArray[0]}] x 1 
[${myArray[1]}] x 1 
[${myArray[2]}] x 1 
[${myArray[3]}] x 1 
[${myArray[4]}] x 1 
[${myArray[5]}] x 1 
`);

/*
    FUNCTIONS IN JAVASCRIPT
*/

function myAdditionFunction ( num1 = 0, num2 = 0 ) {
    return Number( num1 ) + Number( num2 );                 // Note that return ends the function, so you cannot add code to the end of a function
}
const add2And4 = myAdditionFunction( 2, 4);
console.log (add2And4);

console.log ( myAdditionFunction(-15, 35.5));

function mySubtractionFunction ( num1, num2) {
    const difference = num1 - num2; // Note that the '-' command can only be used for subration, so JS will assume the two variables are numbers and try to return a number
    return difference;
}

console.log( mySubtractionFunction(10, 5));

// Fat-Arrow function syntax as an alternative =>   Used to make a function act as a variable
// Store the function as if it were a variable
/*
    1. const / let for our declaration
    2. The name of the function
    3. The assignment operator (=)
    4. Paranthesis () with parameters inside
    5. The fat arrow marking the beginning of the function logic
    6. Two options at this point
        a. What follows the fat arrow will be returned from the function
        b. We can use curly braces to maanage larger instruction sets, which give us more control over when and how we return from the function
    NOTE - When we set up a function using an assignment, it is not 'hoisted', meaning it cannot be called upon before its declaration. Traditional functions are 'hoisted' and can be called at any point. 
            Using an '=' to define a function, trying to call on it before it has been declared will result in an error. 
*/
const myDivisionFunction = ( num1, num2 ) => num1 / num2;   // 6a example
 //       Name goes here | Function goes here
 console.log( "Dividing 10 by 5 results in: " + myDivisionFunction(10, 5));

 const myMultiplicationFunction = ( num1, num2 ) => {       // 6b example
    const product =  num1 * num2;
    return product;
 }

 console.log ( myMultiplicationFunction(10, 3));
