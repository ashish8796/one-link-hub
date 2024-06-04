import { Theme } from "@emotion/react";
import { Box, Button, SxProps } from "@mui/material";
import { useRouter } from "next/navigation";

const Welcome = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/new-one-link");
  };

  return (
    <Box className="flex-center" sx={styles.box}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleClick}
      >
        Get Started!
      </Button>
    </Box>
  );
};

interface IWelcomeStyleProps {
  box: SxProps<Theme>;
}

const styles: IWelcomeStyleProps = {
  box: {
    height: "100%",
  },
};

export default Welcome;
