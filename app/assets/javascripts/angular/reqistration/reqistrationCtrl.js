
registrationCtrl.$inject = ['$http', '$scope'];

ytwApp.controller('registrationCtrl', registrationCtrl);

//////////////////////////////////


/////////////////////////////////


function registrationCtrl($http, $scope) {


  $http({method: 'GET', url: '/api/v1/menus.json'}).
      then(function success(response) {
          $scope.questionfactories=response.data.factories;
  });


    // $scope.submitForm = function () {
    //     var url = 'message';
    //     var data = {
    //         info: $scope.z
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
    //                 $scope.z = data.z;
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

//////////////////////////////////


ytwApp.directive("imgUpload",function($http,$compile){
			return {
				restrict : 'AE',
				scope : {
					url : "@",
					method : "@"
				},
				template :
        '<input class="fileUpload"  name="photo" type="file" ng-model="user.foto" ng-change="submit()" multiple  value= "{{previewData}}"/>'+
							'<div class="dropzone">'+
								'<div class="svgo"></div>'+
								'<h3 class="msg">перетяните сюда ваши файли</h3>'+
								'<p class="msgbotom">или <span class="span-text">виберите</span> их на вашем компютери</p>'+
								'<div class="msgshadov">поддерживаєца только JPG,GIF,PNG формать </div>'+
						   '</div>'+
						   '<div class="preview clearfix">'+
						   		'<div class="previewData clearfix" ng-repeat="data in previewData track by $index">'+
						   			'<img  src={{data.src}}></img>'+
                  // '<input type="hidden" name="myHiddenField" value={{data}} >'+
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
              z =scope.previewData
              console.log(z);
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
