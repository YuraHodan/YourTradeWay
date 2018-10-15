
ytwApp.controller('producerControler',
    function QuestionController($scope, $http, $rootScope, $window){
          $scope.type_ids= window.localStorage.getItem("storageArray");
          $scope.group_ids= window.localStorage.getItem("storageArray2");
          $scope.test = function(){
            if ($scope.type_ids.value.length !== 0 ) {
              $scope.type_ids = null
            }
          }
          $scope.type_ids2=[]
          $scope.type_ids2.push($scope.type_ids);
          $scope.test2 = function(){
            if ($scope.group_ids.value.length !== 0 ) {
              $scope.group_ids = null
            }
          }
          $scope.group_ids2=[]
          $scope.group_ids2.push($scope.group_ids);
      var token = document.getElementsByName('csrf-token')[0].content;

        $http({method: 'GET', url: '/api/v1/menus.json'}).

            then(function success(response) {
                // $scope.question=response.data.products;
                $scope.questionfactories=response.data.factories;
                // $scope.questiondistributors=response.data.distributors;
                // $scope.questionmarkets=response.data.markets;
                // $scope.questionlogistic=response.data.logistic;
        });



        $http({
          url: '/api/v1/manufactures.json',
          method: "GET",
          params: { type_ids: $scope.type_ids,
               group_ids: $scope.group_ids}
        }).
            then(function success2(response) {
                $scope.top_manufactures=response.data.top_manufactures;
                $scope.all_manufactures=response.data.manufactures;
                $scope.recom_manufactures=response.data.recomend_manufactures;
                $scope.all_countries=response.data.countries;
                $scope.current_page=response.data.current_page;
                $scope.pages_count=response.data.pages_count;
                $scope.side_slider=response.data.side_slider;
                localStorage.removeItem('storageArray',JSON.stringify(""));
                localStorage.removeItem('storageArray2',JSON.stringify(""));
                var range = [];
                for (var i = $scope.current_page; i <=$scope.pages_count; i++) {
                  range.push(i)
                }
                $scope.driverAges = range;
        });

        $scope.country_ids= []
        $scope.type_ids= []
        $scope.current_page
        $scope.group_ids= []


////countries
          // $scope.country_ids= []
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
            $http({
              url: '/api/v1/manufactures.json',
              method: "GET",
              params: { "country_ids[]": $scope.country_ids,
                    "type_ids[]": $scope.type_ids,
                    "group_ids[]": $scope.group_ids}
            }).then(
              function(response){

                $scope.top_manufactures=response.data.top_manufactures;
                $scope.all_manufactures=response.data.manufactures;
                $scope.recom_manufactures=response.data.recomend_manufactures;
                // $scope.all_countries=response.data.countries;
                $scope.current_page=response.data.current_page;
                $scope.pages_count=response.data.pages_count;
                $scope.side_slider=response.data.side_slider;
              },
              function(response){
              }
            )
                    };


/// type_ids

    // $scope.type_ids= []
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
        $http({
          url: '/api/v1/manufactures.json',
          method: "GET",
          params: { "country_ids[]": $scope.country_ids,
                "type_ids[]": $scope.type_ids,
                "group_ids[]": $scope.group_ids}
       }).then(
          function(response){

            $scope.top_manufactures=response.data.top_manufactures;
            $scope.all_manufactures=response.data.manufactures;
            $scope.recom_manufactures=response.data.recomend_manufactures;
            // $scope.all_countries=response.data.countries;
            $scope.current_page=response.data.current_page;
            $scope.pages_count=response.data.pages_count;
            $scope.side_slider=response.data.side_slider;
          },
          function(response){
          }
       )
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
    $http({
      url: '/api/v1/manufactures.json',
      method: "GET",
      params: { "country_ids[]": $scope.country_ids,
            "type_ids[]": $scope.type_ids,
            "group_ids[]": $scope.group_ids}
   }).then(
      function(response){

        $scope.top_manufactures=response.data.top_manufactures;
        $scope.all_manufactures=response.data.manufactures;
        $scope.recom_manufactures=response.data.recomend_manufactures;
        // $scope.all_countries=response.data.countries;
        $scope.current_page=response.data.current_page;
        $scope.pages_count=response.data.pages_count;
        $scope.side_slider=response.data.side_slider;
      },
      function(response){
      }
   )
          };

          // $scope.current_page =0
          $scope.trackOrder23 = function(age){
          //add album in the array
             $scope.current_page = (age);
             console.log($scope.current_page);
          }
          $scope.submitForm23 = function () {
          $http({
            url: '/api/v1/manufactures.json',
            method: "GET",
            params: { "country_ids[]": $scope.country_ids,
                  "type_ids[]": $scope.type_ids,
                  "group_ids[]": $scope.group_ids,
                  page_number: $scope.current_page}
          }).then(
            function(response){

              $scope.top_logistics=response.data.top_logistics;
              $scope.all_logistics=response.data.logistics;
              $scope.recom_manufactures=response.data.recomend_manufactures;
              // $scope.all_countries=response.data.countries;
              $scope.current_page=response.data.current_page;
              $scope.pages_count=response.data.pages_count;
              $scope.side_slider=response.data.side_slider;
              // });
            },
            function(response){
            }
          )
              };

    }
)
