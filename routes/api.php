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

Route::get('/', [App\Http\Controllers\api\BlogController::class, 'index']);
Route::get('/blog/{id}', [App\Http\Controllers\api\BlogController::class, 'show']);
Route::post('/blog/store', [App\Http\Controllers\api\BlogController::class, 'store']);

Route::delete('/blog/delete', [App\Http\Controllers\api\BlogController::class, 'destroy']);
Route::get('/blog/edit/{id}', [App\Http\Controllers\api\BlogController::class, 'edit']);
Route::put('/blog/update/{id}', [App\Http\Controllers\api\BlogController::class, 'update']);