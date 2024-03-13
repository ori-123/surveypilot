<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static create(array $validated)
 */
class SurveyQuestion extends Model
{
    use HasFactory;

    protected $fillable = ['id', 'type', 'question', 'description', 'data', 'survey_id'];
}