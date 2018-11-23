<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Attendant;

class AttendantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Attendant::get();
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
        $attendant = new Attendant;
        $attendant->name = $request->input('name');
        $attendant->email = $request->input('email');
        $attendant->telefone = $request->input('telefone');
        $attendant->save();
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
        return Attendant::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        
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
        $attendant = Attendant::find($id);
        $attendant->name = $request->input('name');
        $attendant->email = $request->input('email');
        $attendant->telefone = $request->input('telefone');
        $attendant->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $attendant = Attendant::find($id);
        $attendant->delete();
        return [];
    }
}
