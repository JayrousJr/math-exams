<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class QuestionsAndAnswers extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['questions', 'answers', 'exam', 'exam_id', 'question_number'];
}
