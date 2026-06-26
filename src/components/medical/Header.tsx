import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const nav = [
  { label: 'Врачи', path: '/doctors' },
  { label: 'Клиники', path: '/clinics' },
  { label: 'Диагностические центры', path: '/diagnostic-centers' },
  { label: 'Диагностика', path: '/diagnostics' },
];

const cities = [
  'Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург',
  'Казань', 'Нижний Новгород', 'Челябинск', 'Самара', 'Уфа', 'Ростов-на-Дону',
];

const Header = () => {
  const { pathname } = useLocation();
  const [city, setCity] = useState('Москва');
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16 px-4 gap-3">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00c9a6] to-[#ffad00] flex items-center justify-center">
            <Icon name="Plus" size={22} className="text-white" />
          </div>
          <span className="font-heading font-extrabold text-xl tracking-tight">МедПортал</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-muted-foreground flex-1 justify-center">
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

        <div className="flex items-center gap-2 shrink-0">
          {/* City selector */}
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <button className="hidden sm:flex items-center gap-1.5 h-10 px-3 rounded-full border border-border hover:border-[#00c9a6] hover:text-[#00c9a6] transition-colors text-sm font-medium text-muted-foreground">
                <Icon name="MapPin" size={15} className="text-[#00c9a6]" />
                {city}
                <Icon name="ChevronDown" size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
              </button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-52 p-2 rounded-2xl">
              <p className="text-xs text-muted-foreground font-medium px-2 mb-1">Выберите город</p>
              {cities.map((c) => (
                <button
                  key={c}
                  onClick={() => { setCity(c); setOpen(false); }}
                  className={`w-full text-left px-3 py-2 rounded-xl text-sm transition-colors ${
                    city === c
                      ? 'bg-[#00c9a6] text-white font-semibold'
                      : 'hover:bg-muted/60'
                  }`}
                >
                  {c}
                </button>
              ))}
            </PopoverContent>
          </Popover>

          <Button className="bg-[#00c9a6] hover:bg-[#00a88c] text-white rounded-full font-semibold">
            <Icon name="Phone" size={16} className="mr-1" /> Связаться
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
