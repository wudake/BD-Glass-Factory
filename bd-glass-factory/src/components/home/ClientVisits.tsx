import Image from "next/image";

const photos = [
  { src: "/images/client-visits/BDGlass-Client-Visits (1).jpg", alt: "Overseas clients visiting BDGLASS factory entrance in Foshan" },
  { src: "/images/client-visits/BDGlass-Client-Visits (1).png", alt: "Factory floor discussion with international buyer at BDGLASS" },
  { src: "/images/client-visits/BDGlass-Client-Visits (2).jpg", alt: "Group of overseas clients at BDGLASS factory exterior" },
  { src: "/images/client-visits/BDGlass-Client-Visits (2).png", alt: "Production line inspection with client at BDGLASS facility" },
  { src: "/images/client-visits/BDGlass-Client-Visits (3).JPG", alt: "Client touring BDGLASS factory floor with production team" },
  { src: "/images/client-visits/BDGlass-Client-Visits (3).png", alt: "Team and overseas client at glass production line" },
  { src: "/images/client-visits/BDGlass-Client-Visits (4).jpg", alt: "International buyer visiting BDGLASS workshop" },
  { src: "/images/client-visits/BDGlass-Client-Visits (4).png", alt: "Client examining glass products at BDGLASS quality station" },
  { src: "/images/client-visits/BDGlass-Client-Visits (5).jpg", alt: "Factory discussion between BDGLASS team and overseas partner" },
  { src: "/images/client-visits/BDGlass-Client-Visits (6).jpg", alt: "Group photo with international client at BDGLASS facility" },
  { src: "/images/client-visits/BDGlass-Client-Visits (7).jpg", alt: "Overseas buyers visiting BDGLASS glass manufacturing plant" },
];

export default function ClientVisits() {
  return (
    <section className="section bg-brand-dark">
      <div className="container-page">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">Trusted by Buyers Worldwide</h2>
          <p className="text-brand-muted text-body-lg max-w-3xl mx-auto">
            From Australia to Africa, the Middle East to Southeast Asia — buyers visit our
            Foshan facility to inspect production, verify quality, and build partnerships
            that last. Our door is always open.
          </p>
        </div>

        {/* Staggered 4-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div
              key={photo.src}
              className={`relative rounded-xl overflow-hidden aspect-[3/4] ${
                index % 2 === 1 ? "mt-6 md:mt-10" : ""
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
