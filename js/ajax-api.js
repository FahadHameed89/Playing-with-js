// alert( "AJAX-API JS loaded!" );

/**
 * AJAX (Asynchronous JavaScript and XML)
 * =============================================================================================
 * Lets us use Javascript to request information from spearate URLS
 * Make separate HTTP/HTTPS request post initial page-load.
 * We can use JS to make an AJAX request to URL endpoints to request additional data
 * You can retrive HTML, JSON, or XML. Mostly JSONs nowadays because it's really good for this type of thing. 
 * 
 * Despite AJAX referring to XML, we are usually dealing with JSON formatted data.
 * 
 * With JS, this is our best option for making external requests and getting data returned.
 * 
 * The modern way to make AJAX requests with JS is to use the built-in 'fetch()' function/feature.
 */

fetch( 'http://api.open-notify.org/astros.json' )    // The first argument you enter is a URL -- in this case we got this from http://open-notify.org/Open-Notify-API/
    // .then means this is attached to the fetch, just broken up for legibility. 
    // Our function returns a JS object(converted from the JSON string that the API provides)
    // So in this case, the fetch CALLS a 'response' from the website which is a JSON, and we are parsing the JSON into an object. 
    .then( response => response.json() )
    // Now we want to check the data within the object
    .then( data => { 
        console.log (data);             // Checks to see if we collected the entire data object (we did)
        const people = data.people;     // This is the array with the people in it, say we wanted to look one step deeper. 
        console.log(people );           // We expect this to be an array with people inside...It is!

        const peopleUL = document.createElement( 'UL' );    // Now we create a new unordered list object, which will probably use for displaying the info on the web page.
        // Let's loop through the people and add each one to the list
        for ( const person of people )      // Create a new constant for each element of PEOPLE, which is the data array we created before ((not the object, just the aray))
        {    
            const personLI = document.createElement( 'LI' );
            personLI.textContent = `on the ${person.craft} craft, astronaut "${person.name}" is present!`;
            peopleUL.appendChild( personLI );
        }   // Don't forget to add the information to the document !
        document.body.appendChild( peopleUL );
    } )
    .catch( error => {                     // Wwe can do a catch in case of some craziness happens in the future
        console.log( error );           // This will tell you what the error happens to be

    });
    // If we check console log we can now see the information for whichever humans are in space and on which craft!

    /**
     *  Let's try another example - this time we will grab live data on a timer!
     */

     // First declare variables based on the HTML tags
     const latDD = document.getElementById( 'lat' );
     const longDD = document.getElementById( 'long' );
     console.log(latDD);
     console.log(longDD);           // Just to confirm we are actually targetting the right locations

     // Add a function that grabs data from our API and updates the elements.
    const updateLatLong = () => {
        // First - Grab the data
        fetch ( 'http://api.open-notify.org/iss-now.json' )
            .then (response => response.json())
        //  .then (response => {return response.json(); } )  // Is the same thing as the above line, different syntax 
            .then( data => {
                console.log(data);
                // Grab our latitude and longitude from the data object. iss_position
                const lat = data.iss_position.latitude;
                const long = data.iss_position.longitude;
                // Update the elements in the DOM
                latDD.textContent = lat;
                longDD.textContent = long;
            })
            // Outputs if there is an error
            .catch( error => { console.log( error );});
    }

    updateLatLong();    // This should run!, it runs only once!
    
     // Add a repeating timer so that this function can repeat.
