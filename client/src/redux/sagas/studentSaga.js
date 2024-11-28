import { call, put, takeEvery } from "redux-saga/effects";
import {
  getCardDataSuccess,
  getCardDataFailure,
} from "../actions/studentAction";
import { getCardDataService } from "@/services";

function* handleFetchCardData() {
  try {
    const data = yield call(getCardDataService);
    yield put(getCardDataSuccess(data.data));
  } catch (error) {
    yield put(getCardDataFailure(error.message));
  }
}

export default function* studentSaga() {
  yield takeEvery("GET_CARD_DATA_REQUEST", handleFetchCardData);
}
