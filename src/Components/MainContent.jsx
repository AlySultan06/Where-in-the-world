/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useTheme } from "@mui/material";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import InputAdornment from "@mui/material/InputAdornment";

import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

import {Link} from 'react-router-dom'

import { useCountryInfo } from "../CountryContext";

//Input props
const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 4;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: "fit-content",
      maxWidth: "100%",
    },
  },
};







const names = ["Africa", "Asia", "Europe", "Americas", "Oceania"];

function MainContent() {
  // Countries state
  const [data, setData] = useState([]);

  //filtered countries
  const [filteredData, setFilteredData] = useState([]);

  // region state
  const [region, setRegion] = useState("");

  //loading countries
  const [loading, setLoading] = useState(true);


  const [countryInfo,setCountryInfo] = useCountryInfo()


  const theme = useTheme();

  const handleChange = (event) => {
    setRegion(event.target.value);
  };



  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
  }, [theme]);








  //Fetch Countries
  useEffect(() => {
    async function fetchData() {
      try {
        let response2 = await axios.get(
          "../../data.json"
        );

        let response =  response2.data.filter((country) => country.name.toLowerCase() !== "israel")
        
        setData(response);
        setFilteredData(response);
        console.log(response)
        
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  //Filter countries by region
  useEffect(() => {
    if (region) {
      const filtered = data.filter((country) => country.region === region);
      setFilteredData(filtered);
    } 
  }, [region]);

  return (
    <Container maxWidth="xl" sx={{ bgcolor: "background.default", py: "40px" }}>
      {/* Inputs */}
      <Stack
        direction={{ xs: "column", sm: "row", md: "row" }}
        alignItems={{ xs: "flex-start", sm: "center", md: "center" }}
        justifyContent={{
          xs: "flex-start",
          sm: "space-between",
          md: "space-between",
        }}
        gap={{ xs: "60px", sm: "0", md: "0" }}
        sx={{ mb: "100px" }}
      >
        {/* Country Search */}
        <Autocomplete
          id="country-select-demo"
          sx={{
            width: { xs: "100%", sm: "30%", md: "30%" },
            bgcolor: "background.paper",
          }}
          options={data}
          autoHighlight
          getOptionLabel={(option) => option.name}
          renderOption={(props, option) => (
          <Link to="/AboutCountry">
            <li {...props}  onClick={() => setCountryInfo(option)}>
              <Typography variant="body1" color="text.primary">
                {option.name}
              </Typography>
            </li>
            </Link>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search for a country..."
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlinedIcon sx={{ color: "text.primary" }} />
                  </InputAdornment>
                ),
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
            />
          )}
        />

        {/* region select */}
        <FormControl
          sx={{
            m: { xs: 0, sm: 1, md: 1 },
            width: { xs: "50%", sm: "20%", md: "20%" },
            mt: 3,
          }}
        >
          <Select
            sx={{ bgcolor: "background.paper" }}
            displayEmpty
            value={region}
            onChange={handleChange}
            renderValue={(selected) => {
              if (!selected) {
                return (
                  <Typography variant="body1" color="text.primary">
                    Filter by Region
                  </Typography>
                );
              }

              return selected;
            }}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                sx={{ textTransform: "capitalize" }}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>

      {/* Cards */}
      <Countries filteredData={filteredData} loading={loading} />
    </Container>
  );
}

function Countries({ filteredData, loading }) {

  //context info
  const [countryInfo,setCountryInfo] = useCountryInfo()


  if (loading) {
    return (
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <span className="loader"></span>
      </div>
    );
  }
  return (
    <Grid
      container
      spacing={{ xs: 0, sm: 5, md: 5 }}
      sx={{ justifyContent: { xs: "center" } }}
    >
      {filteredData.map((country) => (
        <Grid
          item
          xs={9}
          sm={4}
          md={3}
          key={country.name}
          sx={{ mb: { xs: "30px", sm: "15px", md: "15px" } }}
        >
          <Link to="/AboutCountry">
          <Card onClick={() => setCountryInfo(country)}>
            <CardMedia
              component="img"
              height="140"
              image={country.flags.png}
              alt={country.name}
            />
            <CardContent>
              <Typography variant="h2" color="text.primary" sx={{ mb: "20px" }}>
                {country.name}
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "text.primary", mb: "6px", fontWeight: "600" }}
              >
                Population:
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", display: "inline-block" }}
                >
                  {country.population}
                </Typography>
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "text.primary", mb: "6px", fontWeight: "600" }}
              >
                Capital:
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", display: "inline-block" }}
                >
                  {country.capital}
                </Typography>
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "text.primary", fontWeight: "600" }}
              >
                Region:
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", display: "inline-block" }}
                >
                  {country.region}
                </Typography>
              </Typography>
            </CardContent>
          </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

export default MainContent;
