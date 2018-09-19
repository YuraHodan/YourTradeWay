ytwApp.controller('dustrubutorsControler',
    function QuestionController($scope, $http){

        $http({method: 'GET', url: '/api/v1/menus.json'}).
            then(function success(response) {
                // $scope.question=response.data.products;
                // $scope.questionfactories=response.data.factories;
                $scope.questiondistributors=response.data.distributors;
                // $scope.questionmarkets=response.data.markets;
                // $scope.questionlogistic=response.data.logistic;
        });

        $scope.voteUp = function (){
          // document.getElementsByClassName('drop-down').classList.add("closed")
        };
        $scope.voteDown = function (answer){
        };
        $http({method: 'GET', url: '/api/v1/distributors.json'}).
            then(function success2(response) {
                $scope.toptdistributors=response.data.top_distributors;
                $scope.alldistributors=response.data.distributors;
                $scope.recomdistributors=response.data.recomend_distributors;
        });
    }
)
