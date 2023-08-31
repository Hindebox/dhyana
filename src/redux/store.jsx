import { configureStore } from "@reduxjs/toolkit";
import meditationReducer from "./meditation";

const saveStateToSessionStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("reduxState", serializedState);
  } catch (error) {
    console.error("Error saving state to local storage:", error);
  }
};

const loadStateFromSessionStorage = () => {
  try {
    const serializedState = sessionStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined; // return undefined if no state found in local storage
    }
    return JSON.parse(serializedState);
  } catch (error) {
    // Handle any errors while loading from local storage
    console.error("Error loading state from local storage:", error);
    return undefined; // return undefined if any error occurs
  }
};

const store = configureStore({
  reducer: {
    meditation: meditationReducer,
  },
  preloadedState: loadStateFromSessionStorage(), // Load state from local storage on store initialization
});

store.subscribe(() => {
  const state = store.getState();
  saveStateToSessionStorage(state); // Save state to local storage whenever there is a state change
});

export default store;
