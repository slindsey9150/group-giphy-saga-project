import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

const sagaMiddleware = createSagaMiddleware();

const gifFavReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_GIF":
      return action.payload;
    default:
      return state;
  }
};

const gifSearchReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_GIF":
      return action.payload;
    default:
      return state;
  }
};

const searchElement = (state = {}, action) => {
  switch (action.type) {
    case "SEARCH_GIF":
      return action.payload;
    default:
      return state;
  }
};
function* setSearch(action) {
  console.log("SET SEARCH", action);
  try {
    const elementSearch = yield axios.get("/api/search/");
    yield put({ type: "FETCH_GIFS", payload: elementSearch.data });
  } catch (error) {
    console.log("error:", error);
  }
}

function* fetchGif(action) {
  console.log("FETCH GIFS:", action);
  try {
    const elementResponse = yield axios.get("/api/search/");
    yield put({ type: "SET_GIF", payload: elementResponse.data });
  } catch (error) {
    console.log("error:", error);
  }
}

function* addGif(action) {
  console.log("Add GIFS:", action);
  try {
    yield axios.post("/api/favorites/", action.payload);
    yield put({ type: "FETCH_GIFS" });
  } catch (error) {
    console.log("error:", error);
  }
}

function* rootSaga() {
  yield takeLatest("FETCH_GIFS", fetchGif);
  yield takeLatest("ADD_GIF", addGif);
  yield takeLatest("SEARCH_GIF", setSearch);
}

const store = createStore(
  combineReducers({
    searchElement,
    gifFavReducer,
    gifSearchReducer,
  }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default store;
