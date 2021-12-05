import {Form, Input, Button} from 'antd'
import { useState } from 'react'
import { post } from '../../utils/request'

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (body: any) => {
    post('/login', body).then(res => {
      console.log(111, res)
    })
  }

  return (
      <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder={"用户名"} type="text" id={"username"} />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input placeholder={"密码"} type="password" id={"password"} />
      </Form.Item>
      <Form.Item>
        <Button loading={isLoading} htmlType={"submit"} type={"primary"}>
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}