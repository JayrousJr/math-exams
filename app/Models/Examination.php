<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Examination extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'exam_type',
        'paper_type',
        'year',
        'name',
    ];

    public function examRelation(): HasMany
    {
        return $this->hasMany(QuestionsAndAnswers::class, 'exam_id');
    }
}
