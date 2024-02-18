type Props = {
  fill: string;
};

const ClockIcon = ({ fill = "black" }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill={fill}>
      <defs>
        <style>.cls-1</style>
      </defs>
      <title>Asset 551</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="_1" data-name="1">
          <path
            className="cls-1"
            d="M45,42H40V40h5a1,1,0,0,0,1-1V5a1,1,0,0,0-1-1H3A1,1,0,0,0,2,5V39a1,1,0,0,0,1,1H8v2H3a3,3,0,0,1-3-3V5A3,3,0,0,1,3,2H45a3,3,0,0,1,3,3V39A3,3,0,0,1,45,42Z"
          />
          <rect className="cls-1" x="1" y="10" width="46" height="2" />
          <rect className="cls-1" x="23" width="2" height="6" />
          <rect className="cls-1" x="31" width="2" height="6" />
          <rect className="cls-1" x="39" width="2" height="6" />
          <rect className="cls-1" x="7" width="2" height="6" />
          <rect className="cls-1" x="15" width="2" height="6" />
          <path
            className="cls-1"
            d="M24,48A16,16,0,1,1,40,32,16,16,0,0,1,24,48Zm0-30A14,14,0,1,0,38,32,14,14,0,0,0,24,18Z"
          />
          <path
            className="cls-1"
            d="M28.23,38.64l-5-6a1,1,0,0,1,.06-1.35l8-8,1.42,1.42-7.36,7.35,4.42,5.3Z"
          />
          <rect className="cls-1" x="12" y="31" width="2" height="2" />
          <rect className="cls-1" x="23" y="42" width="2" height="2" />
          <rect className="cls-1" x="23" y="20" width="2" height="2" />
          <rect className="cls-1" x="34" y="31" width="2" height="2" />
        </g>
      </g>
    </svg>
  );
};

export default ClockIcon;
