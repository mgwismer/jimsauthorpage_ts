import type { ReactNode } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function TopNavLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sm transition-colors ${
          isActive ? 'text-ink' : 'text-ink-soft hover:text-ink'
        }`
      }
    >
      {children}
    </NavLink>
  );
}

export default function Layout() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <header className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:py-8">
          <NavLink to="/" className="ont-serif text-base sm:text-lg text-ink">
            James J. Orr
          </NavLink>
          <nav className="flex gap-4 sm:gap-6">
            <TopNavLink to="/">Books</TopNavLink>
            <TopNavLink to="/press">Press & Events</TopNavLink>
             <a
              href="#contact"
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              Get in touch
            </a>
          </nav>
        </header>

        <Outlet />

        <footer className="border-t border-line py-6 sm:py-8 text-sm text-ink-soft">
          © {new Date().getFullYear()} James J. Orr
        </footer>
      </div>
    </div>
  );
}
