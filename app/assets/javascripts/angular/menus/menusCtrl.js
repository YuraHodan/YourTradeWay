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


ytwApp.controller('menusControler',function($scope){


  ytwApp.factory("itemsService", [ '$q', '$http', function($q, $http){

      //   Return all items from ITEMS collection
      return {

          ytwAppmenu: function () {
              var deferred = $q.defer();
              $http({method: 'GET', url: '/api/v1/menus.json'}).
              then(function success(response){
                  deferred.resolve(response.data);
                  console.log('zoro');
              }, function error(response){
                  deferred.reject(response.status);
                  console.log('zoro2');
              });
              return deferred.promise;
          }
      }
  }])
});
console.log('666');
