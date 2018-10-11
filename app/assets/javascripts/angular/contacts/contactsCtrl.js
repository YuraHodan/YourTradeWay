
ContactsCtrl.$inject = ['$http', '$scope'];

ytwApp.controller('ContactsCtrl', ContactsCtrl);


function ContactsCtrl($http, $scope) {

    // SENDING INFO AND ORDER

    $scope.user = {};
    // $scope.Parameters={
    //   commit=>"Update",
    //   action=>"update",
    //   method=>"post",
    //   authenticity_token=>"ysiDvO5s7qhJQrnlSR2+f8jF1gxdB7T9I2ydxpRlSSk="
    // }
    // POST REQUEST
// var token = document.getElementsByName('csrf-token')[0].content;
//
//     $scope.submitForm = function () {
//         var url = 'contain_us';
//         var data = {
//             info: $scope.user
//         };
//         var config = {
//             headers : {
//                 'Content-Type': 'application/json',
//                 'X-CSRF-Token': token
//             }
//         };
//
//         $http.post(url, data, config)
//             .then(
//                 function(response){
//                     // callback
//                     $scope.user = data.user;
//                     alert("gooooo.");
//                 },
//                 function(response){
//                     // failure callback
//                     alert("єбать ти лох");
//                 }
//             );
//     };
}
