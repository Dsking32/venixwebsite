import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
import Logo from '../ui/Logo';
import { cn } from '../../lib/utils';

interface DropdownItem { title: string; path: string; }
interface NavLink      { title: string; path: string; dropdown?: DropdownItem[]; }

const navLinks: NavLink[] = [
  { title: 'Home',     path: '/'        },
  { title: 'About Us', path: '/about'   },
  { title: 'Services', path: '/services'},
  {
    title: 'Platforms',
    path: '/platforms',
    dropdown: [
      { title: 'Mesaj',       path: 'https://mesaj.cloud'          },
      { title: 'Turnaj',      path: 'https://turnaj.mobi'          },
      { title: 'Billmagic',   path: 'https://billmagic.xyz'        },
      { title: 'Bingebay',    path: 'https://bingebay.tv/'         },
      { title: 'Finsight',    path: 'https://finsightngr.online/'  },
      { title: 'Venix Cloud', path: 'https://www.venix.cloud/'     },
    ],
  },
  { title: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled,       setScrolled]       = useState(false);
  const headerRef  = useRef<HTMLElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location   = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node))
        setActiveDropdown(null);
    };
    document.addEventListener('pointerdown', handler);
    return () => document.removeEventListener('pointerdown', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleMouseEnter = (path: string) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setActiveDropdown(path);
  };

  const handleMouseLeave = () => {
    hoverTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const toggleDropdown = (path: string) =>
    setActiveDropdown(prev => prev === path ? null : path);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      ref={headerRef}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-in-out',
        scrolled
          ? 'bg-blue-950/96 backdrop-blur-md shadow-xl shadow-blue-950/40 py-2'
          : 'bg-transparent py-5'
      )}
    >
      {/* Bottom border on scroll */}
      <div className={cn(
        'absolute bottom-0 inset-x-0 h-px transition-opacity duration-500',
        scrolled
          ? 'opacity-100 bg-gradient-to-r from-yellow-400/60 via-yellow-400/20 to-transparent'
          : 'opacity-0'
      )} />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* ── LOGO ── */}
        <Link to="/" aria-label="Venix home" className="relative z-10 flex shrink-0 items-center">
          <div className="scale-150 origin-left brightness-0 invert">
            <Logo size="xl" />
          </div>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
          {navLinks.map(link =>
            link.dropdown ? (
              // Hover reveals dropdown, clicking the label navigates to /platforms
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.path)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={link.path}
                  className={cn(
                    'relative flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-semibold transition-all duration-150',
                    isActive(link.path)
                      ? 'text-white font-bold'
                      : 'text-white/75 hover:bg-white/10 hover:text-white'
                  )}
                >
                  {link.title}
                  <ChevronDown className={cn(
                    'h-3.5 w-3.5 text-white/40 transition-transform duration-200',
                    activeDropdown === link.path && 'rotate-180'
                  )} />
                  {isActive(link.path) && (
                    <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white" />
                  )}
                </Link>

                {/* Dropdown panel — also keep open when hovering the panel itself */}
                <div
                  role="menu"
                  onMouseEnter={() => handleMouseEnter(link.path)}
                  onMouseLeave={handleMouseLeave}
                  className={cn(
                    'absolute left-0 top-[calc(100%+8px)] w-52 overflow-hidden rounded-2xl border border-white/10 bg-blue-950 py-1.5 shadow-2xl shadow-blue-950/60',
                    'transition-all duration-200',
                    activeDropdown === link.path
                      ? 'pointer-events-auto translate-y-0 opacity-100'
                      : 'pointer-events-none -translate-y-2 opacity-0'
                  )}
                >
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-yellow-400 to-yellow-400/0" />
                  {link.dropdown.map(item => {
                    const isExt = item.path.startsWith('http');
                    const cls = 'group flex items-center justify-between px-4 py-2.5 text-sm text-white/65 hover:bg-yellow-400/10 hover:text-yellow-400 transition-colors duration-150';
                    return isExt ? (
                      <a key={item.path} href={item.path} target="_blank" rel="noopener noreferrer" role="menuitem" className={cls}>
                        {item.title}
                        <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-60" />
                      </a>
                    ) : (
                      <Link key={item.path} to={item.path} role="menuitem" className={cls}>
                        {item.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'relative rounded-lg px-3.5 py-2 text-sm font-semibold transition-all duration-150',
                  isActive(link.path)
                    ? 'text-white font-bold'
                    : 'text-white/75 hover:bg-white/10 hover:text-white'
                )}
              >
                {link.title}
                {isActive(link.path) && (
                  <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white" />
                )}
              </Link>
            )
          )}
        </nav>

        {/* ── Desktop CTA ── */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/careers"
            className="rounded-lg border border-white/30 px-5 py-2 text-sm font-bold text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10 active:scale-[0.97]"
          >
            Careers
          </Link>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen(v => !v)}
          className="relative z-10 rounded-lg p-2 text-white/80 transition-colors hover:bg-white/10 md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <div
        id="mobile-nav"
        aria-hidden={!mobileOpen}
        className={cn(
          'fixed inset-x-0 top-0 z-40 flex flex-col bg-blue-950 transition-transform duration-300 ease-in-out md:hidden pt-[88px]',
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        style={{ height: '100dvh' }}
      >
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-yellow-400 via-yellow-300 to-transparent" />

        <nav className="flex-1 overflow-y-auto px-4 py-4">
          <ul className="space-y-0.5">
            {navLinks.map(link => (
              <li key={link.path}>
                {link.dropdown ? (
                  <>
                    {/* Mobile: link text navigates, chevron button toggles dropdown */}
                    <div className="flex items-center">
                      <Link
                        to={link.path}
                        className={cn(
                          'flex-1 rounded-xl px-4 py-3 text-base font-semibold transition-colors',
                          isActive(link.path) ? 'text-yellow-400' : 'text-white/80 hover:text-white'
                        )}
                      >
                        {link.title}
                      </Link>
                      <button
                        aria-expanded={activeDropdown === link.path}
                        onClick={() => toggleDropdown(link.path)}
                        className="rounded-xl px-3 py-3 text-white/50 transition-colors hover:bg-white/8 hover:text-yellow-400"
                      >
                        <ChevronDown className={cn(
                          'h-4 w-4 transition-transform duration-200',
                          activeDropdown === link.path && 'rotate-180'
                        )} />
                      </button>
                    </div>
                    {activeDropdown === link.path && (
                      <ul className="ml-4 mt-0.5 space-y-0.5 border-l-2 border-yellow-400/25 pl-3">
                        {link.dropdown.map(item => {
                          const isExt = item.path.startsWith('http');
                          const cls = 'flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-white/55 transition-colors hover:bg-white/8 hover:text-yellow-400';
                          return (
                            <li key={item.path}>
                              {isExt ? (
                                <a href={item.path} target="_blank" rel="noopener noreferrer" className={cls}>
                                  {item.title}
                                  <ExternalLink className="h-3 w-3 opacity-40" />
                                </a>
                              ) : (
                                <Link to={item.path} className={cls}>{item.title}</Link>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={cn(
                      'flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-colors',
                      isActive(link.path)
                        ? 'text-yellow-400'
                        : 'text-white/80 hover:bg-white/8 hover:text-white'
                    )}
                  >
                    {link.title}
                    {isActive(link.path) && (
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                    )}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="shrink-0 border-t border-white/10 p-4">
          <Link
            to="/careers"
            className="flex w-full items-center justify-center rounded-xl bg-yellow-400 py-3.5 text-sm font-bold text-blue-950 transition-colors hover:bg-yellow-300"
          >
            Careers
          </Link>
        </div>
      </div>

      {mobileOpen && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-30 bg-blue-950/50 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}