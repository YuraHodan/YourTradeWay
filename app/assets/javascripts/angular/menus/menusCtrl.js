// menusCtrl.$inject = ['$http', '$scope'];
//
// ytwApp.controller('menusCtrl', menusCtrl);
//
//
// ytwApp.factory("itemsService", [ '$q', '$http', function($q, $http){
//
//     //   Return all items from ITEMS collection
//     return {
//
//         getPizzaList: function () {
//             var deferred = $q.defer();
//             $http({method: 'GET', url: '/api/v1/menus.json'}).
//             then(function success(response){
//                 deferred.resolve(response.data);
//             }, function error(response){
//                 deferred.reject(response.status);
//             });
//             return deferred.promise;
//         }
//     }
// }])


// ytwApp.controller('menusControler',function($scope,$http ){
//
//
//   // ytwApp.factory("itemsService", ['$http', function($q, $http){
//   //
//   //     //   Return all items from ITEMS collection
//   //     return {
//   //
//   //         ytwAppmenu: function () {
//   //             $http({method: 'GET', url: '/api/v1/menus.json'}).
//   //             then(function success(response){
//   //                 deferred.resolve(response.data);
//   //                 console.log('zoro');
//   //             }, function error(response){
//   //                 deferred.reject(response.status);
//   //                 console.log('zoro2');
//   //             });
//   //             return deferred.promise;
//   //         }
//   //     }
//   // }])
//   $http({method: 'GET', url: '/api/v1/menus.json'}).
//       then(function success(response) {
//           $scope.question=response.data.question;
//   });
//
//   $scope.voteUp = function (answer){
//       answer.rate++;
//   };
//   $scope.voteDown = function (answer){
//       answer.rate--;
//   };
// });

// ytwApp.controller('QuestionController',
//     function QuestionController($scope, $http){
//
//         $http({method: 'GET', url: '/api/v1/menus.json'}).
//             then(function success(response) {
//                 $scope.question=response.data.question;
//         });
//
//         $scope.voteUp = function (answer){
//             answer.rate++;
//         };
//         $scope.voteDown = function (answer){
//             answer.rate--;
//         };
//     }
// )
ytwApp.controller('QuestionController',
    function QuestionController($scope, $http){

        $http({method: 'GET', url: '/api/v1/menus.json'}).
            then(function success(response) {
                $scope.question=response.data.products;
                $scope.question2=response.data.markets;
        });

        $scope.voteUp = function (answer){
        };
        $scope.voteDown = function (answer){
        };
    }
)
