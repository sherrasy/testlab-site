import {  State } from '@frontend-types/state.type';

export const getIsPosting = (state: State): boolean => state.isPosting;
export const getHasPostingError = (state: State): boolean =>
  state.hasPostingError;
