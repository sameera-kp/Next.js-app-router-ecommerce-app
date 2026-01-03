import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'E-commerce App',
  description: 'Next.js e-commerce app with App Router & Bootstrap',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container my-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
