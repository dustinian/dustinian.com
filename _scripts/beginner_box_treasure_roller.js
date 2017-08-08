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
	document.getElementById('output_result').innerHTML += "<li><strong>Major Treasure:</strong> " + MajorRandomTreasure() + "</li>";
	}
function RollMinor() {
	'use strict';
	document.getElementById('output_result').innerHTML += "<li><strong>Minor Treasure:</strong> " + MinorRandomTreasure() + "</li>";
	}
function RollDice(dice, die) {
	var total = 0;
	for (roll = 0; roll < dice; roll++) {
		total = total + Math.floor((Math.random() * die)) + 1;
		}
	return total;
	}
function MajorRandomTreasure() {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure = "<em>" + roll + "&percnt;</em>, ";
	if (roll < 6) {
		treasure += "Two rolls on the Minor Random Treasure table:";
		treasure += "<ul>";
		treasure += "<li><strong>Minor Treasure:</strong> " + MinorRandomTreasure() + "</li>";
		treasure += "<li><strong>Minor Treasure:</strong> " + MinorRandomTreasure() + "</li>";
		treasure += "</ul>";
	} else if (roll < 16) {
		treasure += "Three rolls on the Minor Random Treasure table:";
		treasure += "<ul>";
		treasure += "<li><strong>Minor Treasure:</strong> " + MinorRandomTreasure() + "</li>";
		treasure += "<li><strong>Minor Treasure:</strong> " + MinorRandomTreasure() + "</li>";
		treasure += "<li><strong>Minor Treasure:</strong> " + MinorRandomTreasure() + "</li>";
		treasure += "</ul>";
	} else if (roll < 38) {
		treasure += "Gold; 10d6 GP; <strong>" + RollDice(10, 6) + " GP</strong>.";
	} else if (roll < 50) {
		treasure += "Gold and Goods:<ul><li>10d6 GP; <strong>" + RollDice(10, 6) + " GP</strong>.</li><li>20d6 GP worth; <strong>" + RollDice(20, 6) + " GP worth of gems/jewelry/goods</strong>.</li></ul>";
	} else if (roll < 55) {
		treasure += "<strong>Masterwork Weapon</strong>.";
	} else if (roll < 80) {
		treasure += "Minor Magic Item; " + MinorMagicItem();
	} else if (roll < 100) {
		treasure += "Major Magic Item; " + MajorMagicItem();
	} else if (roll < 101) {
		treasure += "<strong>Treasure Map</strong> <em>(roll again)...</em>";
	} else {
		treasure += "Something weird happened.";
	}
	return treasure;
	}
function MinorRandomTreasure() {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure = "<em>" + roll + "&percnt;</em>, ";
	if (roll < 21) {
		treasure += "Gold; 3d6 GP; <strong>" + RollDice(3, 6) + " GP</strong>.";
	} else if (roll < 49) {
		treasure += "Gold; 5d10 GP; <strong>" + RollDice(5, 10) + " GP</strong>.";
	} else if (roll < 64) {
		treasure += "Gold and Goods:<ul><li>5d10 GP; <strong>" + RollDice(5, 10) + " GP</strong>.</li><li>5d10 GP worth; <strong>" + RollDice(5, 10) + " GP worth of gems/jewelry/goods</strong>.</li></ul>";
	} else if (roll < 74) {
		treasure += "Gold and Goods:<ul><li>2d10 GP; <strong>" + RollDice(2, 10) + " GP</strong>.</li><li>8d10 GP worth; <strong>" + RollDice(8, 10) + " GP worth of gems/jewelry/goods</strong>.</li></ul>";
	} else if (roll < 75) {
		treasure += "<strong>Masterwork Weapon</strong>.";
	} else if (roll < 100) {
		treasure += "Minor Magic Item; " + MinorMagicItem();
	} else if (roll < 101) {
		treasure += "<strong>Treasure Map</strong> <em>(roll again)...</em>";
	} else {
		treasure += "Something weird happened.";
	}
	return treasure;
	}
