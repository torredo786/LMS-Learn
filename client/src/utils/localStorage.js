export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined; // No state found in localStorage
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Failed to load state from localStorage:", error);
    return undefined;
  }
};

// Save state to localStorage
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (error) {
    console.error("Failed to save state to localStorage:", error);
  }
};