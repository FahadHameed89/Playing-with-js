// alert("Are you there?") -- Use Alerts to verify that JS is operating...!
// console.log("Test to see if the JS is running") -- Console logs work too...!

// You can use the # in an href call to travel to a specific subheading in a page. 


/*
    Targetting via the DOM (Document Object Model) in JavaScript!
*/

// We want to target hte h2 with the id="target-me"

const myH2 = document.getElementById( 'target-me' );
console.log( myH2 ); // This successfully grabs the element!

// Now lets see if we can grab an entire paragraph!

// This should collect the first match that is a paragraph 'p'
// You can also add ALL to query selector to see all 
// const myP = document.querySelectorALL( 'p' );

// const myP = document.querySelector( '#target-me + p' ); - Will pull the first p neighboring #target-me, nothing in #target-me. In order for + to target something, it must be ADJACENT to the first operator - in this case, this will only target a <p> located adjacent to anything with a #target-me ID. This only occurs once in the entire program, and therefore is a good way to target a specific element. 

const myP = document.querySelector( '#target-me + p' );

console.log(myP);

const hoverButton = document.querySelector( 'p > button' );

console.log(hoverButton);

//const firstSpan = document.querySelector( 'p > span:nth-of-child(2)' )
// console.log(firstSpan);

const clickButton = document.querySelector( 'p > button:nth-of-type(1)' );
console.log(clickButton);
// This will select the 2nd type of button that is within the first paragraph

// const secondSpan = document.querySelector( 'p > span:nth-of-child(4)' )
// console.log(secondSpan);
// This will grab the 4th child descendant of the first p element, in this case, the second span of text. 

/**
 *      DOM Element Manipulation
 * 
 */

// We can use JS to update / replace content!
 myH2.textContent = "DOM Target and Element Adjustment Practice!";

 console.log( 'Outputted striing into our <h2> element!');

 myH2.className = 'salmon-coloured-text';


 /**
  *     EVENT LISTENERS
  *     We can add 'listeners' to elements, which listen for user actions.
  *     If a user action is detected, we can have our JS follow a set of instructions!
  */

  // This is how we add an event listener to a specific variable...
/**
 * There are two arguments for addEventListener:
 * 1. Type of Event (by name)
 * 2. The instructions (what should run when the event occurs!)
 * 
 *  (This means: a function!)
 */

  hoverButton.addEventListener( 'mouseenter', () => {
      console.log( 'The Mouse has entered the button!' );
  } );
  