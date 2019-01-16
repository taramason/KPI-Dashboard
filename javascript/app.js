'use strict';

const response = {};
//  to run, goto-http://localhost/tvDashboard/index.html,-http://localhost/tvDashboard/api/values

$(document).ready(function () {

  const response = { "Applications": 10, "Prospects": -15, "Enrollments": 16, "StudentsServed":11297 };


  function doTheStuff() {

    let applicationsNum = response.Applications;
    let prospectsNum = response.Prospects;
    let enrollmentsNum = response.Enrollments;

    let applicationsNumNoNeg = Math.abs(applicationsNum);
    let prospectsNumNoNeg = Math.abs(prospectsNum);
    let enrollmentsNumNoNeg = Math.abs(enrollmentsNum);


    let applications = document.getElementById('applicationsNum');
    applications.insertAdjacentHTML('afterbegin', '<span id="'+ applicationsNum + '">' + applicationsNumNoNeg + '<span>%</span></span>');

    let prospects = document.getElementById('prospectsNum');
    prospects.insertAdjacentHTML('afterbegin', '<span id="'+ prospectsNum + '">' + prospectsNumNoNeg + '<span>%</span></span>');

    let students = document.getElementById('studentsNum');
    let studentsFixed = response.StudentsServed.toLocaleString(); //adds commas to longer numbers
    students.insertAdjacentHTML('afterbegin', '<span id="'+ studentsFixed + '">' + studentsFixed + '</span>');

    let enrollments = document.getElementById('enrollmentsNum');
    enrollments.insertAdjacentHTML('afterbegin', '<span id="'+ enrollmentsNum + '">' + enrollmentsNumNoNeg + '<span>%</span></span>');


    // function to decide if up arrow or down
    function whatArrow(iD) {

      const thisNumber = parseFloat(document.getElementById(iD).nextSibling.nextSibling.firstChild.id);
      console.log("thisNumber", thisNumber);

      if (thisNumber >= 0) {
        document.getElementById(iD).classList.add('arrowUp');
      } else {
        document.getElementById(iD).classList.add('arrowDown');
      }
    }

    whatArrow("Applications");
    whatArrow("Prospects");
    whatArrow("Enrollments");
  };

  doTheStuff();

//Used when API is working correctly
// 	$.ajax({
// 		dataType: "json",
// 		url: "api/values",
// 		success: function (response) {
//       doTheStuff();
// 		}
// 	});
});
