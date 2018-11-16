<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAppointmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->increments('id');

            $table->unsignedInteger('attendants_id')->nullable($value = false);
            $table->foreign('attendants_id')->references('id')->on('attendants');

            $table->unsignedInteger('patients_id')->nullable($value = false);
            $table->foreign('patients_id')->references('id')->on('patients');

            $table->unsignedInteger('doctors_id')->nullable($value = false);
            $table->foreign('doctors_id')->references('id')->on('doctors');

            $table->dateTime('data_time')->nullable($value = false);
            $table->float('value', 8, 2)->nullable($value = false);
            $table->string('obs', 255)->nullable($value = false);
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
        Schema::dropIfExists('appointments');
    }
}
