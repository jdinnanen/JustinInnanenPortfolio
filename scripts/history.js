// SELECTORS
const $section = $('.nav_flex button');
const $close = $('.close_page');

//CALL INIT FUNCTION
init();

function init(){
	if(window.location.hash){
		history.replaceState(null, '', "/");
		landing();
	}else{
		const hashDefault = $section.filter(':first').attr('href');
		history.replaceState(null, '', "/");
	}
}
	// CLICK EVENT FOR NAV BUTTONS
	$section.on('click', function(e){
		e.preventDefault();
		const $this = $(this);
		history.pushState(null, '', $this.data('url'));	
	}); 

	// CLICK EVENT FOR CLOSE PAGE BUTTONS
	$close.on('click', function(e) {
		e.preventDefault();
		const $this = $(this);
		history.pushState(null, '', "/");	
	}); 

	// POPSTATE HANDLING
	$(window).on('popstate', function(e) {
		const state = e.originalEvent.state;
		const hash = state.hash;
		const $el = $('a[href="' + hash + '"]');
	});

	//PAGE RELOAD HANDLING
	$(window).on('unload', unloadPage());
	function unloadPage(e){
		if(window.location.hash){
			console.log('test');
			history.replaceState(null, '', '/');
			landing_back();
		}else{
			const hashDefault = $section.filter(':first').attr('href');
			history.replaceState(null, '', '/');
			landing();
		}	
	}


//LANDING PAGE STATE HANDLING FUNCTION
function landing(){
	if(window.location.hash == "#about"){
		about_open();
	}else if(window.location.hash == "#projects"){
		project_open();
	}else if(window.location.hash == "#contact"){
		contact_open();
	}
}
function landing_back(){
	if(window.location.hash == "#about"){
		about_open();
	}else if(window.location.hash == "#projects"){
		project_open();
	}else if(window.location.hash == "#contact"){
		contact_open();
	}else {
		if($('#landing').hasClass()){
			$('#landing').removeClass();
		}else{
			$('#landing').removeClass();
		}
	}
}
