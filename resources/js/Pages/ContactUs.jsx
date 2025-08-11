import Footer from '@/Components/MyOwnComponents/Footer';
import Header from '@/Components/MyOwnComponents/Header';
import SEOHead from '@/Components/MyOwnComponents/SeoHead';

export default function ContactUs() {
    return (
        <>
            <SEOHead
                title = "Contact Us"
                description = "Description Contact Us."
                url = "https://example.com"
                image = "https://example.com/default-image.jpg"
            />

            <Header />
            
            <Footer />
        </>
    );
}