<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Category;
use App\Models\Post;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $categories = Category::all();


        // $posts = Post::latest()->get();
        // $posts = Post::where('category_id', request('category_id'))->latest()->get();
        $posts = Post::when(request('category_id'), function ($query) {
            $query->where('category_id', request('category_id'));
        })->latest()->get();


        // return Inertia::render('Home', ['categories' => $categories, 'posts' => $posts]);
        return Inertia::render('Home', compact('categories', 'posts'));
    }
}
