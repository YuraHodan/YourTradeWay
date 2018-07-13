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
  var textMinHeight = ""+ (parseInt(jObj.children(".text").css("line-height"),23)*lineNum) +"px";
  var textMaxHeight = ""+jObj.children(".text").css("height");

  jObj.children(".text").css("height", ""+textMaxHeight);
  jObj.children(".text").css( "transition", "height .5s");
  jObj.children(".text").css("height", ""+textMinHeight);

  jObj.append ("<p class=read-more>"+READ_MORE_LABEL+"</p>");

  jObj.children(".read-more").css({
      "color": "#24bbea",
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



$('.show-info').click( function() {
	$(this).find('.more-info').slideToggle('slow');
  console.log('3');
});

 $('.list-arrow').click(function(){
   if ($('.one-tovar').hasClass('.opened')){
     $('.one-tovar').removeClass('.opened')
   }
 })




 //// form logo
 $(function() {

  $('#dropzone').on('dragover', function() {
    $(this).addClass('hover');
  });

  $('#dropzone').on('dragleave', function() {
    $(this).removeClass('hover');
  });

  $('#dropzone input').on('change', function(e) {
    var file = this.files[0];

    $('#dropzone').removeClass('hover');

    if (this.accept && $.inArray(file.type, this.accept.split(/, ?/)) == -1) {
      return alert('File type not allowed.');
    }

    $('#dropzone').addClass('dropped');
    $('#dropzone img').remove();

    if ((/^image\/(gif|png|jpeg)$/i).test(file.type)) {
      var reader = new FileReader(file);

      reader.readAsDataURL(file);

      reader.onload = function(e) {
        var data = e.target.result,
            $img = $('<img />').attr('src', data).fadeIn();

        $('#dropzone div').html($img);
      };
    } else {
      var ext = file.name.split('.').pop();

      $('#dropzone div').html(ext);
    }
  });
});

// heder gamburger
$( "#nav-icon" ).click(function() {
  // $( ".manu-container" ).addClass( "opened" );
  if ( $(".manu-container").hasClass("opened") ) {
    $( ".manu-container" ).removeClass( "opened" );
    $( ".manu-container-second" ).removeClass( "opened" );
    $("body").removeClass("menuopen");
    $('.arow').removeClass('visible');
    $('.arowthird').removeClass('visible');
    $('.arowtfourth').removeClass('visible');
      $('.step-back p').html('виберите категорию');
}else {
  $( ".manu-container" ).addClass( "opened" );
  $("body").addClass("menuopen")
}
});
// function Second(){
//   // $( ".manu-container" ).removeClass( "opened" );
//   $( this ).find(".manu-container-second").addClass('opened');
// }


$( ".classification" ).click(function() {
  // $('.step-back p').html($(this).html());
  $('.step-back p').html($(this).find('a').html());
  $( this ).find(".manu-container-second").addClass('opened');
  $('.arow').addClass('visible');

});
$( ".arow" ).click(function() {
    $('.step-back p').html('виберите категорию');
$(".manu-container-second").removeClass('opened');
$('.arow').removeClass('visible');
});

$( ".arowthird" ).click(function() {
$(".manu-container-third").removeClass('opened');
$('.arowthird').removeClass('visible');
});

$( ".arowtfourth" ).click(function() {
$(".manu-container-fourth").removeClass('opened');
$('.arowtfourth').removeClass('visible');
});


$( ".classification-second" ).click(function() {
  // $('.step-back p').html($(this).find('a').html());
  $( this ).find(".manu-container-third").addClass('opened');
  $('.arowthird').addClass('visible');
});

$( ".classification-third" ).click(function() {
  // $('.step-back p').html($(this).find('a').html());
  $( this ).find(".manu-container-fourth").addClass('opened');
  $('.arowtfourth').addClass('visible');
});

$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});



/// garburger ////
