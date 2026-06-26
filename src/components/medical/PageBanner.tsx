import Icon from '@/components/ui/icon';

interface Props {
  icon: string;
  title: string;
  subtitle: string;
  stats?: { value: string; label: string }[];
  color?: 'mint' | 'gold';
}

const PageBanner = ({ icon, title, subtitle, stats, color = 'mint' }: Props) => {
  const isMint = color === 'mint';
  return (
    <div className={`relative overflow-hidden ${isMint ? 'bg-gradient-to-r from-[#00c9a6] to-[#00a88c]' : 'bg-gradient-to-r from-[#ffad00] to-[#ff9100]'}`}>
      <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-white/10" />
      <div className="absolute -bottom-16 -left-8 w-48 h-48 rounded-full bg-white/5 blur-xl" />
      <div className="container px-4 py-6 relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
              <Icon name={icon} size={24} className="text-white" />
            </div>
            <div>
              <h2 className="font-heading font-extrabold text-xl md:text-2xl text-white">{title}</h2>
              <p className="text-white/80 text-sm mt-0.5">{subtitle}</p>
            </div>
          </div>
          {stats && (
            <div className="flex gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-heading font-extrabold text-2xl text-white">{s.value}</div>
                  <div className="text-white/70 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
