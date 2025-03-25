<?php

use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [NewsController::class, 'index'])->name('Homepage');

Route::post('/news', [NewsController::class, 'store'])->middleware('auth');
Route::get('/news', [NewsController::class, 'show'])->middleware('auth');
Route::get('/news/{id}/edit', [NewsController::class, 'edit'])->name('news.edit')->middleware('auth');
Route::put('/news/update/{id}', [NewsController::class, 'update'])->name('news.update')->middleware('auth');
Route::get('/news/delete/{id}', [NewsController::class, 'destroy'])->name('news.destroy')->middleware('auth');




Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
