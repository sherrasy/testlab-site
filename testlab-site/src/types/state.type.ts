import { store } from "@/store";
import { TFormData } from "./form-data.type";

export type FormState = {
    isPosting: boolean;
    currentFormData:TFormData | null;
    hasPostingError: boolean; 
  };


export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;
