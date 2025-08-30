import Footer from '@/Components/MyOwnComponents/Footer';
import Header from '@/Components/MyOwnComponents/Header';
import SEOHead from '@/Components/MyOwnComponents/SeoHead';
import React from "react";


export default function Article(title, imageUrl, publishedAt, content) {
    return (
        <>
            <SEOHead
                title="Article"
                description="Article description."
                url="https://example.com"
                image="https://example.com/default-image.jpg"
            />

            <Header />
            <main className="container mx-auto mt-6 flex justify-center">
                <section className="w-3/5 bg-white p-6 shadow-md rounded-lg">
                    <h1 className="text-2xl font-bold mb-4">{title}</h1>

                    <img
                        src={imageUrl}
                        alt="Post Image"
                        className="w-full object-cover rounded mb-4"
                    />

                    <p className="text-gray-600 mb-4">
                        Published on <span className="font-semibold">{publishedAt}</span>
                    </p>

                    <div className="text-gray-800 space-y-4">
                        {content.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}