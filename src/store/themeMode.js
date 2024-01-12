import { createSlice } from "@reduxjs/toolkit";
import sun from "../images/sun.webp"
import moon from "../images/moon.webp"

const themeSlicer = createSlice({
  name: "themeMode",
  initialState: {
    themeValue: localStorage.getItem("themeMode") || "light",
    setBgColor: localStorage.getItem("themeMode") === 'dark' ? 'App App_Dark' : 'App',
    setSocialClass: localStorage.getItem("themeMode") === 'dark' ? 'social App_Darker' : 'social',
    setNavbarClass: localStorage.getItem("themeMode") === 'dark' ? 'navbar geoStyle App_Darker' : 'navbar geoStyle',
    setNavLinksClass: localStorage.getItem("themeMode") === 'dark' ? 'navLinks navLinks_Dark' : 'navLinks',
    setTitleClass: localStorage.getItem("themeMode") === 'dark' ? 'main_title main_title_Dark' : 'main_title',
    setFormBg: localStorage.getItem("themeMode") === 'dark' ? 'form_parent form_parent_dark' : 'form_parent',
    setDashboardMode: localStorage.getItem("themeMode") === 'dark' ? 'menu_dashboard menu_dashboard_dark' : 'menu_dashboard',
    setSkillTitle: localStorage.getItem("themeMode") === 'dark' ? 'skillTitle skillTitle_dark' : 'skillTitle',
    setTogglerIco: localStorage.getItem("themeMode") === 'dark' ? `${sun}` : `${moon}`
  },
  reducers: {
    changeThemeToDark(state) {
      state.themeValue = "dark";
      localStorage.setItem("themeMode", "dark");

      state.setBgColor = 'App App_Dark'
      state.setSocialClass = 'social App_Darker'
      state.setNavbarClass = 'navbar geoStyle App_Darker'
      state.setNavLinksClass = 'navLinks navLinks_Dark'
      state.setTitleClass = 'main_title main_title_Dark'
      state.setFormBg = 'form_parent form_parent_dark'
      state.setDashboardMode = 'menu_dashboard menu_dashboard_dark'
      state.setSkillTitle = 'skillTitle skillTitle_dark'
      state.setTogglerIco = `${sun}`
    },
    changeThemeToLight(state) {
      state.themeValue = "light";
      localStorage.setItem("themeMode", "light");

      state.setBgColor = 'App'
      state.setSocialClass = 'social'
      state.setNavbarClass = 'navbar geoStyle'
      state.setNavLinksClass = 'navLinks'
      state.setTitleClass = 'main_title'
      state.setFormBg = 'form_parent'
      state.setDashboardMode = 'menu_dashboard'
      state.setSkillTitle = 'skillTitle'
      state.setTogglerIco = `${moon}`
    },
  },
});

export const { changeThemeToDark, changeThemeToLight } = themeSlicer.actions;
export default themeSlicer.reducer;
