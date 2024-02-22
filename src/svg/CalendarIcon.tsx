type Props = {
  fill: string;
};

const CalendarIcon = ({ fill = "black" }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill={fill}>
      <g data-name="67-Calendar">
        <path d="M29 0H3a3 3 0 0 0-3 3v26a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm1 29a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10h28zM10 8V6h12v2zm20 0h-6V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3H2V3a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1z" />
        <path d="M4 4h2v2H4zM26 4h2v2h-2z" />
        <rect x="23" y="12" width="4" height="4" rx="1" ry="1" />
        <rect x="17" y="12" width="4" height="4" rx="1" ry="1" />
        <rect x="11" y="12" width="4" height="4" rx="1" ry="1" />
        <rect x="5" y="18" width="4" height="4" rx="1" ry="1" />
        <rect x="23" y="18" width="4" height="4" rx="1" ry="1" />
        <rect x="17" y="18" width="4" height="4" rx="1" ry="1" />
        <rect x="11" y="18" width="4" height="4" rx="1" ry="1" />
        <rect x="5" y="24" width="4" height="4" rx="1" ry="1" />
        <rect x="17" y="24" width="4" height="4" rx="1" ry="1" />
        <rect x="11" y="24" width="4" height="4" rx="1" ry="1" />
      </g>
    </svg>
  );
};

export default CalendarIcon;
