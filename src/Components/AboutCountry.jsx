/* eslint-disable no-unused-vars */

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

import Grid from "@mui/material/Unstable_Grid2";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

import { useTheme } from "@mui/material";
import { useCountryInfo } from "../CountryContext.jsx";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function AboutCountry() {
  const theme = useTheme();

  const [countryInfo, setCountryInfo] = useCountryInfo();



  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
  }, [theme]);






  return (
    <Container maxWidth="xl" sx={{ bgcolor: "background.default", py: "40px" }}>
      <Link to="/">
        <Button
          startIcon={<WestOutlinedIcon />}
          sx={{
            bgcolor: "background.paper",
            color: "text.primary",
            textTransform: "capitalize",
            px: "30px",
            "&:hover": {
              backgroundColor: "background.paper",
            },
            boxShadow: "0px 0px 4px 0px #777",
            mb: "40px",
          }}
        >
          Back
        </Button>
      </Link>
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        alignItems={{ xs: "center", sm: "center", md: "center" }}
        justifyContent={{
          xs: "center",
          sm: "center",
          md: "space-around",
        }}
      >
        {/* image*/}

        <Box sx={{ width: {xs:"auto",sm:"auto",md:"400px"},mb:{xs:"35px",sm:"35px",md:"0"} }}>
          <img src={countryInfo.flags.png} alt="Back" />
        </Box>

        {/* info */}
        <Stack direction="column">
          <Typography
            variant="h2"
            color="text.primary"
            fontWeight="600"
            sx={{ mb: "25px" }}
          >
            {countryInfo.name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection:{xs:"column",sm:"column",md:"row"},
              justifyContent: {xs:"center",sm:"center",md:"space-between"},
              alignItems: {xs:"flex-start",sm:"flex-start",md:"center"},
              gap:{xs:"30px",sm:"30px",md:"60px"},
              mb: "50px",
            }}
          >
            {/* info box#1 */}
            <Box>
              <Typography
                variant="body2"
                sx={{ color: "text.primary", mb: "10px", fontWeight: "600" }}
              >
                Native Name:
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", display: "inline-block" }}
                >
                  {countryInfo.nativeName}
                </Typography>
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "text.primary", mb: "10px", fontWeight: "600" }}
              >
                Population:
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", display: "inline-block" }}
                >
                  {countryInfo.population}
                </Typography>
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "text.primary", mb: "10px", fontWeight: "600" }}
              >
                Region:
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", display: "inline-block" }}
                >
                  {countryInfo.region}
                </Typography>
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "text.primary", mb: "10px", fontWeight: "600" }}
              >
                Subregion:
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", display: "inline-block" }}
                >
                  {countryInfo.subregion}
                </Typography>
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "text.primary", mb: "10px", fontWeight: "600" }}
              >
                Capital:
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", display: "inline-block" }}
                >
                  {countryInfo.capital}
                </Typography>
              </Typography>
            </Box>
            {/* info box#2 */}
            <Box>
              <Typography
                variant="body2"
                sx={{ color: "text.primary", mb: "10px", fontWeight: "600" }}
              >
                Top-Level Domain:
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", display: "inline-block" }}
                >
                  {countryInfo.topLevelDomain &&
                    countryInfo.topLevelDomain.join(", ")}
                </Typography>
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "text.primary", mb: "10px", fontWeight: "600" }}
              >
                Currencies:
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", display: "inline-block" }}
                >
                  {countryInfo.currencies &&
                    countryInfo.currencies
                      .map((currency) => currency.name)
                      .join(", ")}
                </Typography>
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "text.primary", mb: "10px", fontWeight: "600" }}
              >
                Languages:
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", display: "inline-block" }}
                >
                  {countryInfo.languages &&
                    countryInfo.languages
                      .map((language) => language.name)
                      .join(", ")}
                </Typography>
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex",alignItems:"center" }}>
            <Typography variant="body2" color="text.primary" sx={{mr:"5px",mb:{xs:"15px",sm:"15px",md:"0"},alignSelf:{xs:"flex-start",sm:"flex-start",md:"baseline"}}}>
              Border Countries:
            </Typography>
            {/* paper box */}
<Box sx={{display:"flex",direction:{xs:"column",sm:"column",md:"row"},justifyContent:"center",flexWrap:"wrap",maxWidth:"300px"}}>
            {countryInfo.borders &&
  countryInfo.borders.map((border) => (
    <Paper
      sx={{
        color: "text.secondary",
        bgcolor: "background.paper",
        px:"10px",
        py:"2px",
        mr: "8px",
        mb:"8px"
      }}
      elevation="3"
      key={border}
      variant="outlined"
    >
      {border}
      
    </Paper>
  ))}
  </Box>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
}

export default AboutCountry;
