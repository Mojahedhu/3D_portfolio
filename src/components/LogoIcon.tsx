interface LogoIconProps {
  icon: {
    imgPath: string;
    name?: string;
  };
  index?: number;
}
const LogoIcon = ({ icon, index }: LogoIconProps) => {
  const { imgPath, name } = icon;
  return (
    <div className="flex-center marquee-item flex-none">
      <img src={imgPath} alt={name || `logo image ${index + 1}`} />
    </div>
  );
};

export default LogoIcon;
