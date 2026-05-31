export function NeonScars({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`neon-scars ${className}`}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <filter id="glow-violet" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Violet light scars */}
      <line
        x1="0" y1="340" x2="480" y2="280"
        stroke="#bc13fe" strokeWidth="0.6" opacity="0.22"
        filter="url(#glow-violet)"
      />
      <line
        x1="320" y1="0" x2="580" y2="480"
        stroke="#bc13fe" strokeWidth="0.4" opacity="0.15"
        filter="url(#glow-violet)"
      />
      <line
        x1="900" y1="120" x2="1200" y2="600"
        stroke="#bc13fe" strokeWidth="0.5" opacity="0.18"
        filter="url(#glow-violet)"
      />
      <line
        x1="1100" y1="0" x2="1440" y2="400"
        stroke="#bc13fe" strokeWidth="0.3" opacity="0.12"
        filter="url(#glow-violet)"
      />
      <path
        d="M 60 600 Q 200 520 350 580 T 650 540"
        fill="none" stroke="#bc13fe" strokeWidth="0.5" opacity="0.14"
        filter="url(#glow-violet)"
      />

      {/* Cyan light scars */}
      <line
        x1="700" y1="0" x2="1000" y2="320"
        stroke="#00f3ff" strokeWidth="0.5" opacity="0.16"
        filter="url(#glow-cyan)"
      />
      <line
        x1="1300" y1="200" x2="1440" y2="580"
        stroke="#00f3ff" strokeWidth="0.4" opacity="0.13"
        filter="url(#glow-cyan)"
      />
      <path
        d="M 800 700 Q 1000 640 1150 720 T 1440 680"
        fill="none" stroke="#00f3ff" strokeWidth="0.45" opacity="0.12"
        filter="url(#glow-cyan)"
      />
      <line
        x1="0" y1="780" x2="300" y2="700"
        stroke="#00f3ff" strokeWidth="0.3" opacity="0.1"
        filter="url(#glow-cyan)"
      />

      {/* Scattered micro dots — ink dispersion */}
      {[
        [240, 160], [860, 320], [1180, 140], [420, 760], [1360, 500],
        [80, 440], [640, 200], [1080, 680], [180, 820]
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx} cy={cy} r="1"
          fill={i % 2 === 0 ? '#bc13fe' : '#00f3ff'}
          opacity={0.18 + (i % 3) * 0.06}
          filter={i % 2 === 0 ? 'url(#glow-violet)' : 'url(#glow-cyan)'}
        />
      ))}
    </svg>
  )
}
