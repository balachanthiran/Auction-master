var resetArrayBoolean = false;

saveData = function(key,data){
	if(typeof(Storage) !== "undefined") {
		// Save the object to storage
		localStorage.setItem(key, JSON.stringify(data));
		console.log("stored!");
	} else {
		console.log("ERROR: No Web Storage support for saving");
	}		
};

function loadData(key){
	var result;
	if(typeof(Storage) !== "undefined") {
		// Retrieve the object from storage
		var retrievedObject = localStorage.getItem(key);
		if (retrievedObject){
			result = JSON.parse(retrievedObject);
			console.log("data loaded!");
		}
	} else {
		console.log("ERROR: No Web Storage support for loading");
	}
	
	return result;
};

function resetData(){
	resetArrayBoolean = true;
	sendToServer();
	
	bidLabelContainer.innerHTML = "...";
	bidListContainer.innerHTML = [];
	saveData("bidderLabel", bidLabelContainer);
	saveData("bidderArray", bidListContainer);
};