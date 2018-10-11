ytwApp.controller('QuestionController',
    function QuestionController($scope, $http, $rootScope, $window){

        $http({method: 'GET', url: '/api/v1/menus.json'}).
            then(function success(response) {
                $scope.productsquestion=response.data.products;
                $scope.questionfactories=response.data.factories;
                $scope.questiondistributors=response.data.distributors;
                $scope.questionmarkets=response.data.markets;
                $scope.questionlogistic=response.data.logistic;
        });

        $scope.voteUp = function (answer){
        };
        $scope.voteDown = function (answer){
        };
        $scope.node = document.getElementsByClassName("target")
        $scope.hoverIn = function (){
          // var z = document.getElementById('lol').style.display = 'block';
        };
        $scope.hoverOut = function (){
          // document.getElementById('lol').style.display = 'none'
        };

        $scope.myFunc = function() {
          var element = document.getElementById("third");
          element.classList.add("opened");
          var element2 = document.getElementById("arowthird");
          element2.classList.add("visible");
        };

/// group_ids

$scope.type_ids= '';

$scope.trackOrder = function(factorie){
  //add album in the array
     $scope.type_ids = (factorie.id)
     console.log($scope.type_ids);
     localStorage.setItem('storageArray',JSON.stringify($scope.type_ids));

};
$scope.group_ids= ''

$scope.trackOrder2 = function(second_menu){
  //add album in the array
     $scope.group_ids = (second_menu.id)
     console.log($scope.group_ids);
     localStorage.setItem('storageArray2',JSON.stringify($scope.group_ids));

}


    }
)
