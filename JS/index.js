//user enters city 

//user clicks update button 

$(document).ready(function() {

$("form").submit(updateBackground); 



$("form").submit(function(event) {event.preventDefault();});

$("form").submit(changeBackgroundColor);

function changeBackgroundColor(){
	$("body").css("background-color", "blue");
}


function updateBackground() {
	//get the users input and check if it is NY, if it is Boston, if it Sydney, etc 
	var city = $("#citytype").val();
	city = city.toLowerCase().trim;
	//this ensures that we going to not care about the caps 
	//.trim ensures that we're not going to care about how many spaces the user entered 

	if (city === "new york city" || city === "nyc") 
		//these are whatever inputs we want to accept

	{
		$("body").addClass("nyc"); 
	}

}

// });
//lookup what prevent default is and how that plays out with jQuery, prevents form from submitting to the server, which is what it naturally wants to do.... 


