import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <GallerySection />
    </main>
  );
}
