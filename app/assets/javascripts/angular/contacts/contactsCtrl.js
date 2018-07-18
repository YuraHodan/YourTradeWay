ytwApp.controller('contactsController', ['$scope', function($scope,$http) {

$scope.phoneNumbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;

     // function to submit the form after all validation has occurred
		$scope.submitForm = function() {
			// check to make sure the form is completely valid
			if ($scope.userForm.$valid) {
        $scope.user = {};
        // $scope.userForm.$setPristine();
			}

		};

}]);
console.log('6');
