#!/usr/bin/env node

// https://github.com/websockets/ws


var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function (socket) {
	console.log("connection");
	socket.on('nigger', function (from, msg) {
		console.log('FRA:', from, 'INDHOLD:', msg);
	});
});

http.listen(9999, function() {
	console.log("listening to: 9999 ")
});


/*
require('C:/wamp64/www/Auction/js/Bidding.js').bidOnProduct;


bidderArray = [];
popUpContainerDisplay = "none";
popUpContainerOpacity = 0;
popUpAcceptContainerDisplay = "none";
popUpDeclineContainerDisplay = "none";
popUpWarningContainerDisplay = "none";
var bidLabel = "...";
var arrayReset = false;

wss.on('connection', function connection(ws) {
	//message to client
	function sendToClient(){
		var msgToClient = {
			popUpContainerDisplay: popUpContainerDisplay,
			popUpContainerOpacity: popUpContainerOpacity,
			popUpAcceptContainerDisplay: popUpAcceptContainerDisplay,
			popUpDeclineContainerDisplay: popUpDeclineContainerDisplay,
			popUpWarningContainerDisplay: popUpWarningContainerDisplay,
			bidLabelMessage: bidLabel,
			bidderArrayText: bidderArray,
			arrayReset: arrayReset
		}	
		ws.send(JSON.stringify(msgToClient));
	}
	sendToClient();
	ws.on('message', function incoming(message) {
		//insert to bid list
		var incomingMessage = JSON.parse(message);
		var bidMessage = incomingMessage.bid;
		var bidderMessage = incomingMessage.bidder;
		bidOnProduct(Number(bidMessage), bidderMessage.toString());
		
		//reset array
		arrayReset = incomingMessage.resetArrayBoolean;
		if(arrayReset == true){
			bidderArray = [];
			highestBid = 0;
			highestBidder = "";
			arrayReset = false;
		}

		//insert to bid label
		if(bidderArray.length > 0) {
			//we do this to remove <br><br>
			var str = bidderArray[0].split(" ");
			bidLabel = str[0] + " " + str[1] + " " + str[2];
		}
		else
		{
			bidLabel = "...";
		}
		
		//we load data whenever the bid button is clicked AND when client is connected.
		sendToClient();
    });
	
    ws.on('close', function (code, message) {
        
    });
});
*/ 
