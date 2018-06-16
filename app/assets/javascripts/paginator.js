// var page = 1;
//     totalPages = 3;
//
// $(function(){
//     updatePages();
// });
//
// $("#next, #prev").click(function(){
//
//     var bId = $(this).attr('id');
//     bId == "next" ? page++ : page--;
//     if(page < 1) page = 1;
//     if(page > totalPages) page = totalPages;
//
//     updatePages();
// });
//
// function updatePages(){
//    $(".pagination li.element")
//       .removeClass('current')
//       .filter("[data-page=" + page+"]")
//           .addClass('current');
//
//    $("#first-page").toggle(page == 1);
//
// }
