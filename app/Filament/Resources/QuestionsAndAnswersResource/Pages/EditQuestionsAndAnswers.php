<?php

namespace App\Filament\Resources\QuestionsAndAnswersResource\Pages;

use App\Filament\Resources\QuestionsAndAnswersResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditQuestionsAndAnswers extends EditRecord
{
    protected static string $resource = QuestionsAndAnswersResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
            Actions\ForceDeleteAction::make(),
            Actions\RestoreAction::make(),
        ];
    }
}
