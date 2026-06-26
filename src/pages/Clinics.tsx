import Header from '@/components/medical/Header';
import SearchBar from '@/components/medical/SearchBar';
import FilterButton from '@/components/medical/FilterButton';
import Crumbs from '@/components/medical/Crumbs';
import ClinicCard from '@/components/medical/ClinicCard';
import PageBanner from '@/components/medical/PageBanner';
import Footer from '@/components/medical/Footer';
import { clinics, clinicFilterGroups } from '@/data/medical';

const Clinics = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />

      <PageBanner
        icon="Building2"
        title="Медицинские клиники"
        subtitle="Найдите проверенную клинику рядом с домом или работой"
        stats={[
          { value: '1 940', label: 'клиник' },
          { value: '4.8', label: 'средний рейтинг' },
          { value: '24/7', label: 'часть работает' },
        ]}
        color="gold"
      />

      <div className="bg-white border-b border-border">
        <div className="container px-4 py-5">
          <SearchBar placeholder="Введите название клиники или район..." />
        </div>
      </div>

      <div className="container px-4 py-8">
        <Crumbs items={[{ label: 'Клиники' }]} />

        <h1 className="font-heading font-extrabold text-3xl md:text-4xl mt-4 mb-3">
          Медицинские клиники Москвы
        </h1>
        <p className="text-muted-foreground max-w-2xl mb-6 leading-relaxed">
          Подберите многопрофильную клинику рядом с домом или работой. Для каждой клиники доступны
          рейтинг, отзывы пациентов, перечень услуг и режим работы. Многие центры принимают
          круглосуточно и расположены в шаговой доступности от метро. Записаться на приём можно
          онлайн в любое время.
        </p>

        <div className="flex items-center justify-between mb-6">
          <span className="text-muted-foreground text-sm">Найдено {clinics.length} клиник</span>
          <FilterButton groups={clinicFilterGroups} />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {clinics.map((c) => (
            <ClinicCard key={c.id} clinic={c} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Clinics;