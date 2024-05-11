<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\AddressController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\PurchaseController;
use Illuminate\Http\Request;

// Users routes
Route::get('/user', [UserController::class, 'index']);

Route::get('/user/login', [UserController::class, 'login']);

Route::post('/user', [UserController::class, 'store']);

Route::get('/user/{id}', [UserController::class, 'show']);


// Products routes
Route::get('/products', [ProductController::class, 'index']);

Route::get('/products/{id}', [ProductController::class, 'show']);

Route::post('/product', [ProductController::class, 'store']);

Route::post('/products', [ProductController::class, 'multipleStore']);


// Address routes
Route::get('/addresses/{user_id}', [AddressController::class, 'addressesByUserId']);

Route::post('/address', [AddressController::class, 'store']);

Route::get('/address/{user_id}/{address_id}', [AddressController::class, 'showAddressesByUserId']);

Route::put('/address/{id}', [AddressController::class, 'update']);

Route::delete('/address/{id}', [AddressController::class, 'destroy']);


// Orders routes
Route::get('/orders/{purchase_id}', [OrderController::class, 'getOrdersByPurchaseId']);


// Purchases routes
Route::get('/purchases/{user_id}', [PurchaseController::class, 'getPurchasesByUserId']);

Route::post('/purchase', [PurchaseController::class, 'storeMultipleOrders']);

Route::get('/purchase/{id}', [PurchaseController::class, 'show']);