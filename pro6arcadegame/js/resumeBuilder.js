//bio object started
var bio = {
    "name": "Kartik Gandhi",
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "8901226923",
        "email": "kartikryder@gmail.com",
        "github": "kartikgandhi",
        "twitter": "kartikryder",
        "location": "Chandigarh"
    },
    "welcomeMessage": "My work speaks for me",
    "skills": ["HTML", "CSS", "JavaScript", "Bootstrap", "C++", "Awesomeness"],
    "biopic": "images/IMG_6783compress.jpg"
};
//bio displayed
bio.display = function() {
    $("#header").prepend(HTMLheaderName.replace("%data%", "Kartik Gandhi") + HTMLheaderRole.replace("%data%", "Front End Web Developer"));
    var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts,#footerContacts").append(formattedmobile);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts,#footerContacts").append(formattedemail);
    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts,#footerContacts").append(formattedtwitter);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts,#footerContacts").append(formattedgithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts,#footerContacts").append(formattedLocation);
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedbioPic);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcomeMsg);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#header").append(formattedSkills);
        }
    }
};
bio.display(); //bio display function called
//work object started
var work = {
    "jobs": [{
            "employer": "Wipro Tech Solutions",
            "title": "Web Designer",
            "location": "Gurgaon,India",
            "dates": "3 april 2018",
            "description": "worked as web designer for 4 years"
        },
        {
            "employer": "Mahindra Tech",
            "title": "Senior Web Developer",
            "location": "Banglore,India",
            "dates": "2 june 2022",
            "description": "senior web developer and working"
        }
    ]
};
//work displayed
work.display = function() {
    for (i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDate);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display(); //work display function called
//education object started
var education = {
    schools: [{
            "name": "St.Theresa's Convent school",
            "location": "Karnal,Haryana,India(132001)",
            "degree": "High School",
            "majors": ["Non-medical"],
            "dates": "2001-2015",
            "url":"http://www.stcskarnal.com/"
        },
        {
            "name": "Chitkara University",
            "location": "Rajpura,Punjab,India(140401)",
            "degree": "B.tech",
            "majors": ["Computer Science"],
            "dates": "2015-2019",
            "url":"http://www.chitkara.edu.in/"
        }
    ],
    onlineCourses: [{
        "title": "Front End Web Developer",
        "school": "Udacity",
        "dates": "21 January 2017",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};
//education displayed
education.display = function() {
    for (i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedSchoolNameUrl=formattedSchoolName.replace("#",education.schools[i].url);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedSchoolNameDegree = formattedSchoolNameUrl + formattedSchoolDegree;
        $(".education-entry:last").append(formattedSchoolNameDegree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[0]);
        $(".education-entry:last").append(formattedSchoolMajor);
    }
    $(".education-entry:last").append(HTMLonlineClasses);
    for (i = 0; i < education.onlineCourses.length; i++) {
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedonlineTitleSchool = formattedonlineTitle + formattedonlineSchool;
        $(".education-entry:last").append(formattedonlineTitleSchool);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $(".education-entry:last").append(formattedonlineDates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedonlineURL);
    }
};
//education display function called
education.display();
// project object started
var projects = {
    "projects": [{
            "title": "Obstacle Avoiding Robot",
            "dates": "16/12/2016",
            "description": "internal project for 2016",
            "images": ["images/ip.jpg"]
        },
        {
            "title": "Portfolio",
            "dates": "15/2/2017",
            "description": "portfolio for frontend-nanodegree(needs professionalism)",
            "images": ["images/portfolio.png"]
        }
    ]
};
//project displayed
projects.display = function() {
    for (i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedProjectDates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedProjectDescription);
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[0]);
        $(".project-entry:last").append(formattedProjectImage);
    }
};
//projects display function called
projects.display();
//map added
$("#mapDiv").append(googleMap);
