interface LogoIconProps {
  icon: {
    imgPath: string;
    name?: string;
  };
}
const LogoIcon = ({ icon }: LogoIconProps) => {
  const { imgPath, name } = icon;
  return (
    <div className="flex-center marquee-item flex-none">
      <img src={imgPath} alt={name || "logo image"} />
    </div>
  );
};

export default LogoIcon;
