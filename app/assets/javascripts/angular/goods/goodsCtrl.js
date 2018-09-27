
ytwApp.controller('goodsControler',
    function QuestionController($scope, $http){

        var token = document.getElementsByName('csrf-token')[0].content;

        $http({method: 'GET', url: '/api/v1/menus.json'}).
            then(function success(response) {
                $scope.question=response.data.products;
                // $scope.questionfactories=response.data.factories;
                // $scope.questiondistributors=response.data.distributors;
                // $scope.questionmarkets=response.data.markets;
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

        $scope.submitForm = function () {
            var url = '/api/v1/products.json';
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
                    },
                    function(response){
                        // alert("єбать ти лох");
                    }
                );
        };




/// type_ids

    $scope.type_ids= []
  $scope.trackOrder2 = function(distributor){
    //add album in the array
     if(distributor.selected){
       $scope.type_ids.push(distributor.id);
       console.log($scope.type_ids);

     }else{
       //remove album fron the array
       var index = $scope.type_ids.indexOf(distributor.id);
       $scope.type_ids.splice(index,1);
       console.log($scope.type_ids);
     }
  }

      $scope.submitForm2 = function () {
          var url = '/api/v1/products.json';
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
                  },
                  function(response){
                      // alert("єбать ти лох");
                  }
              );
              };


/// group_ids


  $scope.group_ids= []
  $scope.trackOrder3 = function(second_menu){
  //add album in the array
   if(second_menu.selected){
     $scope.group_ids.push(second_menu.id);
     console.log($scope.group_ids);

   }else{
     //remove album fron the array
     var index = $scope.type_ids.indexOf(second_menu.id);
     $scope.group_ids.splice(index,1);
     console.log($scope.group_ids);
   }
  }

    $scope.submitForm3 = function () {
        var url = '/api/v1/products.json';
        var data = {
            group_ids: $scope.group_ids
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
                },
                function(response){
                    // alert("єбать ти лох");
                }
            );
            };



    }
)
