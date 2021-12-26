import { Form, Input, Button } from 'antd'
import { useState } from 'react'
import { useAuth } from '../../context/auth-context'
import { useQueryParam } from '../../utils/hooks'

export const Login = (props: any) => {
  const {user, login, register} = useAuth()
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false)
  const [query] = useQueryParam(['key', 'name'])
  console.log(111, query)

  const handleSubmit = (values: any) => {
    login(values)
    console.log(111, props)
  }

  const handelRegister = () => {
    const values = form.getFieldsValue()
    register(values)
  }

  return (
    <div>
      <div>登录成功,用户名{user?.name}</div>
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "请输入用户名" }]}
        >
          <Input placeholder="用户名" type="text" id="username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "请输入密码" }]}
        >
          <Input placeholder="密码" type="password" id="password" />
        </Form.Item>
        <Form.Item>
          <Button loading={isLoading} htmlType="submit" type="primary">
            登录
          </Button>
          <Button loading={isLoading} htmlType="button" type="primary" onClick={handelRegister}>
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
    
  )
}