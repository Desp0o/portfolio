import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./languageSlice";
import themeSlicer from "./themeMode"

const store = configureStore({
    reducer:{
        language: languageSlice,
        theme: themeSlicer
    }
})

export default store