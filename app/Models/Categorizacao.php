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
 * @property int $recurso_id_recurso
 *
 * @property Categoria $categoria
 * @property Recurso $recurso
 *
 * @package App\Models
 */
class Categorizacao extends Model
{
    public $incrementing = false;
    protected $table = 'avaliacao.categorizacao';
	public $timestamps = false;


    protected $casts = [
		'id_categoria' => 'int',
		'id_recurso' => 'int'
	];
	protected $fillable = [
		'id_categoria',
		'id_recurso'
	];

	protected $with = ['categoria', 'recurso'];

	public function categoria()
	{
		return $this->belongsTo(Categoria::class, 'id_categoria');
	}

	public function recurso()
	{
		return $this->belongsTo(Recurso::class, 'id_recurso');
	}

}
