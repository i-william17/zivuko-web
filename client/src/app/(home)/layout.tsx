import { ReactNode } from 'react';
import Navbar from '../../components/navbar/navbar';
import Hero from '../../components/hero/hero';
import Categories from '../../components/Route/Categories/Categories';
import BestDeals from '../../components/Route/BestDeals/BestDeals';
import FeaturedProduct from '../../components/Route/FeaturedProduct/FeaturedProduct';
import Events from '../../components/Events/Events';
import Sponsored from '../../components/Route/Sponsored'
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

      {/* Categories */}
      <Categories />

      {/* Best Deals */}
      <BestDeals />
      
      {/* Featured Products */} 
      <FeaturedProduct />

      {/* Events */}
      <Events />
      
      {/* Sponsored */}
      <Sponsored />

      {/* Description */}

      {/* Footer */}
      <Footer />
    </div>
  );
}