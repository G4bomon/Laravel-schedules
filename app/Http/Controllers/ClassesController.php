<?php

namespace App\Http\Controllers;

use App\Models\Classes;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClassesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('classes/index', [
            "classes" => Classes::latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('classes/create', []);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'mondaystart' => 'nullable|date_format:H:i',
            'mondayend' => 'nullable|date_format:H:i|after:mondaystart',
            'tuesdaystart' => 'nullable|date_format:H:i',
            'tuesdayend' => 'nullable|date_format:H:i|after:tuesdaystart',
            'wednesdaystart' => 'nullable|date_format:H:i',
            'wednesdayend' => 'nullable|date_format:H:i|after:wednesdaystart',
            'thursdaystart' => 'nullable|date_format:H:i',
            'thursdayend' => 'nullable|date_format:H:i|after:thursdaystart',
            'fridaystart' => 'nullable|date_format:H:i',
            'fridayend' => 'nullable|date_format:H:i|after:fridaystart',
            'saturdaystart' => 'nullable|date_format:H:i',
            'saturdayend' => 'nullable|date_format:H:i|after:saturdaystart',
        ]);
    
        // Create class with all time fields
        Classes::create([
            'name' => $request->name,
            'mondaystart' => $request->mondaystart,
            'mondayend' => $request->mondayend,
            'tuesdaystart' => $request->tuesdaystart,
            'tuesdayend' => $request->tuesdayend,
            'wednesdaystart' => $request->wednesdaystart,
            'wednesdayend' => $request->wednesdayend,
            'thursdaystart' => $request->thursdaystart,
            'thursdayend' => $request->thursdayend,
            'fridaystart' => $request->fridaystart,
            'fridayend' => $request->fridayend,
            'saturdaystart' => $request->saturdaystart,
            'saturdayend' => $request->saturdayend,
        ]);
    
        return redirect()->route('classes.index')->with('success', 'Class created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $classes = Classes::find($id);
        return Inertia::render('classes/edit', [
            "classes" => $classes,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id){
    
        $request->validate([
        'name' => 'required|string',
        'mondaystart' => 'nullable|date_format:H:i',
        'mondayend' => 'nullable|date_format:H:i|after:mondaystart',
        'tuesdaystart' => 'nullable|date_format:H:i',
        'tuesdayend' => 'nullable|date_format:H:i|after:tuesdaystart',
        'wednesdaystart' => 'nullable|date_format:H:i',
        'wednesdayend' => 'nullable|date_format:H:i|after:wednesdaystart',
        'thursdaystart' => 'nullable|date_format:H:i',
        'thursdayend' => 'nullable|date_format:H:i|after:thursdaystart',
        'fridaystart' => 'nullable|date_format:H:i',
        'fridayend' => 'nullable|date_format:H:i|after:fridaystart',
        'saturdaystart' => 'nullable|date_format:H:i',
        'saturdayend' => 'nullable|date_format:H:i|after:saturdaystart',
        ]);

        $class = Classes::findOrFail($id); 
        $class->name = $request->name;
        $class->mondaystart = $request->mondaystart;
        $class->mondayend = $request->mondayend;
        $class->tuesdaystart = $request->tuesdaystart;
        $class->tuesdayend = $request->tuesdayend;
        $class->wednesdaystart = $request->wednesdaystart;
        $class->wednesdayend = $request->wednesdayend;
        $class->thursdaystart = $request->thursdaystart;
        $class->thursdayend = $request->thursdayend;
        $class->fridaystart = $request->fridaystart;
        $class->fridayend = $request->fridayend;
        $class->saturdaystart = $request->saturdaystart;
        $class->saturdayend = $request->saturdayend;
        
        $class->save();

        return redirect()->route('classes.index')->with('success', 'Class updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $class = Classes::findOrFail($id);
        $class->delete();
        
        return redirect()->route('classes.index')->with('success', 'Class deleted successfully');
    }
}
