<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('order_details', function (Blueprint $table) {
            $table->id();
            $table->string('product');
            $table->string('type');
            $table->string('description');
            $table->string('warehouse');
            $table->integer('order_quantity');
            $table->string('unit');
            $table->decimal('quantity');
            $table->integer('total');
            $table->foreignUuid('order_id')->references('customer_id')->on('orders')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_details');
    }
};
