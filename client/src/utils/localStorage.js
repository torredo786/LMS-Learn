export const loadLocalState = () => {
    try {
      const storeDataState = localStorage.getItem("storeData");
      if (storeDataState === null) return undefined;
      return JSON.parse(storeDataState);
    } catch (error) {
      return undefined;
    }
  };
  
  export const saveLocalState = (state) => {
    try {
      const storeDataState = JSON.stringify(state);
      localStorage.setItem("storeData", storeDataState);
    } catch (err) {
      console.log(err);
    }
  };
  