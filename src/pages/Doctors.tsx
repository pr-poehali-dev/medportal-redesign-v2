import Header from '@/components/medical/Header';
import SearchBar from '@/components/medical/SearchBar';
import FilterButton from '@/components/medical/FilterButton';
import Crumbs from '@/components/medical/Crumbs';
import DoctorCard from '@/components/medical/DoctorCard';
import PageBanner from '@/components/medical/PageBanner';
import Footer from '@/components/medical/Footer';
import Icon from '@/components/ui/icon';
import { doctors, reviews14, filterGroups } from '@/data/medical';

const Doctors = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />

      <PageBanner
        icon="Stethoscope"
        title="Врачи в Москве"
        subtitle="Онлайн-запись к специалисту за 1 минуту"
        stats={[
          { value: '12 800', label: 'врачей' },
          { value: '36 200', label: 'отзывов' },
          { value: '50+', label: 'специальностей' },
        ]}
        color="mint"
      />

      <div className="bg-white border-b border-border">
        <div className="container px-4 py-5">
          <SearchBar placeholder="Введите имя врача или специальность..." />
        </div>
      </div>

      <div className="container px-4 py-8">
        <Crumbs items={[{ label: 'Врачи' }]} />

        <h1 className="font-heading font-extrabold text-3xl md:text-4xl mt-4 mb-3">
          Врачи в Москве
        </h1>
        <p className="text-muted-foreground max-w-2xl mb-6 leading-relaxed">
          На портале собраны проверенные специалисты с подтверждённой квалификацией и реальными
          отзывами пациентов. Вы можете сравнить врачей по стажу, категории и стоимости приёма,
          а затем записаться онлайн в удобную клинику. Запись занимает меньше минуты —
          выберите дату и свободный слот прямо в карточке специалиста.
        </p>

        <div className="flex items-center justify-between mb-6">
          <span className="text-muted-foreground text-sm">Найдено {doctors.length} врачей</span>
          <FilterButton groups={filterGroups} />
        </div>

        <div className="space-y-5">
          {doctors.map((d) => (
            <DoctorCard key={d.id} doctor={d} />
          ))}
        </div>

        {/* Last reviews */}
        <section className="mt-16">
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl mb-6">Последние отзывы</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {reviews14.map((r) => (
              <div key={r.id} className="bg-white rounded-2xl p-5 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Icon key={i} name="Star" size={14} className="text-[#ffad00] fill-[#ffad00]" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{r.date}</span>
                </div>
                <p className="text-sm text-foreground/80 mb-3 leading-relaxed">«{r.text}»</p>
                <div className="text-xs">
                  <span className="font-semibold">{r.name}</span>
                  <span className="text-muted-foreground"> · {r.doctor}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Doctors;