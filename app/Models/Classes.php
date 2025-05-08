<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Classes extends Model
{
    protected $fillable = ["name","mondaystart","mondayend","tuesdaystart","tuesdayend","wednesdaystart","wednesdayend","thursdaystart","thursdayend","fridaystart","fridayend","saturdaystart","saturdayend"];
    public $timestamps = false;
}
