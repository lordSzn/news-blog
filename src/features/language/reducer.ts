import { createSlice } from "@reduxjs/toolkit"

interface InitialState {
  languages: Object | null
  description: string
  loadingStatus: "idle" | "pending" | "fail"
}
const initialState: InitialState = {
  languages: null,
  description: "",
  loadingStatus: "idle",
}

const languageSlice = createSlice({
  name: "language",
  initialState: initialState,
  reducers: {
    languagesLoading(state) {
      if (state.loadingStatus === "idle") {
        state.loadingStatus = "pending"
      }
    },
    languagesReceived(state, action) {
      if (state.loadingStatus === "pending") {
        state.languages = action.payload
        state.loadingStatus = "idle"
      }
    },
    languagesLoadingFail(state) {
      if (state.loadingStatus === "pending") {
        state.loadingStatus = "fail"
      }
    },
  },
})

export const reducer = languageSlice.reducer
export const {
  languagesLoading,
  languagesReceived,
  languagesLoadingFail,
} = languageSlice.actions
