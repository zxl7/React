import React, { useState } from "react"
import { Form, Input, Button, Checkbox, message } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import "./index.less"

const LoginRegisterPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true)

  const onFinish = (values: any) => {
    if (isLogin) {
      // 模拟登录逻辑
      console.log("登录成功", values)
      message.success("登录成功")
    } else {
      // 模拟注册逻辑
      console.log("注册成功", values)
      message.success("注册成功")
    }
  }

  const toggleMode = () => {
    setIsLogin(!isLogin)
  }

  return (
    <div className="login">
      <main className="login-main">
        <h1>Login</h1>
        <Form name="login_register" onFinish={onFinish} initialValues={{ remember: true }} style={{ width: 300 }}>
          <Form.Item name="username" rules={[{ required: true, message: "请输入用户名!" }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "请输入密码!" }]}>
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="密码" />
          </Form.Item>
          {isLogin && (
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>记住我</Checkbox>
            </Form.Item>
          )}
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              {isLogin ? "登录" : "注册"}
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="link" onClick={toggleMode} style={{ width: "100%" }}>
              {isLogin ? "没有账号？注册" : "已有账号？登录"}
            </Button>
          </Form.Item>
        </Form>
      </main>
    </div>
  )
}

export default LoginRegisterPage
