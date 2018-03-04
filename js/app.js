$(document).ready(function(){


//smoothscroll - menu

$("nav a").on('click', function(event) {
   var hash = this.hash;
   $('html, body').animate({
     scrollTop: $(hash).offset().top
   }, 800, function(){
     window.location.hash = hash;
   });
 })

//team-changing
var prev = $(".prev");
var next = $(".next");

var teamList = $(".team-list>div");
var picsIndex = 0;

console.log(teamList[0]);
teamList.eq(0).addClass('hidden');

console.log(next);;

prev.on('click',function () {
  console.log("blee");
    var hidden = $(".hidden")
    $(".team-list").append(hidden);
    teamList.eq(picsIndex).removeClass('hidden');
    picsIndex++;
    if(picsIndex === teamList.length){
      picsIndex = 0;
    }
    teamList.eq(picsIndex).addClass('hidden');
})
next.on('click',function () {
    var hidden = $(".hidden")
    $(".team-list").prepend(hidden);
    teamList.eq(picsIndex).removeClass('hidden');
    picsIndex--;
    if(picsIndex < 0){
      picsIndex = teamList.length -1;
    }
    teamList.eq(picsIndex).addClass('hidden');
})
//smoothscroll -team-changing



});
