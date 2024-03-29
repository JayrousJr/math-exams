<?php

namespace App\Http\Controllers;

use App\Filament\Resources\ExaminationResource;
use App\Http\Resources\ExamsResource;
use App\Http\Resources\QuestionsResource;
use App\Models\Examination;
use App\Models\QuestionsAndAnswers;
use Illuminate\Http\Request;

class QuestionsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return QuestionsResource::collection(Examination::query()->orderBy('id', 'asc')->paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // $examId = Examination::

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // $examid = $id;
        return ExamsResource::collection(
            QuestionsAndAnswers::where('exam_id', $id)->get()
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
