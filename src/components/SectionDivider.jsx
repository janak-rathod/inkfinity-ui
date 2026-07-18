/**
 * The studio's signature element: a single continuous line, like one
 * unbroken tattoo stroke, used to separate sections instead of a plain
 * hairline rule. Draws itself in via CSS on mount (see .line-draw in
 * index.css) and respects prefers-reduced-motion.
 */
export default function SectionDivider({ className = '' }) {
  return (
    <div className={`container-page ${className}`} aria-hidden="true">
      <svg
        className="line-draw w-full"
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 20 C 150 2, 300 38, 450 20 S 750 2, 900 20 S 1100 36, 1200 20"
          stroke="#F5C400"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    </div>
  )
}
