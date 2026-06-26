import Header from '@/components/medical/Header';
import SearchBar from '@/components/medical/SearchBar';
import FilterButton from '@/components/medical/FilterButton';
import Crumbs from '@/components/medical/Crumbs';
import ClinicCard from '@/components/medical/ClinicCard';
import PageBanner from '@/components/medical/PageBanner';
import Footer from '@/components/medical/Footer';
import { diagCenters, clinicFilterGroups } from '@/data/medical';

const DiagnosticCenters = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />

      <PageBanner
        icon="ScanLine"
        title="Диагностические центры"
        subtitle="МРТ, КТ, УЗИ и лаборатория — без очередей"
        stats={[
          { value: '850+', label: 'центров' },
          { value: '3 000+', label: 'видов исследований' },
          { value: '24 ч', label: 'выдача результатов' },
        ]}
        color="mint"
      />

      <div className="bg-white border-b border-border">
        <div className="container px-4 py-5">
          <SearchBar placeholder="Введите вид исследования или центр..." />
        </div>
      </div>

      <div className="container px-4 py-8">
        <Crumbs items={[{ label: 'Диагностические центры' }]} />

        <h1 className="font-heading font-extrabold text-3xl md:text-4xl mt-4 mb-3">
          Диагностические центры
        </h1>
        <p className="text-muted-foreground max-w-2xl mb-6 leading-relaxed">
          Современные центры лучевой и лабораторной диагностики с экспертным оборудованием.
          Здесь можно пройти МРТ, КТ, УЗИ и сдать анализы без очередей. Результаты исследований
          выдаются в электронном виде, а расшифровку проводят опытные специалисты. Выберите
          ближайший центр и запишитесь на удобное время.
        </p>

        <div className="flex items-center justify-between mb-6">
          <span className="text-muted-foreground text-sm">Найдено {diagCenters.length} центров</span>
          <FilterButton groups={clinicFilterGroups} />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {diagCenters.map((c) => (
            <ClinicCard key={c.id} clinic={c} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DiagnosticCenters;