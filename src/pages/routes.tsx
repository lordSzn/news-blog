import { FC } from "react"
import { Route, Switch } from "react-router"
import { Error404Page } from "./error404Page"
import { Favorites } from "./favorites"
import { Home } from "./home"

interface RouteItemsType {
  path?: string
  isProtected?: boolean
  component?: FC
  exact?: boolean
}

export const routeList: RouteItemsType[] = [
  {
    path: "/:language/news",
    exact: true,
    component: Home,
  },
  {
    path: "/favorites",
    component: Favorites,
  },
  {
    path: "*",
    component: Error404Page,
    exact: true
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
