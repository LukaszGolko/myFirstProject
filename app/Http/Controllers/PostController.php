<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

use Inertia\Inertia;

class PostController extends Controller
{
    public function show(Post $post)
    {
        return Inertia::render('Post', compact('post'));
    }
}
