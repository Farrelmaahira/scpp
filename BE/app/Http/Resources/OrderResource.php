<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'mitra_id' => $this->mitra_id,
            'invoice_address' => $this->invoice_address,
            "jenis_transaksi" => $this->jenis_transaksi,
            "jenis_penjualan" => $this->jenis_penjualan,
            "tanggal_order" => $this->tanggal_order, 
            "pembayaran" => $this->pembayaran,
            "rekening_tujuan" => $this->rekening_tujuan,
            "total" => $this->total,
            "order_detail" => $this->orderDetail,
            "mitra" => $this->mitra
        ];
    }
}
