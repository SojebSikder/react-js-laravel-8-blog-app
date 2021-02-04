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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Blog
Route::get('/', [App\Http\Controllers\api\BlogController::class, 'index']);
Route::get('/blog/{id}', [App\Http\Controllers\api\BlogController::class, 'show']);
Route::post('/blog/store', [App\Http\Controllers\api\BlogController::class, 'store']);

Route::delete('/blog/delete', [App\Http\Controllers\api\BlogController::class, 'destroy']);
Route::get('/blog/edit/{id}', [App\Http\Controllers\api\BlogController::class, 'edit']);
Route::put('/blog/update/{id}', [App\Http\Controllers\api\BlogController::class, 'update']);


// Users login/register

/*
Route::post('/register', [App\Http\Controllers\api\RegisterController::class, 'create']);
Route::post('/login', [App\Http\Controllers\api\LoginController::class, 'index']);
Route::get('/user', [App\Http\Controllers\api\LoginController::class, 'getCurrentUser']);
Route::post('/update', [App\Http\Controllers\api\LoginController::class, 'update']);
Route::get('/logout', [App\Http\Controllers\api\LoginController::class, 'logout']);
*/

/*Route::group(['middleware' => 'auth:api'], function(){

    Route::post('/register', [App\Http\Controllers\api\UserController::class, 'register']);
    Route::post('/login', [App\Http\Controllers\api\UserController::class, 'login']);
    Route::get('/user', [App\Http\Controllers\api\UserController::class, 'getCurrentUser']);
    Route::post('/update', [App\Http\Controllers\api\UserController::class, 'update']);
    Route::get('/logout', [App\Http\Controllers\api\UserController::class, 'logout']);
});
*/



Route::post('/register', [App\Http\Controllers\api\UserController::class, 'register']);
Route::post('/login', [App\Http\Controllers\api\UserController::class, 'login']);
Route::get('/user', [App\Http\Controllers\api\UserController::class, 'getCurrentUser']);
Route::post('/update', [App\Http\Controllers\api\UserController::class, 'update']);
Route::get('/logout', [App\Http\Controllers\api\UserController::class, 'logout']);

