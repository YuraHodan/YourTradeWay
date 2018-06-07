var ytwApp = angular.module('ytwApp', []);

console.log('1');
ytwApp.directive('mixitup',function(){
    var linker = function(scope,element,attrs) {
        scope.$watch('entities', function(){
            element.mixItUp();
        });
    };
    return {
        restrict:'A',
        link: linker,
        scope:{entities:'='}
    }
})
