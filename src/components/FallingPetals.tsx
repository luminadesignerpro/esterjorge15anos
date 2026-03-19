import { useMemo } from "react";

const FallingPetals = () => {
  const petals = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        width: Math.random() * 10 + 8,
        height: Math.random() * 6 + 5,
        duration: Math.random() * 8 + 10,
        delay: Math.random() * 12,
      })),
    []
  );

  return (
    <>
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}%`,
            width: p.width,
            height: p.height,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </>
  );
};

export default FallingPetals;
