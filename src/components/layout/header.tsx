import { useEffect, useState } from 'react';
import { profile } from '../../data/profile';
import { Container } from '../ui';

const navItems = [
  { label: '首页', href: '#home' },
  { label: '关于我', href: '#about' },
  { label: '项目展示', href: '#projects' },
  { label: '联系方式', href: '#contact' },
];

export function Header() {
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const updateActive = () => {
      setActive(window.location.hash || '#home');
    };

    updateActive();
    window.addEventListener('hashchange', updateActive);

    return () => window.removeEventListener('hashchange', updateActive);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <Container className="flex flex-wrap items-center justify-between gap-3 py-3 md:h-14 md:flex-nowrap md:py-0">
        <a href="#home" className="text-sm font-black tracking-tight text-slate-950 sm:text-base">
          {profile.name}
        </a>

        <nav
          aria-label="主导航"
          className="order-last flex w-full items-center gap-1 overflow-x-auto md:order-none md:w-auto md:overflow-visible"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-active={active === item.href}
              className="nav-stroke relative shrink-0 px-3 py-2 text-sm font-semibold text-slate-600 transition hover:text-blue-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden border border-blue-600 bg-white px-4 py-2 text-sm font-bold text-blue-700 transition hover:bg-blue-50 sm:block"
        >
          联系我
        </a>
      </Container>
    </header>
  );
}