function MinorMagicItem() {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure = "<em>" + roll + "&percnt;</em>, ";
	if (roll < 3) {
		treasure += "Magic Armor; ";
		treasure += MinorMagicArmor();
	} else if (roll < 5) {
		treasure += "Magic Shield; ";
		treasure += MagicShield();
	} else if (roll < 10) {
		treasure += "Magic Weapon; ";
		treasure += MinorMagicWeapon();
	} else if (roll < 45) {
		treasure += "Potion; ";
		treasure += Potion();
	} else if (roll < 47) {
		treasure += "Ring; ";
		treasure += Ring();
	} else if (roll < 82) {
		treasure += "Scroll; ";
		treasure += MinorScroll();
	} else if (roll < 92) {
		treasure += "Wand; ";
		treasure += MinorWand();
	} else if (roll < 101) {
		treasure += "Wondrous Item; ";
		treasure += MinorWondrousItem();
	} else {
		treasure += "Something weird happened.";
	}
	return treasure;
	}
function MajorMagicItem() {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure = "<em>" + roll + "&percnt;</em>, ";
	if (roll < 10) {
		treasure += "Magic Armor; ";
		treasure += MajorMagicArmor();
	} else if (roll < 18) {
		treasure += "Magic Shield; ";
		treasure += MagicShield();
	} else if (roll < 28) {
		treasure += "Magic Weapon; ";
		treasure += MajorMagicWeapon();
	} else if (roll < 38) {
		treasure += "Potion; ";
		treasure += Potion();
	} else if (roll < 48) {
		treasure += "Ring;  ";
		treasure += Ring();
	} else if (roll < 64) {
		treasure += "Scroll; ";
		treasure += MajorScroll();
	} else if (roll < 67) {
		treasure += "Staff; ";
		treasure += Staff();
	} else if (roll < 83) {
		treasure += "Wand; ";
		treasure += MajorWand();
	} else if (roll < 101) {
		treasure += "Wondrous Item; ";
		treasure += MajorWondrousItem();
	} else {
		treasure += "Something weird happened.";
	}
	return treasure;
	}
function MinorMagicArmor() {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure = "<em>" + roll + "&percnt;</em>, ";
	if (roll < 63) {
		treasure += "<strong>+1 Armor</strong>.";
	} else if (roll < 66) {
		treasure += "<strong>+1 Glamered Half-Plate</strong>.";
	} else if (roll < 72) {
		treasure += "<strong>+1 Mithral Chainmail</strong>.";
	} else if (roll < 78) {
		treasure += "<strong>+1 Poison-Resistant Scale Mail</strong>.";
	} else if (roll < 86) {
		treasure += "<strong>+1 Shadow Studded Leather</strong>.";
	} else if (roll < 101) {
		treasure += "<strong>+2 Armor</strong>.";
	} else {
		treasure += "Something weird happened.";
	}
	return treasure;
	}
function MajorMagicArmor() {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure = "<em>" + roll + "&percnt;</em>, ";
	if (roll < 14) {
		treasure += "<strong>+1 Armor</strong>.";
	} else if (roll < 19) {
		treasure += "<strong>+1 Glamered Half-Plate</strong>.";
	} else if (roll < 28) {
		treasure += "<strong>+1 Mithral Chainmail</strong>.";
	} else if (roll < 37) {
		treasure += "<strong>+1 Poison-Resistant Scale Mail</strong>.";
	} else if (roll < 49) {
		treasure += "<strong>+1 Shadow Studded Leather</strong>.";
	} else if (roll < 101) {
		treasure += "<strong>+2 Armor</strong>.";
	} else {
		treasure += "Something weird happened.";
	}
	return treasure;
	}
function MagicShield() {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure = "<em>" + roll + "&percnt;</em>, ";
	if (roll < 81) {
		treasure += "<strong>+1 Shield</strong>.";
	} else if (roll < 83) {
		treasure += "<strong>+1 Arrow Catching Shield</strong>.";
	} else if (roll < 85) {
		treasure += "<strong>+1 Blinding Shield</strong>.";
	} else if (roll < 88) {
		treasure += "<strong>+1 Feathered Shield</strong>.";
	} else if (roll < 91) {
		treasure += "<strong>+1 Light Fortification Shield</strong>.";
	} else if (roll < 101) {
		treasure += "<strong>+2 Shield</strong>.";
	} else {
		treasure += "Something weird happened.";
	}
	return treasure;
	}
