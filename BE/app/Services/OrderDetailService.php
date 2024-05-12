<?php

namespace App\Services;

use App\Repositories\OrderDetailRepository;
use App\Exceptions\ErrorException;
use App\Models\OrderDetail;
use App\Repositories\OrderRepository;
use Illuminate\Support\Facades\Validator;

class OrderDetailService
{

    public static function getData()
    {
        $data = OrderDetailRepository::get();
        return $data;
    }

    public static function storeData($payload)
    {

        $vld = Validator::make($payload, [
            'product' => 'required',
            'type' => 'required',
            'description' => 'required',
            'warehouse' => 'required',
            'order_quantity' => 'required',
            'unit' => 'required',
            'quantity' => 'required',
            'total' => 'required',
            'order_id' => 'required'
        ]);

        if ($vld->fails()) {
            throw new ErrorException('assoc', $vld->messages(), 422);
        }

        $order = OrderDetailRepository::create($payload);

        return $order;
    }

    public static function getById($id)
    {
        $order = OrderDetailRepository::find($id);

        if ($order == null) {
            throw new ErrorException('string', 'Data not found', 404);
        }

        return $order;
    }

    public static function editById($payload, $id)
    {
        $vld = Validator::make($payload, [
            'product' => 'required',
            'type' => 'required',
            'description' => 'required',
            'warehouse' => 'required',
            'order_quantity' => 'required',
            'unit' => 'required',
            'quantity' => 'required',
            'total' => 'required',
            'order_id' => 'required'

        ]);

        if ($vld->fails()) {
            throw new ErrorException('assoc', $vld->messages(), 422);
        }

        $order = OrderDetailRepository::findAndEdit($payload, $id);

        if ($order == null) {
            throw new ErrorException('string', 'Data not found', 422);
        }

        return $order;
    }

    public static function delete($id)
    {
        $order = OrderDetailRepository::findAndDelete($id);

        if($order == null) {
            throw new ErrorException('string', 'Data not found', 404);
        }

        return true;

    }
}