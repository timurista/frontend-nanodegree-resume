//$("#main").append("Tim Urista")
var formattedName = HTMLheaderName.replace("%data%","Tim Urista");
var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");
var formattedEmail = HTMLemail.replace("%data%","timothy.urista@gmail.com")
// prepend to add elements to beginning
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#footerContacts").append(formattedEmail)
// slicing elements
// s.slice(), s[1].toUpperase()
