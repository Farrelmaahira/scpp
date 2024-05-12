<?php

namespace App\Services;
use App\Repositories\OrderRepository;
use App\Exceptions\ErrorException;
use Illuminate\Support\Facades\Validator;

class OrderService 
{
    public static function getData()
    {
        $data = OrderRepository::get();
        return $data;
    }


    public static function storeData($payload)
    {
        $vld = Validator::make($payload, [
            'customer' => 'required',
            'invoice_address' => 'required',
            'address' => 'required',
            'transaction' => 'required',
            'sales_type' => 'required',
            'order_date' => 'required|date',
            'payment' => 'required'
        ]);

        if($vld->fails()) {
            throw new ErrorException('assoc',$vld->messages(), 400);
        }

        $order = OrderRepository::create($payload);

        return $order;
    }

    public static function getById($id)
    {
       $data = OrderRepository::find($id);

       if($data == null) {
        throw new ErrorException('string','Data not found', 404);
       }

       return $data;
    } 

    public static function editData($payload, $id)
    {
        $vld = Validator::make($payload, [ 
            'customer' => 'required',
            'invoice_address' => 'required',
            'address' => 'required',
            'transaction' => 'required',
            'sales_type' => 'required',
            'order_date' => 'required|date',
            'payment' => 'required'
        ]);

        if($vld->fails()) {
            throw new ErrorException('assoc',$vld->messages(), 422);
        }

        $data = OrderRepository::findAndEdit($payload, $id);

        if($data == null) {
            throw new ErrorException('string','Data not found', 404);
        }

        return $data;
    }

    public static function delete($id)
    {
        $data = OrderRepository::findAndDelete($id);

        if($data == null) {
            throw new ErrorException('string','Data not found', 404);
        }

        return true;
    }
}