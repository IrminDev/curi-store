<?php

use Illuminate\Support\Facades\Route;

Route::get('/user', function () {
    return view('welcome');
});

Route::post('/user', function () {
    return response()->json(['status' => 'ok']);
});

Route::get('/user/{id}', function ($id) {
    return response()->json(['id' => $id]);
});

Route::get('/products', function () {
    return response()->json(['products' => ['product1', 'product2']]);
});

Route::get('/products/{id}', function ($id) {
    return response()->json(['id' => $id]);
});

Route::post('/product', function () {
    return response()->json(['status' => 'ok']);
});

Route::post('/products', function () {
    return response()->json(['status' => 'ok']);
});

Route::put('/products/{id}', function ($id) {
    return response()->json(['status' => 'ok']);
});

Route::delete('/products/{id}', function ($id) {
    return response()->json(['status' => 'ok']);
});
