import "./index.less"
import MainLayout from "@/layout/main/MainLayout.tsx"

function Home() {
  return (
    <>
      <MainLayout>
        <div className="home-container">
          <div className="home-content">
            <h1 className="title-h1">欢迎来到 TaskPlatform</h1>
            <p className="title-p">这是一个基于 React + TypeScript + Vite 的任务管理平台， 提供了任务的创建、编辑、删除、完成等功能。</p>
            <p className="title-p">你可以在这里管理你的任务， 并根据任务的状态进行筛选和排序。</p>
          </div>
          {/* 侧边栏 */}
          <div className="home-sidebar"></div>
          <div className="sidebar-content">
            <h2 className="sidebar-title">功能介绍</h2>
            <p className="sidebar-p">这是一个基于 React + TypeScript + Vite 的任务管理平台， 提供了任务的创建、编辑、删除、完成等功能。</p>
            <p className="sidebar-p">你可以在这里管理你的任务， 并根据任务的状态进行筛选和排序。</p>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default Home