function MinorMagicWeapon() {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure = "<em>" + roll + "&percnt;</em>, ";
	if (roll < 89) {
		treasure += "<strong>+1 Weapon</strong>.";
	} else if (roll < 90) {
		treasure += "<strong>+2 Weapon</strong>.";
	} else if (roll < 91) {
		treasure += "<strong>Dragon-Slaying Ammunition</strong>.";
	} else if (roll < 94) {
		treasure += "<strong>Javelin of Lightning</strong>.";
	} else if (roll < 96) {
		treasure += "<strong>Masterwork Silver Dagger</strong>.";
	} else if (roll < 101) {
		treasure += "<strong>Silver Ammunition</strong>.";
	} else {
		treasure += "Something weird happened.";
	}
	return treasure;
	}
function MajorMagicWeapon () {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure = "<em>" + roll + "&percnt;</em>, ";
	if (roll < 47) {
		treasure += "<strong>+1 Weapon</strong>.";
	} else if (roll < 50) {
		treasure += "<strong>+1 Flaming Longsword</strong>.";
	} else if (roll < 53) {
		treasure += "<strong>+1 Frost Battleaxe</strong>.";
	} else if (roll < 56) {
		treasure += "<strong>+1 Keen Shortbow</strong>.";
	} else if (roll < 60) {
		treasure += "<strong>+1 Orc-Bane Light Hammer</strong>.";
	} else if (roll < 63) {
		treasure += "<strong>+1 Shock Warhammer</strong>.";
	} else if (roll < 66) {
		treasure += "<strong>+1 Undead-Bane Light Mace</strong>.";
	} else if (roll < 91) {
		treasure += "<strong>+2 Weapon</strong>.";
	} else if (roll < 92) {
		treasure += "<strong>Dragon-Slaying Ammunition</strong>.";
	} else if (roll < 101) {
		treasure += "<strong>Javelin of Lightning</strong>.";
	} else {
		treasure += "Something weird happened.";
	}
	return treasure;
	}
function Potion() {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure = "<em>" + roll + "&percnt;</em>, ";
	if (roll < 15) {
		treasure += "<strong>Potion of Cure Light Wounds</strong>.";
	} else if (roll < 21) {
		treasure += "<strong>Potion of Feather Fall</strong>.";
	} else if (roll < 27) {
		treasure += "<strong>Potion of Mage Armor</strong>.";
	} else if (roll < 33) {
		treasure += "<strong>Potion of Protection From Evil</strong>.";
	} else if (roll < 39) {
		treasure += "<strong>Potion of Remove Fear</strong>.";
	} else if (roll < 45) {
		treasure += "<strong>Potion of Sanctuary</strong>.";
	} else if (roll < 51) {
		treasure += "<strong>Potion of Shield of Faith</strong>.";
	} else if (roll < 54) {
		treasure += "<strong>Potion of Aid</strong>.";
	} else if (roll < 58) {
		treasure += "<strong>Potion of Bull's Strength</strong>.";
	} else if (roll < 63) {
		treasure += "<strong>Potion of Cure Moderate Wounds</strong>.";
	} else if (roll < 66) {
		treasure += "<strong>Potion of Delay Poison</strong>.";
	} else if (roll < 70) {
		treasure += "<strong>Potion of Invisibility</strong>.";
	} else if (roll < 73) {
		treasure += "<strong>Potion of Levitate</strong>.";
	} else if (roll < 77) {
		treasure += "<strong>Potion of Resist Energy (Acid)</strong>.";
	} else if (roll < 81) {
		treasure += "<strong>Potion of Resist Energy (Cold)</strong>.";
	} else if (roll < 85) {
		treasure += "<strong>Potion of Resist Energy (Electricity)</strong>.";
	} else if (roll < 91) {
		treasure += "<strong>Potion of Resist Energy (Fire)</strong>.";
	} else if (roll < 94) {
		treasure += "<strong>Potion of Cure Serious Wounds</strong>.";
	} else if (roll < 96) {
		treasure += "<strong>Potion of Fly</strong>.";
	} else if (roll < 98) {
		treasure += "<strong>Potion of Haste</strong>.";
	} else if (roll < 99) {
		treasure += "<strong>Potion of Remove Curse</strong>.";
	} else if (roll < 100) {
		treasure += "<strong>Potion of Remove Disease</strong>.";
	} else if (roll < 101) {
		treasure += "<strong>Potion of Water Breathing</strong>.";
	} else {
		treasure += "Something weird happened.";
	}
	return treasure;
	}
