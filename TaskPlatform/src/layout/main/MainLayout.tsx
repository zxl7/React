import React, { Suspense } from "react"
const Header = React.lazy(() => import("../header/index.tsx"))

import "./index.less"

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <div className="content layout-content">{children}</div>
    </div>
  )
}

export default MainLayout
