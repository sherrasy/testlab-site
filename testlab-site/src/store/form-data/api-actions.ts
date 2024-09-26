import { SendFormDto } from "@dto/send-form.dto";
import { TFormData } from "@frontend-types/form-data.type";
import { AppDispatch, State } from "@frontend-types/state.type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { REDUCER_NAME } from "@utils/constant";
import { AxiosInstance } from "axios";


export const sendForm = createAsyncThunk<
  TFormData,
  SendFormDto,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  `${REDUCER_NAME}/send-form`,
  async (dto, { extra: api }) => {
    try {
      const { data } = await api.post<TFormData>('', dto);
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);
