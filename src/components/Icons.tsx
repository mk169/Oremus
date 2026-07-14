// Dezente liturgische Inline-SVG-Motive (Gold-/Linienzeichnung).
interface IconProps {
  size?: number
  className?: string
}

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
})

export function CrossIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 3v18M8 8h8" />
    </svg>
  )
}

export function BookIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15H5.5A1.5 1.5 0 0 0 4 20.5z" />
      <path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v15h5.5a1.5 1.5 0 0 1 1.5 1.5z" />
      <path d="M12 6v13" />
    </svg>
  )
}

export function ChaliceIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M7 4h10" />
      <path d="M8 4c0 4 1.5 7 4 7s4-3 4-7" />
      <path d="M12 11v6" />
      <path d="M8 20h8" />
      <path d="M10 20c0-2 4-2 4 0" />
    </svg>
  )
}

export function RosaryIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="7" r="2.4" />
      <path d="M12 9.4v3.1" />
      <path d="M10.5 14.5h3" />
      <path d="M12 12.5v1" />
      <circle cx="7.5" cy="10" r="1" />
      <circle cx="16.5" cy="10" r="1" />
      <circle cx="6" cy="14" r="1" />
      <circle cx="18" cy="14" r="1" />
      <circle cx="8" cy="18" r="1" />
      <circle cx="16" cy="18" r="1" />
    </svg>
  )
}

export function CandleIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 3c1.2 1 1.8 2 1.8 3 0 1-.8 1.8-1.8 1.8S10.2 7 10.2 6c0-1 .6-2 1.8-3z" />
      <rect x="9.5" y="9" width="5" height="11" rx="1" />
      <path d="M12 7.8V9" />
    </svg>
  )
}

export function NeumeIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M3 8h18M3 12h18M3 16h18" strokeWidth={0.8} opacity={0.6} />
      <path d="M6 12l1.5-2 1.5 2" strokeWidth={1.8} />
      <rect x="12" y="9" width="2.2" height="2.2" rx="0.4" fill="currentColor" stroke="none" />
      <rect x="16" y="13" width="2.2" height="2.2" rx="0.4" fill="currentColor" stroke="none" />
    </svg>
  )
}
