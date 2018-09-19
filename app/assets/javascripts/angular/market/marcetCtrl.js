
ytwApp.controller('marcetControler',
    function QuestionController($scope, $http){

        $http({method: 'GET', url: '/api/v1/menus.json'}).
            then(function success(response) {
                // $scope.question=response.data.products;
                // $scope.questionfactories=response.data.factories;
                // $scope.questiondistributors=response.data.distributors;
                $scope.questionmarkets=response.data.markets;
                // $scope.questionlogistic=response.data.logistic;
        });

        $scope.voteUp = function (answer){
        };
        $scope.voteDown = function (answer){
        };
        $http({method: 'GET', url: '/api/v1/markets.json'}).
            then(function success2(response) {
                $scope.top_markets=response.data.top_markets;
                $scope.all_markets=response.data.markets;
                $scope.recom_markets=response.data.recomend_markets;
        });
    }
)
