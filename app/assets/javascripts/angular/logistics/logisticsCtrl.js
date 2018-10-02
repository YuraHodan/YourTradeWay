
ytwApp.controller('logisticsController',
    function QuestionController($scope, $http, $rootScope, $window){

      $scope.type_ids= window.localStorage.getItem("storageArray");
        $scope.test = function(){
          if ($scope.type_ids.value.length !== 0 ) {
            $scope.type_ids = null
          }
        }
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
          params: { type_ids: $scope.type_ids}
        }).
            then(function success2(response) {
                $scope.top_logistics=response.data.top_logistics;
                $scope.all_logistics=response.data.logistics;
                $scope.recom_logistics=response.data.recomend_logistics;
                $scope.all_countries=response.data.countries;
                $scope.current_page=response.data.current_page;
                $scope.pages_count=response.data.pages_count;
                localStorage.removeItem('storageArray',JSON.stringify(""));
                console.log($scope.current_page);
                console.log($scope.pages_count);
                var i;
                for (var i = $scope.current_page; i <= 11; i++) {
                  console.log( i );


                }
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

// current_page
 //  $scope.current_page= ""
 // console.log($scope.type_ids);
 //  $scope.trackOrder23 = function(countries){
 //    //add album in the array
 //       $scope.current_page=(input.value);
 //       console.log($scope.type_ids);
 //
 //     }



    }


)
