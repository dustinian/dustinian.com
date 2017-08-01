/*jslint browser:true */
function CopyResult() {
	'use strict';
	document.getElementById('output_result').select();
	document.execCommand('copy');
	}
function ClearResult() {
	'use strict';
	document.getElementById('output_result').innerHTML = null;
	document.getElementById('output_log').innerHTML = null;
	}
function RollMajor() {
	'use strict';
	document.getElementById('output_result').innerHTML += "<li>Major Treasure:" + MajorRandomTreasure() + "</li>";
	}
function RollMinor() {
	'use strict';
	document.getElementById('output_result').innerHTML += "<li>Minor Treasure:" + MinorRandomTreasure() + "</li>";
	}
function MajorRandomTreasure() {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure = "<ul><li>";
	if (roll < 6) {
		treasure += "Two rolls on the Minor Random Treasure table:";
		treasure += "<ul>";
		treasure += "<li>Minor Treasure: " + MinorRandomTreasure() + "</li>";
		treasure += "<li>Minor Treasure: " + MinorRandomTreasure() + "</li>";
		treasure += "</ul>";
	} else if (roll < 16) {
		treasure += "Three rolls on the Minor Random Treasure table:";
		treasure += "<ul>";
		treasure += "<li>Minor Treasure: " + MinorRandomTreasure() + "</li>";
		treasure += "<li>Minor Treasure: " + MinorRandomTreasure() + "</li>";
		treasure += "<li>Minor Treasure: " + MinorRandomTreasure() + "</li>";
		treasure += "</ul>";
	} else if (roll < 38) {
		treasure += RollDice(10, 6) + " (10d6) GP";
	} else if (roll < 50) {
		treasure += RollDice(10, 6) + " (10d6) GP</li><li>" + RollDice(20, 6) + " (20d6) GP worth of gems/jewelry/goods.";
	} else if (roll < 55) {
		treasure += "Masterwork Weapon";
	} else if (roll < 80) {
		treasure += "Minor Magic Item: ";
		treasure += MinorMagicItem();
	} else if (roll < 100) {
		treasure += "Major Magic Item: ";
		treasure += MajorMagicItem();
	} else if (roll < 101) {
		treasure += "Treasure map (roll again)...";
		treasure += "</li>"
		treasure += MajorRandomTreasure();
	} else {
		treasure += "Something weird happened. You rolled a " + roll + " and the script couldn't handle that number...";
	}
	treasure += "</li></ul>";
	return treasure;
	}
function MinorRandomTreasure() {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure = "<ul><li>";
	if (roll < 21) {
		treasure += RollDice(3, 6) + " (3d6) GP";
	} else if (roll < 49) {
		treasure += RollDice(5, 10) + " (5d10) GP";
	} else if (roll < 64) {
		treasure += RollDice(5, 10) + " (5d10) GP</li><li>" + RollDice(5, 10) + " (5d10) GP worth of gems/jewelry/goods";
	} else if (roll < 74) {
		treasure += RollDice(2, 10) + " (2d10) GP</li><li>" + RollDice(8, 10) + " (8d10) GP worth of gems/jewelry/goods";
	} else if (roll < 75) {
		treasure += "Masterwork Weapon";
	} else if (roll < 100) {
		treasure += "Minor Magic Item: ";
		treasure += MinorMagicItem();
	} else if (roll < 101) {
		treasure += "Treasure map (roll again)...";
		treasure += "</li>"
		treasure += MinorRandomTreasure();
	} else {
		treasure += "Something weird happened. You rolled a " + roll + " and the script couldn't handle that number...";
	}
	treasure += "</li></ul>";
	return treasure;
	}
function RollDice(dice, die) {
	var total = 0;
	for (roll = 0; roll < dice; roll++) {
		total = total + Math.floor((Math.random() * die)) + 1;
		}
	return total;
	}
