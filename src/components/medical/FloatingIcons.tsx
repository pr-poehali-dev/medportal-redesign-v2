import Icon from '@/components/ui/icon';

const items = [
  { icon: 'Pill', top: '12%', left: '8%', size: 26, anim: 'animate-float', delay: '0s' },
  { icon: 'Stethoscope', top: '68%', left: '6%', size: 32, anim: 'animate-float-slow', delay: '0.6s' },
  { icon: 'Syringe', top: '20%', left: '90%', size: 28, anim: 'animate-float-reverse', delay: '0.3s' },
  { icon: 'HeartPulse', top: '75%', left: '92%', size: 30, anim: 'animate-float', delay: '1s' },
  { icon: 'Cross', top: '45%', left: '4%', size: 20, anim: 'animate-drift', delay: '1.4s' },
  { icon: 'Thermometer', top: '85%', left: '80%', size: 22, anim: 'animate-float-slow', delay: '0.8s' },
  { icon: 'Bandage', top: '10%', left: '78%', size: 24, anim: 'animate-drift', delay: '1.8s' },
];

const FloatingIcons = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {items.map((it, i) => (
      <div
        key={i}
        className={`absolute ${it.anim}`}
        style={{ top: it.top, left: it.left, animationDelay: it.delay }}
      >
        <div className="w-11 h-11 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/20">
          <Icon name={it.icon} size={it.size * 0.55} className="text-white/90" />
        </div>
      </div>
    ))}
  </div>
);

export default FloatingIcons;