function Ring() {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure = "<em>" + roll + "&percnt;</em>, ";
	if (roll < 16) {
		treasure += "<strong>Ring of Climbing</strong>.";
	} else if (roll < 31) {
		treasure += "<strong>Ring of Feather Falling</strong>.";
	} else if (roll < 51) {
		treasure += "<strong>Ring of Jumping</strong>.";
	} else if (roll < 81) {
		treasure += "<strong>Ring of Protection +1</strong>.";
	} else if (roll < 91) {
		treasure += "<strong>Ring of Sustenance</strong>.";
	} else if (roll < 101) {
		treasure += "<strong>Ring of Swimming</strong>.";
	} else {
		treasure += "Something weird happened.";
	}
	return treasure;
	}
function MinorScroll() {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure = "<em>" + roll + "&percnt;</em>, ";
	if (roll < 6) {
		treasure += "<strong>Scroll of Bless</strong>.";
	} else if (roll < 14) {
		treasure += "<strong>Scroll of Burning Hands</strong>.";
	} else if (roll < 20) {
		treasure += "<strong>Scroll of Cause Fear</strong>.";
	} else if (roll < 27) {
		treasure += "<strong>Scroll of Cure Light Wounds</strong>.";
	} else if (roll < 32) {
		treasure += "<strong>Scroll of Detect Secret Doors</strong>.";
	} else if (roll < 35) {
		treasure += "<strong>Scroll of Disguise Self</strong>.";
	} else if (roll < 39) {
		treasure += "<strong>Scroll of Doom</strong>.";
	} else if (roll < 47) {
		treasure += "<strong>Scroll of Mage Armor</strong>.";
	} else if (roll < 55) {
		treasure += "<strong>Scroll of Magic Missile</strong>.";
	} else if (roll < 61) {
		treasure += "<strong>Scroll of Protection from Evil</strong>.";
	} else if (roll < 65) {
		treasure += "<strong>Scroll of Remove Fear</strong>.";
	} else if (roll < 70) {
		treasure += "<strong>Scroll of Shield of Faith</strong>.";
	} else if (roll < 76) {
		treasure += "<strong>Scroll of Sleep</strong>.";
	} else if (roll < 78) {
		treasure += "<strong>Scroll of Acid Arrow</strong>.";
	} else if (roll < 80) {
		treasure += "<strong>Scroll of Bull's Strength</strong>.";
	} else if (roll < 82) {
		treasure += "<strong>Scroll of Cure Moderate Wounds</strong>.";
	} else if (roll < 83) {
		treasure += "<strong>Scroll of Darkness</strong>.";
	} else if (roll < 85) {
		treasure += "<strong>Scroll of Delay Poison</strong>.";
	} else if (roll < 87) {
		treasure += "<strong>Scroll of Hideous Laughter</strong>.";
	} else if (roll < 89) {
		treasure += "<strong>Scroll of Hold Person</strong>.";
	} else if (roll < 91) {
		treasure += "<strong>Scroll of Invisibility</strong>.";
	} else if (roll < 93) {
		treasure += "<strong>Scroll of Knock</strong>.";
	} else if (roll < 94) {
		treasure += "<strong>Scroll of Levitate</strong>.";
	} else if (roll < 96) {
		treasure += "<strong>Scroll of Resist Energy</strong>.";
	} else if (roll < 98) {
		treasure += "<strong>Scroll of Scorching Ray</strong>.";
	} else if (roll < 99) {
		treasure += "<strong>Scroll of Sound Burst</strong>.";
	} else if (roll < 100) {
		treasure += "<strong>Scroll of Spiritual Weapon</strong>.";
	} else if (roll < 101) {
		treasure += "<strong>Scroll of Web</strong>.";
	} else {
		treasure += "Something weird happened.";
	}
	return treasure;
	}
