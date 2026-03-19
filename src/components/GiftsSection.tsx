import { useState } from "react";
import SectionHeader from "./SectionHeader";

interface Gift {
  id: number;
  icon: string;
  name: string;
  size: string;
  taken: boolean;
  giverName: string;
}

const initialGifts: Gift[] = [
  { id: 0, icon: "👜", name: "Bolsa", size: "", taken: false, giverName: "" },
  { id: 1, icon: "👚", name: "Roupas", size: "Tamanho P", taken: false, giverName: "" },
  { id: 2, icon: "👗", name: "Vestido", size: "", taken: false, giverName: "" },
  { id: 3, icon: "👖", name: "Calça ou Shorts", size: "Tam. 36 ou 38", taken: false, giverName: "" },
  { id: 4, icon: "👠", name: "Calçado", size: "Tam. 37 ou 38", taken: false, giverName: "" },
  { id: 5, icon: "⌚", name: "Relógio", size: "", taken: false, giverName: "" },
  { id: 6, icon: "💍", name: "Anel", size: "Tam. 18 a 20", taken: false, giverName: "" },
  { id: 7, icon: "📿", name: "Pulseira", size: "", taken: false, giverName: "" },
  { id: 8, icon: "📿", name: "Colar", size: "", taken: false, giverName: "" },
  { id: 9, icon: "💄", name: "Maquiagem", size: "", taken: false, giverName: "" },
  { id: 10, icon: "🌸", name: "Perfumaria", size: "", taken: false, giverName: "" },
];

const GiftsSection = () => {
  const [open, setOpen] = useState(false);
  const [gifts, setGifts] = useState<Gift[]>(initialGifts);
  const [selected, setSelected] = useState<Gift | null>(null);
  const [confirmedGift, setConfirmedGift] = useState<{ name: string; gift: string } | null>(null);
  const [giverInput, setGiverInput] = useState("");

  const handleConfirm = () => {
    if (!giverInput.trim() || !selected) return;
    setGifts((prev) =>
      prev.map((g) => (g.id === selected.id ? { ...g, taken: true, giverName: giverInput.trim() } : g))
    );
    setConfirmedGift({ name: giverInput.trim(), gift: selected.name });
    setSelected(null);
    setGiverInput("");
  };

  return (
    <section className="scroll-reveal py-[4.5rem] px-6 max-w-[700px] mx-auto text-center">
      <SectionHeader tag="Sugestão de Presentes" title="Lista de Presentes" titleSize="clamp(1.9rem,6vw,3rem)" />
      <p className="text-[0.95rem] text-light-purple mb-7 leading-relaxed">
        Clique para ver os presentes e escolher o que vai dar 🎁
      </p>

      <button
        onClick={() => { setOpen(!open); setSelected(null); setConfirmedGift(null); }}
        className="inline-flex items-center gap-2 rounded-full px-7 py-3 font-display text-[0.78rem] tracking-[0.18em] uppercase text-lavender cursor-pointer transition-all hover:-translate-y-0.5 mb-7"
        style={{
          background: "linear-gradient(135deg, rgba(124,58,191,0.38), rgba(74,26,120,0.55))",
          border: "1px solid rgba(200,168,233,0.32)",
          boxShadow: "0 3px 18px rgba(74,26,120,0.38)",
        }}
      >
        <span>{open ? "Fechar Lista" : "Ver Lista de Presentes"}</span>
        <span className={`text-[0.75rem] transition-transform duration-400 ${open ? "rotate-180" : ""}`}>▼</span>
      </button>

      <div
        className="overflow-hidden transition-all duration-700"
        style={{
          maxHeight: open ? 1600 : 0,
          opacity: open ? 1 : 0,
        }}
      >
        {!selected && !confirmedGift && (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-3 mb-5">
            {gifts.map((g) => (
              <div
                key={g.id}
                onClick={() => !g.taken && setSelected(g)}
                className={`rounded-xl p-4 text-center relative transition-all duration-200 ${
                  g.taken
                    ? "opacity-40 cursor-not-allowed"
                    : "cursor-pointer hover:-translate-y-1"
                }`}
                style={{
                  background: g.taken ? "rgba(74,26,120,0.18)" : "rgba(74,26,120,0.18)",
                  border: `2px solid ${g.taken ? "rgba(200,168,233,0.13)" : "rgba(200,168,233,0.13)"}`,
                }}
              >
                {g.taken && (
                  <div className="absolute top-2 right-2 w-[18px] h-[18px] rounded-full bg-light-purple/50 flex items-center justify-center text-[0.65rem]">
                    ✓
                  </div>
                )}
                <div className="text-[1.6rem] mb-1">{g.icon}</div>
                <div className="text-[0.88rem] text-lavender leading-snug">{g.name}</div>
                {g.size && <div className="text-[0.72rem] text-light-purple mt-0.5">{g.size}</div>}
                {g.taken && (
                  <div className="text-[0.65rem] text-light-purple italic mt-1">Reservado por {g.giverName}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {selected && !confirmedGift && (
          <div
            className="rounded-2xl p-6 text-left"
            style={{
              background: "rgba(74,26,120,0.22)",
              border: "1px solid rgba(200,168,233,0.18)",
            }}
          >
            <p className="font-serif text-base text-lavender mb-4 leading-relaxed">
              Você quer reservar <strong className="text-gold-light">{selected.name}</strong>?
              <br />Coloque seu nome para confirmar:
            </p>
            <input
              value={giverInput}
              onChange={(e) => setGiverInput(e.target.value)}
              placeholder="Seu nome"
              maxLength={50}
              className="w-full rounded-lg px-4 py-3 text-foreground font-serif text-base outline-none mb-3 placeholder:text-light-purple/40"
              style={{
                background: "rgba(26,5,53,0.52)",
                border: "1px solid rgba(200,168,233,0.22)",
              }}
            />
            <div className="flex gap-2 flex-wrap justify-center">
              <button
                onClick={handleConfirm}
                className="flex-1 min-w-[110px] rounded-full px-5 py-3 font-display text-[0.75rem] tracking-[0.14em] uppercase text-foreground cursor-pointer transition-all hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, hsl(270 55% 30%), hsl(270 80% 12%))",
                  border: "1px solid rgba(200,168,233,0.28)",
                }}
              >
                Confirmar ✓
              </button>
              <button
                onClick={() => { setSelected(null); setGiverInput(""); }}
                className="flex-1 min-w-[90px] rounded-full px-5 py-3 bg-transparent font-display text-[0.75rem] tracking-[0.14em] uppercase text-light-purple cursor-pointer transition-colors"
                style={{ border: "1px solid rgba(200,168,233,0.18)" }}
              >
                Cancelar
              </button>
            </div>
          </div>
        )}

        {confirmedGift && (
          <div className="text-center py-6 px-2">
            <div className="text-[2.4rem] mb-3">🎀</div>
            <p className="font-script text-[1.8rem] text-lavender mb-2">{confirmedGift.name}</p>
            <p className="text-[0.95rem] text-light-purple leading-relaxed">
              Que presente incrível! Esther vai adorar receber {confirmedGift.gift.toLowerCase()} de você. Obrigada! 💜
            </p>
            <button
              onClick={() => setConfirmedGift(null)}
              className="mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-display text-[0.72rem] tracking-[0.18em] uppercase text-lavender cursor-pointer"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,191,0.38), rgba(74,26,120,0.55))",
                border: "1px solid rgba(200,168,233,0.32)",
              }}
            >
              ← Ver outros
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GiftsSection;
