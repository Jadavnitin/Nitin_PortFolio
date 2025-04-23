import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   language: 'en', 
};


const languageSlice = createSlice({
   name: 'language',
   initialState,
   reducers: {
    
      toggleLanguage: (state) => {
         state.language = state.language === 'en' ? 'hi' : 'en'; 
      },

     
      setLanguage: (state, action) => {
         state.language = action.payload;
      },
   },
});


export const { toggleLanguage, setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
