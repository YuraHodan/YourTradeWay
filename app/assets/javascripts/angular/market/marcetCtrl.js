
ytwApp.controller('marcetControler',
    function QuestionController($scope, $http){
      $scope.type_ids= window.localStorage.getItem("storageArray");
      $scope.test = function(){
        if ($scope.type_ids.value.length !== 0 ) {
          $scope.type_ids = null
        }
      }
        $scope.type_ids2=[]
        $scope.type_ids2.push($scope.type_ids);
      var token = document.getElementsByName('csrf-token')[0].content;

        $http({method: 'GET', url: '/api/v1/menus.json'}).
            then(function success(response) {
                $scope.questionmarkets=response.data.markets;
        });

        $scope.voteUp = function (answer){
        };
        $scope.voteDown = function (answer){
        };
        $http({
          url: '/api/v1/markets.json',
          method: "GET",
          params: { type_ids: $scope.type_ids}
        }).
            then(function success2(response) {
                $scope.top_markets=response.data.top_markets;
                $scope.all_markets=response.data.markets;
                $scope.recom_markets=response.data.recomend_markets;
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

        $scope.country_ids= []
        $scope.type_ids= []
        $scope.current_page

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
                      url: '/api/v1/markets.json',
                      method: "GET",
                      params: { "country_ids[]": $scope.country_ids,
                            "type_ids[]": $scope.type_ids}
                    }).then(
                      function(response){

                        $scope.top_markets=response.data.top_markets;
                        $scope.all_markets=response.data.markets;
                        $scope.recom_markets=response.data.recomend_markets;
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
    $scope.submitForm2 = function () {
        $http({
          url: '/api/v1/markets.json',
          method: "GET",
          params: { "country_ids[]": $scope.country_ids,
                "type_ids[]": $scope.type_ids}
       }).then(
          function(response){

            $scope.top_markets=response.data.top_markets;
            $scope.all_markets=response.data.markets;
            $scope.recom_markets=response.data.recomend_markets;
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
  url: '/api/v1/markets.json',
  method: "GET",
  params: { "country_ids[]": $scope.country_ids,
        "type_ids[]": $scope.type_ids,
        page_number: $scope.current_page}
}).then(
  function(response){

    $scope.top_logistics=response.data.top_logistics;
    $scope.all_logistics=response.data.logistics;
    $scope.recom_markets=response.data.recomend_markets;
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
