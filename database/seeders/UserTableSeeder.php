<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $user = \App\Models\User::create([
            'name' => 'admin',
            'email' => 'admin@email.com',
            'password' => bcrypt('123'),
            'is_admin' => 1
        ]);
    }
}
