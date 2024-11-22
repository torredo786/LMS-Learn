const initialState = {
  cardData: "",
  loading: false,
  error: null,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CARD_DATA_REQUEST":
      return { ...state, loading: true, error: null };
    case "GET_CARD_DATA_SUCCESS":
      return { ...state, loading: false, cardData: action.payload };
    case "GET_CARD_DATA_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default studentReducer;
