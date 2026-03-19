import { motion } from "framer-motion";
import Countdown from "./Countdown";
import estherPhoto from "@/assets/esther.jpeg";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center"
      style={{
        background: "radial-gradient(ellipse at 50% 0%, rgba(124,58,191,0.2) 0%, transparent 60%)",
      }}
    >
      <motion.p
        className="font-display text-[0.7rem] tracking-[0.45em] uppercase text-light-purple mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Você está convidado(a) para celebrar
      </motion.p>

      <motion.div
        className="relative mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        {/* Cinematic light sweep */}
        <motion.div
          className="absolute inset-[-20px] rounded-full"
          style={{
            background: "conic-gradient(from 0deg, transparent 0%, rgba(200,168,233,0.45) 15%, transparent 30%, transparent 70%, rgba(124,58,191,0.3) 85%, transparent 100%)",
            filter: "blur(6px)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        {/* Soft ambient glow */}
        <div
          className="absolute inset-[-24px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(124,58,191,0.2) 55%, transparent 70%)",
            animation: "photo-pulse 4s ease-in-out infinite",
          }}
        />
        {/* Photo container - bigger & cinematic Ken Burns */}
        <div
          className="relative w-[min(260px,60vw)] h-[min(260px,60vw)] rounded-full overflow-hidden mx-auto"
          style={{
            border: "3px solid rgba(200,168,233,0.4)",
            boxShadow: "0 0 50px rgba(124,58,191,0.45), 0 0 100px rgba(124,58,191,0.15), inset 0 0 30px rgba(124,58,191,0.12)",
          }}
        >
          <motion.img
            src={estherPhoto}
            alt="Esther"
            className="w-full h-full object-cover object-top"
            initial={{ scale: 1.35, filter: "brightness(0.3)" }}
            animate={{ scale: 1.05, filter: "brightness(1)" }}
            transition={{ delay: 0.5, duration: 2.5, ease: "easeOut" }}
            style={{ animation: "ken-burns 12s ease-in-out 3s infinite alternate" }}
          />
          {/* Cinematic vignette */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, transparent 55%, rgba(20,5,40,0.4) 100%)",
            }}
          />
        </div>
        {/* Sparkle dots */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
          <motion.div
            key={deg}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: "rgba(200,168,233,0.9)",
              top: "50%",
              left: "50%",
              boxShadow: "0 0 8px rgba(200,168,233,0.5)",
            }}
            initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              x: Math.cos((deg * Math.PI) / 180) * 150,
              y: Math.sin((deg * Math.PI) / 180) * 150,
              scale: [0, 1, 0],
            }}
            transition={{ delay: 1.2 + i * 0.1, duration: 1.4, ease: "easeOut" }}
          />
        ))}
      </motion.div>

      <motion.h1
        className="font-script text-[clamp(4rem,14vw,8.5rem)] text-foreground leading-[0.95]"
        style={{
          textShadow: "0 0 45px rgba(200,168,233,0.4), 0 3px 20px rgba(26,5,53,0.5)",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.9 }}
      >
        Esther
      </motion.h1>

      <motion.div
        className="font-serif text-[clamp(5rem,18vw,11rem)] font-light leading-none tracking-tight"
        style={{
          background: "linear-gradient(140deg, hsl(45 75% 69%), hsl(43 60% 55%) 45%, hsl(35 45% 40%))",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.9 }}
      >
        15
      </motion.div>

      <motion.div
        className="font-script text-[clamp(1.5rem,5vw,3rem)] text-gold-light mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.78, duration: 0.8 }}
      >
        anos
      </motion.div>

      <motion.div
        className="w-[210px] h-px mx-auto mb-7"
        style={{
          background: "linear-gradient(to right, transparent, hsl(270 50% 45%), transparent)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      />

      <motion.p
        className="font-display text-[clamp(0.8rem,2.4vw,1rem)] tracking-[0.12em] text-lavender mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        26 de Junho de 2026 &nbsp;·&nbsp; 19h30
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <Countdown />
      </motion.div>

      <motion.div
        className="mt-10 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="font-display text-[0.62rem] tracking-[0.28em] uppercase text-light-purple/40">
          Role para baixo
        </span>
        <span
          className="text-light-purple/40"
          style={{ animation: "arrow-bounce 1.6s ease-in-out infinite" }}
        >
          ↓
        </span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
