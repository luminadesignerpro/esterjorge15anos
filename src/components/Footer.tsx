const Footer = () => (
  <footer
    className="py-9 px-6 text-center"
    style={{
      background: "rgba(10,1,24,0.88)",
      borderTop: "1px solid rgba(200,168,233,0.09)",
    }}
  >
    <p
      className="font-script text-2xl mb-1"
      style={{
        background: "linear-gradient(140deg, hsl(45 75% 69%), hsl(43 60% 55%) 45%, hsl(35 45% 40%))",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      Esther Jorge Cavalcante
    </p>
    <p className="font-display text-[0.65rem] tracking-[0.22em] uppercase text-light-purple/20">
      Festa de 15 Anos · 2026
    </p>
  </footer>
);

export default Footer;
