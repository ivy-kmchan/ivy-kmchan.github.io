$(document).foundation();

$(document).ready(function(){
  console.log("Document loaded!");
// NOT IN USE.
/* http://foundation.zurb.com/forum/posts/5265-how-to-add-a-back-to-the-top-image */
/* Top of Page */
  // hide #back-top first
  /*$("#back-top").hide();

  // fade in #back-top
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 900) {
        $('#back-top').fadeIn();
      } else {
        $('#back-top').fadeOut();
      }
    });

    // scroll body to 0px on click
    $('#back-top .fi-arrow-up').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });*/
});

// Foundation accordion.
$(document).foundation({
accordion: {
  callback : function (accordion) {
    console.log(accordion);
    }
  }
});

$('#myAccordionGroup').on('toggled', function (event, accordion) {
	console.log(accordion);
});

// NOT IN USE.
// When users click on the projects, they are notified that they will be directed to a new tab.
// https://www.w3schools.com/js/js_popup.asp 
/*function notifyUserLeaveMySite() {
    alert("This will bring you to a new tab!");
}*/

