<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory, HasUuids;

    protected $primaryKey = 'customer_id';
    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'customer_id',
        'customer',
        'invoice_address',
        'address',
        'transaction',
        'sales_type',
        'order_date',
        'payment'
    ];

    public function orderDetail()
    {
        return $this->hasMany(OrderDetail::class, 'order_id', 'customer_id');
    }
}
