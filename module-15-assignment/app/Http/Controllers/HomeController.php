<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    function index(Request $request): Response
    {
        return Inertia::render('Home');
    }
}
