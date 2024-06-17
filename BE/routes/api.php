<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MitraController;
use App\Http\Controllers\OrderController;
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

Route::middleware('auth:sanctum')->get('/', function (Request $request) {
    return response()->json([
        'user' => $request->user()
    ]);
});

Route::prefix('v1')->group(function () {
    Route::controller(OrderController::class)->group(function () {
        Route::get('/orders', 'index');
        Route::post('/order', 'store')->middleware('auth:sanctum');
        Route::delete('/order/{id}', 'destroy')->middleware('auth:sanctum');
        Route::get('/order/{id}', 'show');
    });

    Route::controller(MitraController::class)->group(function () {
        Route::get('/mitra', 'getData');
        Route::get('/mitra/{id}', 'getById');
    });
});

Route::controller(AuthController::class)->prefix('v1')->group(function () {
    Route::post('/login', 'login');
    Route::get('/logout', 'logout')->middleware('auth:sanctum');
});
