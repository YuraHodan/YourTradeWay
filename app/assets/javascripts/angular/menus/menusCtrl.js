ytwApp.controller('QuestionController',
    function QuestionController($scope, $http){

        $http({method: 'GET', url: '/api/v1/menus.json'}).
            then(function success(response) {
                $scope.question=response.data.products;
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

    }
)
