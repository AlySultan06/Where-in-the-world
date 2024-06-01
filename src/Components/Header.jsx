/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import Button from "@mui/material/Button";

function Header(props) {
  const theme = useTheme();

  return (
    <Container maxWidth="xl" sx={{ bgcolor: "background.paper", py: "25px",boxShadow:"1px 0px 20px 0px #0000001a",position:"relative" }}>
      <Stack alignItems="center" justifyContent="space-between" direction="row" >
        <Typography variant="h1" color="text.primary">
          Where in the World?
        </Typography>

        <Button
          sx={{ color: "text.primary", textTransform: "capitalize" }}
          
          startIcon={<BedtimeOutlinedIcon />}
          onClick={props.onClick}
        >
         <Typography variant="body2">Dark Mode</Typography> 
        </Button>
      </Stack>
    </Container>
  );
}

export default Header;
