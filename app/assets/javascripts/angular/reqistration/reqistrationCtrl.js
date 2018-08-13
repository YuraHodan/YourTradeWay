// ytwApp.controller('registrationController', ['$scope', function($scope,$http) {
// $scope.phoneNumbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
// $scope.faxNumbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{10}$/;
//
//
// 		$scope.user = {};
//      // function to submit the form after all validation has occurred
//
//          // $scope.save = function (answer, usubmitForm){
//          //     if(usubmitForm.$valid){
// 				 //
//          //         $http.post("registration", answer).then(function success (response) {
//          //             $scope.user=user.data;
// 				 //
//          //         });
//          //     }
//          // };
//
//
//
//
//
// 		$scope.user.imageSrc = "";
//
// 	     $scope.$on("fileProgress", function(e, progress) {
// 	       $scope.progress = progress.loaded / progress.total;
// 	     });
//
//
// }]);

registrationCtrl.$inject = ['$http', '$scope'];

ytwApp.controller('registrationCtrl', registrationCtrl);
console.log('7');


//////////////////////////////////


/////////////////////////////////


function registrationCtrl($http, $scope) {

    // SENDING INFO AND ORDER

    // $scope.user = {};
    // POST REQUEST
var token = document.getElementsByName('csrf-token')[0].content;

    // $scope.submitForm = function () {
    //     var url = 'message';
    //     var data = {
    //         info: $scope.user
    //     };
    //     var config = {
    //         headers : {
    //             'Content-Type': 'application/json',
    //             'X-CSRF-Token': token
    //         }
    //     };
    //
    //     $http.post(url, data, config)
    //         .then(
    //             function(response){
    //                 // callback
    //                 $scope.user = data.user;
    //                 alert("gooooo.");
    //             },
    //             function(response){
    //                 // failure callback
    //                 alert("єбать ти лох");
    //             }
    //         );
    // };
}
//////////////////////////////////


//////////////////////////////////
ytwApp.directive("ngFileSelect", function(fileReader, $timeout, $http,$compile) {
    return {
      scope: {
        ngModel: '='
      },
      link: function($scope, el) {
        function getFile(file) {
          fileReader.readAsDataUrl(file, $scope)
            .then(function(result) {
              $timeout(function() {
                $scope.ngModel = result;
              });
            });
        }

        el.bind("change", function(e) {
          var file = (e.srcElement || e.target).files[0];
          getFile(file);
        });
      }
    };
  });

ytwApp.factory("fileReader", function($q, $log) {
  var onLoad = function(reader, deferred, scope) {
    return function() {
      scope.$apply(function() {
        deferred.resolve(reader.result);
      });
    };
  };

  var onError = function(reader, deferred, scope) {
    return function() {
      scope.$apply(function() {
        deferred.reject(reader.result);
      });
    };
  };

  var onProgress = function(reader, scope) {
    return function(event) {
      scope.$broadcast("fileProgress", {
        total: event.total,
        loaded: event.loaded
      });
    };
  };

  var getReader = function(deferred, scope) {
    var reader = new FileReader();
    reader.onload = onLoad(reader, deferred, scope);
    reader.onerror = onError(reader, deferred, scope);
    reader.onprogress = onProgress(reader, scope);
    return reader;
  };

  var readAsDataURL = function(file, scope) {
    var deferred = $q.defer();

    var reader = getReader(deferred, scope);
    reader.readAsDataURL(file);

    return deferred.promise;
  };

  return {
    readAsDataUrl: readAsDataURL
  };
});







//////////////////////////////////


ytwApp.directive("imgUpload",function($http,$compile){
			return {
				restrict : 'AE',
				scope : {
					url : "@",
					method : "@"
				},
				template : 	'<input class="fileUpload" type="file" ng-model="user.foto" multiple />'+
							'<div class="dropzone">'+
								'<div class="svgo"></div>'+
								'<h3 class="msg">перетяните сюда ваши файли</h3>'+
								'<p class="msgbotom">или <span class="span-text">виберите</span> их на вашем компютери</p>'+
								'<div class="msgshadov">поддерживаєца только JPG,GIF,PNG формать </div>'+
						   '</div>'+
						   '<div class="preview clearfix">'+
						   		'<div class="previewData clearfix" ng-repeat="data in previewData track by $index">'+
						   			'<img  src={{data.src}}></img>'+
						   				'<span ng-click="remove(data)" class="circle remove">'+
						   					'<i class="fa fa-close"></i>'+
						   				'</span>'+
						   			'</div>'+
						   		'</div>'+
						   '</div>',
				link : function(scope,elem,attrs){
					var formData = new FormData();
					scope.previewData = [];

					function previewFile(file){
						var reader = new FileReader();
						var obj = new FormData().append('file',file);
						reader.onload=function(data){
							var src = data.target.result;
							var size = ((file.size/(1024*1024)) > 1)? (file.size/(1024*1024)) + ' mB' : (file.size/		1024)+' kB';
							scope.$apply(function(){
								scope.previewData.push({'name':file.name,'size':size,'type':file.type,
														'src':src,'data':obj});
							});
							console.log(scope.previewData);
        				}
        				reader.readAsDataURL(file);
					}

					function uploadFile(e,type){
						e.preventDefault();
						var files = "";
						if(type == "formControl"){
							files = e.target.files;
						} else if(type === "drop"){
							files = e.originalEvent.dataTransfer.files;
						}
						for(var i=0;i<files.length;i++){
							var file = files[i];
							if(file.type.indexOf("image") !== -1){
								previewFile(file);
							} else {
								alert(file.name + " is not supported");
							}
						}
					}
					elem.find('.fileUpload').bind('change',function(e){
						uploadFile(e,'formControl');
					});

					elem.find('.dropzone').bind("click",function(e){
						$compile(elem.find('.fileUpload'))(scope).trigger('click');
					});

					elem.find('.dropzone').bind("dragover",function(e){
						e.preventDefault();
					});

					elem.find('.dropzone').bind("drop",function(e){
						uploadFile(e,'drop');
					});
					scope.upload=function(obj){
						$http({method:scope.method,url:scope.url,data: obj.data,
							headers: {'Content-Type': undefined},transformRequest: angular.identity
						}).success(function(data){

						});
					}

					scope.remove=function(data){
						var index= scope.previewData.indexOf(data);
						scope.previewData.splice(index,1);
					}
				}
			}
		});
