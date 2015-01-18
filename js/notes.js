// notes on projects and quizzes

/**
TO replace all instances of < and > you need a regex /</g, go for global search
newHTML = _html.replace(/</g, "&lt;");
newHTML = newHTML.replace(/>/g, "&gt;");
**/

// js gives us === equal signs

/**
3 === are slightly safer

if (condition) {
	do something();
} else {
	do somethingElse();
}
// slicing elements
// s.slice(), s[1].toUpperase()

//to log clicks
$(document).click( 
function(loc) {
var x = loc.pageX;
var y = loc.pageY; 
logClicks(x,y);
});

**/