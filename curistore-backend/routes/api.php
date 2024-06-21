<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\BrandController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\AddressController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\PurchaseController;
use App\Http\Controllers\Api\StatsController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Api\CartController;
use Illuminate\Http\Request;

// Users routes
Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/register', [AuthController::class, 'register'])->name('register');
    Route::post('/login', [AuthController::class, 'login'])->name('login');
    Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api')->name('logout');
    Route::post('/refresh', [AuthController::class, 'refresh'])->middleware('auth:api')->name('refresh');
    Route::post('/me', [AuthController::class, 'me'])->middleware('auth:api')->name('me');
});

// Products routes
Route::get('/products', [ProductController::class, 'index']);

Route::get('/products/{id}', [ProductController::class, 'show']);

Route::get('/products/category/{category_id}', [ProductController::class, 'productsByCategory']);

// Orders routes
Route::get('/orders/{purchase_id}', [OrderController::class, 'getOrdersByPurchaseId']);



// Protected routes
Route::group([
    'middleware' => 'auth:api'
], function ($router) {
    // Purchases routes
    Route::get('/purchases/{user_id}', [PurchaseController::class, 'getPurchasesByUserId']);
    
    Route::post('/purchase', [PurchaseController::class, 'storeMultipleOrders']);
    
    Route::get('/purchase/{id}', [PurchaseController::class, 'show']);
    
    Route::post('/product',  [ProductController::class, 'store'])->middleware('auth:api')->name('store');

    Route::post('/products', [ProductController::class, 'multipleStore'])->middleware('auth:api')->name('multipleStore');

    Route::get('/stats', [StatsController::class, 'show']);

    Route::get('/stats/product', [StatsController::class, 'statsByProduct']);
    
    Route::get('/stats/brand', [StatsController::class, 'statsByBrand']);

    Route::get('/stats/category', [StatsController::class, 'statsByCategory']);

    Route::get('/users', [UserController::class, 'index']);

    Route::get('/user/{id}', [UserController::class, 'show']);

    Route::post('/user', [UserController::class, 'createAdmin']);

    // Cart routes
    Route::get('/cart/{id}', [CartController::class, 'show']);

    Route::post('/cart/{id}', [CartController::class, 'store']);

    Route::delete('/cart/{id}', [CartController::class, 'destroy']);

    Route::put('/cart/{id}', [CartController::class, 'update']);

    Route::delete('/cart/user/{id}', [CartController::class, 'destroyAll']);

    // Address routes
    Route::get('/addresses/{user_id}', [AddressController::class, 'addressesByUserId']);

    Route::post('/address', [AddressController::class, 'store']);

    Route::get('/address/{address_id}', [AddressController::class, 'showAddress']);

    Route::put('/address/{id}', [AddressController::class, 'update']);

    Route::delete('/address/{id}', [AddressController::class, 'destroy']);

});

// Brand routes

Route::get('/brands', [BrandController::class, 'index']);

// Categories routes

Route::get('/categories', [CategoryController::class, 'index']);

