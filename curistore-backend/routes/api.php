<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ProductController;
use Illuminate\Http\Request;

Route::get('/user', [UserController::class, 'index']);

Route::post('/user', function () {
    return response()->json(['status' => 'ok']);
});

Route::get('/user/{id}', function ($id) {
    return response()->json(['id' => $id]);
});

Route::get('/products', [ProductController::class, 'index']);

Route::get('/products/{id}', function ($id) {
    return response()->json(['id' => $id]);
});

Route::post('/product', function () {
    return response()->json(['status' => 'ok']);
});

Route::post('/products', [ProductController::class, 'multipleStore']);

Route::put('/products/{id}', function ($id) {
    return response()->json(['status' => 'ok']);
});

Route::delete('/products/{id}', function ($id) {
    return response()->json(['status' => 'ok']);
});
