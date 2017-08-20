
	var proverbs = ["住めば都", "七転び八起き", "猿も木から落ちる", "馬鹿も一芸", "十人十色", "取らぬ狸の皮算用", "一石二鳥", "豚に真珠", "泣き面に蜂", "出る杭は打たれる", "落下枝に帰らず、破鏡再び照らさず", "となりの芝生は青い", "郷に入っては郷に従え", "雨降って地固まる", "五十歩百歩", "異口同音", "弱肉強食", "蛙の子は蛙", "案ずるより産むが易し", "青天の霹靂", "馬耳東風"];

	var pronunciations = ["sumeba miyako", "nana korobi, ya oki", "saru mo ki kara ochiru", "baka mo ichigei", "juu-nin to-iro", "toranu tanuki no kawa zan'you", "isseki ni chou", "buta ni shinju", "nakitsura ni hachi", "deru kui wa utareru", "rakka eda ni kaerazu, hakyou futatabi terasazu", "tonari no shibafu wa aoi", "gou ni itte wa gou ni shitagae", "ame futte ji katamaru", "gojuppo hyappo", "i-ku dou-on", "jyaku niku kyou shoku", "kaeru no ko wa kaeru", "an zuru yori umu ga yasushi", "seiten no hekireki", "baji toufuu"];

	var literalTranslations = ["If residing, capital/metropolis", "Seven falls, eight getting up", "Even monkeys fall from trees", "Even a fool has one talent", "10 people, 10 colours", "Count the skins of racoons which haven't been caught", "One stone, two birds", "A pearl to a pig", "A bee to a crying face", "The stake that sticks out will be hammered down", "The fallen blossom doesn't return to the branch, a broken mirror cannot be made to shine", "The neighbour's lawn is green", "Entering the village, obey the village", "The ground hardens after rain", "50 steps, 100 steps", "Different mouths, same sound", "The weak meat, the strong eat", "The child of a frog is a frog", "Giving birth is easier than you fear", "A thunderclap from blue skies", "Horse ears, east wind"];
	
	var meanings = ["Regardless of where you live, in time you will come to love it.", "Fall down seven times, get up eight. (Motivation to perservere)", "Even an expert makes mistakes.", "Everyone is good at something.", "Everybody has their own tastes.", "Don't count your chickens before they've hatched.", "To kill two birds with one stone.", "Don't offer things to people who cannot appreciate their value.", "Bad things rarely occur alone.", "People who stick out will be brought back into line.", "What's done is done.", "The grass is always greener on the other side.", "When in Rome, do as the Romans do.", "Adversity builds character.", "An unimportant difference in the grand scheme of things.", "Many different people are of the same opinion about something.", "Only the strong survive.", "A chip off the old block.", "It is easier to do something than to worry about it.", "Something unexpected occurs out of nowhere.", "To fall on deaf ears."];
	

function displayText() {
	document.getElementById("proverb-box").style.visibility = "visible";
	var display = (Math.floor(Math.random() * proverbs.length)); //generates random number between 0 & length of array
	var proverbText = proverbs[display];
	var pronunciationText = pronunciations[display];
	var literalTranslationText = literalTranslations[display];
	var meaningText = meanings[display];
	
	var link = "https://twitter.com/intent/tweet?hashtags=japaneseproverb&related=freecodecamp&text=" + proverbText + "(" + pronunciationText + ") meaning " + "'" + literalTranslationText + "'" + " (" + meaningText + ")";
	document.getElementById("tweet").setAttribute("href", link); //assigns url above as href to twitter button
	document.getElementById("japanese").innerHTML = "<span class='bold'>" + proverbText + "</span>" + "<br />";
	document.getElementById("pronunciation").innerHTML = "<span class='italic bold'>Pronounced: </span>" + pronunciationText + "<br />";
	document.getElementById("literal-translation").innerHTML = "<span class='bold'>Literal translation: </span>" + literalTranslationText + "<br />";
	document.getElementById("meaning").innerHTML = "<span class='bold'>Meaning: </span>" + meaningText + "<br />";
	
}

	
function clearText() {
	document.getElementById("proverb-box").style.visibility = "hidden";
}

document.getElementById("proverb-button").addEventListener("click", displayText);
document.getElementById("clear-button").addEventListener("click", clearText);


