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
            
            $table->uuid('customer_id')->primary();
            $table->string('customer');
            $table->string('invoice_address');
            $table->string('address');
            $table->enum('transaction', ['PSO']);
            $table->string('sales_type');
            $table->date('order_date');
            $table->enum('payment', ['Transfer', 'Tunai']);
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
