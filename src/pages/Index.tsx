import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/medical/Header';
import Footer from '@/components/medical/Footer';
import { specialties } from '@/data/medical';

const stats = [
  { value: '128 450', label: 'пациентов записано', icon: 'CalendarCheck', color: 'from-[#00c9a6] to-[#00a88c]', bg: 'bg-[#e6faf6]', text: 'text-[#00a88c]' },
  { value: '36 200', label: 'отзывов о врачах', icon: 'MessageSquare', color: 'from-[#ffad00] to-[#ff9100]', bg: 'bg-[#fff5e0]', text: 'text-[#cc8a00]' },
  { value: '12 800', label: 'врачей в базе', icon: 'Stethoscope', color: 'from-[#00c9a6] to-[#00a88c]', bg: 'bg-[#e6faf6]', text: 'text-[#00a88c]' },
  { value: '1 940', label: 'клиник в базе', icon: 'Building2', color: 'from-[#ffad00] to-[#ff9100]', bg: 'bg-[#fff5e0]', text: 'text-[#cc8a00]' },
];

const quickActions = [
  { title: 'Записаться к врачу', desc: 'Приём у 12 800 специалистов по 50+ специальностям', icon: 'UserPlus', tag: 'Онлайн 24/7', color: 'from-[#00c9a6] to-[#00a88c]', light: 'bg-[#e6faf6]', path: '/doctors' },
  { title: 'Выбрать клинику', desc: 'Рейтинги, отзывы и контакты 1940 клиник', icon: 'Building2', tag: '1940 клиник', color: 'from-[#ffad00] to-[#ff9100]', light: 'bg-[#fff5e0]', path: '/clinics' },
  { title: 'Диагностика', desc: 'МРТ, КТ, УЗИ и анализы в лучших центрах', icon: 'ScanLine', tag: 'Без очередей', color: 'from-[#00c9a6] to-[#00a88c]', light: 'bg-[#e6faf6]', path: '/diagnostic-centers' },
  { title: 'Медицинские услуги', desc: 'Полный каталог процедур и услуг для всей семьи', icon: 'HeartPulse', tag: '320+ услуг', color: 'from-[#ffad00] to-[#ff9100]', light: 'bg-[#fff5e0]', path: '/diagnostics' },
];

const reviews = [
  { name: 'Анна М.', doctor: 'Кардиолог Смирнов И.П.', text: 'Внимательный врач, подробно всё объяснил и назначил эффективное лечение. Рекомендую!', rating: 5 },
  { name: 'Дмитрий К.', doctor: 'Невролог Петрова Е.С.', text: 'Профессионал своего дела. Помогла справиться с давней проблемой за пару приёмов.', rating: 5 },
  { name: 'Ольга В.', doctor: 'Терапевт Иванова А.Н.', text: 'Очень довольна приёмом. Доброжелательное отношение и грамотный подход.', rating: 5 },
];

const diagnostics = [
  { name: 'МРТ', desc: 'Магнитно-резонансная томография', icon: 'ScanLine' },
  { name: 'КТ', desc: 'Компьютерная томография', icon: 'Scan' },
  { name: 'УЗИ', desc: 'Ультразвуковое исследование', icon: 'Waves' },
  { name: 'Анализы', desc: 'Лабораторная диагностика', icon: 'TestTube' },
  { name: 'Рентген', desc: 'Рентгенография', icon: 'Bone' },
  { name: 'ЭКГ', desc: 'Электрокардиография', icon: 'Activity' },
];

const services = [
  'Вызов врача на дом', 'Вакцинация', 'Справки и медкнижки', 'Программы чек-ап',
  'Массаж и физиотерапия', 'Косметология', 'Стоматология', 'Реабилитация',
];

