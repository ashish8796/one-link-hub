import Image from "next/image";

interface ILogoProps {
  width: number;
  height: number;
}

const Logo = ({ width, height }: ILogoProps) => {
  return (
    <Image
      src={"https://placehold.co/400"}
      alt="Logo"
      width={width}
      height={height}
      style={{ ...styles }}
    />
  );
};

const styles = {
  borderRadius: "50%",
};

export default Logo;
