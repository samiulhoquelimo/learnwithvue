<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BrandController extends Controller
{
    function index(Request $request): Response
    {
        $users = Brand::all();
        return Inertia::render('Brand', ['data' => $users]);
    }
}
