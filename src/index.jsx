import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import { Provider } from 'react-redux'

import store from './redux/store.js'

import createSagaMiddleware from 'redux-saga'
import { takeLatest, put } from 'redux-saga/effects'
import axios from 'axios'

const root = ReactDOM.createRoot(document.getElementById('root'));

const sagaMiddleware = createSagaMiddleware();

const gifSearchReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_GIF' :
      return action.payload;
      default:
        return state;
  }
}
const gifFavReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_GIF' :
      return action.payload;
      default:
        return state;
}
}
function* fetchGif(action) {
  console.log('FETCH GIFS:', action);
  try{
      const elementResponse = yield axios.get('/api/search/')
      yield put({type: 'SET_GIF', payload: elementResponse.data})
  } catch(error) {
    console.log('error:', error);
  }
};

function* addGif(action) {
  console.log('Add GIFS:', action);
  try{
      yield axios.post('/api/favorites/', action.payload)
      yield put({type: 'FETCH_GIFS'})
  } catch(error) {
    console.log('error:', error);
  }
};


function* rootSaga() {
  yield takeLatest ('FETCH_GIFS', fetchGif)
  yield takeLatest ('ADD_GIF', addGif)

}

const storeInstance = createStore (
  combineReducers({
    gifSearchReducer,
    gifFavReducer
  }),
  applyMiddleware( sagaMiddleware, logger)
)

sagaMiddleware.run(rootSaga)



const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
    <Provider store= {store}>
    <App />
    </Provider>
  </React.StrictMode>
);

