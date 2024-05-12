<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\OrderService;
use App\Exceptions\ErrorException;
use App\Http\Resources\OrderResource;

class OrderController extends Controller
{
    public function index()
    {
        try {

            $order = OrderService::getData();
            return response()->json([
                'data' => OrderResource::collection($order)
            ]);
        } catch (ErrorException $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], $e->getCode());
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $order = OrderService::storeData($request->all());
            return response()->json([
                'data' => $order
            ]);
        } catch (ErrorException $e) {
            return response()->json([
                'message' => json_decode($e->getMessage())
            ], $e->getCode());
        }
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $order = OrderService::getById($id);
            return response()->json([
                'data' => new OrderResource($order)
            ]);
        } catch (ErrorException $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], $e->getCode());
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            $data = OrderService::editData($request->all(), $id);
            return response()->json([
                'status' => 'success',
                'data' => $data
            ]);
        } catch (ErrorException $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], $e->getCode());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            OrderService::delete($id);
            return response()->json([
                'message' => 'Order has been deleted'
            ]);
        } catch (ErrorException $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], $e->getCode());
        }
    }
}
