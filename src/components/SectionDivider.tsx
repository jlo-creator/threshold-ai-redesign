interface SectionDividerProps {
  className?: string;
}

const SectionDivider = ({ className = "" }: SectionDividerProps) => (
  <div className={`w-[60px] h-[2px] bg-accent mt-4 mb-8 ${className}`} />
);

export default SectionDivider;
