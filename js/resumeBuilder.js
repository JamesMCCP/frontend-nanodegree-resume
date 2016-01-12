/*
This is empty on purpose! Your code to build the resume will go here.
 */

var education = {
	"schools" : [
	{
		"name": "University of Western	Australia",
		"location" : "Perth, Western Australia",
		"degree" : "Masters",
		"major" : "Environmental Engineering",
		"dates" : "2014-2015"
	},
	{
		"name" : "Stanford University",
		"location" : "Palo Alto, California",
		"degree" : "Certificate",
		"major" : "Technology and Innovation",
		"dates" : 2015
	},
	{
		"name" : "University of Bologna",
		"location" : "Bologna, Italy",
		"degree" : "Masters",
		"major" : "Environmental Engineering",
		"dates" : 2014
	}
	],
	"onlineCourses": [
	{
		"title": "Front End Web Developer",
		"location" : "San Francisco, California",
		"school" : "Udacity",
		"url" : "www.udacity.com",
		"dates" : "2014-2015"
	}
	]
};

var work = {
	"jobs" : [
	{
		"employer" : "St. Catherine's College",
		"title" : "Academic Tutor",
		"location" : "Perth, Western Australia",
		"dates" : "2012 - Present",
		"description" : "Tutored tertiary Indigenous students in Maths, Physics, Chemistry, English, Psychology, Geography, Social Justice, Photography and Business"
	},
	{
		"employer" : "Ka88 Photography",
		"title" : "Owner Manager",
		"location" : "Perth, Western Australia",
		"dates" : "2011 - Present",
		"description" : "Owner and manager of photography business specialising in corporate and social events."
	},
	{
		"employer" : "Shark Lake Food Group",
		"title" : "Environmental Engineering Intern",
		"location" : "Esperance, Western Australia",
		"dates" : "2012 -2013",
		"description" : "Environmental Engineering Intern reponsible for managing installation of large scale evaporation ponds in Ramsar Convention listed Lake Warden Catchment."
	}
	]
};

var projects = {
	"projects" : [
	{
		"title" : "Entrepreneering in Western Australia",
		"location" : "Perth, Western Australia",
		"dates" : "2014",
		"description" : "Held an evening, attracting over 150 young and student engineers to discuss the intersection of Entrepreneurship and Engineering.",
		"images" : ["images/entrep.png"]
	},
	{		
		"title" : "IndGenius",
		"location" : "Perth, Western Australia",
		"dates" : "2012 - 2013",
		"description" : "Perth, Western Australia",
		"images" : ["images/indgenius.png"]
	}
	]
};

var bio = {
  "name" : "James McCarthy-Price",
  "role" : "Environmental Windsurfer",
  "location" : "Perth, Western Australia",
  "welcomeMessage" : "Welcome to my page :)",
  "portrait" : "images/portrait.jpg",
  "skills" : ["Renewable Wave Energy","Windsurfing","Programming","Photography"],
  "contacts" : {
    "email" : "jmccarthy.price@gmail.com",
    "mobile" : "0420 786 589",
  }
};

// Add name and role:
$("#header").append(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));

// Add Profile Pic:
$("#header").append(HTMLbioPic.replace("%data%", bio.portrait));

// Add Contact Details:

function displayWork() {
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
		$("#skills").append(formattedSkill);

		formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
		$("#skills").append(formattedSkill);

		formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
		$("#skills").append(formattedSkill);

		formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
		$("#skills").append(formattedSkill);
	};

	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDates + formattedDescription;

		$(".work-entry:last").append(formattedEmployerTitle);
	}
};

displayWork();

// Log clicks:
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
})

function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}

// Appended internationalise button:
$("#main").append(internationalizeButton);

function inName (name) {
	var nameArray = bio.name.split(" ");

	newName = nameArray[0] + " " + nameArray[1].toUpperCase();

	return newName;

};

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		// Add title:
		var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedProjTitle);

		// Add dates:
		var formattedProjDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjDates);

		// Add Description:
		var formattedProjDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjDescription);

		// Add image if possible:
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedProjImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedProjImages);
			}
		}
	}
}

projects.display();

// Add map:
$("#mapDiv").append(googleMap);