<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    protected $fillable = ['name', 'address', 'telefone', 'celular'];

	/*Mapeamento de relacionamento*/
    public function patientAppointment()
    {
    	return $this->hasOne('App\Models\Appointment', 'patients_id');
    }
}
