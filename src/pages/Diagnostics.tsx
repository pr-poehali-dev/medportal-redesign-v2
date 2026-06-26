import Header from '@/components/medical/Header';
import Crumbs from '@/components/medical/Crumbs';
import PageBanner from '@/components/medical/PageBanner';
import Footer from '@/components/medical/Footer';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { diagnosticCategories } from '@/data/medical';

const Diagnostics = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />

      <PageBanner
        icon="Activity"
        title="Диагностика и обследования"
        subtitle="Полный каталог исследований — запись онлайн без очереди"
        stats={[
          { value: '3 000+', label: 'видов исследований' },
          { value: '850+', label: 'центров' },
          { value: '24 ч', label: 'выдача результатов' },
        ]}
        color="gold"
      />

      <div className="container px-4 py-8">
        <Crumbs items={[{ label: 'Диагностика' }]} />

        <h1 className="font-heading font-extrabold text-3xl md:text-4xl mt-4 mb-3">
          Диагностика и обследования
        </h1>
        <p className="text-muted-foreground max-w-2xl mb-8 leading-relaxed">
          Полный каталог диагностических услуг — от ультразвуковых исследований до лабораторных
          анализов. Услуги сгруппированы по направлениям, чтобы вам было проще найти нужное
          обследование. Выберите услугу и запишитесь в удобный диагностический центр. Все
          исследования проводятся на современном оборудовании опытными специалистами.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {diagnosticCategories.map((cat) => (
            <div key={cat.category} className="bg-white rounded-3xl border border-border shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00c9a6] to-[#00a88c] flex items-center justify-center shrink-0">
                  <Icon name={cat.icon} size={24} className="text-white" />
                </div>
                <h2 className="font-heading font-bold text-lg">{cat.category}</h2>
              </div>
              <ul className="space-y-1">
                {cat.services.map((s) => (
                  <li key={s}>
                    <button className="w-full flex items-center justify-between group py-2 px-3 rounded-xl hover:bg-muted/60 transition-colors text-left">
                      <span className="flex items-center gap-2 text-sm">
                        <Icon name="Dot" size={20} className="text-[#ffad00]" />
                        <span className="capitalize">{s}</span>
                      </span>
                      <Icon
                        name="ArrowRight"
                        size={16}
                        className="text-[#00c9a6] opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </button>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="w-full mt-4 rounded-xl border-2 hover:border-[#00c9a6] hover:text-[#00c9a6] font-semibold"
              >
                Записаться на {cat.category.split(' ')[0]}
              </Button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Diagnostics;