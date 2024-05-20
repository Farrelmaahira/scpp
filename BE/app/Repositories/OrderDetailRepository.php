<?php

namespace App\Repositories;

use App\Models\OrderDetail;

class OrderDetailRepository
{

    public static function get()
    {
        $data = OrderDetail::all();
        return $data;
    }

    public static function create($payload)
    {
        $orderId = $payload['order_id'];
        $orderItem = collect($payload['detail_order']);
        $modifiedOrderItem = $orderItem->map(function($item) use ($orderId){
            $item['order_id'] = $orderId;
            return $item;
        });
        $modifiedOrderItem->map(function($item){
            OrderDetail::create($item);
        });
        return true;
    }
    

    public static function fnd($id)
    {
        $data = OrderDetail::find($id);

        if ($data == null) {
            return null;
        }

        return $data;
    }

    public static function findAndEdit($payload, $id)
    {
        $data = OrderDetail::find($id);

        if ($data == null) {
            return null;
        }

        $data->update([
            'product' => $payload['product'],
            'type' => $payload['type'],
            'description' => $payload['description'],
            'warehouse' => $payload['warehouse'],
            'order_quantity' => $payload['order_quantity'],
            'unit' => $payload['unit'],
            'quantity' => $payload['quantity'],
            'total' => $payload['total'],
        ]);

        return $data;
    }

    public static function findAndDelete($id)
    {
        $order = OrderDetail::find($id);

        if ($order == null) {
            return null;
        }

        $order->delete();

        return true;
    }
}
