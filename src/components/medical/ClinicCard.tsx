import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Clinic } from '@/data/medical';

const ClinicCard = ({ clinic }: { clinic: Clinic }) => {
  return (
    <div className="bg-white rounded-3xl border border-border shadow-sm p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00c9a6] to-[#00a88c] flex items-center justify-center shrink-0">
            <Icon name="Building2" size={26} className="text-white" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg">{clinic.name}</h3>
            <div className="flex items-center gap-1.5 text-sm">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={14}
                    className={i < clinic.rating ? 'text-[#ffad00] fill-[#ffad00]' : 'text-muted'}
                  />
                ))}
              </div>
              <span className="text-muted-foreground">{clinic.reviews} отзывов</span>
            </div>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full bg-[#fff5e0] text-[#cc8a00] text-xs font-semibold whitespace-nowrap">
          {clinic.services} услуг
        </span>
      </div>

      <div className="space-y-2 text-sm text-muted-foreground mb-5">
        <div className="flex items-center gap-2">
          <Icon name="MapPin" size={16} className="text-[#00c9a6]" /> {clinic.address}
        </div>
        <div className="flex flex-wrap gap-2">
          {clinic.metro.map((m) => (
            <span key={m} className="flex items-center gap-1">
              <Icon name="Train" size={14} className="text-[#ffad00]" /> {m}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Icon name="Clock" size={16} className="text-[#00c9a6]" /> {clinic.hours}
        </div>
        <div className="flex items-center gap-2">
          <Icon name="Phone" size={16} className="text-[#00c9a6]" /> {clinic.phone}
        </div>
      </div>

      <div className="flex gap-3">
        <Button className="flex-1 rounded-xl bg-[#00c9a6] hover:bg-[#00a88c] text-white font-semibold">
          Записаться
        </Button>
        <Button variant="outline" className="rounded-xl border-2 hover:border-[#00c9a6] hover:text-[#00c9a6]">
          Подробнее
        </Button>
      </div>
    </div>
  );
};

export default ClinicCard;
