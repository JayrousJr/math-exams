<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\QuestionsAndAnswers;
use App\Http\Requests\StorequestionsAndAnswersRequest;
use App\Http\Requests\UpdatequestionsAndAnswersRequest;
use App\Http\Resources\ExamsResource;

class ExamsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ExamsResource::collection(
            QuestionsAndAnswers::query()->orderBy('id', 'asc')->paginate(10)
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorequestionsAndAnswersRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(questionsAndAnswers $questionsAndAnswers)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatequestionsAndAnswersRequest $request, questionsAndAnswers $questionsAndAnswers)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(questionsAndAnswers $questionsAndAnswers)
    {
        //
    }
}
