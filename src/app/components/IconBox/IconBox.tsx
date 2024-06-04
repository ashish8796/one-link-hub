import { Theme } from "@emotion/react";
import { Box, SxProps } from "@mui/material";

interface IIconBoxProps {
  children: React.ReactNode;
}

const IconBox = ({ children }: IIconBoxProps) => {
  return <Box className="flex-center" sx={styles}>{children}</Box>;
};

const styles: SxProps<Theme> = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: "#E6E6E6"
};

export default IconBox;
