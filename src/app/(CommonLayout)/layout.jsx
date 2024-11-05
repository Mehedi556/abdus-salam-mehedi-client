import Footer from "./_components/Footer";
import NavbarComponent from "./_components/Navbar";

export default function Layout({children}) {
    return (
            <div className="bg-colorSolid min-h-screen text-white">
                <NavbarComponent />

                {children}

                <Footer />
            </div>
    );
}