<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CategoryController extends Controller
{
    function index(Request $request): Response
    {
        $users = Category::all();
        return Inertia::render('Category', ['data' => $users]);
    }
}
