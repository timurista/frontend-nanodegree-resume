var bio = {
	"name":"Tim Urista",
	"role":"Web Developer",
	"contacts":{
		"email":"timothy.urista@gmail.com",
		"mobile":"626-429-8851",
		"github": "timurista",
		"twitter": "timurista",
		"location":"Tucson, AZ 85742",
	},
	"welcomeMssg":"Hello and welcome!",
	"skills":["python master","javascript and jquery developer","front end ninja"],
	"age":29,
	"biopic":"images/self-portrait.jpg",
	"display":function () {
		$("#header").prepend(
			HTMLheaderName.replace("%data%",bio.name));
		$("#header").prepend(
			HTMLheaderRole.replace("%data%",bio.role));
		$("#header").prepend(
			HTMLbioPic.replace("%data%",bio.biopic));

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
            "location": "Claremont, California",
            "degree": "MA",
            "major": [
                "Religious Studies",
                "Islam and Christianity"
            ],
            "dates": "2009-2011",
            "url":"http://www.cst.edu/"
        },
        {
            "name": "Occidental College",
            "location": "Los Angeles, California",
            "degree": "BA",
            "major": [
                "English Comparative Studies",
                "Film"
            ],
            "dates":"2004-2008",
            "url":"http://www.oxy.edu/",
        },
        ],
    "onlineCourses":[{
    	"courses":{
	    "title": "string",
		"school": "string",
		"date": "1/2/2015",
		"url": "string",
	}
}
    ],
    "display":function() {
    	for (s in education.schools) {
    		var school = education.schools[s];
    		var schoolName = HTMLschoolName.replace("%data%",school.name);
    		var schoolDegree = HTMLschoolDegree.replace("%data%",school.degree);
    		var schoolDates = HTMLschoolDates.replace("%data%",school.dates);
    		var schoolLocation = HTMLschoolLocation.replace("%data%",school.location);
    		var schoolMajor = HTMLschoolMajor.replace("%data%",school.major);

    		$("#education").append(HTMLschoolStart);
    		var schoolArray = [schoolName,schoolDegree,schoolDates,schoolLocation,schoolMajor];
    		for (i in schoolArray) {
	    		$(".education-entry:last").append(schoolArray[i]);
	    		console.log(schoolArray[i]);
    		}

    	}
    }
};

var projects = {
	"projects":[{
			"name":"HTML page",
			"title":"HTML Intro page",
			"description":"Taking a pdf image and converting it into a html website using bootstrap css and javascript.",
			"images":["images/Project1.png"],
			"dates":"1/1/2015",
		}],
	"display":function() {
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
			}
		}
	}
};

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
education.display();
projects.display();

//internationalize name
function inName(name) {
	name= name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
		name[0].slice(1).toLowerCase();
	console.log(name);
	return name.join(" ")
}

var name = bio.name;
$("#main").append(internationalizeButton);

//google map
$("#mapDiv").append(googleMap);