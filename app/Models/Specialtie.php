<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Specialtie extends Model
{
    
	protected $fillable = ['name'];


	/*Mapeamento de relacionamento*/
    public function specialtieDoctor()
    {
    	return $this->hasOne('App\Models\Doctors', 'specialtie_id');
    }

}
