import { createSlice } from "@reduxjs/toolkit";

const languageSlicer = createSlice({
  name: "languageSlicer",
  initialState: {
    value: localStorage.getItem("language") || "geo",
  },
  reducers: {
    makeEng(state) {
      state.value = "eng";
      localStorage.setItem("language", "eng");
    },
    makeGeo(state) {
      state.value = "geo";
      localStorage.setItem("language", "geo");
    },
  },
});

export const { makeEng, makeGeo } = languageSlicer.actions;
export default languageSlicer.reducer;
