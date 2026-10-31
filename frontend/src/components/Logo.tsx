export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg
      className="logo"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="64" height="64" fill="#171717" />
      <path
        d="M17 48V16l30 32V16"
        fill="none"
        stroke="#F2F0EB"
        strokeWidth="5"
        strokeLinejoin="miter"
        strokeLinecap="butt"
      />
    </svg>
  )
}
