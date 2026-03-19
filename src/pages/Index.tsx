import { useState } from "react";
import StarsCanvas from "@/components/StarsCanvas";
import FallingPetals from "@/components/FallingPetals";
import Envelope from "@/components/Envelope";
import HeroSection from "@/components/HeroSection";
import DetailsSection from "@/components/DetailsSection";
import GiftsSection from "@/components/GiftsSection";
import MessageSection from "@/components/MessageSection";
import RSVPSection from "@/components/RSVPSection";
import MusicButton from "@/components/MusicButton";
import Footer from "@/components/Footer";
import useScrollReveal from "@/hooks/useScrollReveal";

const Index = () => {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);

  useScrollReveal();

  return (
    <>
      <StarsCanvas />
      <FallingPetals />

      {!envelopeOpened && <Envelope onOpen={() => setEnvelopeOpened(true)} />}

      <MusicButton visible={envelopeOpened} />

      <div
        className="relative z-10 transition-opacity duration-[850ms]"
        style={{ opacity: envelopeOpened ? 1 : 0 }}
      >
        <HeroSection />
        <DetailsSection />
        <GiftsSection />
        <MessageSection />
        <RSVPSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
