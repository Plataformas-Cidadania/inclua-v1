<?php

namespace App\Repository;

use App\Models\Link;

class LinkRepository extends BaseRepository
{
    /**
     * @var Link
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param Link $model
     */
    public function __construct(Link $model)
    {
        $this->model = $model;
    }
}
