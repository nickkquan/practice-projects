  /**
   * @constructor RockPaperScissors
   */
function RockPaperScissors(){

  /**
   * Define properties
   * possibleChoices - property that is an array of choices @type {Array}
   * userChoice - property with our user choice @type {String}
   * computerChoice - property with our computer choice @type {String}
   */
    this.possibleChoices = ['rock', 'paper', 'scissors'];
    this.userChoice = null;
    this.computerChoice = null;


  /**
   * getComputerChoice - randomly gets a number from 0-2 and will return a choice based on that index
   * @return {String}
   */
   this.getComputerChoice = function(){
       this.computerChoice = (Math.random()*this.possibleChoices.length-1) >> 0;
       return this.computerChoice;
   };

  /**
   * askUserChoice - function when called will log to our console to choose "rock, paper, or scissors"
   */
    this.askUserChoice = function(){
        prompt("Will it be Rock, Paper, or Scissors?")
    };

  /**
   * submitUserChoice - function when called will verify the submitted choice is valid
   * @return {String}
   */
    this.submitUserChoice = function(choice){
        if(this.possibleChoices.indexOf(choice) !== -1){

        }
    };

  /**
   * init - assigns a value to our computer choice and logs out to the user to submit their choice
   */



  /**
   * reset - reassigns a value to our computer choice, resets user choice and relog to the user to submit their choice
   */



  /**
   * checkForWin - function to compare the random computer choice with the user submitted choice
   * @return {String}
   */

  }
/**
 * Create a new game based off our constructor function
 */
var game = new RockPaperScissors();
// game.init();