<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ExaminationResource\Pages;
use App\Filament\Resources\ExaminationResource\RelationManagers;
use App\Models\Examination;
use Filament\Forms;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Validation\Rules\Unique;

class ExaminationResource extends Resource
{
    protected static ?string $model = Examination::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make(3)
                    ->schema([
                        Select::make('exam_type')
                            ->live()
                            ->required()
                            ->searchDebounce(100)
                            ->preload()
                            ->searchable()
                            ->label('Examination type')
                            ->loadingMessage('Loading Examinations...')
                            ->afterStateUpdated(function (callable $set, callable $get) {
                                $exam_type = $get('exam_type');
                                $paper_type = $get('paper_type');
                                $year = $get('year');
                                $name = $exam_type . " " . $paper_type . " " . $year;
                                $set('name', $name);
                            })
                            ->options([
                                'Advance Mathematics' => "Advance Mathematics",
                                "Basic Applied Mathematics" => "Basic Applied Mathematics"
                            ]),
                        Select::make('paper_type')
                            ->preload()
                            ->required()
                            ->live(debounce: 100)
                            ->searchDebounce(500)
                            ->loadingMessage('Loading Examination Types...')
                            ->searchable()
                            ->afterStateUpdated(function (callable $set, callable $get) {
                                $exam_type = $get('exam_type');
                                $paper_type = $get('paper_type');
                                $year = $get('year');
                                $name = $exam_type . " " . $paper_type . " " . $year;
                                $set('name', $name);
                            })
                            ->options(fn (Get $get): array => match ($get('exam_type')) {
                                'Advance Mathematics' => [
                                    'Paper One' => 'Paper One',
                                    'Paper Two' => 'Paper Two',
                                ],
                                'Basic Applied Mathematics' => [
                                    'BAM' => 'BAM',
                                ],
                                default => [],
                            }),
                        Select::make('year')
                            ->searchable()
                            ->preload()
                            ->required()
                            ->live(debounce: 100)
                            ->searchDebounce(500)
                            ->afterStateUpdated(function (callable $set, callable $get) {
                                $exam_type = $get('exam_type');
                                $paper_type = $get('paper_type');
                                $year = $get('year');
                                $name = $exam_type . " " . $paper_type . " " . $year;

                                $set('name', $name);
                            })
                            ->unique(
                                modifyRuleUsing: function (Unique $rule, callable $get) {
                                    return $rule
                                        ->where('exam_type', $get('exam_type'))
                                        ->where('year', $get('year'))
                                        ->where('paper_type', $get('paper_type'));
                                },
                                ignoreRecord: true
                            )
                            ->validationMessages([
                                'unique' => 'Examination this for :attribute are Published already'
                            ])
                            ->options([
                                '2020' => '2020', '2021' => '2021', '2022' => '2022', '2023' => '2023', '2024' => '2024', '2025' => '2025', '2026' => '2026', '2027' => '2027', '2028' => '2028', '2029' => '2029', '2030' => '2030', '2031' => '2031', '2032' => '2032', '2033' => '2033', '2040' => '2034', '2035' => '2035', '2036' => '2036', '2037' => '2037', '2038' => '2038', '2039' => '2039', '2040' => '2040',
                            ]),
                        TextInput::make('name')
                            ->required(),
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
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
            'index' => Pages\ListExaminations::route('/'),
            'create' => Pages\CreateExamination::route('/create'),
            'view' => Pages\ViewExamination::route('/{record}'),
            'edit' => Pages\EditExamination::route('/{record}/edit'),
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
