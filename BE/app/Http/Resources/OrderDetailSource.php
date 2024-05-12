<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderDetailSource extends JsonResource
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
            'product' => $this->product,
            'type' => $this->type,
            'description' => $this->description,
            'warehouse' => $this->warehouse,
            'order_quantity' => $this->order_quantity,
            'unit' => $this->unit,
            'quantity' => $this->quantity,
            'total' => $this->total,
            'order' => $this->order
        ];
    }
}
