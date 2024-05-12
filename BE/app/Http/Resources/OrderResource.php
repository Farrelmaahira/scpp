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
            'customer_id' => $this->customer_id,
            'customer' => $this->customer,
            'invoice_address' => $this->invoice_address,
            "address" => $this->address,
            "transaction" => $this->transaction,
            "sales_type" => $this->sales_type, 
            "order_date" => $this->order_date,
            "payment" => $this->payment,
            "order_detail" => $this->orderDetail
        ];
    }
}
