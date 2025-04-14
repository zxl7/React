import "./index.less"
import { Link, useLocation } from "react-router-dom"

function Header() {
  // 家园,AI学院,创新想法,论坛,视频,人生指南,登录,加入社区
  const navItems = [
    { title: "家园", path: "/home" },
    { title: "AI学院", path: "/ai-academy" },
    { title: "创新想法", path: "/innovation-ideas" },
    { title: "论坛", path: "/forum" },
    { title: "视频", path: "/video" },
    { title: "人生指南", path: "/life-guides" },
  ]
  // 声明响应式pathname
  const location = useLocation()

  return (
    <header className="header">
      <nav className="left-nav">
        {navItems.map((item, index) => (
          <Link className={`nav-item ${location.pathname === item.path ? "active" : ""}`} key={index} to={item.path}>
            {item.title}
          </Link>
        ))}
      </nav>
      <nav className="right-nav">
        <Link className="nav-item" to="/login">
          登录
        </Link>
        <Link className="nav-item" to="/join-community">
          加入社区
        </Link>
      </nav>
    </header>
  )
}
export default Header
