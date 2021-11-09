<?php

namespace App\Repository;

use App\Models\Item;

class ItemRepository extends BaseRepository
{
    /**
     * @var Item
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param Item $model
     */
    public function __construct(Item $model)
    {
        $this->model = $model;
    }
}
