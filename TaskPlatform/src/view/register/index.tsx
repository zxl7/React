import React, { useState } from "react"
import { Form, Input, Button, message } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"

const LoginRegisterPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const [errorMessage, setErrorMessage] = useState("")

  const handleToggle = () => {
    setIsLogin(!isLogin)
    setErrorMessage("")
  }

  const onFinish = (values: any) => {
    // 为了修复找不到 setLoading 的问题，需要先定义 loading 状态和对应的 setLoading 函数
    setLoading(true)
    // 这里添加注册逻辑
    console.log("注册成功", values)
    message.success("注册成功")
    setLoading(false)
  }

  return (
    <div
      className="background-container"
      style={{
        backgroundImage: "url(@/assets/bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "100%",
        minHeight: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}>
      <div className="form-container">
        <Form name="register" onFinish={onFinish} style={{ width: 300 }}>
          <h2>{isLogin ? "登录" : "注册"}</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <Form.Item name="username" rules={[{ required: true, message: "请输入用户名!" }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "请输入密码!" }]}>
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="密码" />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "请确认密码!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error("两次输入的密码不匹配!"))
                },
              }),
            ]}>
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="确认密码" />
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} style={{ width: "100%" }}>
            注册
          </Button>
          <p onClick={handleToggle}>{isLogin ? "没有账号？注册" : "已有账号？登录"}</p>
        </Form>
      </div>
    </div>
  )
}

export default LoginRegisterPage