function MajorScroll() {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure = "<em>" + roll + "&percnt;</em>, ";
	if (roll < 11) {
		treasure += "Two Random Minor Scrolls:";
		treasure += "<ul>";
		treasure += "<li>" + MinorScroll() + "</li>";
		treasure += "<li>" + MinorScroll() + "</li>";
		treasure += "</ul>";
	} else if (roll < 21) {
		treasure += "Three Random Minor Scrolls:";
		treasure += "<ul>";
		treasure += "<li>" + MinorScroll() + "</li>";
		treasure += "<li>" + MinorScroll() + "</li>";
		treasure += "<li>" + MinorScroll() + "</li>";
		treasure += "</ul>";
	} else if (roll < 26) {
		treasure += "Four Random Minor Scrolls:";
		treasure += "<ul>";
		treasure += "<li>" + MinorScroll() + "</li>";
		treasure += "<li>" + MinorScroll() + "</li>";
		treasure += "<li>" + MinorScroll() + "</li>";
		treasure += "<li>" + MinorScroll() + "</li>";
		treasure += "</ul>";
	} else if (roll < 28) {
		treasure += "<strong>Scroll of Clairvoyance</strong>.";
	} else if (roll < 34) {
		treasure += "<strong>Scroll of Cure Serious Wounds</strong>.";
	} else if (roll < 37) {
		treasure += "<strong>Scroll of Daylight</strong>.";
	} else if (roll < 42) {
		treasure += "<strong>Scroll of Dispel Magic</strong>.";
	} else if (roll < 45) {
		treasure += "<strong>Scroll of Displacement</strong>.";
	} else if (roll < 51) {
		treasure += "<strong>Scroll of Fireball</strong>.";
	} else if (roll < 56) {
		treasure += "<strong>Scroll of Fly</strong>.";
	} else if (roll < 60) {
		treasure += "<strong>Scroll of Haste</strong>.";
	} else if (roll < 63) {
		treasure += "<strong>Scroll of Invisibility Purge</strong>.";
	} else if (roll < 68) {
		treasure += "<strong>Scroll of Lightning Bolt</strong>.";
	} else if (roll < 70) {
		treasure += "<strong>Scroll of Prayer</strong>.";
	} else if (roll < 73) {
		treasure += "<strong>Scroll of Remove Curse</strong>.";
	} else if (roll < 76) {
		treasure += "<strong>Scroll of Remove Disease</strong>.";
	} else if (roll < 79) {
		treasure += "<strong>Scroll of Searing Light</strong>.";
	} else if (roll < 81) {
		treasure += "<strong>Scroll of Speak with Dead</strong>.";
	} else if (roll < 84) {
		treasure += "<strong>Scroll of Stinking Cloud</strong>.";
	} else if (roll < 87) {
		treasure += "<strong>Scroll of Suggestion</strong>.";
	} else if (roll < 92) {
		treasure += "<strong>Scroll of Vampiric Touch</strong>.";
	} else if (roll < 95) {
		treasure += "<strong>Scroll of Water Breathing</strong>.";
	} else if (roll < 96) {
		treasure += "<strong>Scroll of Cure Critical Wounds</strong>.";
	} else if (roll < 97) {
		treasure += "<strong>Scroll of Neutralize Poison</strong>.";
	} else if (roll < 98) {
		treasure += "<strong>Scroll of New Life</strong>.";
	} else if (roll < 99) {
		treasure += "<strong>Scroll of Stoneskin</strong>.";
	} else if (roll < 100) {
		treasure += "<strong>Scroll of Teleport</strong>.";
	} else if (roll < 101) {
		treasure += "<strong>Scroll of Wall of Ice</strong>.";
	} else {
		treasure += "Something weird happened.";
	}
	return treasure;
	}
