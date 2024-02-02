type Props = {
  fill: string;
};

const MoonIcon = ({ fill = "black" }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={fill}>
      <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18A8,8,0,0,1,9.791,4.317a9.967,9.967,0,0,0,5.032,15.159A7.947,7.947,0,0,1,12,20Z" />
    </svg>
  );
};

export default MoonIcon;
