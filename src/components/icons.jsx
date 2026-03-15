const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '1.7',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

function IconWrapper({ children }) {
  return (
    <svg aria-hidden="true" {...iconProps}>
      {children}
    </svg>
  );
}

export const iconMap = {
  home: (
    <IconWrapper>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10.5V20h14v-9.5" />
      <path d="M9.5 20v-5h5v5" />
    </IconWrapper>
  ),
  building: (
    <IconWrapper>
      <path d="M4 20V6.5L11 4v16" />
      <path d="M11 20h9V9l-9-2.5" />
      <path d="M7 9h1M7 12h1M7 15h1M14 11h1M17 11h1M14 14h1M17 14h1" />
    </IconWrapper>
  ),
  refresh: (
    <IconWrapper>
      <path d="M20 7v5h-5" />
      <path d="M4 17v-5h5" />
      <path d="M7.2 9A7 7 0 0 1 19 12" />
      <path d="M16.8 15A7 7 0 0 1 5 12" />
    </IconWrapper>
  ),
  paint: (
    <IconWrapper>
      <path d="m14 5 5 5" />
      <path d="m4 15 8.5-8.5a2.1 2.1 0 0 1 3 0l2 2a2.1 2.1 0 0 1 0 3L9 20H4z" />
      <path d="M4 20h5" />
    </IconWrapper>
  ),
  shield: (
    <IconWrapper>
      <path d="M12 3 5 6v6c0 4.2 2.7 7.8 7 9 4.3-1.2 7-4.8 7-9V6z" />
      <path d="M9 12.5 11 14.5 15.5 10" />
    </IconWrapper>
  ),
  landscape: (
    <IconWrapper>
      <path d="M3 18h18" />
      <path d="m4 18 5-7 4 5 3-4 4 6" />
      <circle cx="8" cy="8" r="2" />
    </IconWrapper>
  ),
  grid: (
    <IconWrapper>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" />
    </IconWrapper>
  ),
  tiles: (
    <IconWrapper>
      <path d="M4 8h16" />
      <path d="M4 16h16" />
      <path d="M8 4v16" />
      <path d="M16 4v16" />
      <rect x="4" y="4" width="16" height="16" rx="2" />
    </IconWrapper>
  ),
  helmet: (
    <IconWrapper>
      <path d="M5 14a7 7 0 0 1 14 0" />
      <path d="M3 14h18" />
      <path d="M8 14v3h8v-3" />
      <path d="M12 7v2" />
    </IconWrapper>
  ),
  layers: (
    <IconWrapper>
      <path d="m12 4 8 4-8 4-8-4z" />
      <path d="m4 12 8 4 8-4" />
      <path d="m4 16 8 4 8-4" />
    </IconWrapper>
  ),
  team: (
    <IconWrapper>
      <circle cx="8" cy="9" r="3" />
      <circle cx="16" cy="10" r="2.5" />
      <path d="M3.5 19a4.8 4.8 0 0 1 9 0" />
      <path d="M13 19a4 4 0 0 1 7 0" />
    </IconWrapper>
  ),
  chart: (
    <IconWrapper>
      <path d="M4 19h16" />
      <path d="M7 16v-4" />
      <path d="M12 16V8" />
      <path d="M17 16v-6" />
      <path d="m6 9 4-3 4 2 4-3" />
    </IconWrapper>
  ),
  clock: (
    <IconWrapper>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v5l3 2" />
    </IconWrapper>
  ),
  check: (
    <IconWrapper>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.2 2.2 4.8-5.4" />
    </IconWrapper>
  ),
  structure: (
    <IconWrapper>
      <path d="M4 20V9l8-5 8 5v11" />
      <path d="M4 12h16" />
      <path d="M8 12v8M12 7v13M16 12v8" />
    </IconWrapper>
  ),
  interior: (
    <IconWrapper>
      <path d="M5 19V5h14v14" />
      <path d="M9 19v-4a3 3 0 0 1 6 0v4" />
      <path d="M9 9h6" />
    </IconWrapper>
  ),
  exterior: (
    <IconWrapper>
      <path d="M3 18h18" />
      <path d="M6 18v-5l3-3 3 2 3-4 3 3v7" />
      <path d="M15 5h4v4" />
      <path d="m19 5-5 5" />
    </IconWrapper>
  ),
  installations: (
    <IconWrapper>
      <path d="M10 4v6L7 13l3 7" />
      <path d="M14 4h3a3 3 0 0 1 0 6h-3" />
      <path d="M14 12v8" />
      <path d="M6 18h12" />
    </IconWrapper>
  ),
  premium: (
    <IconWrapper>
      <path d="m12 4 2.3 4.6L19 9.2l-3.5 3.4.8 4.8L12 15l-4.3 2.4.8-4.8L5 9.2l4.7-.6z" />
    </IconWrapper>
  ),
  spark: (
    <IconWrapper>
      <path d="m13 3-5 9h4l-1 9 5-9h-4z" />
    </IconWrapper>
  ),
  foundation: (
    <IconWrapper>
      <path d="M4 9h16" />
      <path d="M6 9v4h12V9" />
      <path d="M4 17h16" />
      <path d="M7 17v3M12 17v3M17 17v3" />
    </IconWrapper>
  ),
  key: (
    <IconWrapper>
      <circle cx="8" cy="12" r="3.5" />
      <path d="M11.5 12H20" />
      <path d="M16 12v3" />
      <path d="M18.5 12v2" />
    </IconWrapper>
  ),
};
