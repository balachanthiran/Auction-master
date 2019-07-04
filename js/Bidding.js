highestBid = 0;
highestBidder = "";

bidOnProduct = function(input1, input2){
	popUpContainerDisplay = "block";
    if(isInteger(input1) && isString(input2)){
		if(input1 > highestBid)
		{
			highestBid = input1;
			highestBidder = input2;
			addTopBiddersToList(highestBid, highestBidder);

			popUpAcceptContainerDisplay = "block";
			popUpDeclineContainerDisplay = "none";
			popUpWarningContainerDisplay = "none";
		}
		else
		{
			popUpDeclineContainerDisplay = "block";
			popUpAcceptContainerDisplay = "none";
			popUpWarningContainerDisplay = "none";
		}
	}
	else
	{
		popUpWarningContainerDisplay = "block";
		popUpAcceptContainerDisplay = "none";
		popUpDeclineContainerDisplay = "none";
	}
};

function addTopBiddersToList(number, name){
	bidderArray.splice(0, 0, number + "$ by " + name + " <br><br>"); //sets newest bet as first index (top)
	bidderArray.splice(10, 1); //removes the element in index 10, so the list doesn't go above 10 elements.
};

function isString(inputStr){
	if (inputStr.includes('1') ||
		inputStr.includes('2') ||
		inputStr.includes('3') ||
		inputStr.includes('4') ||
		inputStr.includes('5') ||
		inputStr.includes('6') ||
		inputStr.includes('7') ||
		inputStr.includes('8') ||
		inputStr.includes('9') ||
		inputStr == ""){
		return false;
		}
	return true;
};

function isInteger(inputInt){
	if(inputInt === parseInt(inputInt)){
		return true;
	}
};




