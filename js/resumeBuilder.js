/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    name: "Violet feir",
    role: "Web Developer",
    contacts: {
        mobile: "888-888",
        email: "fei@example.com",
        github: "feir",
        twitter: "@feir",
        location: "china"
    },
    welcomeMessage: "welcome to Violet FEIR's page",
    skills: ["awesomeness", "programming", "saving the universe", "JS"],
    biopic: "images/fry.jpg"
};

var work = {
    jobs: [{
            employer: "YUNSHIJIE",
            title: "programming girl",
            location: "xi'an",
            dates: "July 2020-future",
            description: "Who moved my cheese cheesy feet cauliflower cheese.Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and whine paneer camembert denomandie.Swiss mozzarella cheese slices feta fromage fraisairedale swiss chesscake.Hard cheese blue castello halloumiparmesan say cheese stinking bishop jarlsberg."
        },
        {
            employer: "Apple Sister",
            title: "Assistant to Chairman ",
            location: "xi'an",
            dates: "July 2017-November 2017",
            description: "Who moved my cheese cheesy feet cauliflower cheese.Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and whine paneer camembert denomandie.Swiss mozzarella cheese slices feta fromage fraisairedale swiss chesscake.Hard cheese blue castello halloumiparmesan say cheese stinking bishop jarlsberg."
        }
    ]
};

var projects = {
    projects: [{
            title: "Sample project 1",
            dates: "2017",
            description: "Who moved my cheese cheesy feet cauliflower cheese.Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and whine paneer camembert denomandie.Swiss mozzarella cheese slices feta fromage fraisairedale swiss chesscake.Hard cheese blue castello halloumiparmesan say cheese stinking bishop jarlsberg.",
            images: ["images/dcpcbrgb.jpg", "images/goldenpcbrgb.jpg", "images/GUI.jpg"]
        },
        {
            title: "Sample project 2",
            dates: "2017",
            description: "Who moved my cheese cheesy feet cauliflower cheese.Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and whine paneer camembert denomandie.Swiss mozzarella cheese slices feta fromage fraisairedale swiss chesscake.Hard cheese blue castello halloumiparmesan say cheese stinking bishop jarlsberg.",
            images: ["images/shulan.jpg", "images/xianshi.jpg"]
        }
    ]
};

var education = {
    schools: [{
        name: "Shannaxi University of science and techology",
        location: "xi'an",
        degree: "Bachelor",
        majors: ["electronic", "information"],
        dates: "2013-2017",
        url: "http://example.com"
    }, {
        name: "the three number of school in xi'an",
        location: "xi'an",
        degree: "senior high school",
        majors: ["science", "chemitry", "physics"],
        dates: "2010-2013",
        url: "http://example.com"
    }],
    onlineCourses: [{
        title: "JavaScript Syntax",
        school: "Udacity",
        dates: "2017",
        url: "http://udacity.com"
    }, {
        title: "The Frount Web programming",
        school: "Udacity",
        dates: "2017",
        url: "http://udacity.com"
    }]
};



bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", inName(bio.name));
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").prepend(formattedName, formattedRole);
    $("#header").append(formattedPic, formattedMessage, HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#header").append(formattedSkills);
    }

    for (t in bio.contacts) {
        var formattedHTMLcontactGeneric = HTMLcontactGeneric.replace("%contact%", t).replace("%data%", bio.contacts[t]);
        $("#topContacts,#footerContacts").append(formattedHTMLcontactGeneric);
    }

}
bio.display();


work.display = function() {

    $('#workExperience').append(HTMLworkStart);
    for (var i = 0; i < work.jobs.length; i++) {
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

        $('.work-entry').append(formattedEmployerTitle, formattedWorkDates, formattedWorkLocation, formattedWorkDescription);
    }
}
work.display();

projects.display = function() {
    $('#projects').append(HTMLprojectStart);
    for (var i = 0; i < projects.projects.length; i++) {
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $('.project-entry').append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);

        for (var j = 0; j < projects.projects[i].images.length; j++) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
            $('.project-entry').append(formattedProjectImage);
        }
    }
}
projects.display();

education.display = function() {
    $('#education').append(HTMLschoolStart);
    for (var i = 0; i < education.schools.length; i++) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedSchoolTitle = formattedSchoolName + formattedSchoolDegree;
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);

        $('.education-entry').append(formattedSchoolTitle, formattedSchoolDates, formattedSchoolLocation);

        var majorStr = education.schools[i].majors.join(',');
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", majorStr);
        $('.education-entry').append(formattedSchoolMajor);

    }
    $(".education-entry").append(HTMLonlineClasses);
    for (var k = 0; k < education.onlineCourses.length; k++) {
        var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
        var formattedonlineSchoolTitle = formattedHTMLonlineTitle + formattedonlineSchool;
        var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates);
        var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[k].url);

        $(".education-entry").append(formattedonlineSchoolTitle, formattedHTMLonlineDates, formattedHTMLonlineURL);
    }

}
education.display();


$("#mapDiv").append(gaodeMap);


function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[0] = name[0].charAt(0).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    name = name.join(" ");
    // Don't delete this line!
    return name;
}
/*  $('#main').append(internationalizeButton);
  projects.display = function(){

  }

$(document).click(function(loc){
    console.log(loc.pageX,loc.pageY);
});
  */