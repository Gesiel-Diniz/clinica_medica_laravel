<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Attendant extends Model
{
    protected $fillable = ['name', 'telefone', 'email'];

	/*Mapeamento de relacionamento*/
    public function attendantAppointment()
    {
    	return $this->hasOne('App\Models\Appointment', 'attendants_id');
    }
}
