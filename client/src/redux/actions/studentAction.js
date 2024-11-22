import {
  GET_CARD_DATA_REQUEST,
  GET_CARD_DATA_SUCCESS,
  GET_CARD_DATA_FAILURE,
} from "./actionTypes";

export const getCardDataRequest = () => ({
  type: GET_CARD_DATA_REQUEST,
});

export const getCardDataSuccess = (data) => ({
  type: GET_CARD_DATA_SUCCESS,
  payload: data,
});

export const getCardDataFailure = (error) => ({
  type: GET_CARD_DATA_FAILURE,
  payload: error,
});
