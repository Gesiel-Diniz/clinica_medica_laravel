<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    protected $fillable = ['specialtie_id', 'name', 'number_register', 'address', 'celular', 'email', 'appointment_value'];

	/*Mapeamento de relacionamento*/
    public function doctortAppointment()
    {
    	return $this->hasOne('App\Models\Appointment', 'doctors_id');
    }

    public function doctortSpecialtie()
    {
        return $this->belongsTo('App\Models\Specialtie');
    }
}