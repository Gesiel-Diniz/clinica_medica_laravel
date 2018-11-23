var app = angular.module('app', []);

urlService = "http://127.0.0.1:8000/api/appointments";

app.controller('appointmentsController', function($scope, $http, $filter) {

	$scope.appointments = [];
	$scope.erro = false;


	$scope.getEdit = function(id){

		$http({
	        method : "GET",
	        url : urlService+"/"+id
	    }).then(function mySuccess(response) {

	    	$scope.clear();

	    	$scope.appointment = response.data[0];

	    	 console.log(response);

	    	$scope.appointment.attendants_id = {
	    		id : $scope.appointment.attendants_id
	    	};

	    	$scope.appointment.patients_id = {
	    		id : $scope.appointment.patients_id
	    	};

	    	$scope.appointment.doctors_id = {
	    		id : $scope.appointment.doctors_id
	    	};

	    	$scope.appointment.data_t = new Date($scope.appointment.data_time);

	    	$scope.appointment.valor = $scope.appointment.value;

	    }, function myError(response) {
	        $scope.erroMsg = response.statusText;
	        $scope.erroCod = response.status;
	        $scope.erro = true;
	    });

	}

	$scope.listAppointments = function(){

	    $http({
	        method : "GET",
	        url : "http://127.0.0.1:8000/api/appointments"
	    }).then(function mySuccess(response) {
	        $scope.appointments = response.data;
	        $scope.erro = false;
	    }, function myError(response) {
	        $scope.erroMsg = response.statusText;
	        $scope.erroCod = response.status;
	        $scope.erro = true;
	    });

	}


	$scope.save = function(){
	
		var error = false;
		var msg = "";

		if(! $scope.appointment.valor){
			error = true;
			msg = 'O campo Value é obrigatório !';
		}
		if(! $scope.appointment.data_t){
			error = true;
			msg = 'O campo Date and Time é obrigatório !';
		}
		if(! $scope.appointment.doctors_id){
			error = true;
			msg = 'O campo Doctor é obrigatório !';
		}
		if(! $scope.appointment.patients_id){
			error = true;
			msg = 'O campo Patient é obrigatório!';
		}
		if(! $scope.appointment.attendants_id){
			error = true;
			msg = 'O campo Attendant é obrigatório!';
		}

		$scope.erro_form = error;

		if(error){
			$scope.erroMsg = msg;
		}else{

			if($scope.appointment.id){
				url = urlService+"/"+$scope.appointment.id;
				method = "PUT";
			}else{
				url = urlService
				method = "POST";
			}

			$('#form').modal('toggle');

			$scope.appointment.data_time = $filter('date')($scope.appointment.data_t, "yyyy-MM-dd H:mm:ss", "ssssZ");

			$http({
		        method : method,
		        url : url,
		        data: $scope.appointment
		    }).then(function mySuccess(response) {
		    	$scope.listAppointments();
		    }, function myError(response) {
		        $scope.erroMsg = response.statusText;
		        $scope.erroCod = response.status;
		        $scope.erro = true;
		    });

		}
	
	}


	$scope.listAttendants = function(){

	    $http({
	        method : "GET",
	        url : "http://127.0.0.1:8000/api/attendants"
	    }).then(function mySuccess(response) {
	        $scope.attendants = response.data;
	        $scope.erro = false;
	    }, function myError(response) {
	        $scope.erroMsg = response.statusText;
	        $scope.erroCod = response.status;
	        $scope.erro = true;
	    });

	}

	$scope.listPatients = function(){

	    $http({
	        method : "GET",
	        url : "http://127.0.0.1:8000/api/patients"
	    }).then(function mySuccess(response) {
	        $scope.patients = response.data;
	        $scope.erro = false;
	    }, function myError(response) {
	        $scope.erroMsg = response.statusText;
	        $scope.erroCod = response.status;
	        $scope.erro = true;
	    });

	}

	$scope.listDoctors = function(){

	    $http({
	        method : "GET",
	        url : "http://127.0.0.1:8000/api/doctors"
	    }).then(function mySuccess(response) {
	        $scope.doctors = response.data;
	        $scope.erro = false;
	    }, function myError(response) {
	        $scope.erroMsg = response.statusText;
	        $scope.erroCod = response.status;
	        $scope.erro = true;
	    });

	}

	$scope.clear = function(){
		$('#form').modal('toggle');
		$scope.appointment = null;
	}

});