function Staff() {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure = "<em>" + roll + "&percnt;</em>, ";
	if (roll < 61) {
		treasure += "<strong>Staff of Curing</strong>.";
	} else if (roll < 81) {
		treasure += "<strong>Staff of Guarding</strong>.";
	} else if (roll < 91) {
		treasure += "<strong>Staff of Scorching</strong>.";
	} else if (roll < 101) {
		treasure += "<strong>Staff of Swampy Dread</strong>.";
	} else {
		treasure += "Something weird happened.";
	}
	return treasure;
	}
function MinorWand() {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure = "<em>" + roll + "&percnt;</em>, ";
	if (roll < 4) {
		treasure += "<strong>Wand of Alarm</strong>.";
	} else if (roll < 9) {
		treasure += "<strong>Wand of Bless</strong>.";
	} else if (roll < 14) {
		treasure += "<strong>Wand of Burning Hands</strong>.";
	} else if (roll < 19) {
		treasure += "<strong>Wand of Cause Fear</strong>.";
	} else if (roll < 22) {
		treasure += "<strong>Wand of Charm Person</strong>.";
	} else if (roll < 27) {
		treasure += "<strong>Wand of Cure Light Wounds</strong>.";
	} else if (roll < 31) {
		treasure += "<strong>Wand of Detect Evil</strong>.";
	} else if (roll < 35) {
		treasure += "<strong>Wand of Detect Secret Doors</strong>.";
	} else if (roll < 38) {
		treasure += "<strong>Wand of Disguise Self</strong>.";
	} else if (roll < 42) {
		treasure += "<strong>Wand of Divine Favor</strong>.";
	} else if (roll < 47) {
		treasure += "<strong>Wand of Doom</strong>.";
	} else if (roll < 51) {
		treasure += "<strong>Wand of Feather Fall</strong>.";
	} else if (roll < 56) {
		treasure += "<strong>Wand of Mage Armor</strong>.";
	} else if (roll < 61) {
		treasure += "<strong>Wand of Magic Missile</strong>.";
	} else if (roll < 66) {
		treasure += "<strong>Wand of Protection from Evil</strong>.";
	} else if (roll < 69) {
		treasure += "<strong>Wand of Remove Fear</strong>.";
	} else if (roll < 72) {
		treasure += "<strong>Wand of Sanctuary</strong>.";
	} else if (roll < 77) {
		treasure += "<strong>Wand of Shield of Faith</strong>.";
	} else if (roll < 82) {
		treasure += "<strong>Wand of Sleep</strong>.";
	} else if (roll < 83) {
		treasure += "<strong>Wand of Acid Arrow</strong>.";
	} else if (roll < 84) {
		treasure += "<strong>Wand of Aid</strong>.";
	} else if (roll < 85) {
		treasure += "<strong>Wand of Augury</strong>.";
	} else if (roll < 86) {
		treasure += "<strong>Wand of Bull's Strength</strong>.";
	} else if (roll < 87) {
		treasure += "<strong>Wand of Cure Moderate Wounds</strong>.";
	} else if (roll < 88) {
		treasure += "<strong>Wand of Darkness</strong>.";
	} else if (roll < 89) {
		treasure += "<strong>Wand of Delay Poison</strong>.";
	} else if (roll < 90) {
		treasure += "<strong>Wand of False Life</strong>.";
	} else if (roll < 91) {
		treasure += "<strong>Wand of Hideous Laughter</strong>.";
	} else if (roll < 92) {
		treasure += "<strong>Wand of Hold Person</strong>.";
	} else if (roll < 93) {
		treasure += "<strong>Wand of Invisibility</strong>.";
	} else if (roll < 94) {
		treasure += "<strong>Wand of Knock</strong>.";
	} else if (roll < 95) {
		treasure += "<strong>Wand of Levitate</strong>.";
	} else if (roll < 96) {
		treasure += "<strong>Wand of Resist Energy</strong>.";
	} else if (roll < 97) {
		treasure += "<strong>Wand of Scorching Ray</strong>.";
	} else if (roll < 98) {
		treasure += "<strong>Wand of See Invisibility</strong>.";
	} else if (roll < 99) {
		treasure += "<strong>Wand of Sound Burst</strong>.";
	} else if (roll < 100) {
		treasure += "<strong>Wand of Spiritual Weapon</strong>.";
	} else if (roll < 101) {
		treasure += "<strong>Wand of Web</strong>.";
	} else {
		treasure += "Something weird happened.";
	}
	return treasure;
	}
