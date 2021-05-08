import { createSlice } from "@reduxjs/toolkit"

interface InitialStateType {
  category: string[]
  status: "idle" | "pending" | "success" | "fail"
  error: null | string
}
const initialState: InitialStateType = {
  category: [
    "regional",
    "technology",
    "lifestyle",
    "business",
    "general",
    "programming",
    "science",
    "entertainment",
    "world",
    "sports",
    "finance",
    "academia",
    "politics",
    "health",
    "opinion",
    "food",
    "game",
  ],
  status: "idle",
  error: null,
}

const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
    categoryLoading(state) {
      if (state.status === "idle") {
        state.status = "pending"
      }
    },
    categoryReceived(state, action) {
      if (state.status === "pending") {
        state.category = action.payload
        state.status = "success"
      }
    },
    categoryFailLoading(state, action) {
      if (state.status === "pending") {
        state.error = action.payload
      }
    },
  },
})
export const reducer = categorySlice.reducer
export const {
  categoryLoading,
  categoryReceived,
  categoryFailLoading,
} = categorySlice.actions
