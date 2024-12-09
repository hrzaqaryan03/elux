import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  services: [
    {
      id: 1,
      name: "Hair Extension",
      description: "Lorem ipsum dolor sit amet",
      priceRange: "55 - 105",
      sale:'50 - 95',
    },
    {
      id: 2,
      name: "Brides-to-be",
      description: "Lorem ipsum dolor sit amet",
      priceRange: "55 - 105",
    },
    {
      id: 3,
      name: "Braids for Children",
      description: "Lorem ipsum dolor sit amet",
      priceRange: "55 - 105",
    },
    {
      id: 4,
      name: "Individual Makeup Services",
      description: "Lorem ipsum dolor sit amet",
      priceRange: "55 - 105",
    },
    {
      id: 5,
      name: "Hair Care",
      description: "Lorem ipsum dolor sit amet",
      priceRange: "55 - 105",
    },
  ],
  images: [
    '/assets/img/pricing2.png',
    '/assets/img/pricing3.png',
    '/assets/img/pricing4.png',
    '/assets/img/pricing5.png',
    '/assets/img/pricing6.png',
  ],
};

const pricingSlice = createSlice({
  name: "pricing",
  initialState,
  reducers: {},
});

export default pricingSlice.reducer;
