<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    function index(Request $request): Response
    {
        $users = Product::all();
        return Inertia::render('Product', ['data' => $users]);
    }
}
