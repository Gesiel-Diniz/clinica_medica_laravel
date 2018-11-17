<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    protected $fillable = ['patients_id', 'attendants_id', 'doctors_id', 'data_time', 'value', 'obs'];

    public function appointmentPatient()
    {
        return $this->belongsTo('App\Models\Patient');
    }

    public function appointmentAttendant()
    {
        return $this->belongsTo('App\Models\Attendant');
    }

    public function appointmentDoctor()
    {
        return $this->belongsTo('App\Models\Doctor');
    }
}