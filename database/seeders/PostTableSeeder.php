<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PostTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $user = \App\Models\Post::create([
            'title' => 'This is a test',
            'slug' => 'slug',
            'content' => 'Hello World',
            'image' => 'imageurl',
            'published' => 1
        ]);
    }
}
