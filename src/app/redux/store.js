const { configureStore } = require("@reduxjs/toolkit");
import empReducer from "./slice";
export const store = configureStore({
  reducer: {
    employData: empReducer,
  },
});
