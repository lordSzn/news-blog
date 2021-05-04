import { BrowserRouter } from "react-router-dom"
import "./assets/styles/nullstyle.scss"
import { Footer, Header } from "./layout"
import { Routes } from "./routes"

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  )
}
