import { Action } from "redux";
import { action } from "typesafe-actions";
import { Codex, CodexTypes } from "./types";

export const triggerLoading = (): Action => action(CodexTypes.IS_LOADING);

export const getAsyncData = (urlPath: string) => action(CodexTypes.ASYNC_GET_DATA, { urlPath });

export const setData = (data: Codex) => action(CodexTypes.SET_DATA, { data });

export const failedRequest = (error: Error) =>
  action(CodexTypes.FAILURE, undefined, undefined, error);
