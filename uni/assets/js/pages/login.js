/* ------------------------------------------------------------------------------
*
*  # Login page
*
*  Specific JS code additions for login and registration pages
*
*  Version: 1.0
*  Latest update: Aug 1, 2015
*
* ---------------------------------------------------------------------------- */

$(function () {

	// Style checkboxes and radios
	$('.styled').uniform();

});


function login() {
	console.log("login")
	let username = $('#username').val()
	let password = $('#password').val()

	if (username == 'admin' && !!password) {
		window.location.href = "ministry-dashboard.html"
	} else if (username == 'student' && !!password) {
		window.location.href = "citizen-home.html"
	} else if (username == 'employee1' && !!password) {
		window.location.href = "Employee_1.html"
	} else if (username == 'employee2' && !!password) {
		window.location.href = "Employee_2.html"
	}
}