import { showcaseBrands } from "../data/brandShowcase";

type LogoMarqueeProps = {
  compact?: boolean;
  direction?: "left" | "right";
  label?: string;
};

export default function LogoMarquee({
  compact = false,
  direction = "left",
  label = "Selected ICC portfolio brands",
}: LogoMarqueeProps) {
  // Two identical groups create a seamless infinite loop.
  const groups = [0, 1];

  return (
    <div
      className={`logo-marquee ${compact ? "is-compact" : ""} direction-${direction}`}
      aria-label={label}
    >
      <div className="logo-marquee-track">
        {groups.map((group) => (
          <div className="logo-marquee-group" key={group} aria-hidden={group === 1}>
            {showcaseBrands.map((brand) => (
              <div className="marquee-logo" key={`${group}-${brand.id}`}>
                <span className={`marquee-mark brand-${brand.id}`}>
                  {brand.logo ? <img src={brand.logo} alt="" /> : brand.mark}
                </span>

                <span className="marquee-copy">
                  <strong>{brand.name}</strong>
                  <small>{brand.category}</small>
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
