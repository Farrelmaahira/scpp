<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\OrderDetailService;
use App\Exceptions\ErrorException;
use App\Http\Resources\OrderDetailSource;

class OrderDetailController extends Controller
{

    public function index()
    {
        try {
            $data = OrderDetailService::getData();
            return response()->json([
                'data' => OrderDetailSource::collection($data)
            ]);
        } catch (ErrorException $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], $e->getCode());
        }
    }

    public function store(Request $request)
    {
        try {
            $order = OrderDetailService::storeData($request->all());
            return response()->json([
                'data' => new OrderDetailSource($order)
            ]);
        } catch (ErrorException $e) {
            return response()->json([
                'message' => json_decode($e->getMessage())
            ], $e->getCode());
        }
    }

    public function show(string $id)
    {
        try {
            $data = OrderDetailService::getById($id);
            return response()->json([
                'data' => new OrderDetailSource($data)
            ]);
        } catch (ErrorException $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], $e->getCode());
        }
    }

    public function update(Request $request, string $id)
    {
        try {
            $data = OrderDetailService::editById($request->all(), $id);
            return response()->json([
                'data' => new OrderDetailSource($data)
            ]);
        } catch (ErrorException $e) {
            if ($e->type == 'assoc') {
                return response()->json([
                    'message' => json_decode($e->getMessage())
                ], $e->getCode());
            }

            return response()->json([
                'message' => $e->getMessage()
            ], $e->getCode());
        }
    }

    public function destroy(string $id)
    {
        try {
            OrderDetailService::delete($id);
            return response()->json([
                'message' => 'Order Detail Has Been Deleted'
            ]);
        } catch (ErrorException $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], $e->getCode());
        }
    }
}
