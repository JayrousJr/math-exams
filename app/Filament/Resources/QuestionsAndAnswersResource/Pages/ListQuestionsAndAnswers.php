<?php

namespace App\Filament\Resources\QuestionsAndAnswersResource\Pages;

use App\Filament\Resources\QuestionsAndAnswersResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListQuestionsAndAnswers extends ListRecords
{
    protected static string $resource = QuestionsAndAnswersResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
