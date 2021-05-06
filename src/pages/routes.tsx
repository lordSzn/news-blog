import { FC } from "react"
import { Route, Switch } from "react-router"
import { Error404Page } from "./error404Page"
import { Home } from "./home"

interface RouteItemsType {
  path?: string
  isProtected?: boolean
  component?: FC
  exact?: boolean
}

export const routeList: RouteItemsType[] = [
  {
    path: "/news/:language",
    exact: true,
    component: Home,
  },
  {
    path: "*",
    component: Error404Page,
  },
]
export const Routes = () => {
  return (
    <Switch>
      {routeList.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Switch>
  )
}
