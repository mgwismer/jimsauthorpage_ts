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
      <div className="mx-auto max-w-4xl px-6">
        <header className="flex items-center justify-between py-8">
          <NavLink to="/" className="font-serif text-lg text-ink">
            James J. Orr
          </NavLink>
          <nav className="flex gap-6">
            <TopNavLink to="/">Books</TopNavLink>
            <TopNavLink to="/press">Press & Events</TopNavLink>
          </nav>
        </header>

        <Outlet />

        <footer className="border-t border-line py-8 text-sm text-ink-soft">
          © {new Date().getFullYear()} James J. Orr
        </footer>
      </div>
    </div>
  );
}
