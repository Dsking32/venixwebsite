import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { setupScrollAnimations } from '../../lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const mainRef  = useRef<HTMLElement>(null);

  // Re-run scroll animations on every route change
  useEffect(() => {
    setupScrollAnimations();
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main
        ref={mainRef}
        id="main-content"
        className="flex-grow"
        tabIndex={-1}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}