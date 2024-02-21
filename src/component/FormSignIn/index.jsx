import { useState } from "react"
import { Form, Input, Button, Typography, Radio, Checkbox } from "antd"
import "./index.css"
import { useDispatch } from "react-redux"
import { actionSignin } from "@/redux/user/action"
const { Title, Text } = Typography

const FormLogin = () => {
  const [mode, setMode] = useState("top")
  const dispatch = useDispatch()
  const handleModeChange = (e) => {
    setMode(e.target.value)
  }
  const login = async (value) => {
    const response = await dispatch(actionSignin(value))
    console.log(response)
  }
  return (
    <div className="form-wrapper">
      <Radio.Group
        onChange={handleModeChange}
        value={mode}
        style={{ marginBottom: 8 }}
      >
        <Radio.Button value="top">Job Seeker</Radio.Button>
        <Radio.Button value="left">Company</Radio.Button>
      </Radio.Group>
      <Title level={2}>Welcome Back, Dude</Title>
      <Button className="btn-google">Login With Google</Button>
      <div>
        <Text className="line">or Login with Email</Text>
      </div>
      <Form layout="vertical" onFinish={login}>
        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            {
              message: "Please input your email!",
            },
          ]}
        >
          <Input placeholder="Enter email address" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              message: "Please input your email!",
            },
          ]}
        >
          <Input.Password placeholder="Enter password" />
        </Form.Item>
        <Form.Item name="Remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Button
          htmlType="submit"
          type="primary"
          style={{ width: "100%", fontWeight: "bold" }}
        >
          Login
        </Button>
      </Form>
      <p>
        dont have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  )
}

export default FormLogin
