var container = document.getElementById('popUpContainer');
var acceptContainer = document.getElementById('acceptPopUp');
var declineContainer = document.getElementById('declinePopUp');
var warningContainer = document.getElementById('warningPopUp'); 

function popUpFadeOut(input){
	if(container.style.opacity == 0){
		container.style.opacity = 1;
		container.style.dispaly = "block";

		var fading = function fade() {
			if ((container.style.opacity -= .01) <= 0)
			{
				container.style.dispaly = "none";
				container.style.opacity = 0;
			}
			else
			{
				requestAnimationFrame(fade);
			}
		};
		setTimeout(fading, 1000); //popup box fades away after 1 seconds
	}
};