<?php

use App\Http\Controllers\BrandController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('index');
Route::get('/users', [UserController::class, 'index'])->name('index');
Route::get('/brands', [BrandController::class, 'index'])->name('index');
Route::get('/categories', [CategoryController::class, 'index'])->name('index');
Route::get('/products', [ProductController::class, 'index'])->name('index');
