<?php

namespace App\Http\Controllers\Api;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * Success response
     *
     * @param mix $message
     * @param mix $data
     * @param array $meta
     *
     * @return JsonResponse
     */
    protected function successResponse($message, $data, array $meta = []): JsonResponse
    {
        return response()->json(
            array_merge([
                'data' => $data,
                'message' => $message,
                'success' => true,
            ], $meta), 200);
    }

    /**
     * Error response
     *
     * @param mix $message
     *
     * @return JsonResponse
     */
    protected function errorResponse($message): JsonResponse
    {
        return response()->json([
            'errors' => (array) $message,
            'success' => false,
        ], 422);
    }

}
