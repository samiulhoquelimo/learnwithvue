<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class BrandFactory extends Factory
{
    public function definition(): array
    {
        return [
            'title'      => fake()->title(),
            'details'    => fake()->text(),
            'created_at' => now(),
        ];
    }
}
