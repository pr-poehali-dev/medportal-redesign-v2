import { useState } from 'react';
import Header from '@/components/medical/Header';
import Footer from '@/components/medical/Footer';
import Crumbs from '@/components/medical/Crumbs';
import PageBanner from '@/components/medical/PageBanner';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { medicalServiceCategories } from '@/data/medical';

const fmt = (n: number) => n.toLocaleString('ru-RU');
const discount = (old: number, cur: number) => Math.round((1 - cur / old) * 100);

const Services = () => {
  const [active, setActive] = useState<string>(medicalServiceCategories[0].category);

  const activeCategory = medicalServiceCategories.find((c) => c.category === active)!;

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />

      <PageBanner
        icon="HeartPulse"
        title="Медицинские услуги"
        subtitle="Полный каталог процедур и услуг для всей семьи"
        stats={[
          { value: '320+', label: 'услуг' },
          { value: '8', label: 'направлений' },
          { value: '4.9', label: 'оценка сервиса' },
        ]}
        color="gold"
      />

      <div className="container px-4 py-8">
        <Crumbs items={[{ label: 'Медицинские услуги' }]} />

        <h1 className="font-heading font-extrabold text-3xl md:text-4xl mt-4 mb-3">
          Медицинские услуги
        </h1>
        <p className="text-muted-foreground max-w-2xl mb-8 leading-relaxed">
          Выберите направление и посмотрите актуальные цены на услуги. Записаться можно онлайн —
          выезд на дом, приём в клинике или консультация специалиста доступны в любое удобное время.
        </p>

        <div className="grid lg:grid-cols-[280px_1fr] gap-6">
          {/* Category list */}
          <div className="space-y-2">
            {medicalServiceCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActive(cat.category)}
                className={`w-full flex items-center gap-3 p-4 rounded-2xl border text-left transition-all ${
                  active === cat.category
                    ? 'bg-white border-[#00c9a6] shadow-md'
                    : 'bg-white/60 border-border hover:border-[#00c9a6]/50'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center shrink-0`}>
                  <Icon name={cat.icon} size={20} className="text-white" />
                </div>
                <span className="font-semibold text-sm">{cat.category}</span>
              </button>
            ))}
          </div>

          {/* Services list */}
          <div className="bg-white rounded-3xl border border-border shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6 pb-5 border-b border-border">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${activeCategory.color} flex items-center justify-center shrink-0`}>
                <Icon name={activeCategory.icon} size={24} className="text-white" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-xl">{activeCategory.category}</h2>
                <p className="text-sm text-muted-foreground">{activeCategory.services.length} услуги в этом разделе</p>
              </div>
            </div>

            <div className="space-y-3">
              {activeCategory.services.map((s) => (
                <div
                  key={s.name}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border"
                >
                  <div>
                    <div className="font-semibold mb-1">{s.name}</div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Icon name="Clock" size={13} /> {s.duration}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-end gap-2">
                      <span className="font-heading font-extrabold text-lg text-[#00a88c]">{fmt(s.price)} ₽</span>
                      {s.oldPrice && (
                        <>
                          <span className="text-sm text-muted-foreground line-through">{fmt(s.oldPrice)} ₽</span>
                          <span className="text-xs font-bold text-white bg-[#ff4d4d] rounded-full px-2 py-0.5">
                            −{discount(s.oldPrice, s.price)}%
                          </span>
                        </>
                      )}
                    </div>
                    <Button className="rounded-xl bg-[#00c9a6] hover:bg-[#00a88c] text-white font-semibold shrink-0">
                      Записаться
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
