function myFunction(){
  $(".nav-button").click(function() {
    /*  Toggle the CSS closed class which reduces the height of the UL thus
        hiding all LI apart from the first */
    $(this).parent().parent().toggleClass("closed");
  });
}

/**
 * CUSTOM FILE INPUTS FOR IMAGES
 *
 *
 * Custom file inputs with image preview and
 * image file name on selection.
 */
$('input[type="file"]').each(function(){
  // Refs
  var $file = $(this),
      $label = $file.next('label'),
      $labelText = $label.find('span'),
      labelDefault = $labelText.text();

  // When a new file is selected
  $file.on('change', function(event){
    var fileName = $file.val().split( '\\' ).pop(),
        tmppath = URL.createObjectURL(event.target.files[0]);
    //Check successfully selection
		if( fileName ){
      $label
        .addClass('file-ok')
        .css('background-image', 'url(' + tmppath + ')');
			$labelText.text(fileName);
    }else{
      $label.removeClass('file-ok');
			$labelText.text(labelDefault);
    }
  });
  $(function() {
     $("form").submit(function() {
        $(this).find(":input").filter(function(){ return !this.value; }).attr("disabled", "disabled");
        return true; // ensure form still submits
      });
  });
// End loop of file input elements
});

$('#image1').change(function (e) {
    $(".image2").css("display", "block");
});
$('#image2').change(function (e) {
    $(".image3").css("display", "block");
});
$('#image3').change(function (e) {
    $(".image4").css("display", "block");
});
$('#image4').change(function (e) {
    $(".image5").css("display", "block");
});
$('#image5').change(function (e) {
    $(".image6").css("display", "block");
});
$('#image7').change(function (e) {
    $(".image8").css("display", "block");
});
$('#image8').change(function (e) {
    $(".image9").css("display", "block");
});
$('#image9').change(function (e) {
    $(".image10").css("display", "block");
});
$('#image10').change(function (e) {
    $(".image11").css("display", "block");
});
$('#image11').change(function (e) {
    $(".image12").css("display", "block");
});
$('#image13').change(function (e) {
    $(".image14").css("display", "block");
});
$('#image14').change(function (e) {
    $(".image15").css("display", "block");
});
$('#image15').change(function (e) {
    $(".image16").css("display", "block");
});
$('#image16').change(function (e) {
    $(".image17").css("display", "block");
});
$('#image17').change(function (e) {
    $(".image18").css("display", "block");
});
$('#image19').change(function (e) {
    $(".image20").css("display", "block");
});
$('#image20').change(function (e) {
    $(".image21").css("display", "block");
});
$('#image21').change(function (e) {
    $(".image22").css("display", "block");
});
$('#image22').change(function (e) {
    $(".image23").css("display", "block");
});
$('#image23').change(function (e) {
    $(".image24").css("display", "block");
});
