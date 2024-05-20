<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations>.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('mitra_id')->constrained();
            $table->string('invoice_address');
            $table->enum('jenis_transaksi', ['PSO']);
            $table->string('jenis_penjualan');
            $table->date('tanggal_order');
            $table->enum('pembayaran', ['Transfer', 'Tunai']);
            $table->integer('rekening_tujuan');
            $table->integer('total')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
