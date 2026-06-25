import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const nav = [
  { label: 'Врачи', path: '/doctors' },
  { label: 'Клиники', path: '/clinics' },
  { label: 'Диагностические центры', path: '/diagnostic-centers' },
  { label: 'Диагностика', path: '/diagnostics' },
];

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00c9a6] to-[#ffad00] flex items-center justify-center">
            <Icon name="Plus" size={22} className="text-white" />
          </div>
          <span className="font-heading font-extrabold text-xl tracking-tight">МедПортал</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          {nav.map((n) => (
            <Link
              key={n.path}
              to={n.path}
              className={`hover:text-[#00c9a6] transition-colors ${pathname === n.path ? 'text-[#00c9a6]' : ''}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Button className="bg-[#00c9a6] hover:bg-[#00a88c] text-white rounded-full font-semibold">
          <Icon name="Phone" size={16} className="mr-1" /> Связаться
        </Button>
      </div>
    </header>
  );
};

export default Header;
