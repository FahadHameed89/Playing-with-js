// alert( "OOP.js loaded!" ); // The file is loaded if we see the alert!

// Basic JS object.
const myObj = {
    name: "Joe",
    age: 35,
    hobbies: [ "Movies", "Pottery" ]
  };
  
  // Access properties or methods with "."
  console.log( `My name is ${myObj.name}. I am ${myObj.age} years old!. My Hobbies are watching ${myObj.hobbies[0]} and doing ${myObj.hobbies[1]}` );
  
  console.log( myObj );
  
  // We can convert an existing object into a JSON string.
  // Make sure the object doesn't have methods or incompatible data/features for the JSON format.
  const myObjString = JSON.stringify( myObj );
  console.log( myObjString );
  
  // JSON (JavaScript Object Notation)
  // Properties MUST be wrapped in double quotes to be considered valid JSON.
  // We CANNOT have methods in a JSON string/object.
  const secondPersonString = `{
    "name": "Sarah",
    "age": 29,
    "hobbies": [ "Deep Sea Fishing", "Cycling" ]
  }`;
  console.log( secondPersonString );
  
  // Convert a string into a regular JS object we can use.
  const secondPersonObj = JSON.parse( secondPersonString );
  // If the string was properly formatted JSON, it should now be usable!
  console.log( secondPersonObj );


  /**
   *    Classes (Blueprints for a 'Type' of Objects)
   */

   class Person {
       constructor ( name = "", age = 0, hobbies = [] )       // Built in method for creating new objects - When a new object is being created following this blueprint/class.
       {                                                        // Creating a new template that has defaults for name, age and hobby...!
            this.name = name;
            this.age = age;
            this.hobbies = hobbies;
       }

// When you make a method within a class, that method is located within the Class and can be used in the future
        sayHello ()
        {
            const helloP = document.createElement( "P" )
            helloP.textContent = `Hello there, I am ${this.name}, nice to meet you!`;
            document.body.appendChild( helloP);
        }


   }


                                        // This is how we can define a new Person known as Jane, variable name 'jane', age 34, hobbies are "hunting" and "fishing"
   const jane = new Person ( 
       "Jane", 
       34,
       ["Hunting", "Sewing"]
       );

       console.log (jane);              // This object looks much smaller but is significantly more condensed, hard to mispell and create syntax errors.
        console.log (jane instanceof Person);   // Just checks if the variable jane is a person

        // Runs the say hello method for Jane
        jane.sayHello();

    const ali = new Person (
        "Ali",
        22,
        ["Gaming", "Hockey"]
    );
    
    console.log (ali);
    console.log (ali instanceof Person);
    console.log(`My name is ${ali.name}. I am ${ali.age} years old and I refuse to tell you more about myself!`)

        // Runsthe say hello method for Ali
        ali.sayHello();
    /**
     *  Creating Methods
     */

