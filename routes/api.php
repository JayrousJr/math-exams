<?php

use App\Http\Controllers\Api\Authcontroller;
use App\Http\Controllers\API\ContactController;
use App\Http\Controllers\API\ExamsController;
use App\Http\Controllers\QuestionsController;
use App\Http\Resources\ContactCollection;
use App\Models\QuestionsAndAnswers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/login', [Authcontroller::class, 'login']);
Route::post('/signup', [Authcontroller::class, 'signup']);
Route::post('/logout', [Authcontroller::class, 'logout']);
Route::post('/message', [ContactController::class, 'store']);


// Protected routes for the examinations

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/exams/{id}/questions', [QuestionsController::class, 'show']);
    Route::get('/exams/{id}/answers', [QuestionsController::class, 'show']);
    Route::get('/exams', [QuestionsController::class, 'index']);
    // Route::apiResource();
});