function MajorWand() {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure = "<em>" + roll + "&percnt;</em>, ";
	if (roll < 7) {
		treasure += "<strong>Wand of Acid Arrow</strong>.";
	} else if (roll < 10) {
		treasure += "<strong>Wand of Aid</strong>.";
	} else if (roll < 12) {
		treasure += "<strong>Wand of Augury</strong>.";
	} else if (roll < 15) {
		treasure += "<strong>Wand of Bull's Strength</strong>.";
	} else if (roll < 21) {
		treasure += "<strong>Wand of Cure Moderate Wounds</strong>.";
	} else if (roll < 24) {
		treasure += "<strong>Wand of Darkness</strong>.";
	} else if (roll < 28) {
		treasure += "<strong>Wand of Delay Poison</strong>.";
	} else if (roll < 32) {
		treasure += "<strong>Wand of False Life</strong>.";
	} else if (roll < 36) {
		treasure += "<strong>Wand of Hideous Laughter</strong>.";
	} else if (roll < 41) {
		treasure += "<strong>Wand of Hold Person</strong>.";
	} else if (roll < 46) {
		treasure += "<strong>Wand of Invisibility</strong>.";
	} else if (roll < 51) {
		treasure += "<strong>Wand of Knock</strong>.";
	} else if (roll < 55) {
		treasure += "<strong>Wand of Levitate</strong>.";
	} else if (roll < 61) {
		treasure += "<strong>Wand of Resist Energy</strong>.";
	} else if (roll < 65) {
		treasure += "<strong>Wand of Scorching Ray</strong>.";
	} else if (roll < 69) {
		treasure += "<strong>Wand of See Invisibility</strong>.";
	} else if (roll < 74) {
		treasure += "<strong>Wand of Sound Burst</strong>.";
	} else if (roll < 78) {
		treasure += "<strong>Wand of Spiritual Weapon</strong>.";
	} else if (roll < 82) {
		treasure += "<strong>Wand of Web</strong>.";
	} else if (roll < 84) {
		treasure += "<strong>Wand of Cure Serious Wounds</strong>.";
	} else if (roll < 86) {
		treasure += "<strong>Wand of Dispel Magic</strong>.";
	} else if (roll < 88) {
		treasure += "<strong>Wand of Fireball</strong>.";
	} else if (roll < 90) {
		treasure += "<strong>Wand of Fly</strong>.";
	} else if (roll < 92) {
		treasure += "<strong>Wand of Haste</strong>.";
	} else if (roll < 94) {
		treasure += "<strong>Wand of Lightning Bolt</strong>.";
	} else if (roll < 96) {
		treasure += "<strong>Wand of Remove Disease</strong>.";
	} else if (roll < 98) {
		treasure += "<strong>Wand of Searing Light</strong>.";
	} else if (roll < 100) {
		treasure += "<strong>Wand of Vampiric Touch</strong>.";
	} else if (roll < 101) {
		treasure += "<strong>Wand of Water Breathing</strong>.";
	} else {
		treasure += "Something weird happened.";
	}
	return treasure;
	}
function MinorWondrousItem() {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure = "<em>" + roll + "&percnt;</em>, ";
	//if
	return treasure;
	}
function MajorWondrousItem() {
	'use strict';
	var roll = RollDice(1, 100);
	var treasure = "<em>" + roll + "&percnt;</em>, ";
	//if
	return treasure;
	}