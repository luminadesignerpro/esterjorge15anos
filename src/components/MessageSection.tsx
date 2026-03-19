import SectionHeader from "./SectionHeader";

const MessageSection = () => (
  <section className="scroll-reveal py-[4.5rem] px-6 max-w-[650px] mx-auto text-center">
    <p className="font-display text-[0.65rem] tracking-[0.38em] uppercase text-gold mb-2 text-center">
      Uma mensagem especial
    </p>
    <div className="flex items-center gap-3 max-w-[180px] mx-auto mb-10">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-soft-purple" />
      <span className="text-gold text-[0.82rem]">✦</span>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-soft-purple" />
    </div>
    <blockquote className="font-serif text-[clamp(1.05rem,2.7vw,1.55rem)] italic font-light text-lavender leading-[1.8] mb-7">
      "Quinze anos são a porta de entrada para um mundo de possibilidades. Que cada passo desta nova fase seja iluminado pelo amor, pela alegria e pela graça de Deus."
    </blockquote>
    <div
      className="h-px max-w-[150px] mx-auto mb-5"
      style={{ background: "linear-gradient(to right, transparent, rgba(124,58,191,0.4), transparent)" }}
    />
    <p className="font-script text-[1.45rem] text-gold-light">— Família Cavalcante</p>
  </section>
);

export default MessageSection;
