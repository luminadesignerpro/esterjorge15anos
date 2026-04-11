import { useState, useEffect } from "react";

const TARGET = new Date("2026-06-26T19:30:00").getTime();

const Countdown = () => {
  const [diff, setDiff] = useState(TARGET - Date.now());

  useEffect(() => {
    const id = setInterval(() => setDiff(TARGET - Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (diff <= 0) return null;

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);

  const items = [
    { value: days, label: "Dias" },
    { value: hours, label: "Horas" },
    { value: mins, label: "Min" },
    { value: secs, label: "Seg" },
  ];

  return (
    <div className="flex gap-3 justify-center flex-wrap">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center rounded-xl px-4 py-3 min-w-[65px]"
          style={{
            background: "rgba(74,26,120,0.32)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(200,168,233,0.18)",
          }}
        >
          <span className="font-serif text-[2.6rem] font-light text-foreground leading-none">
            {String(item.value).padStart(2, "0")}
          </span>
          <span className="text-[0.75rem] tracking-[0.22em] uppercase text-light-purple mt-1">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;

