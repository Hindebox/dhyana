import { createSlice } from "@reduxjs/toolkit";

const meditationSlice = createSlice({
  name: "meditation",
  initialState: {
    formData: {
      email: "",
      password: "",
      remember: false,
    },
    errors: {},
    errorMessage: "",
    user: {},
    initialTime: 10,
    time: 10, //minutes
    seconds: 0,
    video: "/src/assets/videos/timer-default-bg.mp4",
    card: null,
    displaySwipe: false,
  },
  reducers: {
    //handle form data
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
    //handle form errors
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    //set user info
    setUser: (state, action) => {
      state.user = action.payload;
    },
    //set timer for timer card
    setTime: (state, action) => {
      state.time = action.payload;
    },
    //set seconds in timer
    setSeconds: (state, action) => {
      state.seconds = action.payload;
    },
    //set initial time for the reset timer action
    setInitialTime: (state, action) => {
      state.initialTime = action.payload;
    },
    //set video bg for timer card
    setVideo: (state, action) => {
      state.video = action.payload;
    },
    //know selected card in home to trigger the swipe
    setCard: (state, action) => {
      state.card = action.payload;
    },
    //display the correct swipe
    setDisplaySwipe: (state, action) => {
      state.displaySwipe = action.payload;
    },
  },
});

export const {
  setFormData,
  setErrors,
  setErrorMessage,
  setUser,
  setTime,
  setInitialTime,
  setSeconds,
  setVideo,
  setCard,
  setDisplaySwipe,
} = meditationSlice.actions;
export default meditationSlice.reducer;
