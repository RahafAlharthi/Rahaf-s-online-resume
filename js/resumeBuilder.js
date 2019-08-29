var bio = {
  "name" : "Rahaf Alharthi",
  "role" : "Student",
  "contacts" : {
    "mobile" : "0530644403",
    "email" : "Rahaf.alharthi200@gmail.com",
    "github" : "RahafAlharthi",
    "location" : "Riyadh"
  },
  "welcomeMessaege" : "Welcome to my page.",
  "skills" : [["Programming Languages:", "Java", "SQL","HTML5", "CSS3", "JavaScript", "C/C++","Python" ],
              ["Languages:", "Arabic", "English"]],
  "biopic" : "images/biopic.jpeg"
}

var projects = {
  "projects" : [
   {
      "title" : "Productive Families",
      "dates" : "2018",
      "description" : "Productive Families was a site that view families products,allowed to purchase. deliver and evaluated them.",
      "images" : []
    },
    {
      "title" : "My LoDairy",
      "dates" : "2018",
      "description" : "My LoDairy is an application that saves daily in database memories and links them to their locations on the map using API for Google maps.",
      "images" : []
    }
  ]
}

var work = {
  "jobs" : [
      {
      "employer" : "",
      "title" : "",
      "location" : "",
      "dates" : "",
      "description" : ""
    }
  ]
}

var education = {
  "schools" : [
    {
      "name" : "King Saud University",
      "location" : "Riyadh",
      "degree" : "BIT",
      "majors" : ["Information Technology"],
      "dates" : "2015-2019"
    }
  ],
  "onlineCourses" : [
   {
      "title" : "Level 1 - Foundation Training - 2018.3",
      "school" : "UiPath Academy",
      "dates" : "July 2019	 - Aug 2019",
      "url" : "https://academy.uipath.com/learn"
    }
  ]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedPicture);


if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsTitle);
  for (i = 0; i < bio.skills.length; i++) {
    $("#header").append(HTMLskillsStart);
    for (j = 0; j < bio.skills[i].length; j++) {
      var formattedSkills = HTMLskills.replace("%data%", bio.skills[i][j]);
      console.log(formattedSkills);
      $(".skills:last").append(formattedSkills);
    }
  }
}

for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);
  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);
}

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
  }
}
projects.display();

education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry:last").append(formattedName);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedDegree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);
    for (i = 0; i < education.schools[school].majors.length; i++) {
      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[i]);
      $(".education-entry:last").append(formattedMajor);
    }
  }
  $("#education").append(HTMLonlineClasses);
  for (online in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
    $(".education-entry:last").append(formattedTitle);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
    $(".education-entry:last").append(formattedSchool);
    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
    $(".education-entry:last").append(formattedURL);
  }
}
education.display();

