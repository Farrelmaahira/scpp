<?php

namespace App\Services;

use App\Repositories\OrderRepository;
use App\Exceptions\ErrorException;
use App\Repositories\OrderDetailRepository;
use Illuminate\Support\Facades\Validator;

class OrderService
{
    public static function getData()
    {
        $data = OrderRepository::get();
        return $data;
    }


    public static function storeData($body)
    {
        $vld = Validator::make($body, [
            'mitra_id' => 'required|integer',
            'jenis_transaksi' => 'required',
            'jenis_penjualan' => 'required',
            'tanggal_order' => 'required|date',
            'cara_pembayaran' => 'required|string',
            'rekening_tujuan' => 'required|integer',
            'detail_order' => 'array|required',
            'detail_order.*.produk' => 'required|string',
            'detail_order.*.tipe' => 'required|string',
            'detail_order.*.gudang' => 'required|string',
            'detail_order.*.jumlah_pesanan' => 'required|integer',
            'detail_order.*.kuantitas' => 'required|string',
            'detail_order.*.harga' => 'required|integer',
            'detail_order.*.subtotal' => 'required|integer',
        ]);

        if ($vld->fails()) {
            throw new ErrorException('assoc', $vld->messages(), 400);
        }
        $value = collect($body); 
        $orderItem = collect($body['detail_order']);
        $total = 0;
        foreach($orderItem as $item) {
            $total += $item['subtotal'];
        }
        $value->put('total', $total);
        $order = OrderRepository::create($value);
        $orderDetailPayload = [
            'order_id' => $order->id,
            'detail_order' => $orderItem
        ];
        OrderDetailRepository::create($orderDetailPayload);
        return $order;
    }

    public static function getById($id)
    {
        $data = OrderRepository::find($id);
        if ($data == null) {
            throw new ErrorException('string', 'Data not found', 404);
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
        if ($vld->fails()) {
            throw new ErrorException('assoc', $vld->messages(), 422);
        }
        $data = OrderRepository::findAndEdit($payload, $id);
        if ($data == null) {
            throw new ErrorException('string', 'Data not found', 404);
        }
        return $data;
    }

    public static function delete($id)
    {
        $data = OrderRepository::findAndDelete($id);

        if ($data == null) {
            throw new ErrorException('string', 'Data not found', 404);
        }

        return true;
    }
}
