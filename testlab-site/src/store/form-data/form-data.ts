import { FormState } from '@frontend-types/state.type';
import { createSlice } from '@reduxjs/toolkit';
import { REDUCER_NAME } from '@utils/constant';
import { sendForm } from './api-actions';


const defaultState: FormState = {
  currentFormData:null,
  isPosting: false,
  hasPostingError: false,
};

export const formData = createSlice({
  name: REDUCER_NAME,
  initialState:defaultState,
  reducers: {  },
  extraReducers(builder) {
    builder
        .addCase(sendForm.pending, (state) => {
        state.isPosting = true;
        state.hasPostingError = false;
      })
      .addCase(sendForm.fulfilled, (state, {payload}) => {
        state.isPosting = false;
        state.currentFormData = payload;
        state.hasPostingError = false;
      })
      .addCase(sendForm.rejected, (state) => {
        state.isPosting = false;
        state.hasPostingError = true;
      })
  },
});

