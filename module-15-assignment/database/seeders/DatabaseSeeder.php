<?php

namespace Database\Seeders;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{

    public function run(): void
    {
        User::factory(100)->create();
        Category::factory(100)->create();
        Brand::factory(100)->create();
        Product::factory(100)->create();
    }
}
