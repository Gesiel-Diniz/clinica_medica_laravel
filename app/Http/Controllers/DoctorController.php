<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Doctor;

class DoctorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Doctor::get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $doctor = new Doctor;
        $doctor->name = $request->input('name');
        $doctor->email = $request->input('email');
        $doctor->celular = $request->input('celular');
        $doctor->specialties_id = $request->input('specialties_id');
        $doctor->number_register = $request->input('number_register');
        $doctor->address = $request->input('address');
        $doctor->appointment_value = $request->input('appointment_value');
        $doctor->save();
        return [];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        return Doctor::join('specialties', 'specialties.id', '=', 'doctors.specialties_id')
            ->where('doctors.id', '=', $id)
            ->select('doctors.*', 'specialties.id AS id_specialties', 'specialties.name AS name_specialties')
            ->get();

        //return Doctor::has('comments')->get();
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
        $doctor = Doctor::find($id);
        $doctor->name = $request->input('name');
        $doctor->email = $request->input('email');
        $doctor->celular = $request->input('celular');
        $doctor->specialties_id = $request->input('specialties_id');
        $doctor->number_register = $request->input('number_register');
        $doctor->address = $request->input('address');
        $doctor->appointment_value = $request->input('appointment_value');
        $doctor->save();
        return [];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $doctor = Doctor::find($id);
        $doctor->delete();
        return [];
    }
}
