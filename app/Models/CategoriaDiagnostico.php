<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class RecursoCategorium
 *
 * @property int $categoria_id_categoria
 * @property int $diaagnostico_id_diagnostico
 *
 * @property Categoria $categoria
 * @property Diagnostico $diagnostico
 *
 * @package App\Models
 */
class CategoriaDiagnostico extends Model
{
    public $incrementing = false;
    protected $table = 'avaliacao.categoria_diagnostico';
	public $timestamps = false;


    protected $casts = [
		'id_categoria' => 'int',
		'id_diagnostico' => 'string'
	];
	protected $fillable = [
		'id_categoria',
		'id_diagnostico'
	];

	//protected $with = ['categoria', 'recurso'];

	public function categoria()
	{
		return $this->belongsTo(Categoria::class, 'id_categoria');
	}

	public function diagnostico()
	{
		return $this->belongsTo(Diagnostico::class, 'id_diagnostico');
	}

}
