import Footer from '@/Components/MyOwnComponents/Footer';
import Header from '@/Components/MyOwnComponents/Header';
import SEOHead from '@/Components/MyOwnComponents/SeoHead';

export default function ContactUs({ loginRegister = true, auth }) {
    return (
        <>
            <SEOHead
                title = "About Us Page"
                description = "Description about us."
                url = "https://example.com"
                image = "https://example.com/default-image.jpg"
            />

            <Header auth={auth} loginRegister={loginRegister} />

            <Footer />
        </>
    );
}