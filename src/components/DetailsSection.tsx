import SectionHeader from "./SectionHeader";

const cards = [
  { icon: "📅", label: "Data", value: "26 de Junho", sub: "Sexta-feira, 2026" },
  { icon: "🕖", label: "Horário", value: "19h30", sub: "Pontualmente" },
  { icon: "🌹", label: "Local", value: "Espaço North Buffet", sub: "Av. Mister Hull, 4758\nAntônio Bezerra · CE" },
  { icon: "👗", label: "Traje", value: "Esporte Fino", sub: "⚠️ Não usar roupas em tons de roxo, lilás ou rosa" },
];

const DetailsSection = () => (
  <section className="scroll-reveal py-[4.5rem] px-6 max-w-[860px] mx-auto text-center">
    <SectionHeader tag="Detalhes da Festa" title="Uma noite inesquecível" />
    <div className="flex flex-wrap gap-4 justify-center">
      {cards.map((c) => (
        <div
          key={c.label}
          className="flex-1 min-w-[160px] max-w-[200px] rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(124,58,191,0.3)]"
          style={{
            background: "rgba(74,26,120,0.2)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(200,168,233,0.16)",
          }}
        >
          <div className="text-[1.6rem] mb-2">{c.icon}</div>
          <div className="font-display text-[0.75rem] tracking-[0.2em] uppercase text-gold mb-1">
            {c.label}
          </div>
          <div className="text-lg font-semibold text-foreground leading-snug">{c.value}</div>
          <div className="text-[0.95rem] text-light-purple mt-0.5 whitespace-pre-line">{c.sub}</div>
        </div>
      ))}
    </div>
    <div className="mt-7">
      <a
        href="https://maps.google.com/?q=Av+Mister+Hull+4758+Antonio+Bezerra+Fortaleza+CE"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 font-display text-[0.95rem] tracking-[0.12em] text-lavender no-underline transition-all hover:-translate-y-0.5"
        style={{
          background: "rgba(74,26,120,0.32)",
          border: "1px solid rgba(200,168,233,0.22)",
        }}
      >
        📍 Abrir no Maps
      </a>
    </div>
  </section>
);

export default DetailsSection;
