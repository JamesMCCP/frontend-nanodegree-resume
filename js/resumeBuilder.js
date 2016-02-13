var bio = {
    'name': 'James McCarthy-Price',
    'role': 'Environmental Windsurfer',
    'contacts': {
        'email': 'jmccarthy.price@gmail.com',
        'mobile': '0420 786 589',
        'github': 'https://github.com/JamesMCCP',
        'twitter': 'https://twitter.com/JamesMCCP',
        'location': 'Perth, Australia',
        'website': 'www.jamesmcp.com'
    },
    'welcomeMessage': 'James McCarthy-Price is a renewable wave energy engineer and professional windsurfer. Currently working at Bombora Wave Power, James is working towards his dream of being part of a team to bring commercially viable renewable wave energy to the world. <p><br> James also is preparing to attend a number of professional windsurfing tour events in 2017 from Morocco to Hawaii.',
    'skills': ['Renewable Wave Energy',
        'Windsurfing',
        'Programming',
        'Photography',
        'Guitar'
    ],
    'location': 'Perth, Western Australia',
    'biopic': 'images/portrait_square.png',
    'display': function() {
        $("#header").append(HTMLimgDiv);
        $(".img-div").append(HTMLbioPic.replace("%data%", bio.biopic));
        $("#header").append(HTMLnameDiv);
        $(".name-div").append(HTMLheaderName.replace("%data%", bio.name));
        $(".name-div").append(HTMLheaderRole.replace("%data%", bio.role));
        $(".name-div").append(HTMLlocation.replace("%data%", bio.contacts.location));
        $("#header").append(HTMLcontactDiv);
        $(".contact-div").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $(".contact-div").append(HTMLemail.replace("%data%", bio.contacts.email));
        $(".contact-div").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
        $(".contact-div").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $(".contact-div").append(HTMLwebsite.replace("%data%", bio.contacts.website));
        $("#header").append(HTMLmessageDiv);
        $(".short-description").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    },
};

var education = {
    'schools': [{
        'name': 'University of Western	Australia',
        'location': 'Perth, Western Australia',
        'degree': 'Masters',
        'majors': 'Environmental Engineering',
        'date': '2014-2015',
        'url': 'http://handbooks.uwa.edu.au/courses/coursedetails?code=62550'
    }, {
        'name': 'Stanford University',
        'location': 'Palo Alto, California',
        'degree': 'Certificate',
        'majors': 'Technology and Innovation & Water Management',
        'date': 2015,
        'url': 'http://summer.stanford.edu/academics/intensive-studies/global-perspectives/'
    }, {
        'name': 'University of Bologna',
        'location': 'Bologna, Italy',
        'degree': 'Masters',
        'majors': 'Environmental Engineering',
        'date': 2014,
        'url': 'http://corsi.unibo.it/ingegneriambienterritorioLM/Pagine/default.aspx'
    }],
    'onlineCourses': [{
        'title': 'Front End Web Developer',
        'school': 'Udacity',
        'date': '2014-2015',
        'url': 'www.udacity.com',
    }],
    'display': function() {
        $("#education").append(HTMLeducationHeader);
        for (e in education.schools) {
            $("#education").append(HTMLschoolStart);
            var sch = HTMLschoolName.replace("%data%", education.schools[e].name) + HTMLschoolDegree.replace("%data%", education.schools[e].degree);
            $(".education-entry:last").append(sch);
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[e].location));
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[e].date));
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[e].majors));
        }
        $("#education").append(HTMLonlineClassesStart);
        $(".online-classes-entry:last").append(HTMLonlineClasses);
        for (o in education.onlineCourses) {
            $(".online-classes-entry:last").append(HTMLonlineClassesSubHeading);
            $(".online-classes-sub-heading:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[o].title));
            $(".online-classes-sub-heading:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[o].school));
            $(".online-classes-sub-heading:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[o].date));
            $(".online-classes-sub-heading:last").append(HTMLonlineDescription.replace("%data%", education.onlineCourses[o].description));
            $(".online-classes-sub-heading:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[o].url));
        }
    },
};

var work = {
    'jobs': [{
        'employer': "St. Catherine's College",
        'title': 'Academic Tutor',
        'location': 'Perth, Western Australia',
        'date': '2012 - Present',
        'description': 'Tutored tertiary Indigenous students in Maths, Physics, Chemistry, English, Psychology, Geography, Social Justice, Photography and Business'
    }, {
        'employer': 'Ka88 Photography',
        'title': 'Owner Manager',
        'location': 'Perth, Western Australia',
        'date': '2011 - Present',
        'description': 'Owner and manager of photography business specialising in corporate and social events.'
    }, {
        'employer': 'Shark Lake Food Group',
        'title': 'Environmental Engineering Intern',
        'location': 'Esperance, Western Australia',
        'date': '2012 -2013',
        'description': 'Environmental Engineering Intern reponsible for managing installation of large scale evaporation ponds in Ramsar Convention listed Lake Warden Catchment.'
    }],
    'display': function() {
        $("#work-experience").append(HTMLworkHeader);
        for (j in work.jobs) {
            $("#work-experience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[j].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[j].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[j].date);
            $(".work-entry:last").append(formattedWorkDates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[j].location);
            $(".work-entry:last").append(formattedWorkLocation);
            var formattedWorkDesc = HTMLworkDescription.replace("%data%", work.jobs[j].description);
            $(".work-entry:last").append(formattedWorkDesc);
        }
    },
};

var projects = {
    'projects': [{
        'title': 'Entrepreneering in Western Australia',
        'location': 'Perth, Western Australia',
        'date': '2014',
        'description': 'Held an evening, attracting over 150 young and student engineers to discuss the intersection of Entrepreneurship and Engineering.',
        'images': ['images/entrep.png']
    }, {
        'title': 'IndGenius',
        'location': 'Perth, Western Australia',
        'date': '2012 - 2013',
        'description': 'Founded a tailored tutoring service for Indigenous tertiary University students.',
        'images': ['images/indgenius.png']
    }, {
        'title': 'Wasima Conservation Project',
        'location': 'Mpanda, Tanzania',
        'date': '2015',
        'description': 'Filmed a documentary about Lion Killers near Kibione in remote south-western Tanzania for the Wasima Conservation Project.',
        'images': ['images/wasima.png']
    }, {
        'title': 'Professional Windsurfing Association',
        'location': 'Warsaw, Poland',
        'date': '2015',
        'description': 'Volounteered for the Poland Indoor Event. Coordinated all athletes on live TV in a stadium of 35,000 people.',
        'images': ['images/poland.png']
    }],
    'display': function() {
        $("#projects").append(HTMLprojectHeader);
        for (p in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[p].title));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[p].date));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[p].description));
            for (i in projects.projects[p].images) {
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[p].images[i]));
            }
        }
    },
};

// Call display functions:
bio.display();
work.display();
projects.display();
education.display();

// Add Google Map:
$("#mapDiv").append(HTMLmapsHeader);
$('#mapDiv').append(googleMap);

// Log clicks:
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

function locationizer(work_obj) {
    var locationArray = [];

    for (var job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }

    return locationArray;
}

main();