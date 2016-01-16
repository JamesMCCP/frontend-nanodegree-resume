// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.
/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    'name': 'James McCarthy-Price',
    'role': 'Environmental Windsurfer',
    'contacts': {
        'email': 'jmccarthy.price@gmail.com',
        'mobile': '0420 786 589',
        'github': 'https://github.com/JamesMCCP',
        'twitter': 'https://twitter.com/JamesMCCP',
        'location': 'Perth, Australia'
    },
    'welcomeMessage': 'Hello and welcome to my Udacity created profile! :)',
    'skills': ['Renewable Wave Energy',
        'Windsurfing',
        'Programming',
        'Photography',
        'Guitar'
    ],
    'location': 'Perth, Western Australia',
    'biopic': 'images/portrait.jpg',
    'display': function() {},
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
    'display': function() {},
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
    'display': function() {},
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
    'display': function() {},
};

// Add Biography Display Function:
bio.display = function() {

    // Add name and role:
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    $('#header').prepend(formattedName, formattedRole);
    // Add bio message:
    $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
    // Add Profile Pic:
    $('#header').append(HTMLbioPic.replace('%data%', bio.biopic));

    // Add email address:
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    // Add Mobile Phone:
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    // Add GitHub:
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    // Add Twitter:
    var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    // Add location:
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

    // Create combined contact variable:
    var allContactDetail = formattedEmail + formattedMobile + formattedGithub + formattedTwitter + formattedLocation;

    // Append info to header contacts:
    $('#topContacts').append(allContactDetail);

    // Append info to footer contacts:
    $('#footerContacts').append(allContactDetail);

};

// Add Education Display Function:
education.display = function() {
    for (var school in education.schools) {
        $('#education').append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
        var formatteddate = HTMLschoolDates.replace('%data%', education.schools[school].date);
        var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[school].majors);
        $('.education-entry:last').append(formattedName + formattedDegree, formatteddate, formattedLocation, formattedMajor);
    }
};

// Add Work Display Function:
work.display = function() {

    // Skills loop:
    if (bio.skills.length > 0) {

        // Add skills box:
        $('#header').append(HTMLskillsStart);

        //Create formatted skills variables:
        var formattedSkill1 = HTMLskills.replace('%data%', bio.skills[0]);
        var formattedSkill2 = HTMLskills.replace('%data%', bio.skills[1]);
        var formattedSkill3 = HTMLskills.replace('%data%', bio.skills[2]);
        var formattedSkill4 = HTMLskills.replace('%data%', bio.skills[3]);
        var formattedSkill5 = HTMLskills.replace('%data%', bio.skills[4]);

        // Combine skills to single var:
        var allSkills = formattedSkill1 + formattedSkill2 + formattedSkill3 + formattedSkill4 + formattedSkill5;

        // Append Skill to #skills:
        $('#skills').append(allSkills);
    }

    // Employer loop:
    for (var job in work.jobs) {
        $('#workExperience').append(HTMLworkStart);

        // Create employer variables:
        var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
        var formattedDate = HTMLworkDates.replace('%data%', work.jobs[job].date);
        var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);

        // Combine employer variables:
        var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDate + formattedDescription;

        // Append employer variables:
        $('.work-entry:last').append(formattedEmployerTitle);
    }
};

// Add Projects Display Function:
projects.display = function() {
    for (var project in projects.projects) {
        $('#projects').append(HTMLprojectStart);

        // Add title:
        var formattedProjTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
        $('.project-entry:last').append(formattedProjTitle);

        // Add date:
        var formattedProjdate = HTMLprojectDates.replace('%data%', projects.projects[project].date);
        $('.project-entry:last').append(formattedProjdate);

        // Add Description:
        var formattedProjDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
        $('.project-entry:last').append(formattedProjDescription);

        // Add image if possible:
        if (projects.projects[project].images.length > 0) {
            for (var image in projects.projects[project].images) {
                var formattedProjImages = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
                $('.project-entry:last').append(formattedProjImages);
            }
        }
    }
};

// Call display functions:
bio.display();
work.display();
projects.display();
education.display();

// Add Google Map:
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

// // Element Highlight tool:
// $(document).ready(function() {

//   $('#header').hover(
//     //on mouseover
//     function() {
//       $(this).animate({
//         height: '+=250' //adds 250px
//         }, 'slow' //sets animation speed to slow
//       );
//     },
//     //on mouseout
//     function() {
//       $(this).animate({
//         height: '-=250px' //substracts 250px
//         }, 'slow'
//       );
//     }
//   );

// });