import Header from '@/components/medical/Header';
import SearchBar from '@/components/medical/SearchBar';
import SpecialtiesStrip from '@/components/medical/SpecialtiesStrip';
import FilterButton from '@/components/medical/FilterButton';
import Crumbs from '@/components/medical/Crumbs';
import ClinicCard from '@/components/medical/ClinicCard';
import { clinics, clinicFilterGroups } from '@/data/medical';

const Clinics = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <div className="bg-white border-b border-border">
        <div className="container px-4 py-6 space-y-5">
          <SearchBar placeholder="Введите название клиники или район..." />
          <SpecialtiesStrip />
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
    </div>
  );
};

export default Clinics;
