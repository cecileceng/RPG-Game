//VARIABLES
var state = "iCanHazHero";
var chosenHero = null;
var chosenFoe = null;
// Characters and Stats (object within object)
var characters = {
	zoey: {
	name: "Zoey Samaras",
	hp: 100,
	attack: 20,
	counter: 15,
	},
	marie: {
	name: "Marie Lambeau",
	hp: 100,
	attack: 15,
	counter: 5,
	},
	sistermary: {
	name: "Sister Mary",
	hp: 100,
	attack: 20,
	counter: 10,
	},
	skids: {
	name: "Skid's O'Toole",
	hp: 100,
	attack: 15,
	counter: 10,
	}
};

//FUNCTIONS
function cthuluTime(){
	$('.allCharas').click(function(e) {
		console.log("cthuluTime = " + state);
		switch(state) {
		    case "iCanHazHero":
		    	console.log(this.id);
				selectHero(this);
				state = "iCanHazFoe";
		        break;
		    case "iCanHazFoe":
		        selectFoe(this);
		        state = "timeToFight";
		        break;
		} 
	});
	$('#attack-btn').click(function(e) {
		if (state == "timeToFight") {
			fightTime();
		} 
	});
	$(document).ready(function(){
		$(".btn-info").click(function(){
			location.reload();
		});
	});
};

function selectHero(heroDiv) {
	var heroContainer = $(heroDiv);
	heroContainer.appendTo('#hero');
	heroContainer.removeClass('allCharas');
	heroContainer.addClass('hero-img good');
	chosenHero = characters[heroDiv.id]
	$('#hero-hp').html(chosenHero.hp);
	console.log("Selected hero: " + JSON.stringify(chosenHero));
}

function selectFoe(foeDiv) {
	var foeContainer = $(foeDiv);
	foeContainer.appendTo('#foe');
	foeContainer.removeClass('allCharas');
	foeContainer.addClass('foe-img evil');
	chosenFoe = characters[foeDiv.id];
	$('#foe-hp').html(chosenFoe.hp);
	console.log("Selected foe: " + JSON.stringify(chosenFoe));
}

function fightTime() {
	damage(chosenFoe, chosenHero.attack);
	damage(chosenHero, chosenFoe.counter);
	$('#foe-hp').html(chosenFoe.hp);
	$('#hero-hp').html(chosenHero.hp);

	if (chosenFoe.hp <= 0) {
		$('.evil').addClass('defeated');
		if ($('.allCharas').length > 0) {
			alert("You have defeated " + chosenFoe.name + ". Please select another foe.");
			gainPower(chosenHero, chosenFoe);
			console.log(chosenHero.attack);
			state = "iCanHazFoe";
		}	else {
			alert("After neutralizing all that would relish the chance to resurrect the calamity, " + 
				chosenHero.name + " pilfered the bodies for ammunition and any other useful items. If " + 
				chosenHero.name + " was going to stop Cthulu from destroying the world then every bullet counted.");
		}
	} else if (chosenHero.hp <= 0) {
		state = "hesDeadJim";
		alert("After taking so much damage " + chosenHero.name +
		" began sputtering blood as their sharp breaths began slowing down. As " 
		+ chosenHero.name + "\'s vision began to blur, thoughts of the impending doom that would befall the world flooded " + 
		chosenHero.name + "\'s mind with the devastating regret of not having been able to do anything about it.");
	}
}

function damage(character, amount) {
	character.hp -= amount;
	if (character.hp <= 0 ) {
		character.hp = 0;
	}
	console.log(character.name + " has " + character.hp);
}

function gainPower(winner, loser) {
	winner.attack += loser.attack;

}

//PROGRAM
cthuluTime();
