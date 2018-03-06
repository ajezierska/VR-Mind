$(document).ready(function(){


//  1.  smoothscroll - menu

$("nav a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
  }
   var hash = this.hash;
   $('html, body').animate({
     scrollTop: $(hash).offset().top
   }, 800, function(){
     window.location.hash = hash;
   });
 })

//  2.  team-changing - carousel

var prev = $(".prev");
var next = $(".next");

var teamList = $(".team-list>div");
var teamContainer = $(".team-list");
var picsIndex = 0;

// teamList.eq(0).addClass('hidden');

  //  a)  conditions - what is size


$(window).on("resize", windowSize);
$(window).on("load", windowSize);

function windowSize() {

  if($('html').width() > 730)
  {
      teamList.eq(0).addClass('hidden');
      teamList.eq(1).removeClass('hidden');
      teamList.eq(2).removeClass('hidden');
      teamList.eq(3).removeClass('hidden');

      prev.on('click', bigWindowPrev);
      next.on('click', bigWindowNext);

  } else {
      teamList.eq(0).removeClass('hidden');
      teamList.eq(1).addClass('hidden');
      teamList.eq(2).addClass('hidden');
      teamList.eq(3).addClass('hidden');

      prev.on('click', smallWindowPrev);
      next.on('click', smallWindowNext);
  }
}

  //  b)  events - arrows

function bigWindowPrev() {
  var hidden = $(".hidden")
  $(".team-list").append(hidden);
  teamList.eq(picsIndex).removeClass('hidden');
  picsIndex++;
  if(picsIndex === teamList.length){
    picsIndex = 0;
  }
  teamList.eq(picsIndex).addClass('hidden');
}

function bigWindowNext() {
  var hidden = $(".hidden")
  $(".team-list").prepend(hidden);
  teamList.eq(picsIndex).removeClass('hidden');
  picsIndex--;
  if(picsIndex < 0){
    picsIndex = teamList.length -1;
  }
  teamList.eq(picsIndex).addClass('hidden');
}

function smallWindowNext() {
  teamList.eq(picsIndex).addClass('hidden');
  picsIndex++;
  if(picsIndex === teamList.length){
    picsIndex = 0;
  }
  teamList.eq(picsIndex).removeClass('hidden');
}

function smallWindowPrev() {
  teamList.eq(picsIndex).addClass('hidden');
  picsIndex--;
  if(picsIndex < 0){
    picsIndex = teamList.length -1;
  }
  teamList.eq(picsIndex).removeClass('hidden');
}




// prev.on('click',function () {
//     var hidden = $(".hidden")
//     $(".team-list").append(hidden);
//     teamList.eq(picsIndex).removeClass('hidden');
//     picsIndex++;
//     if(picsIndex === teamList.length){
//       picsIndex = 0;
//     }
//     teamList.eq(picsIndex).addClass('hidden');
// })
//
// next.on('click',function () {
//     var hidden = $(".hidden")
//     $(".team-list").prepend(hidden);
//     teamList.eq(picsIndex).removeClass('hidden');
//     picsIndex--;
//     if(picsIndex < 0){
//       picsIndex = teamList.length -1;
//     }
//     teamList.eq(picsIndex).addClass('hidden');
// })

  //  c)  smoothscroll - in progress




//  3.  czytaj więcej - open section

var more = $('.more');
more.addClass('hidden');


$('.more-content').on('click', function(){
  var moreText = $(this).children().children('span');

  if ($(this).siblings('.more').hasClass('hidden')) {
    $(this).siblings('.more').removeClass('hidden');
    moreText.text('czytaj mniej');
    $('.col2-content').css('overflow','auto');

  }else {
    $(this).siblings('.more').addClass('hidden');
    moreText.text('czytaj więcej');
  }
})

//  4.  form - validation

var error = $('.error');

function validate() {
  var email = $('input[type="email"]');
  var name = $('input[type="text"]');
  var text = $('textarea');

  if ( email.val().length == 0 ) {
    error.text("* Uzupełnij adres e-mail, żeby wysłać wiadomość!");
    return false;
  }
  if( email.val().indexOf('@') == -1){
    error.text("* Wpisz poprawny adres e-mail (musi zawierać '@'), żeby wysłać wiadomość!");
    return false;
  }
  if( name.val().length == 0 ) {
    error.text("* Uzupełnij pole - imię i nazwisko, żeby wysłać wiadomość!");
    return false;
  }
  if(text.val().length == 0) {
      error.text("* Uzupełnij pole - treść wiadomości!");
    return false;
  }
  return true;
}
$('input[type="submit"]').on("click", function(event) {
  if(!validate()) {
    event.preventDefault();
  }else {
    error.css('color','white');
    error.text("Wiadomość wysłana");
  }
})




//  5.  RWD - hamburger menu

$('.open-menu').addClass('hidden');

  // a) open menu on click

$('.hamburger').on('click', function() {
    $('.open-menu').toggleClass('hidden');
    $('.close-menu').toggleClass('hidden');

    if ($('.open-menu').hasClass('hidden')) {
      $('nav').css('display','none')
    }else {
      $('nav').css('display','block')
    }
})
  // b) hide menu after click on li

$('nav li').on('click', function() {
      $('nav').css('display','none');
      $('.open-menu').addClass('hidden');
      $('.close-menu').removeClass('hidden');
})

  // c) always show menu after resize(>750px) window and hide after resize(<750px)

$(window).on("resize",function(){
    if($('html').width() >= 730)
    {
        $('nav').css('display','block')
    } else {
        $('nav').css('display','none')
        $('.close-menu').removeClass('hidden');
        $('.open-menu').addClass('hidden');
    }
})





});
