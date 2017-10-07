// ABOUT NAV FUNCTIONS

// ABOUT HOVER
$('.about_nav').hover(
  function () {
   	$('#landing').addClass('pre_about');
  }
);

// ABOUT MOUSEOUT
$('.about_nav').mouseout(
  function () {
    var timeout = null;
    $('#landing').addClass('pre_remove').removeClass('pre_about');
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(function () {
      $('#landing').removeClass('pre_remove');
    }, 1000);
  }
);

// ABOUT NAV CLICK
function about_open() {
  if ( $('.projects').hasClass('active_content')){
    $('.projects').removeClass('active_content');
    $('#landing').addClass('close_projects');
    $(function(){
      setTimeout(function() {
        $('#landing').removeClass('open_projects');
        setTimeout(function() {
          $('#landing').removeClass('close_projects');
          $('#landing').addClass('open_about');
          $('.about').addClass('active_content').siblings().removeClass('active_content');
          $('.branding_center').html('<h1>About Me</h1>');
        }, 700);
      }, 0);
    });
  }else{
    $('#landing').removeClass().addClass('open_about');
    $('.about').addClass('active_content').siblings().removeClass('active_content');
    $('.branding_center').html('<h1>About Me</h1>');
  }
};
$('.about_nav').click(
  function () {
    about_open();
  }
);
// END ABOUT NAV FUNCTIONS



// PROJECT NAV FUNCTIONS
// HOVER
$('.projects_nav').hover(
    function () {
      $('#landing').addClass('pre_projects');
    }
);

// MOUSEOUT
$('.projects_nav').mouseout(
  function () {
    var timeout = null;
    $('#landing').addClass('pre_remove').removeClass('pre_projects');
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(function () {
      $('#landing').removeClass('pre_remove');
    }, 1000);
  }
);

// NAV CLICK
//project_open();
function project_open() {
  if ( $('.about').hasClass('active_content')){
    $('.about').removeClass('active_content');
    $('#landing').addClass('close_about');
    $(function(){
      setTimeout(function() {
        $('#landing').removeClass('open_about');
        setTimeout(function() {
          $('#landing').removeClass('close_about');
          $('#landing').addClass('open_projects');
          $('.projects').addClass('active_content').siblings().removeClass('active_content');
          $('.branding_center').html('<h1>Projects</h1>');
        }, 700);
      }, 0);
    });
  }else{
    $('#landing').removeClass().addClass('open_projects');
    $('.projects').addClass('active_content').siblings().removeClass('active_content');
    $('.branding_center').html('<h1>Projects</h1>');
  }
};

$('.projects_nav').click(
  function () {
    project_open();
  }
);
//END PROJECT NAV FUNCTIONS


// CONTACT NAV FUNCTIONS
// CONTACT HOVER
$('.contact_nav').hover(
  function () {
	  $('#landing').addClass('pre_contact');
  }
); 

// CONTACT MOUSEOUT
$('.contact_nav').mouseout(
  function () {
    var timeout = null;
    $('#landing').addClass('pre_remove').removeClass('pre_contact');
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(function () {
      $('#landing').removeClass('pre_remove');
    }, 1000);
  }
);

// CONTACT NAV CLICK
//open_contact();
function contact_open() {
  if ( $('.about').hasClass('active_content')){
    $('.about').removeClass('active_content');
    $('#landing').addClass('close_about');
    $(function(){
      setTimeout(function(){
        $('#landing').removeClass('open_about');
        setTimeout(function() {
          $('#landing').addClass('open_contact');
          setTimeout(function() {
            $('#landing').removeClass('close_about');
            $('.contact').addClass('active_content').siblings().removeClass('active_content');
            $('.branding_center').html('<h1>Contact Me</h1>');
          }, 700);
        }, 0);
      }, 300); 
    });
  }else if ($('.projects').hasClass('active_content')){
    $('.projects').removeClass('active_content');
    $('#landing').addClass('close_projects');
    $(function(){
      setTimeout(function() {
        $('#landing').removeClass('open_projects');
        setTimeout(function() {
          $('#landing').addClass('open_contact');
          setTimeout(function() {
            $('#landing').removeClass('close_projects');
            $('.contact').addClass('active_content').siblings().removeClass('active_content');
            $('.branding_center').html('<h1>Contact Me</h1>');
          }, 700);
        }, 0);
      }, 300);
    });
  }else{
    $('#landing').addClass('open_contact');
    $('.contact').addClass('active_content').siblings().removeClass('active_content');
    $('.branding_center').html('<h1>Contact Me</h1>');
  } 
};

$('.contact_nav').click(
  function(){
    contact_open();
  }
);
// END CONTACT NAV FUNCTIONS


// CLOSE PAGE BUTTONS

// CLOSE FUNCTIONS
function close_about() {
  var timeout = null;
  $('#landing').removeClass('open_about').addClass('close_about');
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  timeout = setTimeout(function () {
    $('#landing').removeClass('close_about');
    $('.about').removeClass('active_content');
    $('.branding_center').html('<h1>Justin Innanen</h1>');
  }, 1000);
};

function close_projects() {
  var timeout = null;
  $('#landing').removeClass('open_projects').addClass('close_projects');
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  timeout = setTimeout(function () {
    $('#landing').removeClass('close_projects');
    $('.projects').removeClass('active_content');
    $('.branding_center').html('<h1>Justin Innanen</h1>');
  }, 1000);
};

function close_contact() {
  var timeout = null;
  $('#landing').removeClass('open_contact').addClass('contact_close');
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  timeout = setTimeout(function () {
    $('#landing').removeClass('contact_close');
    $('.contact').removeClass('active_content');
    $('.branding_center').html('<h1>Justin Innanen</h1>');
  }, 1000);
};

// ABOUT CLOSE CLICK
$('.close_about').click(
  function(){
    close_about();
  }
);

// PROJECTS CLOSE CLICK
$('.close_project').click(
  function(){
    close_projects();
  }
);

// CONTACT CLOSE CLICK
$('.close_contact').click(
 function(){
    close_contact();
  }
);

// LANDING PAGE CLOSE FUNCTIONS


function landing_close() {
  if ($('#landing').hasClass('open_about')){
        close_about();
  }else if ($('#landing').hasClass('open_projects')){
        close_projects();
  }else if ($('#landing').hasClass('open_contact')){
        close_contact();
  }else{

  }
}
//NEED TO MAKE A TARGETABLE AREA
// $('.desktop_nav').click(
//   function(){
//     landing_close();
//   }
// );


//SWITCH TO MOBILE VIEW
$(window).on('load, resize', function mobileViewUpdate() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 800) {
        $('#landing').removeClass();
    }
});

//RETURN TO DESKTOP VIEW
$(window).on('load, resize', function mobileViewUpdate() {
    var viewportWidth = $(window).width();
    if (viewportWidth >= 800) {
       landing();
      }
});

//SWITCH TO EXTRA SMALL DEVICES
$(window).on('load, resize', function mobileViewUpdate() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 500) {
        $('.LI-profile-badge').addClass('hidden');
        $('.divider').removeClass('hidden');
    }
});

//RETURN TO MOBILE VIEW
$(window).on('load, resize', function mobileViewUpdate() {
    var viewportWidth = $(window).width();
    if (viewportWidth > 500) {
        $('.LI-profile-badge').removeClass('hidden');
        $('.divider').addClass('hidden');
    }
});