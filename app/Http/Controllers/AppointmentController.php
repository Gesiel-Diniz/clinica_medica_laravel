<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Appointment;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Appointment::select('appointments.*', 'attendants.name AS name_attendants', 'doctors.name AS name_doctors', 'patients.name AS name_patients')
            ->join('attendants', 'attendants.id', '=', 'appointments.attendants_id')
            ->join('doctors', 'doctors.id', '=', 'appointments.doctors_id')
            ->join('patients', 'patients.id', '=', 'appointments.patients_id')
            ->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $appointment = new Appointment;
        $appointment->attendants_id = $request->input('attendants_id.id');
        $appointment->patients_id = $request->input('patients_id.id');
        $appointment->doctors_id = $request->input('doctors_id.id');
        $appointment->obs = $request->input('obs');
        $appointment->data_time = $request->input('data_time');
        $appointment->value = $request->input('valor');
        $appointment->save();
        return $request;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $appointment = Appointment::select('appointments.*', 'attendants.name AS name_attendants', 'doctors.name AS name_doctors', 'patients.name AS name_patients')
            ->join('attendants', 'attendants.id', '=', 'appointments.attendants_id')
            ->join('doctors', 'doctors.id', '=', 'appointments.doctors_id')
            ->join('patients', 'patients.id', '=', 'appointments.patients_id')
            ->where('appointments.id', '=', $id)
            ->get();

            return var_export($appointment->collection()->id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
