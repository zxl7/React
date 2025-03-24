import "./App.css"
import { RenderRoutes } from "@/route/render-routes.tsx"
import { axiosInstance } from "@/http/axios-instance.ts"
import { configure } from "axios-hooks"
import { Button } from "antd"

function App() {
  configure({
    axios: axiosInstance,
  })
  return (
    <>
      <RenderRoutes />
    </>
  )
}

export default App
