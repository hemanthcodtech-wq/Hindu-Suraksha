// Hindu Suraksha logo. Use the same Cloudinary asset everywhere the logo appears.
export default function Logo({ className = "", variant = "color" }) {
  return (
    <img
      className={`object-contain drop-shadow-[0_4px_10px_rgba(6,29,73,0.24)] ${className}`}
      src="/images/hindu-suraksha-logo.png"
      alt="Hindu Suraksha logo"
      loading="eager"
      decoding="async"
    />
  )
}
