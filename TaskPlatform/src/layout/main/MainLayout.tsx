import React from "react"
// import { TabBar } from "antd-mobile"
import { useNavigate, useLocation } from "react-router-dom"
// import { ShoppingBag, TransactionOrder, User, Wallet } from "@icon-park/react"
// import useI18n from "@/hooks/i18n.ts"
import "./index.less"

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location
  const [setActiveKey] = React.useState(pathname)

  const tabs = [
    // {
    //   key: "/",
    //   title: t("tabs.home"),
    //   icon: activeKey === "/" ? <ShoppingBag theme="two-tone" size="24" fill={["#333", "#FFC300"]} /> : <ShoppingBag size="24" />,
    // },
  ]

  const setRouteActive = (value: string) => {
    // setActiveKey(value)
    navigate(value)
  }

  return (
    <div className="main-layout">
      <div className="content layout-content">{children}</div>
      <div className="footer layout-tab"></div>
    </div>
  )
}

export default MainLayout
