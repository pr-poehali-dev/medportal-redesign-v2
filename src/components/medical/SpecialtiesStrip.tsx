import Icon from '@/components/ui/icon';
import { specialties } from '@/data/medical';

const SpecialtiesStrip = () => {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
      {specialties.map((sp) => (
        <button
          key={sp.name}
          className="flex items-center gap-2 shrink-0 bg-white rounded-full px-4 py-2.5 border border-border hover:border-[#00c9a6] hover:shadow-md transition-all group"
        >
          <Icon name={sp.icon} size={18} className="text-[#00c9a6]" />
          <span className="font-medium text-sm whitespace-nowrap">{sp.name}</span>
        </button>
      ))}
    </div>
  );
};

export default SpecialtiesStrip;
