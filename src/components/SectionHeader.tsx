interface SectionHeaderProps {
  tag: string;
  title: string;
  titleSize?: string;
}

const SectionHeader = ({ tag, title, titleSize }: SectionHeaderProps) => (
  <>
    <p className="font-display text-[0.65rem] tracking-[0.38em] uppercase text-gold mb-2">
      {tag}
    </p>
    <h2
      className="font-script text-foreground leading-tight mb-5"
      style={{ fontSize: titleSize || "clamp(2rem, 6.5vw, 3.5rem)" }}
    >
      {title}
    </h2>
    <div className="flex items-center gap-3 max-w-[180px] mx-auto mb-10">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-soft-purple" />
      <span className="text-gold text-[0.82rem]">✦</span>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-soft-purple" />
    </div>
  </>
);

export default SectionHeader;
