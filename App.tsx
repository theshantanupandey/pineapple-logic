import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useRouter } from "./components/Router";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  const { currentPath, navigate } = useRouter();

  const renderPage = () => {
    switch (currentPath) {
      case "/":
        return <HomePage />;
      case "/services":
        return <ServicesPage />;
      case "/portfolio":
        return <PortfolioPage />;
      case "/about":
        return <AboutPage />;
      case "/contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header currentPath={currentPath} navigate={navigate} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}