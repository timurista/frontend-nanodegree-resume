//$("#main").append("Tim Urista")
//var formattedName = HTMLheaderName.replace("%data%","Tim Urista");
//var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");
//var formattedEmail = HTMLemail.replace("%data%","timothy.urista@gmail.com")
// prepend to add elements to beginning
//var today = new Date();

var bio = {
	"name":"Tim Urista",
	"role":"Web Developer",
	"contacts":{
		"email":"timothy.urista@gmail.com",
		"mobile":"626-429-8851",
	},
	"pictureUrl":"http://timurista.pic",
	"welcomeMssg":"Hello and welcome!",
	"age":29,
	"skills":["python master","javascript and jquery developer","front end ninja"],
}

work = {
	"jobs":[{	
			"employer":"Basis Oro Valley",
			"years worked":"1 year",
			"position":"English Teacher",
		},
	]};
education = {
    "schools": [
        {
            "name": "Claremont School of Theology",
            "city": "Claremont, California",
            "degree": "MA",
            "major": [
                "Religious Studies",
                "Islam and Christianity"
            ],
            "dates": "2010",
        },
        {
            "name": "Occidental College",
            "city": "Los Angeles, California",
            "degree": "BA",
            "major": [
                "English Comparative Studies",
                "Film"
            ],
            "dates":"2007",
        },
        {
        	"name":"Online Courses",
        }
    ]
};

var projects = {
	"projects":[{
			"name":"HTML page",
		}
	]
};

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);
$("#main").append(work["position"])
$("#main").append(education.name)
//$("#footerContacts").append(formattedEmail)

// slicing elements
// s.slice(), s[1].toUpperase()
