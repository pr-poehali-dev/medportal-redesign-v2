import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

interface Props {
  items: { label: string; path?: string }[];
}

const Crumbs = ({ items }: Props) => {
  return (
    <nav className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
      <Link to="/" className="hover:text-[#00c9a6] transition-colors">
        Главная
      </Link>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-2">
          <Icon name="ChevronRight" size={14} />
          {item.path ? (
            <Link to={item.path} className="hover:text-[#00c9a6] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Crumbs;