const Index = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00c9a6] via-[#00b898] to-[#009e84]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#ffad00]/20 translate-y-1/2 -translate-x-1/4 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2" />
        <div className="container relative px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium text-white mb-6">
              <Icon name="ShieldCheck" size={16} /> Проверенные врачи и клиники
            </span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-5 text-white">
              Запись к врачу <br className="hidden md:block" />
              <span className="text-[#ffad00]">за пару кликов</span>
            </h1>
            <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
              Найдите лучшего специалиста, выберите удобную клинику и запишитесь на приём онлайн в любое время.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Врач, специальность, услуга или клиника..."
                  className="h-14 pl-12 pr-4 rounded-2xl border-0 bg-white text-base shadow-xl focus-visible:ring-[#ffad00]"
                />
              </div>
              <Button className="h-14 px-8 rounded-2xl bg-[#ffad00] hover:bg-[#ff9100] text-white font-bold text-base shadow-xl">
                Найти
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-3xl p-6 shadow-xl border border-border hover-scale overflow-hidden relative">
              <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${s.color} opacity-10`} />
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4`}>
                <Icon name={s.icon} size={22} className="text-white" />
              </div>
              <div className={`font-heading font-extrabold text-3xl md:text-4xl mb-1 ${s.text}`}>{s.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick actions */}
      <section className="container px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-2">Чем мы можем помочь?</h2>
          <p className="text-muted-foreground">Выберите нужный раздел и начните прямо сейчас</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {quickActions.map((a) => (
            <Link to={a.path} key={a.title} className="group relative text-left bg-white rounded-3xl p-6 shadow-md border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${a.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
              <div className={`absolute -top-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-br ${a.color} opacity-5`} />
              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${a.color} flex items-center justify-center shadow-lg`}>
                    <Icon name={a.icon} size={26} className="text-white" />
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${a.light} text-[#00a88c]`}>{a.tag}</span>
                </div>
                <h3 className="font-heading font-extrabold text-xl mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{a.desc}</p>
                <div className={`flex items-center gap-2 text-sm font-bold bg-gradient-to-r ${a.color} bg-clip-text text-transparent`}>
                  Перейти <Icon name="ArrowRight" size={16} className="text-[#00c9a6] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Specialties */}
      <section className="container px-4 py-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-2">Специальности врачей</h2>
            <p className="text-muted-foreground">Выберите нужного специалиста</p>
          </div>
          <Link to="/doctors" className="hidden md:flex items-center gap-1 text-[#00c9a6] font-semibold hover:gap-2 transition-all">
            Все специальности <Icon name="ArrowRight" size={18} />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {specialties.map((sp) => (
            <Link to="/doctors" key={sp.name} className="flex flex-col items-center gap-3 bg-white rounded-2xl p-5 border border-border hover:border-[#00c9a6] hover:shadow-lg transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-[#e6faf6] flex items-center justify-center group-hover:bg-[#00c9a6] transition-colors">
                <Icon name={sp.icon} size={26} className="text-[#00c9a6] group-hover:text-white transition-colors" />
              </div>
              <span className="font-medium text-sm text-center">{sp.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-gradient-to-br from-[#e6faf6] to-[#fff5e0] py-16 mt-12">
        <div className="container px-4">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-2 text-center">Отзывы пациентов</h2>
          <p className="text-muted-foreground text-center mb-10">Что говорят о наших врачах</p>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-3xl p-6 shadow-md">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="text-[#ffad00] fill-[#ffad00]" />
                  ))}
                </div>
                <p className="text-foreground mb-5 leading-relaxed">«{r.text}»</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#00c9a6] to-[#ffad00] flex items-center justify-center text-white font-bold">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-sm text-muted-foreground">{r.doctor}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostics */}
      <section className="container px-4 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-2">Обследования и диагностика</h2>
            <p className="text-muted-foreground">Современное оборудование в проверенных центрах</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {diagnostics.map((d) => (
            <Link to="/diagnostics" key={d.name} className="bg-white rounded-2xl p-5 border border-border hover:shadow-lg hover:border-[#ffad00] transition-all text-left group">
              <div className="w-12 h-12 rounded-xl bg-[#fff5e0] flex items-center justify-center mb-3 group-hover:bg-[#ffad00] transition-colors">
                <Icon name={d.icon} size={24} className="text-[#ffad00] group-hover:text-white transition-colors" />
              </div>
              <div className="font-heading font-bold text-lg">{d.name}</div>
              <div className="text-xs text-muted-foreground">{d.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="container px-4 pb-16">
        <div className="bg-gradient-to-br from-[#00c9a6] to-[#00a88c] rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full bg-[#ffad00]/20 blur-2xl" />
          <div className="relative">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-2">Медицинские услуги</h2>
            <p className="text-white/80 mb-8 max-w-lg">Полный спектр медицинской помощи для всей семьи</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {services.map((s) => (
                <div key={s} className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3 hover:bg-white/25 transition-colors cursor-pointer">
                  <Icon name="Check" size={18} className="text-[#ffad00] shrink-0" />
                  <span className="font-medium text-sm">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;