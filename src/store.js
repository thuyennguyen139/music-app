import { devToolsEnhancer } from 'redux-devtools-extension';
import { createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './Reducer';
const store = createStore(
    rootReducer,
    devToolsEnhancer()
  );

// const store = configureStore({
//     reducer: openReducer
//   })
  
export default store;