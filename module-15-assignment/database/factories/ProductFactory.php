<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    public function definition(): array
    {
        return [
            'title'      => fake()->title(),
            'details'    => fake()->text(),
            'price'      => fake()->unique()->randomNumber(),
            'created_at' => now(),
        ];
    }
}
