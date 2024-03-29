type Props = {
  fill: string;
};

const EditIcon = ({ fill = "black" }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={fill}>
      <path d="M20.7,5.537a1.024,1.024,0,0,1,0,1.448L8.527,19.158,3,21l1.842-5.527L17.015,3.3a1.024,1.024,0,0,1,1.448,0Z" />
    </svg>
  );
};

export default EditIcon;
