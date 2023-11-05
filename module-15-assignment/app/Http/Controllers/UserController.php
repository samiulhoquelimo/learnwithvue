<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    function index(Request $request): Response
    {
        $users = User::all();
        return Inertia::render('User', ['data' => $users]);
    }
}
