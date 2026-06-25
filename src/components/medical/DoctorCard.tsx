import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Doctor, clinicSlots, dates, timeSlots, metroByClinic } from '@/data/medical';

const DoctorCard = ({ doctor }: { doctor: Doctor }) => {
  const [clinic, setClinic] = useState(clinicSlots[0]);
  const [date, setDate] = useState(dates[0]);
  const [slot, setSlot] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
      <div className="grid lg:grid-cols-[auto_1fr_320px] gap-6 p-6">
        {/* Photo + rating */}
        <div className="flex lg:flex-col items-center gap-3">
          <img
            src={doctor.photo}
            alt={doctor.name}
            className="w-24 h-24 lg:w-32 lg:h-32 rounded-2xl object-cover shrink-0"
          />
          <div className="text-center">
            <div className="flex gap-0.5 justify-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={16}
                  className={i < doctor.rating ? 'text-[#ffad00] fill-[#ffad00]' : 'text-muted'}
                />
              ))}
            </div>
            <div className="text-xs text-muted-foreground mt-1">{doctor.reviews} отзывов</div>
          </div>
        </div>

        {/* Info */}
        <div>
          <div className="flex flex-wrap gap-2 mb-2">
            {doctor.specialty.map((s) => (
              <span key={s} className="px-3 py-1 rounded-full bg-[#e6faf6] text-[#00a88c] text-xs font-semibold">
                {s}
              </span>
            ))}
          </div>
          <h3 className="font-heading font-bold text-xl mb-2">{doctor.name}</h3>
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground mb-3">
            <span className="flex items-center gap-1.5">
              <Icon name="Briefcase" size={15} className="text-[#00c9a6]" /> Стаж {doctor.experience}
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="Award" size={15} className="text-[#00c9a6]" /> {doctor.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="Phone" size={15} className="text-[#00c9a6]" /> {doctor.phone}
            </span>
          </div>
          <p className="text-sm text-foreground/80 leading-relaxed mb-3">{doctor.about}</p>
          <div className="font-heading font-extrabold text-2xl text-[#00a88c]">
            {doctor.price.toLocaleString('ru-RU')} ₽
            <span className="text-sm font-medium text-muted-foreground ml-1">за приём</span>
          </div>
        </div>

        {/* Online schedule */}
        <div className="bg-muted/40 rounded-2xl p-4">
          <div className="flex items-center gap-2 font-semibold mb-3">
            <Icon name="CalendarClock" size={18} className="text-[#00c9a6]" /> Онлайн-запись
          </div>

          <label className="text-xs text-muted-foreground">Клиника</label>
          <select
            value={clinic}
            onChange={(e) => setClinic(e.target.value)}
            className="w-full mt-1 mb-1 h-10 px-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00c9a6]"
          >
            {clinicSlots.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {(metroByClinic[clinic] ?? []).map((m) => (
              <span key={m} className="flex items-center gap-1 text-xs text-muted-foreground">
                <Icon name="MapPin" size={12} className="text-[#ffad00]" /> {m}
              </span>
            ))}
          </div>

          <label className="text-xs text-muted-foreground">Дата</label>
          <div className="flex gap-1.5 overflow-x-auto pb-1 mt-1 mb-3 scrollbar-hide">
            {dates.map((d) => (
              <button
                key={d}
                onClick={() => setDate(d)}
                className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  date === d ? 'bg-[#00c9a6] text-white' : 'bg-white border border-border'
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <label className="text-xs text-muted-foreground">Время</label>
          <div className="grid grid-cols-3 gap-1.5 mt-1 mb-3">
            {timeSlots.map((t) => (
              <button
                key={t}
                onClick={() => setSlot(t)}
                className={`py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  slot === t ? 'bg-[#ffad00] text-white' : 'bg-white border border-border hover:border-[#ffad00]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <Button
            disabled={!slot}
            className="w-full rounded-xl bg-[#00c9a6] hover:bg-[#00a88c] text-white font-semibold disabled:opacity-50"
          >
            {slot ? `Записаться на ${slot}` : 'Выберите время'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
