import { useState, useRef, useEffect } from "react";

const MusicButton = ({ visible }: { visible: boolean }) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/esterjorge15anos/musica.mp3");
    audioRef.current.loop = true;
    audioRef.current.preload = "auto";
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  useEffect(() => {
    if (visible && audioRef.current) {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  }, [visible]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  if (!visible) return null;

  return (
    <button
      onClick={toggle}
      className="fixed bottom-5 right-5 z-[200] flex items-center gap-2 rounded-full px-4 py-2 font-display text-[0.72rem] tracking-[0.1em] text-lavender cursor-pointer transition-all hover:scale-[1.04]"
      style={{
        background: "rgba(74,26,120,0.82)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(200,168,233,0.28)",
      }}
    >
      <span
        className="text-sm"
        style={{ animation: playing ? "note-dance 1.4s ease-in-out infinite" : "none" }}
      >
        ♫
      </span>
      <span>{playing ? "Pausar" : "Tocar Música"}</span>
    </button>
  );
};

export default MusicButton;
