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
    // Now we must check if the object exists via console log...!
    .then( data => { console.log (data); } );
    // If we check console log we can now see the information for whichever humans are in space and on which craft!