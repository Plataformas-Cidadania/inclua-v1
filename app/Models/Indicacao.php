<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class RelIndRec
 *
 * @property int $id_indicador
 * @property int $id_recurso
 *
 * @property Indicador $indicador
 * @property Recurso $recurso
 *
 * @package App\Models
 */
class Indicacao extends Model
{
    public $incrementing = false;
    protected $table = 'avaliacao.indicacao';
    public $timestamps = false;

    protected $casts = [
        'id_indicador' => 'int',
        'id_recurso' => 'int'
    ];
    protected $fillable = [
        'id_indicador',
        'id_recurso'
    ];

    protected $with = ['indicador', 'recurso'];

    public function indicador()
    {
        return $this->belongsTo(Indicador::class, 'id_indicador');
    }

    public function recurso()
    {
        return $this->belongsTo(Recurso::class, 'id_recurso');
    }
}