function MinorMagicItem() {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure; //= "<ul><li>";
	if (roll < 3) {
		treasure += "Magic Armor, ";
		treasure += MinorMagicArmor();
	} else if (roll < 5) {
		treasure += "Magic Shield, ";
		treasure += MagicShield();
	} else if (roll < 10) {
		treasure += "Magic Weapon, ";
		treasure += MinorMagicWeapon();
	} else if (roll < 45) {
		treasure += "Potion of ";
		treasure += Potion();
	} else if (roll < 47) {
		treasure += "Ring of ";
		treasure += Ring();
	} else if (roll < 82) {
		treasure += "Scroll of ";
		treasure += MinorScroll();
	} else if (roll < 92) {
		treasure += "Wand of ";
		//treasure += MinorWand();
	} else if (roll < 101) {
		treasure += "Wondrous Item, ";
		//treasure += MinorWondrousItem();
	} else {
		treasure += "Something weird happened. You rolled a " + roll + " and the script couldn't handle that number...";
	}
	//treasure += "</li></ul>";
	return treasure;
	}
function MajorMagicItem() {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure; //= "<ul><li>";
	if (roll < 10) {
		treasure += "Magic Armor, ";
		treasure += MajorMagicArmor();
	} else if (roll < 18) {
		treasure += "Magic Shield, ";
		treasure += MagicShield();
	} else if (roll < 28) {
		treasure += "Magic Weapon, ";
		treasure += MajorMagicWeapon();
	} else if (roll < 38) {
		treasure += "Potion of ";
		treasure += Potion();
	} else if (roll < 48) {
		treasure += "Ring of ";
		treasure += Ring();
	} else if (roll < 64) {
		treasure += "Scroll of ";
		treasure += MajorScroll();
	} else if (roll < 67) {
		treasure += "Staff of ";
		treasure += Staff();
	} else if (roll < 83) {
		treasure += "Wand of ";
		//treasure += MajorWand();
	} else if (roll < 101) {
		treasure += "Wondrous Item, ";
		//treasure += MajorWondrousItem();
	} else {
		treasure += "Something weird happened. You rolled a " + roll + " and the script couldn't handle that number...";
	}
	//treasure += "</li></ul>";
	return treasure;
	}
function MinorMagicArmor() {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure; //= "<ul><li>";
	if (roll < 63) {
		treasure += "+1 Armor";
	} else if (roll < 66) {
		treasure += "+1 Glamered Half-Plate";
	} else if (roll < 72) {
		treasure += "+1 Mithral Chainmail";
	} else if (roll < 78) {
		treasure += "+1 Poison-Resistant Scale Mail";
	} else if (roll < 86) {
		treasure += "+1 Shadow Studded Leather";
	} else if (roll < 101) {
		treasure += "+2 Armor";
	} else {
		treasure += "Something weird happened. You rolled a " + roll + " and the script couldn't handle that number...";
	}
	//treasure += "</li></ul>";
	return treasure;
	}
function MajorMagicArmor() {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure; //= "<ul><li>";
	if (roll < 14) {
		treasure += "+1 Armor";
	} else if (roll < 19) {
		treasure += "+1 Glamered Half-Plate";
	} else if (roll < 28) {
		treasure += "+1 Mithral Chainmail";
	} else if (roll < 37) {
		treasure += "+1 Poison-Resistant Scale Mail";
	} else if (roll < 49) {
		treasure += "+1 Shadow Studded Leather";
	} else if (roll < 101) {
		treasure += "+2 Armor";
	} else {
		treasure += "Something weird happened. You rolled a " + roll + " and the script couldn't handle that number...";
	}
	//treasure += "</li></ul>";
	return treasure;
	}
function MagicShield() {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure; //= "<ul><li>";
	if (roll < 81) {
		treasure += "+1 Shield";
	} else if (roll < 83) {
		treasure += "+1 Arrow Catching Shield";
	} else if (roll < 85) {
		treasure += "+1 Blinding Shield";
	} else if (roll < 88) {
		treasure += "+1 Feathered Shield";
	} else if (roll < 91) {
		treasure += "+1 Light Fortification Shield";
	} else if (roll < 101) {
		treasure += "+2 Shield";
	} else {
		treasure += "Something weird happened. You rolled a " + roll + " and the script couldn't handle that number...";
	}
	//treasure += "</li></ul>";
	return treasure;
	}
function MinorMagicWeapon() {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure; //= "<ul><li>";
	if (roll < 89) {
		treasure += "+1 Weapon";
	} else if (roll < 90) {
		treasure += "+2 Weapon";
	} else if (roll < 91) {
		treasure += "Dragon-Slaying Ammunition";
	} else if (roll < 94) {
		treasure += "Javelin of Lightning";
	} else if (roll < 96) {
		treasure += "Masterwork Silver Dagger";
	} else if (roll < 101) {
		treasure += "Silver Ammunition";
	} else {
		treasure += "Something weird happened. You rolled a " + roll + " and the script couldn't handle that number...";
	}
	//treasure += "</li></ul>";
	return treasure;
	}
