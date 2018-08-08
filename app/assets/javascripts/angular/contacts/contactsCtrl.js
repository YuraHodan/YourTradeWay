ytwApp.controller('contactsController', ['$scope', function($scope,$http) {

$scope.phoneNumbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
// $scope.user = {};
//      // function to submit the form after all validation has occurred
// 		// $scope.submitForm = function() {
// 			// check to make sure the form is completely valid
// 			$scope.save = function (user, userForm){
// 		 		 if(userForm.$valid){
// 		 				 $http.post("message", user).then(function success (response) {
// 		 						 $scope.user=user.data;
//
// 		 				 });
// 		 		 }
// 		  };
//
// 		// };


// function AnswerController($scope, $http){
//
//         $scope.user={};
//         $scope.save = function (user, userForm){
//             if(userForm.$valid){
// 											alert('1')
//                 $http.post("message", user).then(function success (response) {
//                     $scope.user=user.data;
//
//                 });
//             }
//         };
//     }

}]);
console.log('6');
function ContactsCtrl($http , $scope, ) {
$scope.user = {};
$scope.submitForm = function () {
    // $('.progress-wrap').addClass('visible');
    var url = 'message';
    // var config = {
    //     headers : {
    //         'Content-Type': 'application/json'
    //     }
    // };

    $http.post({
			url: 'message',
			method: "POST",
			// data: { 'message' : message }

		})
        .then(
            function(response){
                // success callback
                $scope.user = data.user;
								console.log('2222');
            },
            function(response){
                // failure callback
                alert("Вибачте, помилка.");
            }
        );
};
}
