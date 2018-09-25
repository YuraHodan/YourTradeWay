
ytwApp.controller('logisticsController',
    function QuestionController($scope, $http){

        $http({method: 'GET', url: '/api/v1/menus.json'}).
            then(function success(response) {
                // $scope.question=response.data.products;
                // $scope.questionfactories=response.data.factories;
                // $scope.questiondistributors=response.data.distributors;
                // $scope.questionmarkets=response.data.markets;
                $scope.questionlogistic=response.data.logistic;
        });

        $scope.voteUp = function (answer){
        };
        $scope.voteDown = function (answer){
        };

        $http({method: 'GET', url: '/api/v1/logistics.json'}).
            then(function success2(response) {
                $scope.top_logistics=response.data.top_logistics;
                $scope.all_logistics=response.data.logistics;
                $scope.recom_logistics=response.data.recomend_logistics;
                $scope.all_countries=response.data.countries;
                $scope.current_page=response.data.current_page;
                $scope.pages_count=response.data.pages_count;
        });
        $scope.list = [];
        $scope.submit = function() {
          if ($scope.text) {
            $scope.list.push(this.text);
            console.log($scope.list);
          }
        };
              // console.log($scope.list);
        // $scope.submitForm = function () {
        //     var url = 'logistics';
        //     var data = {
        //         info: $scope.all_countries
        //     };
        //     var config = {
        //         headers : {
        //             'Content-Type': 'application/json',
        //             'X-CSRF-Token': token
        //         }
        //     };
        //
        //     $http.post(url, data, config)
        //         .then(
        //             function(response){
        //                 // callback
        //                 $scope.all_countries = data.all_countries;
        //                 alert("gooooo.");
        //             },
        //             function(response){
        //                 // failure callback
        //                 alert("no");
        //             }
        //         );
        // }

    }


)
