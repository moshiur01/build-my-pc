import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cpu: null,
  ram: null,
  monitor: null,
  storage: null,
  motherboard: null,
  powerSupply: null,
  others: null,
};

const PcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      if (action.payload.Category === "CPU/Processor") {
        state.cpu = action.payload;
      } else if (action.payload.Category === "Motherboard") {
        state.motherboard = action.payload;
      } else if (action.payload.Category === "RAM") {
        state.ram = action.payload;
      } else if (action.payload.Category === "Power Supply Unit") {
        state.powerSupply = action.payload;
      } else if (action.payload.Category === "Storage Device") {
        state.storage = action.payload;
      } else if (action.payload.Category === "Monitor") {
        state.monitor = action.payload;
      } else if (action.payload.Category === "Others") {
        state.others = action.payload;
      }
    },

    clearProducts: (state) => {
      state.cpu = null;
      state.monitor = null;
      state.motherboard = null;
      state.storage = null;
      state.powerSupply = null;
      state.ram = null;
      state.others = null;
    },
  },
});

export const { addProducts, clearProducts } = PcBuilderSlice.actions;

export default PcBuilderSlice.reducer;
