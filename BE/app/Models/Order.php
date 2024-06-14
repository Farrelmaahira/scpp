<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Order extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'mitra_id',
        'invoice_address',
        'jenis_transaksi',
        'jenis_penjualan',
        'tanggal_order',
        'pembayaran',
        'rekening_tujuan',
        'total'
    ];
    
    protected $keyType = 'string';
    public $incrementing = false;

    public function orderDetail()
    {
        return $this->hasMany(OrderDetail::class, 'order_id', 'id');
    }

    public function mitra()
    {
        return $this->belongsTo(Mitra::class, 'mitra_id');
    }

    public static function booted()
    {
        static::creating(function($model){
            $uuid = Str::uuid();
            $trim = explode('-', $uuid);
            $model->id = $trim[0];
        });
    }
}
