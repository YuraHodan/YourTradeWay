ytwApp.controller('contactsController', ['$scope', function($scope,$http) {

$scope.phoneNumbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
$scope.user = {};
     // function to submit the form after all validation has occurred
		$scope.submitForm = function() {
			// check to make sure the form is completely valid
			$scope.save = function (answer, usubmitForm){
		 		 if(usubmitForm.$valid){

		 				 $http.post("contacts", answer).then(function success (response) {
		 						 $scope.user=user.data;

		 				 });
		 		 }
		  };

		};

}]);
console.log('6');
