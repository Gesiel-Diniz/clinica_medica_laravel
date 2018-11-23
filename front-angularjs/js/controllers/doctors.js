var app = angular.module('app', []);

urlService = "http://127.0.0.1:8000/api/doctors";

app.controller('doctorsController', function($scope, $http) {

	
	$scope.doctors = [];
	$scope.doctor = [];
	$scope.specialties = [];
	$scope.erro = false;

	$scope.list = function(){

	    $http({
	        method : "GET",
	        url : urlService
	    }).then(function mySuccess(response) {
	        $scope.doctors = response.data;
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

		$http({
	        method : "GET",
	        url : urlService+"/"+id
	    }).then(function mySuccess(response) {

	    	$scope.clear();

	    	$scope.doctor = response.data[0];

	    	$scope.doctor.specialties_id = {
	    		id : $scope.doctor.id_specialties, 
	    		name : $scope.doctor.name_specialties
	    	};

	    }, function myError(response) {
	        $scope.erroMsg = response.statusText;
	        $scope.erroCod = response.status;
	        $scope.erro = true;
	    });

	}

	$scope.save = function(){
	
		var error = false;
		var msg = "";

		if(! $scope.doctor.appointment_value){
			error = true;
			msg = 'O campo Value é obrigatório!';
		}
		if(! $scope.doctor.celular){
			error = true;
			msg = 'O campo MOBILE é obrigatório!';
		}
		if(! $scope.doctor.email){
			error = true;
			msg = 'O campo E-MAIL é obrigatório !';
		}
		if(! $scope.doctor.address){
			error = true;
			msg = 'O campo ADDRESS é obrigatório!';
		}
		if(! $scope.doctor.number_register){
			error = true;
			msg = 'O campo NUMBER OF REGISTER é obrigatório!';
		}
		if(! $scope.doctor.specialties_id){
			error = true;
			msg = 'O campo SPECIALTIE é obrigatório!';
		}
		if(! $scope.doctor.name){
			error = true;
			msg = 'O campo NAME é obrigatório!';
		}

		$scope.erro_form = error;

		if(error){
			$scope.erroMsg = msg;
		}else{

			if($scope.doctor.id){
				url = urlService+"/"+$scope.doctor.id;
				method = "PUT";
			}else{
				url = urlService
				method = "POST";
			}

			$scope.doctor.specialties_id = $scope.doctor.specialties_id.id;

			$('#form').modal('toggle');

			$http({
		        method : method,
		        url : url,
		        data: $scope.doctor
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
		$('#form').modal('toggle');
		$scope.doctor = null;
	}

	$scope.listSpecialties = function(){

	    $http({
	        method : "GET",
	        url :"http://127.0.0.1:8000/api/specialties"
	    }).then(function mySuccess(response) {
	        $scope.specialties = response.data;
	        $scope.erro = false;
	    }, function myError(response) {
	        $scope.erroMsg = response.statusText;
	        $scope.erroCod = response.status;
	        $scope.erro = true;
	    });

	}

});