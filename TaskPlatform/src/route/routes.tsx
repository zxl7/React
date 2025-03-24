import React from "react"
import Home from "@/view/home"
import Login from "@/view/login"

export interface AppRoute {
  path: string
  element: React.ReactNode
  auth?: boolean
  children?: AppRoute[]
}

export const routes: AppRoute[] = [
  { path: "/", element: <Home />, auth: false },
  { path: "*", element: <Home />, auth: false },
  { path: "/login", element: <Login />, auth: false },
]
