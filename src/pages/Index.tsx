import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const stats = [
  { value: '128 450', label: 'пациентов записано', icon: 'CalendarCheck' },
  { value: '36 200', label: 'отзывов о врачах', icon: 'MessageSquare' },
  { value: '12 800', label: 'врачей в базе', icon: 'Stethoscope' },
  { value: '1 940', label: 'клиник в базе', icon: 'Building2' },
];

const quickActions = [
  { title: 'Записаться к врачу', desc: 'Приём по 50+ специальностям', icon: 'UserPlus', color: 'from-[#00c9a6] to-[#00a88c]' },
  { title: 'Выбрать клинику', desc: 'Рейтинги и отзывы пациентов', icon: 'Building2', color: 'from-[#ffad00] to-[#ff9100]' },
  { title: 'Записаться на диагностику', desc: 'МРТ, КТ, УЗИ, анализы', icon: 'Activity', color: 'from-[#00c9a6] to-[#00a88c]' },
  { title: 'Медицинские услуги', desc: 'Полный каталог процедур', icon: 'HeartPulse', color: 'from-[#ffad00] to-[#ff9100]' },
];

const specialties = [
  { name: 'Терапевт', icon: 'Stethoscope' },
  { name: 'Кардиолог', icon: 'HeartPulse' },
  { name: 'Невролог', icon: 'Brain' },
  { name: 'Офтальмолог', icon: 'Eye' },
  { name: 'Стоматолог', icon: 'Smile' },
  { name: 'Гинеколог', icon: 'Venus' },
  { name: 'Уролог', icon: 'Mars' },
  { name: 'Дерматолог', icon: 'Hand' },
  { name: 'Эндокринолог', icon: 'Pill' },
  { name: 'Хирург', icon: 'Scissors' },
  { name: 'Лор', icon: 'Ear' },
  { name: 'Педиатр', icon: 'Baby' },
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
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
        <div className="container flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00c9a6] to-[#ffad00] flex items-center justify-center">
              <Icon name="Plus" size={22} className="text-white" />
            </div>
            <span className="font-heading font-extrabold text-xl tracking-tight">МедПортал</span>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-[#00c9a6] transition-colors">Врачи</a>
            <a href="#" className="hover:text-[#00c9a6] transition-colors">Клиники</a>
            <a href="#" className="hover:text-[#00c9a6] transition-colors">Диагностика</a>
            <a href="#" className="hover:text-[#00c9a6] transition-colors">Услуги</a>
          </nav>
          <Button className="bg-[#00c9a6] hover:bg-[#00a88c] text-white rounded-full font-semibold">
            <Icon name="Phone" size={16} className="mr-1" /> Связаться
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e6faf6] via-white to-[#fff5e0]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#00c9a6]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#ffad00]/10 blur-3xl" />
        <div className="container relative px-4 py-12 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm text-sm font-medium text-[#00a88c] mb-5">
              <Icon name="ShieldCheck" size={16} /> Проверенные врачи и клиники
            </span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-5">
              Запись к врачу <span className="text-gradient">за пару кликов</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Найдите лучшего специалиста, выберите удобную клинику и запишитесь на приём онлайн в любое время.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
              <div className="relative flex-1">
                <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Врач, специальность, услуга или клиника..."
                  className="h-14 pl-12 pr-4 rounded-2xl border-2 bg-white text-base shadow-sm focus-visible:ring-[#00c9a6]"
                />
              </div>
              <Button className="h-14 px-8 rounded-2xl bg-[#ffad00] hover:bg-[#ff9100] text-white font-bold text-base shadow-lg">
                Найти
              </Button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00c9a6] to-[#ffad00] rounded-[2.5rem] rotate-3 opacity-20" />
            <img
              src="https://cdn.poehali.dev/projects/a0d2824d-f773-4228-be97-e4cd923790fe/files/6fec45c1-e7af-4f08-a274-634d6446b8c3.jpg"
              alt="Медицинская помощь"
              className="relative rounded-[2.5rem] shadow-2xl w-full object-cover aspect-square"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container px-4 -mt-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-5 shadow-lg border border-border hover-scale">
              <div className="w-11 h-11 rounded-xl bg-[#e6faf6] flex items-center justify-center mb-3">
                <Icon name={s.icon} size={22} className="text-[#00c9a6]" />
              </div>
              <div className="font-heading font-extrabold text-2xl md:text-3xl">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick actions */}
      <section className="container px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {quickActions.map((a) => (
            <button key={a.title} className="group text-left bg-white rounded-3xl p-6 shadow-md border border-border hover:shadow-xl transition-all hover:-translate-y-1">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${a.color} flex items-center justify-center mb-4`}>
                <Icon name={a.icon} size={26} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-1">{a.title}</h3>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-[#00c9a6] opacity-0 group-hover:opacity-100 transition-opacity">
                Перейти <Icon name="ArrowRight" size={16} />
              </div>
            </button>
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
          <a href="#" className="hidden md:flex items-center gap-1 text-[#00c9a6] font-semibold hover:gap-2 transition-all">
            Все специальности <Icon name="ArrowRight" size={18} />
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {specialties.map((sp) => (
            <button key={sp.name} className="flex flex-col items-center gap-3 bg-white rounded-2xl p-5 border border-border hover:border-[#00c9a6] hover:shadow-lg transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-[#e6faf6] flex items-center justify-center group-hover:bg-[#00c9a6] transition-colors">
                <Icon name={sp.icon} size={26} className="text-[#00c9a6] group-hover:text-white transition-colors" />
              </div>
              <span className="font-medium text-sm text-center">{sp.name}</span>
            </button>
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
            <button key={d.name} className="bg-white rounded-2xl p-5 border border-border hover:shadow-lg hover:border-[#ffad00] transition-all text-left group">
              <div className="w-12 h-12 rounded-xl bg-[#fff5e0] flex items-center justify-center mb-3 group-hover:bg-[#ffad00] transition-colors">
                <Icon name={d.icon} size={24} className="text-[#ffad00] group-hover:text-white transition-colors" />
              </div>
              <div className="font-heading font-bold text-lg">{d.name}</div>
              <div className="text-xs text-muted-foreground">{d.desc}</div>
            </button>
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

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="container px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00c9a6] to-[#ffad00] flex items-center justify-center">
              <Icon name="Plus" size={18} className="text-white" />
            </div>
            <span className="font-heading font-bold">МедПортал</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 МедПортал. Все права защищены.</p>
          <div className="flex gap-3">
            {['Phone', 'Mail', 'MapPin'].map((ic) => (
              <div key={ic} className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-[#00c9a6] hover:text-white transition-colors cursor-pointer">
                <Icon name={ic} size={16} />
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
