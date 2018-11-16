<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDoctorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('doctors', function (Blueprint $table) {
            $table->increments('id');

            $table->unsignedInteger('specialties_id')->nullable($value = false);
            $table->foreign('specialties_id')->references('id')->on('specialties');
            
            $table->string('name', 100)->nullable($value = false);
            $table->char('number_register', 20)->nullable($value = false);
            $table->string('address', 255)->nullable($value = false);
            $table->char('celular', 14)->nullable($value = true);
            $table->string('email', 100)->nullable($value = true);
            $table->float('appointment_value', 8, 2)->nullable($value = false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('doctors');
    }
}
