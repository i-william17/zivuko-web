import React, { useState } from 'react';
import Link from 'next/link';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

interface NavItem {
  url: string;
  title: string;
  subItems?: NavItem[];
}

interface NavbarProps {
  active?: number;
  mobile?: boolean;
  setOpenMobileMenu?: (open: boolean) => void;
}

const navItems: NavItem[] = [
  {
    url: '/',
    title: 'Home',
    subItems: [
      { url: '/new-arrivals', title: 'New Arrivals' },
      { url: '/best-sellers', title: 'Best Sellers' },
      { url: '/editorial', title: 'Editorial' }
    ]
  },
  {
    url: '/collections',
    title: 'Collections',
    subItems: [
      { url: '/collections/spring-summer', title: 'Spring-Summer 2024' },
      { url: '/collections/capsule', title: 'Capsule Collection' },
      { url: '/collections/archive', title: 'Archive Pieces' }
    ]
  },
  {
    url: '/features',
    title: 'Features',
    subItems: [
      { url: '/features/lookbook', title: 'Zivuko Wallet' },
      { url: '/features/designer-collab', title: 'Designer Collab' },
      { url: '/features/virtual-showroom', title: 'Virtual Showroom' },
      { url: '/features/limited-edition', title: 'Hyperlocal Delivery & Pickup' },
      { url: '/features/lookbook', title: 'Smart Product Discovery' },
      { url: '/features/designer-collab', title: 'Flexible & Local Payment Options' },
      { url: '/features/virtual-showroom', title: 'Zivuko Buyers’s Club' },
      { url: '/features/limited-edition', title: 'Integrated Dispute Resolution' },
      { url: '/features/limited-edition', title: 'Eco & Social Responsibility' }

    ]
  },
  {
    url: '/world',
    title: 'Our World',
    subItems: [
      { url: '/about', title: 'Heritage' },
      { url: '/craftsmanship', title: 'Craftsmanship' },
      { url: '/sustainability', title: 'Sustainability' }
    ]
  },
  {
    url: '/contact',
    title: 'Services',
    subItems: [
      { url: '/private-appointments', title: 'Private Appointments' },
      { url: '/personal-shopping', title: 'Personal Shopping' },
      { url: '/client-care', title: 'Client Care' }
    ]
  }
];

const Navbar = ({ active, mobile, setOpenMobileMenu }: NavbarProps) => {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleClick = (e: React.MouseEvent, hasSubItems: boolean, index: number) => {
    if (mobile && hasSubItems) {
      e.preventDefault();
      toggleItem(index);
    } else if (mobile && setOpenMobileMenu) {
      setOpenMobileMenu(false);
    }
  };

  return (
    <nav className={`${mobile ? 'space-y-1' : 'flex items-center space-x-10'}`}>
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`
            group relative
            ${mobile ? 'border-b border-[#f0f0f0]' : ''}
          `}
        >
          {/* Main Nav Item */}
          <div className={`flex items-center ${mobile ? 'justify-between' : ''}`}>
            <Link
              href={item.url}
              onClick={(e) => handleClick(e, !!item.subItems, index)}
              className={`
                ${mobile ? 'text-[#1a1a1a] py-4 text-sm uppercase tracking-wider font-light' :
                  'relative px-2 py-3 text-[#333] font-medium text-sm uppercase tracking-wider'}
                ${active === index + 1 ? 'text-[#b8860b]' : ''}
                hover:text-[#b8860b] transition-all duration-300
                ${mobile ? 'flex-grow' : ''}
                after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#b8860b] 
                after:w-0 after:transition-all after:duration-300
                ${active === index + 1 ? 'after:w-full' : 'hover:after:w-full'}
              `}
            >
              {item.title}
            </Link>

            {/* Desktop dropdown indicator */}
            {item.subItems && !mobile && (
              <FiChevronDown className="ml-1 text-xs text-[#666] group-hover:text-[#b8860b] transition-all duration-300 transform group-hover:rotate-180" />
            )}

            {/* Mobile dropdown toggle - remains the same */}
            {item.subItems && mobile && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleItem(index);
                }}
                className="p-2 text-[#999] hover:text-[#d4af37] transition-colors"
              >
                <FiChevronRight className={`transition-transform duration-300 ${expandedItems[index] ? 'rotate-90' : ''}`} />
              </button>
            )}
          </div>

          {/* Desktop Dropdown - Enhanced */}
          {item.subItems && !mobile && (
            <div className="absolute left-1/2 top-full pt-6 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform -translate-x-1/2 translate-y-2 group-hover:translate-y-0">
              <div className="bg-white shadow-2xl rounded-md border border-[#f0f0f0] py-3 before:absolute before:-top-4 before:left-0 before:w-full before:h-4">
                {item.subItems.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    href={subItem.url}
                    className="block px-6 py-3 text-sm text-[#555] hover:text-[#b8860b] hover:bg-[#f9f9f9] transition-colors duration-200 border-b border-[#f5f5f5] last:border-0 relative
                    before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-transparent hover:before:bg-[#b8860b] before:transition-colors before:duration-300"
                  >
                    <span className="relative z-10">{subItem.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Mobile Subitems - remains the same */}
          {mobile && item.subItems && expandedItems[index] && (
            <div className="ml-4 mb-4 overflow-hidden transition-all duration-300">
              <div className="space-y-2">
                {item.subItems.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    href={subItem.url}
                    onClick={() => setOpenMobileMenu?.(false)}
                    className="block py-3 pl-6 text-xs uppercase tracking-wider text-[#888] hover:text-[#d4af37] transition-colors duration-300 relative before:absolute before:left-0 before:top-1/2 before:w-1 before:h-1 before:bg-[#d4af37] before:rounded-full before:transform before:-translate-y-1/2"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navbar;