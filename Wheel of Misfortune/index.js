window.onscroll = function() {changeHead(); headChange();};

function headChange() 
{
	var getTopIcon = document.getElementById('topIcon');
	var getHeaderBar = document.getElementById('headerBar');

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
		getTopIcon.style.float = 'left';
    } else {
    	getTopIcon.style.float = 'none';    }
}
function changeHead(){
	var scrollVar = $(window).scrollTop();
	if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
		$('#headerBar').css({'opacity':(scrollVar)/500});
	}
	else if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
		$('#headerBar').css({'opacity':8});
	}
}
