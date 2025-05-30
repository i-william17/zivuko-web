import { ReactNode } from 'react';
import Navbar from '../../components/navbar/navbar';
import Hero from '../../components/hero/hero'
import Description from '../../components/description/description';
import Footer from '../../components/footer/footer'; 

interface LayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  return (
    <div>
      {/* Header/Navbar - Fixed at top */}
      <div className="sticky top-0 z-50">
      <Navbar />
      </div>

      {/* Hero */}
      <Hero/>

      {/* Footer */}
      <Footer />
    </div>
  );
}