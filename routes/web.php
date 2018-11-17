<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/specialties', 'SpecialtieController@index');
Route::get('/specialties/{id}', 'SpecialtieController@edit');
Route::post('/specialties', 'SpecialtieController@store');
Route::put('/specialties/{id}', 'SpecialtieController@update');
Route::delete('/specialties/{id}', 'SpecialtieController@destroy');

Route::get('/patients', 'PatientController@index');
Route::get('/patients/{id}', 'PatientController@edit');
Route::post('/patients', 'PatientController@store');
Route::put('/patients/{id}', 'PatientController@update');
Route::delete('/patients/{id}', 'PatientController@destroy');

Route::get('/doctors', 'DoctorController@index');
Route::get('/doctors/{id}', 'DoctorController@edit');
Route::post('/doctors', 'DoctorController@store');
Route::put('/doctors/{id}', 'DoctorController@update');
Route::delete('/doctors/{id}', 'DoctorController@destroy');

Route::get('/attendants', 'AttendantController@index');
Route::get('/attendants/{id}', 'AttendantController@edit');
Route::post('/attendants', 'AttendantController@store');
Route::put('/attendants/{id}', 'AttendantController@update');
Route::delete('/attendants/{id}', 'AttendantController@destroy');

Route::get('/appointments', 'AppointmentController@index');
Route::get('/appointments/{id}', 'AppointmentController@edit');
Route::post('/appointments', 'AppointmentController@store');
Route::put('/appointments/{id}', 'AppointmentController@update');
Route::delete('/appointments/{id}', 'AppointmentController@destroy');