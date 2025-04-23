
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../reducers/themeSlice';
import languageReducer from '../reducers/languageSlice';

const store = configureStore({
   reducer: {
      theme: themeReducer,
      language: languageReducer,
   },
});

export default store;
