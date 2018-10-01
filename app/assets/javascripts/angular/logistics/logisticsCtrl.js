
ytwApp.controller('logisticsController',
    function QuestionController($scope, $http, $rootScope, $window){

      $scope.type_ids= window.localStorage.getItem("storageArray");
      $scope.group_ids= window.localStorage.getItem("storageArray2");

        $http({method: 'GET', url: '/api/v1/menus.json'}).
            then(function success(response) {
                $scope.questionlogistic=response.data.logistic;
        });

        $scope.voteUp = function (answer){
        };
        $scope.voteDown = function (answer){
        };
        $http({
          url: '/api/v1/logistics.json',
          method: "GET",
          params: { type_ids: $scope.type_ids,
               group_ids: $scope.group_ids}
        }).
            then(function success2(response) {
                $scope.top_logistics=response.data.top_logistics;
                $scope.all_logistics=response.data.logistics;
                $scope.recom_logistics=response.data.recomend_logistics;
                $scope.all_countries=response.data.countries;
                $scope.current_page=response.data.current_page;
                $scope.pages_count=response.data.pages_count;
                localStorage.setItem('storageArray',JSON.stringify(""));
                localStorage.setItem('storageArray2',JSON.stringify(""));
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
            $http({
              url: '/api/v1/logistics.json',
              method: "GET",
              params: { country_ids: $scope.country_ids}
           }).then(
              function(response){

                $scope.top_logistics=response.data.top_logistics;
                $scope.all_logistics=response.data.logistics;
                $scope.recom_logistics=response.data.recomend_logistics;
                // $scope.all_countries=response.data.countries;
                $scope.current_page=response.data.current_page;
                $scope.pages_count=response.data.pages_count;
                // });
              },
              function(response){
              }
           )
                };


/// type_ids

            $scope.type_ids= []
          $scope.trackOrder2 = function(logistic){
            //add album in the array
             if(logistic.selected){
               $scope.type_ids.push(logistic.id);
               console.log($scope.type_ids);

             }else{
               //remove album fron the array
               var index = $scope.type_ids.indexOf(logistic.id);
               $scope.type_ids.splice(index,1);
               console.log($scope.type_ids);
             }
          }
          var token = document.getElementsByName('csrf-token')[0].content;

          $scope.submitForm2 = function () {
              $http({
                url: '/api/v1/logistics.json',
                method: "GET",
                params: { type_ids: $scope.type_ids}
             }).then(
                function(response){

                  $scope.top_logistics=response.data.top_logistics;
                  $scope.all_logistics=response.data.logistics;
                  $scope.recom_logistics=response.data.recomend_logistics;
                  // $scope.all_countries=response.data.countries;
                  $scope.current_page=response.data.current_page;
                  $scope.pages_count=response.data.pages_count;
                  // });
                },
                function(response){
                }
             )
                  };

    }


)
