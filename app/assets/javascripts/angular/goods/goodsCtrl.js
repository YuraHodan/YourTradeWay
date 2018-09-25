
ytwApp.controller('goodsControler',
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
        $http({method: 'GET', url: '/api/v1/products.json'}).
            then(function success2(response) {
                $scope.top_products=response.data.top_products;
                $scope.all_products=response.data.products;
                $scope.recomend_products=response.data.recomend_products;
        });
    }
)
