var app = angular.module('app', []);

urlService = "http://127.0.0.1:8000/api/specialties";

app.controller('specialtiesController', function($scope, $http) {

	$scope.specialties = [];
	$scope.erro = false;

	$scope.list = function(){

	    $http({
	        method : "GET",
	        url : urlService
	    }).then(function mySuccess(response) {
	        $scope.specialties = response.data;
	        $scope.erro = false;
	    }, function myError(response) {
	        $scope.erroMsg = response.statusText;
	        $scope.erroCod = response.status;
	        $scope.erro = true;
	    });

	}

	$scope.delete = function(id){

		if(confirm("Do you really want to delete?"))

		$http({
	        method : "DELETE",
	        url : urlService+"/"+id
	    }).then(function mySuccess(response) {
	        $scope.list();
	    }, function myError(response) {
	        $scope.erroMsg = response.statusText;
	        $scope.erroCod = response.status;
	        $scope.erro = true;
	    });

	}

	$scope.getEdit = function(id){

		$scope.clear();

		$http({
	        method : "GET",
	        url : urlService+"/"+id
	    }).then(function mySuccess(response) {
	    	$scope.name = response.data.name;
	    	$scope.id = response.data.id;
	    }, function myError(response) {
	        $scope.erroMsg = response.statusText;
	        $scope.erroCod = response.status;
	        $scope.erro = true;
	    });

	}

	$scope.name = '';

	$scope.save = function(){
	
		var error = false;
		var msg = "";

		if(! $scope.name){
			error = true;
			msg = 'O campo SPECIALTIE é obrigatório!';
		}

		$scope.erro = error;

		if(error){
			$scope.erroMsg = msg;
		}else{

			if($scope.id){
				url = urlService+"/"+$scope.id;
				method = "PUT";
			}else{
				url = urlService
				method = "POST";
			}

			var data = {
				name: $scope.name
			};

			$http({
		        method : method,
		        url : url,
		        data: data
		    }).then(function mySuccess(response) {
		    	$scope.list();
		    }, function myError(response) {
		        $scope.erroMsg = response.statusText;
		        $scope.erroCod = response.status;
		        $scope.erro = true;
		    });

		}
	
	}

	$scope.clear = function(){
		$scope.name = null;
		$scope.id = null;
		$scope.erro = false;
	}

});