function MajorMagicWeapon () {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure; //= "<ul><li>";
	if (roll < 47) {
		treasure += "+1 Weapon";
	} else if (roll < 50) {
		treasure += "+1 Flaming Longsword";
	} else if (roll < 53) {
		treasure += "+1 Frost Battleaxe";
	} else if (roll < 56) {
		treasure += "+1 Keen Shortbow";
	} else if (roll < 60) {
		treasure += "+1 Orc-Bane Light Hammer";
	} else if (roll < 63) {
		treasure += "+1 Shock Warhammer";
	} else if (roll < 66) {
		treasure += "+1 Undead-Bane Light Mace";
	} else if (roll < 91) {
		treasure += "+2 Weapon";
	} else if (roll < 92) {
		treasure += "Dragon-Slaying Ammunition";
	} else if (roll < 101) {
		treasure += "Javelin of Lightning";
	} else {
		treasure += "Something weird happened. You rolled a " + roll + " and the script couldn't handle that number...";
	}
	//treasure += "</li></ul>";
	return treasure;
	}
function Potion() {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure; //= "<ul><li>";
	if (roll < 15) {
		treasure += "Cure Light Wounds";
	} else if (roll < 21) {
		treasure += "Feather Fall";
	} else if (roll < 27) {
		treasure += "Mage Armor";
	} else if (roll < 33) {
		treasure += "Protection From Evil";
	} else if (roll < 39) {
		treasure += "Remove Fear";
	} else if (roll < 45) {
		treasure += "Sanctuary";
	} else if (roll < 51) {
		treasure += "Shield of Faith";
	} else if (roll < 54) {
		treasure += "Aid";
	} else if (roll < 58) {
		treasure += "Bull's Strength";
	} else if (roll < 63) {
		treasure += "Cure Moderate Wounds";
	} else if (roll < 66) {
		treasure += "Delay Poison";
	} else if (roll < 70) {
		treasure += "Invisibility";
	} else if (roll < 73) {
		treasure += "Levitate";
	} else if (roll < 77) {
		treasure += "Resist Energy (Acid)";
	} else if (roll < 81) {
		treasure += "Resist Energy (Cold)";
	} else if (roll < 85) {
		treasure += "Resist Energy (Electricity)";
	} else if (roll < 91) {
		treasure += "Resist Energy (Fire)";
	} else if (roll < 94) {
		treasure += "Cure Serious Wounds";
	} else if (roll < 96) {
		treasure += "Fly";
	} else if (roll < 98) {
		treasure += "Haste";
	} else if (roll < 99) {
		treasure += "Remove Curse";
	} else if (roll < 100) {
		treasure += "Remove Disease";
	} else if (roll < 101) {
		treasure += "Water Breathing";
	} else {
		treasure += "Something weird happened. You rolled a " + roll + " and the script couldn't handle that number...";
	}
	//treasure += "</li></ul>";
	return treasure;
	}
function Ring() {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure; //= "<ul><li>";
	if (roll < 16) {
		treasure += "Ring of Climbing";
	} else if (roll < 31) {
		treasure += "Ring of Feather Falling";
	} else if (roll < 51) {
		treasure += "Ring of Jumping";
	} else if (roll < 81) {
		treasure += "Ring of Protection +1";
	} else if (roll < 91) {
		treasure += "Ring of Sustenance";
	} else if (roll < 101) {
		treasure += "Ring of Swimming";
	} else {
		treasure += "Something weird happened. You rolled a " + roll + " and the script couldn't handle that number...";
	}
	//treasure += "</li></ul>";
	return treasure;
	}
