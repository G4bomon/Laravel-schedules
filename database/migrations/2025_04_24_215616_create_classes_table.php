<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('classes', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->time("mondaystart")->nullable();
            $table->time("mondayend")->nullable();
            $table->time("tuesdaystart")->nullable();
            $table->time("tuesdayend")->nullable();
            $table->time("wednesdaystart")->nullable();
            $table->time("wednesdayend")->nullable();
            $table->time("thursdaystart")->nullable();
            $table->time("thursdayend")->nullable();
            $table->time("fridaystart")->nullable();
            $table->time("fridayend")->nullable();
            $table->time("saturdaystart")->nullable();
            $table->time("saturdayend")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('classes');
    }
};
