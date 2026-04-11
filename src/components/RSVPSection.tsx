import { useState } from "react";
import SectionHeader from "./SectionHeader";

const RSVPSection = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [attending, setAttending] = useState("yes");
  const [thankName, setThankName] = useState("");
  const [isAttending, setIsAttending] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setThankName(name.trim());
    setIsAttending(attending === "yes");
    setSubmitted(true);

    const msg = attending === "yes"
      ? `Olá! Meu nome é ${name.trim()} e confirmo minha presença na festa de 15 anos da Esther! 🎉`
      : `Olá! Meu nome é ${name.trim()}. Infelizmente não poderei comparecer à festa de 15 anos da Esther.`;
    const url = `https://wa.me/5585987383965?text=${encodeURIComponent(msg)}`;
    setTimeout(() => window.open(url, "_blank"), 800);
  };

  return (
    <section className="scroll-reveal py-[4.5rem] px-6 max-w-[500px] mx-auto text-center pb-24">
      <SectionHeader tag="Confirme sua presença" title="RSVP" titleSize="clamp(1.9rem,6.5vw,3rem)" />
      <p className="text-[1.1rem] text-light-purple mb-7 leading-relaxed">
        Confirme até <strong className="text-gold-light">16 de Junho de 2026</strong>.
      </p>

      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 rounded-full px-7 py-3 font-display text-[0.95rem] tracking-[0.18em] uppercase text-lavender cursor-pointer transition-all hover:-translate-y-0.5 mb-7"
        style={{
          background: "linear-gradient(135deg, rgba(124,58,191,0.38), rgba(74,26,120,0.55))",
          border: "1px solid rgba(200,168,233,0.32)",
          boxShadow: "0 3px 18px rgba(74,26,120,0.38)",
        }}
      >
        <span>{open ? "Fechar" : "Confirmar Presença"}</span>
        <span className={`text-[0.75rem] transition-transform duration-400 ${open ? "rotate-180" : ""}`}>▼</span>
      </button>

      <div
        className="rounded-3xl overflow-hidden transition-all duration-700"
        style={{
          maxHeight: open ? 500 : 0,
          opacity: open ? 1 : 0,
          background: "rgba(74,26,120,0.26)",
          backdropFilter: "blur(12px)",
          border: open ? "1px solid rgba(200,168,233,0.2)" : "none",
        }}
      >
        <div className="p-9 text-left">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="font-display text-[0.62rem] tracking-[0.2em] uppercase text-gold block mb-2">
                  Seu nome
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Como devemos te chamar?"
                  required
                  className="w-full rounded-lg px-4 py-3 text-foreground font-serif text-base outline-none placeholder:text-light-purple/40 transition-colors focus:border-soft-purple"
                  style={{
                    background: "rgba(26,5,53,0.52)",
                    border: "1px solid rgba(200,168,233,0.22)",
                  }}
                />
              </div>
              <div>
                <label className="font-display text-[0.62rem] tracking-[0.2em] uppercase text-gold block mb-2">
                  Você vai comparecer?
                </label>
                {[
                  { value: "yes", label: "Sim, estarei lá! 🥂" },
                  { value: "no", label: "Infelizmente não poderei ir" },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer font-serif text-base text-lavender transition-all mb-2"
                    style={{
                      background: attending === opt.value ? "rgba(124,58,191,0.25)" : "rgba(26,5,53,0.38)",
                      border: `1px solid ${attending === opt.value ? "rgba(200,168,233,0.42)" : "rgba(200,168,233,0.16)"}`,
                    }}
                  >
                    <input
                      type="radio"
                      name="attending"
                      value={opt.value}
                      checked={attending === opt.value}
                      onChange={(e) => setAttending(e.target.value)}
                      className="accent-soft-purple"
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
              <button
                type="submit"
                className="w-full rounded-full px-8 py-3.5 font-display text-[0.82rem] tracking-[0.15em] uppercase text-foreground cursor-pointer transition-all hover:-translate-y-0.5 mt-2"
                style={{
                  background: "linear-gradient(135deg, hsl(270 55% 30%), hsl(270 80% 12%))",
                  border: "1px solid rgba(200,168,233,0.28)",
                  boxShadow: "0 3px 18px rgba(74,26,120,0.42)",
                }}
              >
                Confirmar
              </button>
            </form>
          ) : (
            <div className="text-center py-6 px-2">
              <div className="text-[2.8rem] mb-4">🌸</div>
              <p className="font-script text-[1.9rem] text-lavender mb-2">Obrigada, {thankName}!</p>
              <p className="text-[0.95rem] text-light-purple leading-relaxed">
                {isAttending
                  ? "Mal podemos esperar para celebrar com você! 💕"
                  : "Sentiremos sua falta. Muito obrigada por avisar!"}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