function MinorScroll() {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure; //= "<ul><li>";
	if (roll < 6) {
		treasure += "Bless";
	} else if (roll < 14) {
		treasure += "Burning Hands";
	} else if (roll < 20) {
		treasure += "Cause Fear";
	} else if (roll < 27) {
		treasure += "Cure Light Wounds";
	} else if (roll < 32) {
		treasure += "Detect Secret Doors";
	} else if (roll < 35) {
		treasure += "Disguise Self";
	} else if (roll < 39) {
		treasure += "Doom";
	} else if (roll < 47) {
		treasure += "Mage Armor";
	} else if (roll < 55) {
		treasure += "Magic Missile";
	} else if (roll < 61) {
		treasure += "Protection from Evil";
	} else if (roll < 65) {
		treasure += "Remove Fear";
	} else if (roll < 70) {
		treasure += "Shield of Faith";
	} else if (roll < 76) {
		treasure += "Sleep";
	} else if (roll < 78) {
		treasure += "Acid Arrow";
	} else if (roll < 80) {
		treasure += "Bull's Strength";
	} else if (roll < 82) {
		treasure += "Cure Moderate Wounds";
	} else if (roll < 83) {
		treasure += "Darkness";
	} else if (roll < 85) {
		treasure += "Delay Poison";
	} else if (roll < 87) {
		treasure += "Hideous Laughter";
	} else if (roll < 89) {
		treasure += "Hold Person";
	} else if (roll < 91) {
		treasure += "Invisibility";
	} else if (roll < 93) {
		treasure += "Knock";
	} else if (roll < 94) {
		treasure += "Levitate";
	} else if (roll < 96) {
		treasure += "Resist Energy";
	} else if (roll < 98) {
		treasure += "Scorching Ray";
	} else if (roll < 99) {
		treasure += "Sound Burst";
	} else if (roll < 100) {
		treasure += "Spiritual Weapon";
	} else if (roll < 101) {
		treasure += "Web";
	} else {
		treasure += "Something weird happened. You rolled a " + roll + " and the script couldn't handle that number...";
	}
	//treasure += "</li></ul>";
	return treasure;
	}
function MajorScroll() {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure; //= "<ul><li>";
	if (roll < 11) {
		treasure += "Two Random Minor Scrolls";
	} else if (roll < 21) {
		treasure += "Three Random Minor Scrolls";
	} else if (roll < 26) {
		treasure += "Four Random Minor Scrolls";
	} else if (roll < 28) {
		treasure += "Clairvoyance";
	} else if (roll < 34) {
		treasure += "Cure Serious Wounds";
	} else if (roll < 37) {
		treasure += "Daylight";
	} else if (roll < 42) {
		treasure += "Dispel Magic";
	} else if (roll < 45) {
		treasure += "Displacement";
	} else if (roll < 51) {
		treasure += "Fireball";
	} else if (roll < 56) {
		treasure += "Fly";
	} else if (roll < 60) {
		treasure += "Haste";
	} else if (roll < 63) {
		treasure += "Invisibility Purge";
	} else if (roll < 68) {
		treasure += "Lightning Bolt";
	} else if (roll < 70) {
		treasure += "Prayer";
	} else if (roll < 73) {
		treasure += "Remove Curse";
	} else if (roll < 76) {
		treasure += "Remove Disease";
	} else if (roll < 79) {
		treasure += "Searing Light";
	} else if (roll < 81) {
		treasure += "Speak with Dead";
	} else if (roll < 84) {
		treasure += "Stinking Cloud";
	} else if (roll < 87) {
		treasure += "Suggestion";
	} else if (roll < 92) {
		treasure += "Vampiric Touch";
	} else if (roll < 95) {
		treasure += "Water Breathing";
	} else if (roll < 96) {
		treasure += "Cure Critical Wounds";
	} else if (roll < 97) {
		treasure += "Neutralize Poison";
	} else if (roll < 98) {
		treasure += "New Life";
	} else if (roll < 99) {
		treasure += "Stoneskin";
	} else if (roll < 100) {
		treasure += "Teleport";
	} else if (roll < 101) {
		treasure += "Wall of Ice";
	} else {
		treasure += "Something weird happened. You rolled a " + roll + " and the script couldn't handle that number...";
	}
	//treasure += "</li></ul>";
	return treasure;
	}
function Staff() {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure; //= "<ul><li>";
	if (roll < 61) {
		treasure += "Curing";
	} else if (roll < 81) {
		treasure += "Guarding";
	} else if (roll < 91) {
		treasure += "Scorching";
	} else if (roll < 101) {
		treasure += "Swampy Dread";
	} else {
		treasure += "Something weird happened. You rolled a " + roll + " and the script couldn't handle that number...";
	}
	//treasure += "</li></ul>";
	return treasure;
	}