import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import brasao from "@/assets/brasao.png";

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope = ({ onOpen }: EnvelopeProps) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isGone, setIsGone] = useState(false);

  const handleClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => {
      setIsGone(true);
      setTimeout(onOpen, 900);
    }, 1200);
  };

  if (isGone) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[300] flex flex-col items-center justify-center"
        style={{
          background:
            "radial-gradient(ellipse at 50% 35%, hsl(270 55% 22%) 0%, hsl(270 70% 8%) 65%, hsl(270 85% 4%) 100%)",
        }}
        animate={isGone ? { opacity: 0, scale: 1.05 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
      >
        <div
          className="relative cursor-pointer transition-transform hover:scale-[1.025]"
          style={{
            width: "min(360px, 88vw)",
            filter: "drop-shadow(0 20px 60px rgba(124,58,191,0.6))",
          }}
          onClick={handleClick}
        >
          {/* Envelope body */}
          <div
            className="relative w-full overflow-hidden"
            style={{
              paddingTop: "60%",
              background: "linear-gradient(155deg, hsl(270 44% 40%), hsl(270 52% 52%) 45%, hsl(270 60% 32%))",
              borderRadius: "8px 8px 14px 14px",
              border: "1px solid rgba(200,168,233,0.3)",
            }}
          >
            {/* Flap */}
            <div
              className="absolute top-0 left-0 right-0 z-10 transition-transform duration-[950ms]"
              style={{
                height: 0,
                borderLeft: "min(180px, 44vw) solid transparent",
                borderRight: "min(180px, 44vw) solid transparent",
                borderTop: "min(116px, 28.5vw) solid hsl(270 50% 50%)",
                transformOrigin: "top center",
                transform: isOpening ? "rotateX(180deg)" : "rotateX(0deg)",
              }}
            />

            {/* Bottom folds */}
            <div
              className="absolute bottom-0 left-0"
              style={{
                width: 0,
                height: 0,
                borderBottom: "min(84px, 20.5vw) solid rgba(0,0,0,0.17)",
                borderRight: "min(180px, 44vw) solid transparent",
              }}
            />
            <div
              className="absolute bottom-0 right-0"
              style={{
                width: 0,
                height: 0,
                borderBottom: "min(84px, 20.5vw) solid rgba(0,0,0,0.17)",
                borderLeft: "min(180px, 44vw) solid transparent",
              }}
            />

            {/* Peek card */}
            <div
              className="absolute left-1/2 flex items-center justify-center z-[4] transition-transform duration-[950ms]"
              style={{
                bottom: 8,
                transform: isOpening
                  ? "translateX(-50%) translateY(-22%)"
                  : "translateX(-50%) translateY(106%)",
                width: "86%",
                background: "linear-gradient(155deg, hsl(270 70% 96%), hsl(270 55% 88%))",
                borderRadius: 7,
                height: "min(100px, 25vw)",
                boxShadow: "0 -5px 20px rgba(100,40,180,0.3)",
              }}
            >
              <span className="font-script text-[clamp(1.3rem,4.5vw,2rem)] text-soft-purple text-center px-4">
                Você está convidado(a) ✨
              </span>
            </div>

            {/* Seal */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center z-[5] overflow-hidden"
              style={{
                width: "min(120px, 30vw)",
                height: "min(120px, 30vw)",
                animation: "seal-pulse 3s ease-in-out infinite",
                opacity: isOpening ? 0 : 1,
                transition: "opacity 0.45s",
              }}
            >
              <img src={brasao} alt="Brasão Esther" className="w-full h-full object-contain drop-shadow-lg" />
            </div>
          </div>
        </div>

        <p
          className="mt-8 font-display text-[0.7rem] tracking-[0.35em] uppercase text-light-purple/60"
          style={{ animation: "blink 2s ease-in-out infinite" }}
        >
          Toque para abrir ✦
        </p>
      </motion.div>
    </AnimatePresence>
  );
};

export default Envelope;
