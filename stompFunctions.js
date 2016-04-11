var ws = new SockJS('--stomp domain and port here--');
var client = Stomp.over(ws);
client.heartbeat.incoming = 0;
var on_connect = function() {
	console.log('I am connected!');	//Handy for dev
	var subscription1 = client.subscribe("/exchange/pathfinder.memoryslots", onMessage);	//Listen to all pathfinder memoryslots
	var subscription2 = client.subscribe("/exchange/cm-pbx.events", onMessage);				//Listen to PBX/phone based events
};
var on_error =  function() {
	console.log('error');
};
client.connect('--stomp username--', '--stomp password--', on_connect, on_error, '/');

function onMessage(message)	//Parses all stomp messages to messageHandler
{
	var msgJson = JSON.parse(message.body);

	messageHandler(msgJson);
}

function initializePage(memorySlots)	//Handles current states for page load by parsing all current states to meesageHandler
{
	var memJson = JSON.parse(memorySlots);
	for (var x in memJson)
	{
		messageHandler(memJson[x]);
	}
}

function messageHandler(msgJson)		//Parses all messages for consistancy - expects json
{
	if (msgJson.name=="studioBlueMicLive" || msgJson.name=="studioBluePhone" || msgJson.name=="SILENCE" || msgJson.name=="ONAIR")
	{
		window[ "" + msgJson.name ]( msgJson.value );
	}
}

function studioBlueMicLive( micLive )
{
	if (micLive=="on")
	{
		$('#studioBlueMicLive').css('opacity', '1');
		$('#studioBlueMicLive').css('color', 'white');
	} else {
		$('#studioBlueMicLive').css('opacity', '0.4');
		$('#studioBlueMicLive').css('color', 'black');
	}
}

function studioBluePhone ( phoneState )
{
	if (phoneState=="ringing")
	{
		//location.reload();
		$('#phoneIndicator').css('opacity', '1');
		$('#phoneIndicator').css('color', 'white');
	} else {
		$('#phoneIndicator').css('opacity', '0.4');
		$('#phoneIndicator').css('color', 'black');
	}
}

function SILENCE ( silentState )
{
        if (silentState=="YES")
        {
                $('#csrSilent').css('opacity', '1');
                $('#csrSilent').css('color', 'white');
        } else {
                $('#csrSilent').css('opacity', '0.4');
                $('#csrSilent').css('color', 'black');
        }
}

function ONAIR ( onAirStudio )
{
	if (onAirStudio=="SB")
	{
		$('#onAirState').css('opacity', '1');
		$('#onAirState').css('color', 'white');
		$('#studioBlue').css('opacity','1');
		$('#studioBlue').css('color','white');
	} else {
		$('#onAirState').css('opacity', '0.4');
		$('#onAirState').css('color', 'black');
		$('#studioBlue').css('opacity','0.4');
		$('#studioBlue').css('color','black');
	}
	if (onAirStudio=="SR")
	{
		$('#studioRed').css('opacity','1');
		$('#studioRed').css('color','white');
	} else
	{
		$('#studioRed').css('opacity','0.4');
		$('#studioRed').css('color','black');
	}
	if (onAirStudio=="SUS")
	{
		$('#sustainer').css('opacity','1');
		$('#sustainer').css('color','white');
	} else
	{
		$('#sustainer').css('opacity','0.4');
		$('#sustainer').css('color','black');
	}
	if (onAirStudio=="SRO")
	{
		$('#outsideBroadcast').css('opacity','1');
		$('#outsideBroadcast').css('color','white');
	} else
	{
		$('#outsideBroadcast').css('opacity','0.4');
		$('#outsideBroadcast').css('color','black');
	}
}
