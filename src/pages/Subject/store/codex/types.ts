/**
 * Action Types
 */

export enum CodexTypes {
  SET_DATA = "data/set_data",
  FAILURE = "data/failure",
  IS_LOADING = "data/is_loading",
  ASYNC_GET_DATA = "data/async_get_data",
}

/**
 * Data Types
 */

export interface Codex {
  count: number
  next: string | null
  previous: string | null
  results: any[]
}

/**
 * State Types
 */

export interface CodexState {
  data: Codex
  isLoading: boolean
}

export interface CodexAction {
  type: string
  payload: CodexState
}
