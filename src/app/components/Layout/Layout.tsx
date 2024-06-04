import { Container } from "@mui/material";
import "./layout.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container component="main" maxWidth="lg" sx={{ ...styles.container }}>
      {children}
    </Container>
  );
};

const styles = {
  container: {
    border: "2px solid red",
    height: "100vh",
  },
};

export default Layout;
