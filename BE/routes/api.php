<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderDetailController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::controller(AuthController::class)->group(function(){
    Route::post('/login', 'login');
    Route::get('/logout', 'logout');
});

Route::controller(OrderController::class)->group(function(){
    Route::get('/orders', 'index');
    Route::post('/order', 'store');
    Route::put('/order/{id}', 'update');
    Route::delete('/order/{id}', 'destroy');
    Route::get('/order/{id}', 'show');
});

Route::controller(OrderDetailController::class)->group(function(){
    Route::get('/order_details', 'index');
    Route::post('/order_detail', 'store');
    Route::get('/order_detail/{id}', 'show');
    Route::put('/order_detail/{id}', 'update');
    Route::delete('/order_detail/{id}', 'destroy');
});