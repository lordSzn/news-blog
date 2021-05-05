import { BrowserRouter } from "react-router-dom"
import "./assets/styles/nullstyle.scss"
import { Footer, Header, Wrapper } from "./layout"
import { Routes } from "./routes"

export function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Routes />
        <Footer />
      </Wrapper>
    </BrowserRouter>
  )
}
