// I want my JS object to be called "Die"
// I want my JS object to have two attributes; sides and value
// I want my JS object to have 1 function; roll
// I want to be able to render my objects on the screen and in the console

/////////////
// DICEBAG //
/////////////

function DiceBag() {
  this.dice = [];
}

DiceBag.prototype.addDie = function(die) {
  this.dice.push(die);
}

DiceBag.prototype.rollDice = function() {
  for (var i = 0; i < this.dice.length; i++) {
    this.dice[i].roll();
  }
  this.renderDice;
}

DiceBag.prototype.renderDice = function() {
  $('.dice').empty();
  for (var i = 0; i < this.dice.length; i++) {
    this.dice[i].render('.dice');
  }
}

/////////////
// DICEBAG //
/////////////

function Die(number_of_sides) {
  this.sides = number_of_sides;
  this.value = 1;
  this.name = null;
}

Die.prototype.roll = function() {
  this.value = Math.floor((Math.random()*this.sides)+1);
  $('#die_' + this.name).text(this.value);
}

Die.prototype.render = function(append_to_element) {
  $element = append_to_element
  $($element).append('<div class="die">' + this.value + '</div>');
}

///////////////
// CALLBACKS //
///////////////

$(document).ready(function() {

  var diceBag = new DiceBag();
  
  $('#roller button.add').on('click', function() {
    //$('.dice').append('<div class="die">' + var + '</div>');
    // Add a new die to the die array.

    diceBag.addDie(new Die(20));
    diceBag.renderDice();
    console.log(diceBag);
  });

  $('#roller button.roll').on('click', function() {
    // $('.die').each(function(k, die) {
    //   var value = Math.floor((Math.random()*20)+1);
    //   $(die).text(value);
    // });
    
    diceBag.rollDice();
    diceBag.renderDice();
    console.log(diceBag);

  });
});
