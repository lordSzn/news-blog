import { useEffect } from "react"
import { useHistory } from "react-router"

import "./assets/styles/nullstyle.scss"
import { Footer, Header, Wrapper } from "./layout"
import { Routes } from "./routes"

export function App() {
  const history = useHistory()
  useEffect(() => {
    if (window.location.pathname === "/") {
      history.push("news/ru")
    }
  }, [history])
  return (
    <Wrapper>
      <Header />
      <Routes />
      <Footer />
    </Wrapper>
  )
}
