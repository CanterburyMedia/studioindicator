function updateWebcam( webcamUrl )
{
	var unique = new Date().getTime();
	$('#cam').attr('src', webcamUrl + '&uvar=' + unique);
}
function updateClock ( )
{
	var currentTime = new Date ( );
	var currentHours = currentTime.getHours ( );
	var currentMinutes = currentTime.getMinutes ( );
	var currentSeconds = currentTime.getSeconds ( );

	// Pad the minutes and seconds with leading zeros, if required
	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

	// Choose either "AM" or "PM" as appropriate
	var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

	// Convert the hours component to 12-hour format if needed
	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

	// Convert an hours component of "0" to "12"
	currentHours = ( currentHours == 0 ) ? 12 : currentHours;

	// Compose the string for display
	var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " <div id='ampm'>" + timeOfDay +"</div>";

	$("#clock").html(currentTimeString);

}

function updateDate()
{
	var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
	var dayNames   = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var dateNths   = ["st","nd","rd","th","th","th","th","th","th","th","th","th","th","th","th","th","th","th","th","th","st","nd","rd","th","th","th","th","th","th","th","st","nd","rd","th"];

	// Extract the current date from Date object
	var newDate = new Date();
	newDate.setDate(newDate.getDate());
	// Output the day, date, month and year
	var date="" + newDate.getDate();
	$('#date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + dateNths[date-1] + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
}

function updateClockDate()
{
	updateClock();
	updateDate();
}
