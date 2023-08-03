import { configureStore } from "@reduxjs/toolkit";
import PcBuilderReducer from "./features/pcBuilderSlice";

const store = configureStore({
  reducer: {
    pcBuilder: PcBuilderReducer,
  },
});

export default store;
