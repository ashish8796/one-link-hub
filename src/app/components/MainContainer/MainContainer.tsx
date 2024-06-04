import { Container, SxProps, Theme } from "@mui/material";

interface IMainContainerProps {
  children: React.ReactNode;
}

const MainContainer = ({ children }: IMainContainerProps) => {
  return <Container sx={styles}>{children}</Container>;
};

const styles: SxProps<Theme> = {
  width: "100%",
  padding: "2rem 4rem"
};

export default MainContainer;
