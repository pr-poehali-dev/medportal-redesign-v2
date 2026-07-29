const EcgLine = ({ className = '', color = '#ffffff' }: { className?: string; color?: string }) => (
  <svg
    viewBox="0 0 600 80"
    fill="none"
    className={className}
    preserveAspectRatio="none"
  >
    <path
      d="M0 40 H150 L170 40 L185 10 L200 70 L215 40 L235 40 H270 L285 40 L300 15 L315 65 L330 40 L350 40 H600"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="1000"
      strokeDashoffset="1000"
      className="animate-dash"
    />
  </svg>
);

export default EcgLine;
