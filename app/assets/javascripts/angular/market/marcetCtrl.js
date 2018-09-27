
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
                $scope.all_countries=response.data.countries;
                $scope.current_page=response.data.current_page;
                $scope.pages_count=response.data.pages_count;
        });


        ////countries
                  $scope.country_ids= []
                $scope.trackOrder = function(countries,$http){
                  //add album in the array
                   if(countries.selected){
                     $scope.country_ids.push(countries.id);
                     console.log($scope.country_ids);

                   }else{
                     //remove album fron the array
                     var index = $scope.country_ids.indexOf(countries.id);
                     $scope.country_ids.splice(index,1);
                     console.log($scope.country_ids);
                   }
                }
                var token = document.getElementsByName('csrf-token')[0].content;

                    $scope.submitForm = function () {
                        var url = '/api/v1/markets.json';
                        var data = {
                            country_ids: $scope.country_ids
                        };
                        var config = {
                            headers : {
                                'Content-Type': 'application/json',
                                'X-CSRF-Token': token
                            }
                        };

                        $http.post(url, data, config)
                            .then(
                                function(response){
                                    // alert("gooooo.");
                            // $http({method: 'GET', url: '/api/v1/logistics.json'}).
                            //     then(function success2(response) {
                            //         $scope.top_logistics=response.data.top_logistics;
                            //         $scope.all_logistics=response.data.logistics;
                            //         $scope.recom_logistics=response.data.recomend_logistics;
                            //         $scope.current_page=response.data.current_page;
                            //         $scope.pages_count=response.data.pages_count;
                            // });
                                },
                                function(response){
                                    // alert("єбать ти лох");
                                }
                            );
                    };


/// type_ids

            $scope.type_ids= []
          $scope.trackOrder2 = function(markets){
            //add album in the array
             if(markets.selected){
               $scope.type_ids.push(markets.id);
               console.log($scope.type_ids);

             }else{
               //remove album fron the array
               var index = $scope.type_ids.indexOf(markets.id);
               $scope.type_ids.splice(index,1);
               console.log($scope.type_ids);
             }
          }
          var token = document.getElementsByName('csrf-token')[0].content;

              $scope.submitForm2 = function () {
                  var url = '/api/v1/logistics.json';
                  var data = {
                      type_ids: $scope.type_ids
                  };
                  var config = {
                      headers : {
                          'Content-Type': 'application/json',
                          'X-CSRF-Token': token
                      }
                  };

                  $http.post(url, data, config)
                      .then(
                          function(response){
                              // alert("gooooo.");
                      // $http({method: 'GET', url: '/api/v1/markets.json'}).
                      //     then(function success2(response) {
                      //         $scope.top_logistics=response.data.top_logistics;
                      //         $scope.all_logistics=response.data.logistics;
                      //         $scope.recom_logistics=response.data.recomend_logistics;
                      //         $scope.current_page=response.data.current_page;
                      //         $scope.pages_count=response.data.pages_count;
                      // });
                          },
                          function(response){
                              // alert("єбать ти лох");
                          }
                      );
              };




    }
)
