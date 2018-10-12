
ytwApp.controller('logisticsController',
    function QuestionController($scope, $http, $rootScope, $window){

      setTimeout(function(){showSlides(slideIndex++)}, 1000);
      setInterval(function(){
        showSlides(slideIndex++);
      }, 7000);

      $scope.type_ids= window.localStorage.getItem("storageArray");
        $scope.test = function(){
          if ($scope.type_ids.value.length !== 0 ) {
            $scope.type_ids = null
          }
        }

        $scope.type_ids2=[]
        $scope.type_ids2.push($scope.type_ids);


        // language switch end url
        $scope.languru='';
        $scope.url='/api/v1/logistics.json';

        $http({method: 'GET', url: '/api/v1/menus.json'}).
            then(function success(response) {
                $scope.questionlogistic=response.data.logistic;
        });
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
                $scope.side_slider=response.data.side_slider;
                localStorage.removeItem('storageArray',JSON.stringify(""));
                var range = [];
                for (var i = $scope.current_page; i <=$scope.pages_count; i++) {
                  range.push(i)
                }
                $scope.driverAges = range;
        });


        $scope.country_ids = []
        $scope.type_ids= []
        $scope.current_page
        // $scope.url='/api/v1/logistics.json';


////countries
          // $scope.country_ids= []
        $scope.trackOrder = function(countries,$http){
          //add album in the array
           if(countries.selected){
             $scope.country_ids.push(countries.id);
             // console.log($scope.country_ids);

           }else{
             //remove album fron the array
             var index = $scope.country_ids.indexOf(countries.id);
             $scope.country_ids.splice(index,1);
             // console.log($scope.country_ids);
           }
        }
        var token = document.getElementsByName('csrf-token')[0].content;

        $scope.submitForm = function () {
            $http({
              url:$scope.languru+$scope.url,
              method: "GET",
              params: { "country_ids[]":$scope.country_ids,
                    "type_ids[]": $scope.type_ids}
           }).then(
              function(response){

                $scope.top_logistics=response.data.top_logistics;
                $scope.all_logistics=response.data.logistics;
                $scope.recom_logistics=response.data.recomend_logistics;
                // $scope.all_countries=response.data.countries;
                $scope.current_page=response.data.current_page;
                $scope.pages_count=response.data.pages_count;
                $scope.side_slider=response.data.side_slider;
                var range = [];
                for (var i = $scope.current_page; i <=$scope.pages_count; i++) {
                  range.push(i)
                }
                $scope.driverAges = range;
              },
              function(response){
              }
           )
                };


/// type_ids

            // $scope.type_ids= []
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
                params: { "country_ids[]": $scope.country_ids,
                      "type_ids[]": $scope.type_ids}
             }).then(
                function(response){

                  $scope.top_logistics=response.data.top_logistics;
                  $scope.all_logistics=response.data.logistics;
                  $scope.recom_logistics=response.data.recomend_logistics;
                  // $scope.all_countries=response.data.countries;
                  $scope.current_page=response.data.current_page;
                  $scope.pages_count=response.data.pages_count;
                  $scope.side_slider=response.data.side_slider;
                  var range = [];
                  for (var i = $scope.current_page; i <=$scope.pages_count; i++) {
                    range.push(i)
                  }
                  $scope.driverAges = range;
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
      url: '/api/v1/logistics.json',
      method: "GET",
      params: { "country_ids[]": $scope.country_ids,
            "type_ids[]": $scope.type_ids,
            page_number: $scope.current_page}
   }).then(
      function(response){

        $scope.top_logistics=response.data.top_logistics;
        $scope.all_logistics=response.data.logistics;
        $scope.recom_logistics=response.data.recomend_logistics;
        // $scope.all_countries=response.data.countries;
        $scope.current_page=response.data.current_page;
        $scope.pages_count=response.data.pages_count;
        $scope.side_slider=response.data.side_slider;
        var range = [];
        for (var i = $scope.current_page; i <=$scope.pages_count; i++) {
          range.push(i)
        }
        $scope.driverAges = range;
      },
      function(response){
      }
   )
        };


    }


)
