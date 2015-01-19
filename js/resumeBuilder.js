//$("#main").append("Tim Urista")
//var formattedName = HTMLheaderName.replace("%data%","Tim Urista");
//var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");
//var formattedEmail = HTMLemail.replace("%data%","timothy.urista@gmail.com")
// prepend to add elements to beginning
//var today = new Date();

//bio contains:
/**
name : string
role : string
contacts : an object with
      mobile: string
      email: string
      github: string
      twitter: string
      location: string
welcomeMessage: string
skills: array of strings
biopic: url
display: function
**/
var bio = {
	"name":"Tim Urista",
	"role":"Web Developer",
	"contacts":{
		"email":"timothy.urista@gmail.com",
		"mobile":"626-429-8851",
		"github": "timurista",
		"twitter": "timurista",
	},
	"welcomeMssg":"Hello and welcome!",
	"skills":["python master","javascript and jquery developer","front end ninja"],
	"age":29,
	"biopic":"http://timurista.pic",
	"display":function () {
		$("#header").prepend(
			HTMLheaderName.replace("%data%",bio.name));
		$("#header").prepend(
			HTMLheaderRole.replace("%data%",bio.role));
	},
}

var work = {
	"jobs":[
		{
			"employer":"Basis Oro Valley",
			"dates":"1 year",
			"description":"Taught English to Middle and High School students.",
			"title":"English Teacher",
			"location":"11155 North Oracle Road, Oro Valley, AZ 85737",
		},
		{
			"employer":"Pima Community College",
			"dates":"2 years",
			"description":"Taught courses on Islam and Religion in Popular Culture to College students.",
			"title":"Adjunct Professor Religious Studies",
			"location":"7600 North Shannon Road, Tucson, AZ 85709",
		},
		{
			"employer":"Academy of Math and Science",
			"dates":"1 year",
			"description":"Tutored middle and high school students in English and essay writing.",
			"title":"Tutor English and SAT prep",
			"location":"1557 West Prince Road, Tucson, AZ",
		},
		{
			"employer":"Occidental College",
			"dates":"1 year",
			"description":"Helped students to learn how to work with Adobe Flash, Photoshop, Illustrator and Final Cut Pro. Did some programming in Adobe Flash actionscript for project and tutorials.",
			"title":"Technology Assistant and Tutor",
			"location":"1600 Campus Road, Los Angeles, CA 90041",
		}],
	"display":function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var jobObj = work.jobs[job];
			var fEmployer = HTMLworkEmployer.replace(
				"%data%",jobObj.employer);
			var fWorkTitle = HTMLworkTitle.replace(
				"%data%",jobObj.title);
			var fEmployerTitle = fEmployer+fWorkTitle;

			$(".work-entry:last").append(
				fEmployerTitle);

			//append dates and other info
			var fDates = HTMLworkDates.replace(
				"%data%",jobObj.dates);
			$(".work-entry:last").append(
				fDates);

			var fDescription = HTMLworkDescription.replace(
				"%data%",jobObj.description);
			$(".work-entry:last").append(
				fDescription);
		}
	}
};

var education = {
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
    ]
};

var projects = {
	"projects":[{
			"name":"HTML page",
			"title":"HTML Intro page",
			"description":"Taking a pdf image and converting it into a html website using bootstrap css and javascript.",
			"images":["img/project1.png"],
		}
	],
};
$("#main").append(work["position"])
$("#main").append(education.name)
//$("#footerContacts").append(formattedEmail)

if (bio.skills.length) {
	console.log(bio.skills);
	$("#header").append(HTMLskillsStart);
	for (var i = bio.skills.length - 1; i >= 0; i--) {
		$("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
	};
}

//invoke functions
work.display();
bio.display();


//name game
function inName(name) {
	name= name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
		name[0].slice(1).toLowerCase();
	return name.join(" ")
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var myProject = projects.projects[project];
		var formattedTitle = HTMLprojectTitle.replace("%data%",myProject.title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",myProject.dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%",myProject.description);
		$(".project-entry:last").append(formattedDescription);

		if (myProject.images.length>0) {
			for (image in myProject.images) {
				var formattedImage = HTMLprojectImage.replace("%data%",myProject.images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		};
	};
};
projects.display();
$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);


var infoWindow = google.maps.InfoWindow({
	content:name
});

google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map, marker);
});

/**
education contains:

schools: array of objects with
     name: string
     location: string
     degree: string
     majors: array of strings
     dates: integer (graduation date)
     url: string
onlineCourses: array with
     title: string
     school: string
     date: integer (date finished)
     url: string
display: function

work contains

jobs: array of objects with
     employer: string
     title: string
     location: string
     dates: string (works with a hyphen between them)
     description: string
display: function
projects contains:

projects: array of objects with
      title: string
      dates: string (works with a hyphen between them)
      description: string
      images: array with string urls
display: function
**/