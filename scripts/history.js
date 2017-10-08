// SELECTORS
const $section = $('.nav_flex button');
const $close = $('.close_page');
const $brand = $('.branding_center');

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
	// CLICK EVENT FOR CLOSE PAGE BUTTONS
	$brand.on('click', function(e) {
		console.log('test');
		e.preventDefault();
		const $this = $(this);
		history.pushState(null, '', "/");	
	}); 

	// POPSTATE HANDLING
	$(window).on('popstate', function(e) {
		if(window.location.hash){
			landing_back();
			console.log("back hash");
		}else{
			landing_back();
			console.log("reload hash");
		}		
	});

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
			console.log("reload hash class");
			landing_close();
		}else{
			console.log("reload hash no-class");
			landing_close();
		}
	}
}
