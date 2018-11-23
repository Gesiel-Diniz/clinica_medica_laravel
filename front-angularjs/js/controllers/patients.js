var app = angular.module('app', []);

urlService = "http://127.0.0.1:8000/api/patients";

app.controller('patientsController', function($scope, $http) {

	$scope.patients = [];
	$scope.erro = false;

	$scope.list = function(){

	    $http({
	        method : "GET",
	        url : urlService
	    }).then(function mySuccess(response) {
	        $scope.patients = response.data;
	        $scope.erro = false;
	    }, function myError(response) {
	        $scope.erroMsg = response.statusText;
	        $scope.erroCod = response.status;
	        $scope.erro = true;
	    });

	}

	$scope.delete = function(id){

		if(confirm("Do you really want to delete?")){

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

	}

	$scope.getEdit = function(id){

		$scope.clear();

		$http({
	        method : "GET",
	        url : urlService+"/"+id
	    }).then(function mySuccess(response) {
	    	$scope.id = response.data.id;
	    	$scope.name = response.data.name;
	    	$scope.address = response.data.address;
	    	$scope.telefone = response.data.telefone;
	    	$scope.celular = response.data.celular;
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

		if(! $scope.celular){
			error = true;
			msg = 'O campo MOBILE é obrigatório!';
		}
		if(! $scope.telefone){
			error = true;
			msg = 'O campo TELEFONE é obrigatório!';
		}
		if(! $scope.address){
			error = true;
			msg = 'O campo ADDRESS é obrigatório!';
		}
		if(! $scope.name){
			error = true;
			msg = 'O campo NAME é obrigatório!';
		}

		$scope.erro_form = error;

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
				name: $scope.name,
				address: $scope.address,
				telefone: $scope.telefone,
				celular: $scope.celular
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

		    $('#form').modal('toggle');

		}
	
	}

	$scope.clear = function(){

		$('#form').modal('toggle');

		$scope.name = null;
		$scope.address = null;
		$scope.telefone = null;
		$scope.celular = null;
		$scope.id = null;
		$scope.erro_form = false;
	}

});