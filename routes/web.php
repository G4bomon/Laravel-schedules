<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ClassesController; // <-- Add this line

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::resource('classes', ClassesController::class)->middleware(['auth']); 

Route::get('/test', function () {
    return Inertia::render('test');
})->name('test');



require __DIR__.'/settings.php';
require __DIR__.'/auth.php';