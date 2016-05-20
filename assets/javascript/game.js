//VARIABLES
var iCanHazHero = "";
var iCanHazFoe = "";
var chosenHero = "";
var chosenFoe = "";
var defeated = "";
// Characters and Stats (object within object)
var characters = {
	agnes: {
	hp: 250,
	attack: 20,
	counter: 10,
	href: 'assets/images/agnes.jpg'
	},
	marie: {
	hp: 150,
	attack: 15,
	counter: 10,
	href: 'assets/images/marie.jpg'
	},
	sistermary: {
	hp: 300,
	attack: 10,
	counter: 25,
	href: 'assets/images/sister-mary.jpg'
	},
	skids: {
	hp: 250,
	attack: 10,
	counter: 20,
	href: 'assets/images/skids.jpg'
	}
/* 
	daisy: {
	hp: 150,
	attack: 15,
	counter: 10,
	href: 'assets/images/daisy.jpg'
	},
	monty: {
	hp: 300,
	attack: 20,
	counter: 15,
	href: 'assets/images/monterrey.jpg'
	},
*/
};

//HP as stats var
var agnesHp = characters.agnes.hp;
var marieHp = characters.marie.hp;
var sistermaryHp = characters.sistermary.hp;
var skidsHp = characters.skids.hp;
/*
var daisyHp = characters.daisy.hp;
var montyHp = characters.monty.hp;
*/
console.log("Agnes HP: " + agnesHp)

//AP as stats var
var agnesAp = characters.agnes.attack;
var marieAp = characters.marie.attack;
var sistermaryAp = characters.sistermary.attack;
var skidsAp = characters.skids.attack;
console.log("Agnes AP: " + agnesAp)

//CAP as stats var
var agnesCp = characters.agnes.counter;
var marieCp = characters.marie.counter;
var sistermaryCp = characters.sistermary.counter;
var skidsCp = characters.skids.counter;
console.log('Agnes CP: ' + agnesCp)

/* Adapted code from Rob
document.getElementById('agnes').on('click', function(e) { 
  var characterBoxId = e.target.id;
  console.log(e);
  console.log(characters[characterBoxId].attack)
})
*/

//FUNCTIONS
/*
$("#id").css("display", "none");
for show:

$("#id").css("display", "");
for hide*/

function cthuluTime(){
	$('.allCharas').click(function(e) {
	$(this).appendTo('#hero');
// $(this)addClass("good")
console.log(this)
console.log('Chosen Hero: ' + chosenHero);
	});
};

/*	function showDiv()
	{
	$('characters.href').html("display", "none")
	}*/
/*
$( ".selectable" ).click(function(e) {
	if (iCanHazHero=="") {
		var chosenHero = $(this);
  		$("#id").append(chosenHero);
 		iCanHazHero = "full";
  		$(this).addClass(".hero-img");
  		console.log(chosenHero);
/*
if {
	hero is full then .addClass('.hero-img')
}
*/
/*
function selectHero(){
	var iCanHazHero = undefined;
	$("#hero").append();
	$('chosenHero')addClass('#hero-img')
}
*/
/*
if enemies.hp <= 0 {
	$('#id').hide();
}

if enemies =0 && hp >=1 = true {
	}
		var html = 
		"<p>After neutralizing all that would relish the chance to resurrect the calamity, " + selected + " pilfered the bodies for ammunition and any other useful items. If " + selected + " was going to stop Cthulu from destroying the world then every bullet counted.</p>" 
		;
		document.querySelector("#outcome").innerHTML = html;
} else if enemies >1 && hp <=0 = true {
	var html = 
		"<p>After taking so much damage " + selected + " began sputtering blood as their sharp breaths began slowing down. As " + selected + "\' vision began to blur, thoughts of the impending doom that would befall the world flooded " + selected + "\'s mind with the devastating regret of not having been able to do anything about it.</p>" 
		;
		document.querySelector("#outcome").innerHTML = html;
}
*/
//PROGRAM
cthuluTime();

//Order of Operations
/* Select Character
	has to store the info that it's selected
All other Characters Covert to Enemies
Click on Enemy
Enemy gets sent to Defender area 
Buttons added for Attack
HP counter displayed and goes lower for Attacker and Defender
At 0 hp for Enemy display win screen and move on to click next Enemy
Previous enemy grayed out
	Click on Enemy line 18-22 code reuse?
When there are no enemies left and Hero is > 0 display winner screen -- reset
If hero < || = 0  display defeated screen -- reset
*/

//Notes and Code Graveyard - code I don't know what to do with but am too scared to delete forever
/* Code from Rob
var chars = {
	legolas: {
  	hp: 100,
    attack: 200,
    href: 'ndkjhfse'

  },
  frodo: {
  	hp: 300,
    attack: 100,
    href: 'jhfdsh'
  }
};

var legolasHp = chars.legolas.hp;
console.log(legolasHp);

document.getElementById('legolas').on('click', function(e) { 
  var characterBoxId = e.target.id;
  console.log(e);
  console.log(chars[characterBoxId].attack)
})
*/
/*
Each character in the game has 3 attributes: Health Points, Attack Power, and Counter Attack Power.

Each time the player attacks, their character's Attack Power increases by its base Attack Power. So if the base Attack Power is 6, each attack will increase the Attack Power by 6. (12, 18, 24, 30 etc...)

The enemy character only has Counter Attack Power and their Counter Attack Power never changes.

The Health Points, Attack Power, and Counter Attack Power of each character will be different.

None of the characters in the game can heal or recover Health Points, so the point of the game is to pick a character and fight an enemy that has low Counter Attack Power first and build up your own Attack Power before you lose all your Health Points.

Depending on game play, you can win or lose with any of the characters in the game.

Object is a garbage bag order is not preserved
Array is ordered

Example from Lisa:
$( ".character" ).click(function(e) {
	if (myHero=="") {
		var heroChoice = $(this);
  		$(".heroSpot").append(heroChoice);
  		$(".startHero").hide();
  		heroName  = $(this).attr('id');
// this selects the ID name of the character & makes it into a string, stores it in this variable
  		heroGossip = chars[heroName].gossip;
// this selects the gossip property, it's able to select from a string because of brackets
  		myHero = "full";
  		$(this).addClass("heroSpot");
  		console.log(heroGossip);
  		$(this).addClass("col-md-4");
  		$(this).removeClass("character");
  		$(this).removeClass("col-md-3");
  		$(".lead").html("Now choose a villain to vanquish...");

*/

//	$('#agnes').on('click', 'appendTo'(#hero));
/*
	$('#marie').click(function(e) {
	$('#marie').appendTo('#hero');

	$('#sistermary').click(function(e) {
	$('#sistermary').appendTo('#hero');

	$('#skids').click(function(e) {
	$('#skids').appendTo('#hero');
*/

//LOOK FOR FUNC IN JQUERY .css to change CSS also add.class remove.class .toggle (display display none/block)
