import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-border bg-white">
      <div className="container px-4 py-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00c9a6] to-[#ffad00] flex items-center justify-center">
                <Icon name="Plus" size={18} className="text-white" />
              </div>
              <span className="font-heading font-bold text-lg">МедПортал</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Онлайн-сервис записи к врачу. Проверенные специалисты, клиники и диагностические центры.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div>
              <p className="font-semibold mb-3">Разделы</p>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/doctors" className="hover:text-[#00c9a6] transition-colors">Врачи</Link></li>
                <li><Link to="/clinics" className="hover:text-[#00c9a6] transition-colors">Клиники</Link></li>
                <li><Link to="/diagnostic-centers" className="hover:text-[#00c9a6] transition-colors">Диагностика</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-3">Пациентам</p>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-[#00c9a6] transition-colors">Как записаться</a></li>
                <li><a href="#" className="hover:text-[#00c9a6] transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-[#00c9a6] transition-colors">Помощь</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-3">Контакты</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2"><Icon name="Phone" size={14} className="text-[#00c9a6]" /> 8 800 000-00-00</li>
                <li className="flex items-center gap-2"><Icon name="Mail" size={14} className="text-[#00c9a6]" /> info@medportal.ru</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl border-2 border-muted-foreground/40 shrink-0">
            <span className="font-heading font-extrabold text-sm text-muted-foreground">18+</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
            Информация, представленная на сайте, не может быть использована для постановки диагноза, назначения лечения и не заменяет приём врача. Перед применением любых рекомендаций проконсультируйтесь со специалистом.
          </p>
        </div>

        <div className="mt-5 text-xs text-muted-foreground">
          © 2026 МедПортал. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
