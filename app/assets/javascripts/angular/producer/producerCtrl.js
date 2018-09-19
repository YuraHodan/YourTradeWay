
ytwApp.controller('producerControler',
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
        $http({method: 'GET', url: '/api/v1/manufactures.json'}).
            then(function success2(response) {
                $scope.top_manufactures=response.data.top_manufactures;
                $scope.all_manufactures=response.data.manufactures;
                $scope.recom_manufactures=response.data.recomend_manufactures;
        });
    }
)
