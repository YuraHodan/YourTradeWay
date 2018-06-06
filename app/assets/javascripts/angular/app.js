var ytvApp = angular.module('ytvApp', []);


// $(document).on('ready page:load', function() {
//     angular.bootstrap(document.body, ['pizzaApp'])
// });

// $(document).on "turbolinks:load", ->

ytvApp.directive('mixitup',function(){
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
