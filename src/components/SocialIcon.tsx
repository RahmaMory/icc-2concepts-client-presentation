export type SocialIconName = "instagram" | "facebook" | "linkedin" | "whatsapp";

export default function SocialIcon({ name }: { name: SocialIconName }) {
  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M14.2 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.7-1.6h1.6V3.8c-.5-.1-1.4-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3V10H8v3h2.8v8h3.4Z"
        />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <circle cx="6.2" cy="6.7" r="1.8" />
        <path d="M4.7 9.6h3V19h-3zM10 9.6h2.9v1.3h.1c.4-.8 1.4-1.7 3.1-1.7 3.3 0 3.9 2.1 3.9 5V19h-3v-4.2c0-1 0-2.4-1.6-2.4s-1.8 1.1-1.8 2.3V19h-3V9.6Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.5 11.6a8.4 8.4 0 0 1-12.4 7.3L4 20l1.1-4a8.4 8.4 0 1 1 15.4-4.4Z" />
      <path d="M8.2 8.1c.3 3.7 3 6.4 6.7 6.8l1.2-1.6-2.2-1-.9.8c-1.4-.6-2.5-1.7-3.1-3.1l.8-.9-1-2.2-1.5 1.2Z" />
    </svg>
  );
}
