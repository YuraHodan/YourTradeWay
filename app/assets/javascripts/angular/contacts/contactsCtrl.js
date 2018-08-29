// ytwApp.controller('contactsController', ['$scope', function($scope,$http) {
//
// $scope.phoneNumbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
// // $scope.user = {};
// //      // function to submit the form after all validation has occurred
// // 		// $scope.submitForm = function() {
// // 			// check to make sure the form is completely valid
// // 			$scope.save = function (user, userForm){
// // 		 		 if(userForm.$valid){
// //
// // 		 				 $http.post("message", user).then(function success (response) {
// // 		 						 $scope.user=user.data;
// //
// // 		 				 });
// // 		 		 }
// // 		  };
// //
// // 		// };
//
//
// // function AnswerController($scope, $http){
// //
// //         $scope.user={};
// //         $scope.save = function (user, userForm){
// //             if(userForm.$valid){
// // 											alert('1')
// //                 $http.post("message", user).then(function success (response) {
// //                     $scope.user=user.data;
// //
// //                 });
// //             }
// //         };
// //     }
//
// function AnswerController($scope, $http){
//
//         $scope.response={};
//         $scope.save = function (user, userForm){
//             if(userForm.$valid){
//
//                 $http.post("message", user).then(function success (response) {
//                     $scope.response=response.data;
//
//                 });
//             }
//         };
//     }
//
//
// }]);


ContactsCtrl.$inject = ['$http', '$scope'];

ytwApp.controller('ContactsCtrl', ContactsCtrl);

console.log('33333');

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
var token = document.getElementsByName('csrf-token')[0].content;

    $scope.submitForm = function () {
        var url = 'message';
        var data = {
            info: $scope.user
        };
        var config = {
            headers : {
                'Content-Type': 'application/json',
                'X-CSRF-Token': token
            }
        };

        $http.post(url, data, config)
            .then(
                function(response){
                    // callback
                    $scope.user = data.user;
                    alert("gooooo.");
                },
                function(response){
                    // failure callback
                    alert("єбать ти лох");
                }
            );
    };
}
