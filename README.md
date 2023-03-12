# Virtual Pet Project

## Description
This is my virtual pet project, created during my studies of JavaScript with Command Shift's bootcamp.
This was an exercise in test-driven-development. 
To build the pet I had to write unit tests, and then write functions which passed these tests.
The project is intended to be run in the Node REPL, which is where I feature tested it.
You will therefore need to have node.js installed on your machine to run this project.
The virtual pet can be fed, exercised, grow up and have children. The pet can also die, so be careful!

## How-to
1. Download the project to your machine, and navigate to the ./virtualpet directory in your command line.

2. Open the Node REPL - { $node }

3. Initalize the pet constructor function. { const pet = require('./src/pet'); }

4. Now you can create and name your pet. { const Fido = new pet('Fido'); }

5. Your pet's initial stats are as follows: 

    name: 'Fido',
    
    age: 0,
    
    hunger: 0,
    
    fitness: 10,
    
    children: []
    
6. There are several functions you can apply to your pet to change these stats:

 .growUp() - Increases age by 1, increase hunger by 5, decrease fitness by 3.
 	
 .walk() - Increase fitness by 4, to a maximum of 10.
 	
 .feed() - Decrease hunger by 3, to a minimum of 0.
 	
 .checkUp() - This will print a message telling you how your pet is doing (hungry, needs a walk, dead?).
 	
 .adoptChild() - This function operates on the name of your original pet and takes your desired adoptee as an argument.
 	 
 	For example, { Fido.adoptChild(FidoJr) } would add FidoJr to Fido's children property as follows:
 			
 	 name: 'Fido',
    	 age: 0,
      	 hunger: 0,
      	 fitness: 10,
      	 children: 
      		  [{
        	  name: 'FidoJr',
        	  age: 0,
        	  hunger: 0,
        	  fitness: 10,
        	  children: [],
      		  }]
      			  
 	Note that you'll need to construct any desired children { const FidoJr = new pet('FidoJr'); }
 	before passing them into the .adoptChild() function.
 	
 	You can access your children through their name, or through their place in the parent's "children" property array, eg:
 	
 	{ Fido.children[0].feed() }

 
7. Your pet can die :(. If your pet's age is 30 or greater, it's hunger is 10 or greater, or if it's fitness is 0 or fewer, your pet will die. 
The .walk, .growUp and .feed functions will cease to work, and will instead return a message informing you of your pet's passing.
Make sure you're regularly checking your pet's stats by entering your pet's name into the command line, and using the.feed() and .walk() functions to keep them nice and healthy!
    

## Credits

Jordan Noble
https://github.com/JordsCodes

Command Shift 
https://github.com/CommandShiftHQ


 			
			
 			
 			
 			
 			
 			
 			
 			
 			
 			
 			
 			
 			

