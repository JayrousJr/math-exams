<?php

namespace App\Filament\Resources\QuestionsAndAnswersResource\Pages;

use App\Filament\Resources\QuestionsAndAnswersResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewQuestionsAndAnswers extends ViewRecord
{
    protected static string $resource = QuestionsAndAnswersResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}
