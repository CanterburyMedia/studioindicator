<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link rel="stylesheet" type="text/css" href="style.css">
<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.min.js"></script>
<script type="text/javascript" src="http://cdn.jsdelivr.net/sockjs/0.3.4/sockjs.min.js"></script>
<script type="text/javascript" src="stomp.js"></script>
<script type="text/javascript" src="stompFunctions.js"></script>
<script type="text/javascript" src="scripts.js"></script>
<script type="text/javascript" src="nowplayingmeta/csr_ocp_v2.min.js"></script> <!-- Now Playing Metadata - (AC) -->
<?php
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, "http://switcher-new.canterburymedia.net:8080/memoryslots");
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$output = curl_exec($ch);
	curl_close($ch);
?>
<script type="text/javascript">
$(document).ready(function() {
	initializePage( <?php echo "'".$output."'"; ?> );
	setInterval('updateClockDate()', 100);
	setInterval('updateWebcam( "http://webcam.csrfm.com/index.php?studio=studio-red" )', 5000);
});
</script>
</head>
<body>
<div class="container">
	<div class="divider"></div>
	<div class="leftContainer">
		<div id="showInfo">
			The Fuck Yeah Show!
		</div>
		<div id="nowMeta">
			<!-- Last Played -->
			<div class="inline">
				Last<br />
				<img class="lastplayedartwork" src="http://www.csrfm.com/live/img/artwork.png" height="150px"><br />
				<span style="font-size:20px;" class="lastplayedtrack">Retrieving Track Data</span>
			</div>
			<!-- Now Playing -->
			<div class="inline">
				Now Playing<br />
				<img class="nowplayingartwork" src="http://www.csrfm.com/live/img/artwork.png" height="150px"><br />
				<span style="font-size:20px;" class="nowplayingtrack">Retrieving Track Data</span>
			</div>
			<!-- Next Playing -->
			<div class="inline">
				Next Up<br />
				<img class="nextplayingartwork" src="http://www.csrfm.com/live/img/artwork.png" height="150px"><br />
				<span style="font-size:20px;" class="nextplayingtrack">Retrieving Track Data</span>
			</div>
		</div>
		<div id="webcam">
			<img id="cam" src="http://webcam.csrfm.com/index.php?studio=studio-red" border="1" width="90%"; />
		</div>
	</div>
	<div class="rightContainer">
		<div id="location">
			Studio Blue | Canterbury <div class="inline" id="temp">??&#x2103;</div><div class="inline" id="weather">Cold</div>
		</div>
		<div id="clockDate">
			<div id="clock">
				??:??:??
			</div>
			<div id="date">
				Date Day Month Year
			</div>
		</div>
		<div id="boxLine">
			<div class="box" id="onAirState">
				<span>On<br />Air</span>
			</div>
			<div class="box" id="studioBlueMicLive">
				<span>Mic<br />Live</span>
			</div>
		</div>
		<div id="boxLine">
			<div class="box" id="phoneIndicator">
				<span>Studio<br />Phone</span>
			</div>
			<div class="box" id="csrSilent">
				<span>CSR<br />Silent!</span>
			</div>
		</div>
		<div id="boxLine">
			<div class="box2" id="sustainer">
				<span>Sustainer</span>
			</div>
			<div class="box2" id="studioRed">
				<span>Studio<br />Red</span>
			</div>
			<div class="box2" id="studioBlue">
				<span>Studio<br />Blue</span>
			</div>
			<div class="box2" id="outsideBroadcast">
				<span>Outside<br />Broadcast</span>
			</div>
		</div>
	</div>
</div>
</body>
</html>
