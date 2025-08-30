import Footer from '@/Components/MyOwnComponents/Footer';
import Header from '@/Components/MyOwnComponents/Header';
import SEOHead from '@/Components/MyOwnComponents/SeoHead';

export default function ContactUs() {
    return (
        <>
            <SEOHead
                title="Contact Us"
                description="Description Contact Us."
                url="https://example.com"
                image="https://example.com/default-image.jpg"
            />

            <Header />

            <main className="container mx-auto mt-6 flex justify-center">
                <section className="w-3/5 bg-white p-6">
                    <h1 className="text-2xl font-bold mb-4">Contact us</h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Email:{" "}
                        <a
                            href="mailto:support@website.com"
                            className="text-blue-600 hover:underline"
                        >
                            support@website.com
                        </a>
                    </p>
                </section>
            </main>

            <Footer />
        </>
    );
}