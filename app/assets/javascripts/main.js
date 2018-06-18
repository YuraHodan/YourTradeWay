// var transform = document.getElementById( 'rotate' );
//
// rotate.addEventListener( 'click', function () {
//
//     rotate2.className = 'over';
// }, false );
//
// rotate.addEventListener( 'mouseout', function () {
//
//     var rotate = this;
//
//     rotate2.className = 'out';
//     window.setTimeout( function () { rotate2.className = '' }, 150 );
//
// }, false );
// var transform = document.getElementById("list-arrow");
// var dispel = document.getElementById("one-tovar");
// var sps = true;
// transform.addEventListener('click', function (){
//     dispel.classList.remove("opened");
//     sps = false;
// })
// document.getElementById("list-arrow").onclick= function(){myFunction()}
//
// function myFunction(){
//   document.getElementById("lst-item").classList.toggle('tovars-list')
// }

$(function(){
  $('a[href="#"]').on('click', function(e){
    e.preventDefault();
  });

  $('#menu > li').on('mouseover', function(e){
    $(this).find("ul:first").show();
    $(this).find('> a').addClass('active');
  }).on('mouseout', function(e){
    $(this).find("ul:first").hide();
    $(this).find('> a').removeClass('active');
  });

  $('#menu li li').on('mouseover',function(e){
    if($(this).has('ul').length) {
      $(this).parent().addClass('expanded');
    }
    $('ul:first',this).parent().find('> a').addClass('active');
    $('ul:first',this).show();
  }).on('mouseout',function(e){
    $(this).parent().removeClass('expanded');
    $('ul:first',this).parent().find('> a').removeClass('active');
    $('ul:first', this).hide();
  });

    $('#rotate2').on('click', function(e){
      if ($(window).width() <= '995'){
        $('.long-list').addClass('active')
        console.log("1");
   }
    });
});


function readMore (jObj, lineNum) { //function
  if ( isNaN(lineNum) ) {
    lineNum = 4;
  }
  var go = new ReadMore (jObj, lineNum);
}

function ReadMore (_jObj, lineNum) { //class
  var READ_MORE_LABEL = "подробнее";
  var HIDE_LABEL = "скрить";

  var jObj = _jObj;
  var textMinHeight = ""+ (parseInt(jObj.children(".text").css("line-height"),10)*lineNum) +"px";
  var textMaxHeight = ""+jObj.children(".text").css("height");

  jObj.children(".text").css("height", ""+textMaxHeight);
  jObj.children(".text").css( "transition", "height .5s");
  jObj.children(".text").css("height", ""+textMinHeight);

  jObj.append ("<p class=read-more>"+READ_MORE_LABEL+"</p>");

  jObj.children(".read-more").css({
      "color": "#07b1d8",
      "font-weight": "bold",
      "cursor": "pointer"
    });

  jObj.children(".read-more").click ( function() {
    if (jObj.children(".text").css("height") == textMinHeight) {
      jObj.children(".text").css("height", ""+textMaxHeight);
      jObj.children(".read-more").html(HIDE_LABEL);
    } else {
      jObj.children(".text").css("height", ""+textMinHeight);
      jObj.children(".read-more").html(READ_MORE_LABEL);
    }
  });
}



readMore( $("#box"), 2);
