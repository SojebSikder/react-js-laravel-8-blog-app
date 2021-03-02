<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Post
Route::get('/', [App\Http\Controllers\api\BlogController::class, 'index']);
Route::get('/blog/{id}', [App\Http\Controllers\api\BlogController::class, 'show']);
Route::post('/blog/store', [App\Http\Controllers\api\BlogController::class, 'store']);

Route::delete('/blog/delete', [App\Http\Controllers\api\BlogController::class, 'destroy']);
Route::get('/blog/edit/{id}', [App\Http\Controllers\api\BlogController::class, 'edit']);
Route::put('/blog/update/{id}', [App\Http\Controllers\api\BlogController::class, 'update']);

// User
//Route::post('login', 'Auth\\LoginController@login')->name('login');
//Route::post('register', 'Auth\\RegisterController@register')->name('register');
//Route::get('logout', 'Auth\\LoginController@logout')->name('logout');
//Route::get('check-auth', 'Auth\\LoginController@checkAuth')->name('logout');
Route::resource('categories', App\Http\Controllers\api\CategoryController::class);
//Route::resource('posts', 'PostsController');
Route::resource('posts', App\Http\Controllers\api\PostsController::class);
Route::resource('tags', App\Http\Controllers\api\TagsController::class);
Route::resource('comments', App\Http\Controllers\api\CommentsController::class);
Route::get('profile', 'UsersController@profile');
Route::post('profile/update', 'UsersController@updateProfile');
Route::resource('users', App\Http\Controllers\api\UsersController::class);


// login/register
Route::post('/register', [App\Http\Controllers\api\UserController::class, 'register']);
Route::post('/login', [App\Http\Controllers\api\UserController::class, 'login']);
Route::get('/user', [App\Http\Controllers\api\UserController::class, 'getCurrentUser']);
Route::post('/update', [App\Http\Controllers\api\UserController::class, 'update']);
Route::post('/logout', [App\Http\Controllers\api\UserController::class, 'logout']);
