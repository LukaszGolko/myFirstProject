import Footer from '@/Components/MyOwnComponents/Footer';
import Header from '@/Components/MyOwnComponents/Header';
import SEOHead from '@/Components/MyOwnComponents/SeoHead';
import React from "react";


export default function Post({ post }) {
    return (
        <>
            <SEOHead
                title="Post page"
                description={post.title}
                url="https://example.com"
                image="https://example.com/default-image.jpg"
            />

            <Header />

            <main className="container mx-auto mt-6 flex justify-center">
                <section className="w-3/5 bg-white p-6 shadow-md rounded-lg">
                    <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
                    <p className="mt-4 text-lg text-gray-600">{post.text}</p>
                </section>
            </main>

            <Footer />
        </>
    );
}