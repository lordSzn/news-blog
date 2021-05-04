import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { App } from "./App"
import { store } from "./lib/store/store"

render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.querySelector("#root")
)
