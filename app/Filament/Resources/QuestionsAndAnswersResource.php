<?php

namespace App\Filament\Resources;

use App\Filament\Resources\QuestionsAndAnswersResource\Pages;
use App\Filament\Resources\QuestionsAndAnswersResource\RelationManagers;
use App\Models\Examination;
use App\Models\QuestionsAndAnswers;
use Filament\Forms;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Validation\Rules\Unique;

class QuestionsAndAnswersResource extends Resource
{
    protected static ?string $model = QuestionsAndAnswers::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Select::make('exam_id')
                    ->preload()
                    ->label('Examination')
                    ->required()
                    ->searchable()
                    ->options(Examination::all()->pluck('name', 'id')),
                Select::make('question_number')
                    ->preload()
                    ->required()
                    ->unique(
                        modifyRuleUsing: function (Unique $rule, callable $get) {
                            return $rule
                                ->where('question_number', $get('question_number'))
                                ->where('exam_id', $get('exam_id'));
                        },
                        ignoreRecord: true
                    )
                    ->validationMessages([
                        'unique' => 'In this :attribute,there is already a Question withthe same number'
                    ])
                    ->searchable()
                    ->options([
                        'Question 1' => 'Question 1',
                        'Question 2' => 'Question 2',
                        'Question 3' => 'Question 3',
                        'Question 4' => 'Question 4',
                        'Question 5' => 'Question 5',
                        'Question 6' => 'Question 6',
                        'Question 7' => 'Question 7',
                        'Question 8' => 'Question 8',
                        'Question 9' => 'Question 9',
                        'Question 10' => 'Question 10',
                        'Question 11' => 'Question 11',
                        'Question 12' => 'Question 12',
                        'Question 13' => 'Question 13',
                        'Question 14' => 'Question 14',
                        'Question 15' => 'Question 15',
                    ]),
                RichEditor::make('questions')
                    ->required()
                    ->columnSpanFull(),
                RichEditor::make('answers')
                    ->required()
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                // Tables\Columns\TextColumn::make('exam')
                //     ->searchable(),
                Tables\Columns\TextColumn::make('question_number')
                    ->searchable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('deleted_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\TrashedFilter::make(),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                    Tables\Actions\ForceDeleteBulkAction::make(),
                    Tables\Actions\RestoreBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListQuestionsAndAnswers::route('/'),
            'create' => Pages\CreateQuestionsAndAnswers::route('/create'),
            'view' => Pages\ViewQuestionsAndAnswers::route('/{record}'),
            'edit' => Pages\EditQuestionsAndAnswers::route('/{record}/edit'),
        ];
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]);
    }
}