import Footer from '@/Components/MyOwnComponents/Footer';
import Header from '@/Components/MyOwnComponents/Header';
import SEOHead from '@/Components/MyOwnComponents/SeoHead';


export default function Home() {
    return (
        <>
            <SEOHead
                title = "Home page"
                description = "Home page description."
                url = "https://example.com"
                image = "https://example.com/default-image.jpg"
            />

            <Header />

            <Footer />
        </>
    );
}