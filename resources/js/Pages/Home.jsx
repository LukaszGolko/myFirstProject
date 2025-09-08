import Footer from '@/Components/MyOwnComponents/Footer';
import Header from '@/Components/MyOwnComponents/Header';
import SEOHead from '@/Components/MyOwnComponents/SeoHead';
import React from "react";


export default function Home({ posts = [], categories = [] }) {
    return (
        <>
            <SEOHead
                title="Home page"
                description="Home page description."
                url="https://example.com"
                image="https://example.com/default-image.jpg"
            />

            <Header />

            <main className="container mx-auto mt-6 flex gap-6">
                <section className="w-3/4 bg-white p-6 shadow-md rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Latest Posts</h2>


                    {posts.length === 0 ? (
                        <p className="text-gray-600">No posts yet. Check back soon!</p>
                    ) : (
                        <div className="space-y-6">
                            {posts.map((post) => (
                                <article key={post.id} className="flex gap-4 border-b pb-4">
                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            <a href={post.id} className="hover:underline">
                                                {post.title}
                                            </a>
                                        </h3>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </section>

                <aside className="w-1/4 bg-white p-6 shadow-md rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Categories</h2>
                    {categories.length === 0 ? (
                        <p className="text-gray-600">No categories yet.</p>
                    ) : (
                        <ul className="space-y-2">
                            {categories.map((cat) => (
                                <li key={cat.name}>
                                    <a href={"/?category_id="+cat.id} className="text-gray-600 hover:text-gray-800">
                                        {cat.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </aside>
            </main>

            <Footer />
        </>
    );
}