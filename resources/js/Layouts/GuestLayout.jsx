import Footer from '@/Components/MyOwnComponents/Footer';
import Header from '@/Components/MyOwnComponents/Header';

export default function GuestLayout({ loginRegister = false, auth, children }) {
    return (
        <>
            <Header auth={auth} loginRegister={loginRegister} />
            <div className="flex min-h-screen items-center justify-center">
                <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4  sm:max-w-md sm:rounded-lg dark:bg-gray-800">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
}
