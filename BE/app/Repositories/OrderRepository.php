<?php

namespace App\Repositories;

use App\Models\Order;
use Illuminate\Support\Str;

class OrderRepository
{

    public static function get()
    {
        $data = Order::all();
        return $data;
    }

    public static function create($payload)
    {
        $data = Order::create([
            'customer_id' => Str::uuid(),
            'customer' => $payload['customer'],
            'invoice_address' => $payload['invoice_address'],
            'address' => $payload['address'],
            'transaction' => $payload['transaction'],
            'sales_type' => $payload['sales_type'],
            'order_date' => $payload['order_date'],
            'payment' => $payload['payment']
        ]);

        return $data;
    }

    public static function find($id)
    {
        $data = Order::find($id);
        return $data;
    }

    public static function findAndEdit($payload, $id)
    {
        $data = Order::find($id);

        if ($data == null) {
            return null;
        }

        $data->update([
            'customer' => $payload['customer'],
            'invoice_address' => $payload['invoice_address'],
            'address' => $payload['address'],
            'transaction' => $payload['transaction'],
            'sales_type' => $payload['sales_type'],
            'order_date' => $payload['order_date'],
            'payment' => $payload['payment']
        ]);

        return $data;
    }

    public static function findAndDelete($id)
    {
        $data = Order::find($id);

        if($data == null) {
            return null;
        }

        $data->delete();
        return true;
        
    }
}